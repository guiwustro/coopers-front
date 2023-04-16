import { FormEvent, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { AddButton, FormAddContainer } from "./styles";

const TaskAddForm = () => {
	const { addTask } = useTaskContext();
	const [newTask, setNewTask] = useState("");
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTask(newTask);
		setNewTask("");
	};
	return (
		<FormAddContainer onSubmit={(e) => handleSubmit(e)}>
			<textarea
				placeholder="create a new task here..."
				onChange={(e) => setNewTask(e.target.value)}
				value={newTask}
			/>
			<AddButton type="submit" disabled={!newTask}>
				add
			</AddButton>
		</FormAddContainer>
	);
};

export default TaskAddForm;
