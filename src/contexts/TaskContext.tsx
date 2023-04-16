import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useUserContext } from "./UserContext";

export interface IProviderProps {
	children: React.ReactNode;
}
interface ITaskContext {
	tasks: ITask[];
	completedTasks: ITask[];
	progressTasks: ITask[];
	toogleTaskStatus: (id: number, status: "progress" | "done") => void;
	deleteTask: (id: number) => void;
	deleteAllTasks: (status: "done" | "progress") => void;
	move: (from: number, to: number, idTask: number) => void;
	addTask: (name: string) => void;
	editTaskName: (name: string) => void;
	toogleEditTaskModal: (
		idTask: number,
		cordinatesTask: ICordinatesTask
	) => void;
	editTaskModal: IEditTaskModal;
	updateCordinatesOnScroll: (cordinates: ICordinatesTask) => void;
}
export interface ITask {
	id: number;
	name: string;
	status: "progress" | "done";
	index_number: number;
}

interface IEditTaskModal {
	isOpen: boolean;
	idTask: number;
	cordinates: ICordinatesTask;
}

export interface ICordinatesTask {
	x: number;
	y: number;
	width: number;
}

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: IProviderProps) => {
	const { setIsAuthenticated, isAuthenticated } = useUserContext();
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [editTaskModal, setEditTaskModal] = useState<IEditTaskModal>({
		isOpen: false,
		idTask: 0,
		cordinates: {
			x: 0,
			y: 0,
			width: 0,
		},
	});

	const completedTasks = tasks?.filter((task) => task.status === "done");
	const progressTasks = tasks?.filter((task) => task.status === "progress");
	const getAllTasks = () => {
		api
			.get("/tasks")
			.then((response) => {
				setTasks(response.data);
				setIsAuthenticated(true);
			})
			.catch((error) => {
				setIsAuthenticated(false);

				console.log(error);
			});
	};

	const toogleTaskStatus = (id: number, status: "progress" | "done") => {
		setTasks((previous) => {
			const newTasks = [...previous];
			const newStatus = status === "done" ? "progress" : "done";
			const actualTaskIndex = newTasks.findIndex((task) => task.id === id);
			updateTaskStatus(id, newStatus);
			if (actualTaskIndex != -1) {
				newTasks[actualTaskIndex] = {
					...newTasks[actualTaskIndex],
					status: newStatus,
				};
			}
			return newTasks;
		});
	};

	const updateTaskStatus = (id: number, status: "progress" | "done") => {
		api.patch(`/tasks/${id}`, { status }).then((res) => {
			console.log(res.data);
		});
	};

	const editTaskName = (name: string) => {
		const id = editTaskModal.idTask;
		api.patch(`/tasks/${id}`, { name }).then((res) => {
			setTasks((previous) => {
				const copyTasks = [...previous];
				const editedTask = previous.findIndex((t) => t.id === id);
				copyTasks[editedTask] = { ...copyTasks[editedTask], name };
				return copyTasks;
			});
			toogleEditTaskModal(0, { x: 0, y: 0, width: 0 });
		});
	};

	const addTask = (name: string) => {
		api.post(`/tasks`, { name }).then((res) => {
			setTasks((previous) => [res.data, ...previous]);
		});
	};

	const deleteTask = (id: number) => {
		api.delete(`/tasks/${id}`).then((res) => {
			setTasks((previous) => {
				return previous.filter((task) => task.id !== id);
			});
		});
	};

	const deleteAllTasks = (status: "done" | "progress") => {
		api.delete(`/tasks/all/${status}`).then(() => {
			setTasks((previous) => {
				return previous.filter((task) => task.status !== status);
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

	const move = (from: number, to: number, idTask: number) => {
		let newIndex;
		let status;
		setTasks((previous) => {
			const newTasks = [...previous];
			console.log(from, to, "ss", idTask);
			newTasks.splice(to, 0, newTasks.splice(from, 1)[0]);

			const actualTaskIndex = newTasks.findIndex((t) => t.id === idTask);

			// caso não tenha última tarefa definida
			let nextTaskIndexNumber =
				(newTasks[actualTaskIndex - 1]?.index_number || 0) + 1024;
			// caso não tenha a primeira tarefa definida
			let previousTaskIndexNumber =
				(newTasks[actualTaskIndex - 1]?.index_number || 0) - 1024;

			if (newTasks[actualTaskIndex - 1]) {
				previousTaskIndexNumber = newTasks[actualTaskIndex - 1].index_number;
			}
			if (newTasks[actualTaskIndex + 1]) {
				nextTaskIndexNumber = newTasks[actualTaskIndex + 1].index_number;
			}

			newIndex = (previousTaskIndexNumber + nextTaskIndexNumber) / 2;
			status = newTasks[actualTaskIndex].status;

			return newTasks;
		});
		api
			.patch(`/tasks/${idTask}`, { index_number: newIndex, status })
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
	};

	const toogleEditTaskModal = (idTask: number, cordinates: ICordinatesTask) => {
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
				completedTasks,
				progressTasks,
				toogleTaskStatus,
				deleteTask,
				deleteAllTasks,
				move,
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
