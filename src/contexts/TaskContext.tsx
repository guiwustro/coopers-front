import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useUserContext } from "./UserContext";
import { toast } from "react-hot-toast";

export interface IProviderProps {
	children: React.ReactNode;
}
interface ITaskContext {
	tasks: ITask;
	toogleTaskStatus: (id: number, status: "progress" | "done") => void;
	deleteTask: (id: number, status: "done" | "progress") => void;
	deleteAllTasks: (status: "done" | "progress") => void;
	moveTask: (
		from: number,
		to: number,
		idTask: number,
		status: "done" | "progress"
	) => void;
	addTask: (name: string) => void;
	editTaskName: (name: string) => void;
	toogleEditTaskModal: (
		idTask: number,
		cordinatesTask: ICordinatesTask,
		status: "done" | "progress"
	) => void;
	editTaskModal: IEditTaskModal;
	updateCordinatesOnScroll: (cordinates: ICordinatesTask) => void;
}
export interface ITaskInfo {
	id: number;
	name: string;
	status: "progress" | "done";
	index_number: number;
}

interface IEditTaskModal {
	isOpen: boolean;
	idTask: number;
	cordinates: ICordinatesTask;
	status: "progress" | "done";
}

export interface ICordinatesTask {
	x: number;
	y: number;
	width: number;
}

