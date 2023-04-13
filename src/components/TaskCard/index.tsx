import { ITask, useTaskContext } from "../../contexts/TaskContext";
import Button from "../Button";
import TaskItem from "./TaskItem";
import { TaskCardContainer } from "./styles";

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
}: ITaskCardProps) => {
	return (
		<TaskCardContainer borderColor={borderColor}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<div className="task__list">
				{tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							name={task.name}
							type={task.status}
							id={task.id}
						/>
					);
				})}
			</div>

			<Button
				backgroundColor="black"
				fontSize="1.5rem"
				height={64}
				width={300}
				title="erase all"
				borderRadius="10px"
			/>
		</TaskCardContainer>
	);
};