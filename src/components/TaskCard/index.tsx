import { useDrop } from "react-dnd";
import { useModalContext } from "../../contexts/ModalContext";
import { ITask, ITaskInfo, useTaskContext } from "../../contexts/TaskContext";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../Button";
import TaskEditForm from "../TaskEdit";
import TaskAddForm from "./TaskAddForm";
import TaskItem from "./TaskItem";
import { ContainerButton, TaskCardContainer } from "./styles";
import { useRef } from "react";
import { api } from "../../api";

interface ITaskCardProps {
	borderColor: "green" | "orange";
	title: string;
	subtitle?: React.ReactNode;
	statusTask: "done" | "progress";
	tasks: ITaskInfo[];
}

export const TaskCard = ({
	borderColor,
	title,
	subtitle,
	tasks,
	statusTask,
}: ITaskCardProps) => {
	const { editTaskModal, moveTask } = useTaskContext();
	const { isAuthenticated } = useUserContext();
	const { toogleModal, openAlert } = useModalContext();
	const ref = useRef<HTMLDivElement>(null);
	const [, dropRef] = useDrop({
		accept: "TASK",
		hover(
			item: {
				id: number;
				index: number;
				status: "done" | "progress";
				name: string;
			},
			monitor
		) {
			const draggedIndex = item.index;
			if (tasks.length === 0) {
				moveTask(draggedIndex, 0, item.id, statusTask);
				api
					.patch(`/tasks/${item.id}`, {
						index_number: 0,
						status: statusTask,
					})
					.then((res) => console.log(res))
					.catch((e) => console.log(e));
			}
		},
	});
	dropRef(ref);
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
		<TaskCardContainer borderColor={borderColor} ref={ref as any}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			{statusTask === "progress" && <TaskAddForm />}
			<ul className="task__list">
				{tasks.map((task, index) => {
					return (
						<TaskItem
							key={task.id}
							name={task.name}
							type={task.status}
							id={task.id}
							index={index}
						/>
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
