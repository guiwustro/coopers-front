import { useEffect, useRef, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { Container, ModalContainer } from "./styles";

const TaskEditForm = () => {
	const { tasks, editTaskName, toogleEditTaskModal, editTaskModal } =
		useTaskContext();
	const task = tasks.find((t) => t.id === editTaskModal.idTask);
	const [newTaskName, setNewTaskName] = useState(task?.name);
	console.log(task?.name);

	const modalRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		function handleOutClick(event: any) {
			const value = modalRef?.current;
			console.log(event.target, "ss");
			const isTextArea = event.target.className === "edit-task_text-area";
			const isSaveBtn = event.target.className === "edit-task__button-save";

			if (value && !value.contains(event.target) && !isTextArea && !isSaveBtn) {
				toogleEditTaskModal(0, { x: 0, width: 0, y: 0 });
			}
		}
		document.addEventListener("mousedown", handleOutClick);

		return () => {
			document.removeEventListener("mousedown", handleOutClick);
		};
	}, []);

	return (
		<Container>
			<ModalContainer cordinates={editTaskModal.cordinates} ref={modalRef}>
				<textarea
					onChange={(e) => setNewTaskName(e.target.value)}
					value={newTaskName}
					className="edit-task_text-area"
				/>
				<button
					onClick={() => {
						if (newTaskName) editTaskName(newTaskName);
					}}
					className="edit-task__button-save"
				>
					save
				</button>
				<button
					className="edit-task__button-close"
					onClick={() => toogleEditTaskModal(0, { x: 0, width: 0, y: 0 })}
				>
					fechar
				</button>
			</ModalContainer>
		</Container>
	);
};

export default TaskEditForm;
