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
	editTaskName: (id: number, name: string) => void;
}
export interface ITask {
	id: number;
	name: string;
	status: "progress" | "done";
	index_number: number;
}

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: IProviderProps) => {
	const { setIsAuthenticated } = useUserContext();
	const [tasks, setTasks] = useState<ITask[]>([]);
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

	const editTaskName = (id: number, name: string) => {
		api.patch(`/tasks/${id}`, { name }).then((res) => {
			setTasks((previous) => {
				const copyTasks = [...previous];
				const editedTask = previous.findIndex((t) => t.id === id);
				copyTasks[editedTask] = { ...copyTasks[editedTask], name };
				return copyTasks;
			});
		});
	};

	const addTask = (name: string) => {
		api.post(`/tasks`, { name }).then((res) => {
			setTasks((previous) => [...previous, res.data]);
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
	}, []);

	const move = (from: number, to: number, idTask: number) => {
		setTasks((previous) => {
			const newTasks = [...previous];
			console.log(from, to, "ss", idTask);
			newTasks.splice(to, 0, newTasks.splice(from, 1)[0]);
			const newIndex = console.log(newTasks, "new");

			return newTasks;
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
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
