import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ProgressIcon from "../../assets/ProgressIcon.svg";
import DoneIcon from "../../assets/check-icon.svg";
import NewIcon from "../../assets/no-checked-icon.svg";
import { useTaskContext } from "../../contexts/TaskContext";
import { TaskItemContainer } from "./styles";

interface ITaskItemProps {
	type: "progress" | "done";
	name: string;
	id: number;
	index: number;
}

const TaskIcon = {
	progress: ProgressIcon,
	new: NewIcon,
	done: DoneIcon,
};

const TaskItem = ({ type, name, id, index }: ITaskItemProps) => {
	const ref = useRef<HTMLDivElement>();
	const { move } = useTaskContext();
	const { toogleTaskStatus, deleteTask } = useTaskContext();
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "TASK",
		item: { id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	const [, dropRef] = useDrop({
		accept: "TASK",
		hover(item: { id: number; index: number }, monitor) {
			// console.log(item.id, "do hover");
			const draggedIndex = item.index;
			const targetIndex = index;
			if (draggedIndex === targetIndex) {
				return;
			}
			const targetSize = ref.current!.getBoundingClientRect();
			const targetCenter = (targetSize.bottom - targetSize.top) / 2;

			const draggedOffSet = monitor.getClientOffset();
			const draggedTop = (draggedOffSet?.y || 0) - targetSize.top;

			if (draggedIndex < targetIndex && draggedTop < targetCenter) {
				return;
			}
			if (draggedIndex > targetIndex && draggedTop > targetCenter) {
				return;
			}
			move(draggedIndex, targetIndex, item.id);
			item.index = targetIndex;
		},
	});
	dragRef(dropRef(ref));
	return (
		<TaskItemContainer ref={ref as any} isDragging={isDragging}>
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

			<button className="task-button__delete" onClick={() => deleteTask(id)}>
				delete
			</button>
		</TaskItemContainer>
	);
};

export default TaskItem;
