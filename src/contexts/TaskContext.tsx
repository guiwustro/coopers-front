import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

export interface IProviderProps {
	children: React.ReactNode;
}
interface ITaskContext {
	tasks: ITask[];
	completedTasks: ITask[];
	progressTasks: ITask[];
	toogleTaskStatus: (id: number, status: "progress" | "done") => void;
}
export interface ITask {
	id: number;
	name: string;
	status: "progress" | "done";
	index_number: number;
}

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: IProviderProps) => {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const completedTasks = tasks?.filter((task) => task.status === "done");
	const progressTasks = tasks?.filter((task) => task.status === "progress");
	const getAllTasks = () => {
		api
			.get("/tasks")
			.then((response) => {
				setTasks(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const toogleTaskStatus = (id: number, status: "progress" | "done") => {
		setTasks((previous) => {
			const newTasks = [...previous];
			const newStatus = status === "done" ? "progress" : "done";
			console.log(status, "s");
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
		console.log(status);
		api.patch(`/tasks/${id}`, { status }).then((res) => {
			console.log(res.data);
		});
	};

	useEffect(() => {
		const token = localStorage.getItem("@coopers:token");
		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		if (token) {
			getAllTasks();
		}
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				completedTasks,
				progressTasks,
				toogleTaskStatus,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
