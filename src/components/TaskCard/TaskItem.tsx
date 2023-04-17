import { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import ProgressIcon from "../../assets/ProgressIcon.svg";
import DoneIcon from "../../assets/check-icon.svg";
import NewIcon from "../../assets/no-checked-icon.svg";
import { useTaskContext } from "../../contexts/TaskContext";
import { TaskItemContainer } from "./styles";
import EditImage from "../../assets/edit-button.svg";
import { api } from "../../api";
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
	const { moveTask, tasks } = useTaskContext();
	const {
		toogleTaskStatus,
		deleteTask,
		toogleEditTaskModal,
		updateCordinatesOnScroll,
		editTaskModal,
	} = useTaskContext();
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "TASK",
		item: { id, index, status: type, name },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

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
			// ITEM.index => index da Task que está sendo movida;
			// INDEX => index da Task que esta o HOVER.
			// console.log(item.id, "do hover");
			const draggedIndex = item.index;
			const targetIndex = index;
			const draggedList = item.status;

			if (draggedIndex === targetIndex && draggedList === type) {
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
			moveTask(draggedIndex, targetIndex, item.id, type);
			item.index = targetIndex;
		},
		drop(item, monitor) {
			const targetIndex = index;
			// [ab,cd,ef,gh] targetIndex = 1
			// [gh,ef,cd,ab] targetIndex = 2 4 -1 -1
			// s;
			const draggedIndex = item.index;
			const draggedList = item.status;

			// if (draggedIndex === targetIndex && draggedList === type) {
			// 	return;
			// }
			const targetSize = ref.current!.getBoundingClientRect();
			const targetCenter = (targetSize.bottom - targetSize.top) / 2;

			const draggedOffSet = monitor.getClientOffset();
			const draggedTop = (draggedOffSet?.y || 0) - targetSize.top;

			// if (draggedIndex < targetIndex && draggedTop < targetCenter) {
			// 	return;
			// }

			// if (draggedIndex > targetIndex && draggedTop > targetCenter) {
			// 	return;
			// }
			api
				.patch(`/tasks/${item.id}`, {
					index_number: targetIndex,
					status: type,
				})
				.then((res) => console.log(res))
				.catch((e) => console.log(e));
			moveTask(draggedIndex, targetIndex, item.id, type);
			//targetIndex tem q ser o INVERSO

			item.index = targetIndex;
		},
	});
	dragRef(dropRef(ref));
	const cordinatesTask = {
		x: ref.current?.getBoundingClientRect().x!,
		y: ref.current?.getBoundingClientRect().y!,
		width: ref.current?.getBoundingClientRect().width!,
	};
	useEffect(() => {
		if (editTaskModal.idTask === id) {
			updateCordinatesOnScroll({
				x: ref.current?.getBoundingClientRect().x!,
				y: ref.current?.getBoundingClientRect().y!,
				width: ref.current?.getBoundingClientRect().width!,
			});
		}
	}, [ref.current?.getBoundingClientRect().y]);

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

			<div className="task-button__container">
				<button
					className="task-button__edit"
					onClick={() => {
						toogleEditTaskModal(id, cordinatesTask, type);
					}}
				>
					<img src={EditImage} alt="edit image" />
				</button>
				<button
					className="task-button__delete"
					onClick={() => deleteTask(id, type)}
				>
					delete
				</button>
			</div>
		</TaskItemContainer>
	);
};

export default TaskItem;