export interface ITask {
	progress: ITaskInfo[];
	done: ITaskInfo[];
}

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: IProviderProps) => {
	const { setIsAuthenticated, isAuthenticated } = useUserContext();
	const [tasks, setTasks] = useState<ITask>({
		done: [],
		progress: [],
	});
	const [tasksBeforeUpdate, setTasksBeforeUpdate] = useState<ITask>({
		done: [],
		progress: [],
	});

	const [editTaskModal, setEditTaskModal] = useState<IEditTaskModal>({
		isOpen: false,
		idTask: 0,
		status: "progress",
		cordinates: {
			x: 0,
			y: 0,
			width: 0,
		},
	});

	const getAllTasks = () => {
		api
			.get("/tasks")
			.then((response) => {
				setTasks({
					progress: response.data.filter(
						(task: ITaskInfo) => task.status === "progress"
					),
					done: response.data.filter(
						(task: ITaskInfo) => task.status === "done"
					),
				});
				setIsAuthenticated(true);
			})
			.catch((error) => {
				setIsAuthenticated(false);

				console.log(error);
			});
	};

	const toogleTaskStatus = (id: number, status: "progress" | "done") => {
		const newStatus = status === "done" ? "progress" : "done";
		setTasks((previous) => {
			setTasksBeforeUpdate(previous);
			const newTasks = { ...previous };
			const actualTaskIndex = newTasks[status].findIndex(
				(task) => task.id === id
			);
			const actualTask = newTasks[status][actualTaskIndex];
			actualTask.status = newStatus;
			// Adiciona a task para o novo status
			newTasks[newStatus] = [...newTasks[newStatus], actualTask];
			// Deleta a task do status antigo
			newTasks[status] = newTasks[status].filter(
				(_, index) => index !== actualTaskIndex
			);
			return newTasks;
		});
		api
			.patch(`/tasks/${id}`, { status: newStatus })
			.then((res) => {})
			.catch((e) => {
				toast.error((e) =>
					toast.error(
						"Occured an error trying to update the status. Try again later."
					)
				);
				setTasks(tasksBeforeUpdate);
			});
	};
	const editTaskName = (name: string) => {
		const id = editTaskModal.idTask;
		const status = editTaskModal.status;
		setTasks((previous) => {
			setTasksBeforeUpdate(previous);

			const copyTasks = { ...previous };
			const editedTask = copyTasks[status].findIndex((t) => t.id === id);
			copyTasks[status][editedTask] = {
				...copyTasks[status][editedTask],
				name,
			};
			return copyTasks;
		});
		toogleEditTaskModal(0, { x: 0, y: 0, width: 0 }, "progress");

		api
			.patch(`/tasks/${id}`, { name })
			.then((res) => {})
			.catch((e) => {
				toast.error((e) =>
					toast.error(
						"Occured an error trying to update the status. Try again later."
					)
				);
				setTasks(tasksBeforeUpdate);
			});
	};

	const addTask = (name: string) => {
		toast.loading("Adding task... Please wait");
		api
			.post(`/tasks`, { name })
			.then((res) => {
				setTasks((previous) => {
					return {
						done: [...previous.done],
						progress: [...previous.progress, res.data],
					};
				});
				toast.dismiss();
			})
			.catch((e) =>
				toast.error(
					"Seems that occurred an error trying to add... Try again later"
				)
			);
	};

	const deleteTask = (id: number, status: "done" | "progress") => {
		setTasks((previous) => {
			const copyObj = { ...previous };
			setTasksBeforeUpdate(previous);
			copyObj[status] = copyObj[status].filter((task) => task.id !== id);
			return copyObj;
		});

		api
			.delete(`/tasks/${id}`)
			.then((res) => {})
			.catch((e) => {
				toast.error((e) =>
					toast.error(
						"Occured an error trying to update the status. Try again later."
					)
				);
				setTasks(tasksBeforeUpdate);
			});
	};

	const deleteAllTasks = (status: "done" | "progress") => {
		api.delete(`/tasks/all/${status}`).then(() => {
			setTasks((previous) => {
				const copyObj = { ...previous };
				copyObj[status] = [];
				return copyObj;
			});
		});
	};

	useEffect(() => {
		const token = localStorage.getItem("@coopers:token");
		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		if (token) {
			getAllTasks();
		}
	}, [isAuthenticated]);

	const moveTask = (
		from: number,
		to: number,
		idTask: number,
		status: "done" | "progress"
	) => {
		setTasks((previous) => {
			const newTasks = { ...previous };

			let actualTaskIndex = newTasks[status].findIndex((t) => t?.id === idTask);
			// se não estiver na mesma lista
			const oldStatus = status === "done" ? "progress" : "done";

			if (actualTaskIndex === -1) {
				// Adicionar na lista nova
				// actualTaskIndex = newTasks[status].findIndex((t) => t.id === idTask);
				actualTaskIndex = newTasks[oldStatus].findIndex(
					(t) => t?.id === idTask
				);
				newTasks[oldStatus][actualTaskIndex].status = status;

				newTasks[status].splice(
					to,
					0,
					newTasks[oldStatus].splice(actualTaskIndex, 1)[0]
				);

				// Remover da lista antiga
				newTasks[oldStatus] = newTasks[oldStatus].filter(
					(t, index) => t.id !== idTask
				);

				// Filtrar possíveis undefineds na lista
				newTasks[oldStatus] = newTasks[oldStatus].filter(
					(t) => t !== undefined
				);
				newTasks[status] = newTasks[status].filter((t) => t !== undefined);
				console.log(newTasks);
				return newTasks;
			} else {
				newTasks[status].splice(to, 0, newTasks[status].splice(from, 1)[0]);
				newTasks[status] = newTasks[status].filter((t) => t !== undefined);
				newTasks[oldStatus] = newTasks[oldStatus].filter(
					(t) => t !== undefined
				);
				return newTasks;
			}
		});
		// api
		// 	.patch(`/tasks/${idTask}`, { index_number: to, status })
		// 	.then((res) => console.log(res))
		// 	.catch((e) => console.log(e));
	};

	const toogleEditTaskModal = (
		idTask: number,
		cordinates: ICordinatesTask,
		status: "done" | "progress"
	) => {
		setEditTaskModal((previous) => {
			const body = document.querySelector("body");
			if (previous.isOpen) {
				body!.style.overflowY = "auto";
			} else {
				body!.style.overflowY = "hidden";
			}
			return {
				isOpen: !previous.isOpen,
				idTask,
				status,
				cordinates,
			};
		});
	};

	const updateCordinatesOnScroll = (cordinates: ICordinatesTask) => {
		setEditTaskModal((previous) => {
			return {
				...previous,
				cordinates,
			};
		});
	};

	return (
		<TaskContext.Provider
			value={{
				tasks,
				toogleTaskStatus,
				deleteTask,
				deleteAllTasks,
				moveTask,
				addTask,
				editTaskName,
				toogleEditTaskModal,
				editTaskModal,
				updateCordinatesOnScroll,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
