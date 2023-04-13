import DoneIcon from "../../assets/check-icon.svg";
import NewIcon from "../../assets/no-checked-icon.svg";
import ProgressIcon from "../../assets/ProgressIcon.svg";
import { useTaskContext } from "../../contexts/TaskContext";
import Button from "../Button";
import { TaskItemContainer } from "./styles";

interface ITaskItemProps {
	type: "progress" | "done";
	name: string;
	id: number;
}

const TaskIcon = {
	progress: ProgressIcon,
	new: NewIcon,
	done: DoneIcon,
};

const TaskItem = ({ type, name, id }: ITaskItemProps) => {
	const { toogleTaskStatus } = useTaskContext();

	return (
		<TaskItemContainer>
			<div className="task__name">
				<button
					onClick={() => {
						toogleTaskStatus(id, type);
					}}
				>
					<img src={TaskIcon[type]} alt={type} />
				</button>
				<p>{name}</p>
			</div>

			<button className="task-button__delete">delete</button>
		</TaskItemContainer>
	);
};

export default TaskItem;
