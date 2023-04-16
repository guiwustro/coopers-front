import { useModalContext } from "../../contexts/ModalContext";
import { ITask, useTaskContext } from "../../contexts/TaskContext";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../Button";
import TaskEditForm from "../TaskEdit";
import TaskAddForm from "./TaskAddForm";
import TaskItem from "./TaskItem";
import { ContainerButton, TaskCardContainer } from "./styles";

interface ITaskCardProps {
	borderColor: "green" | "orange";
	title: string;
	subtitle?: React.ReactNode;
	statusTask: "done" | "progress";
	tasks: ITask[];
}

export const TaskCard = ({
	borderColor,
	title,
	subtitle,
	tasks,
	statusTask,
}: ITaskCardProps) => {
	const { deleteAllTasks, editTaskModal } = useTaskContext();
	const { isAuthenticated } = useUserContext();
	const { toogleModal, openAlert } = useModalContext();
	if (!isAuthenticated) {
		return (
			<TaskCardContainer borderColor={borderColor}>
				<h3>{title}</h3>
				<h4>
					You must
					<button onClick={toogleModal}>Login</button>
					with an account to see your tasks!
				</h4>
			</TaskCardContainer>
		);
	}

	return (
		<TaskCardContainer borderColor={borderColor}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			{statusTask === "progress" && <TaskAddForm />}
			<ul className="task__list">
				{tasks.map((task, index) => {
					return (
						<>
							<TaskItem
								key={task.id}
								name={task.name}
								type={task.status}
								id={task.id}
								index={index}
							/>
						</>
					);
				})}
			</ul>
			<ContainerButton>
				<Button
					backgroundColor="black"
					fontSize="1.5rem"
					height={64}
					title="erase all"
					borderRadius="10px"
					fontFamily="Montserrat"
					onClick={() => {
						openAlert(statusTask);
					}}
				/>
			</ContainerButton>
			{editTaskModal.isOpen && <TaskEditForm />}
		</TaskCardContainer>
	);
};
