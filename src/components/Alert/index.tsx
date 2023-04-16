import { useEffect, useRef } from "react";
import { useModalContext } from "../../contexts/ModalContext";
import { useTaskContext } from "../../contexts/TaskContext";
import { AlertBody, Container } from "./styles";

const Alert = () => {
	const { closeAlert, typeAlert } = useModalContext();
	const { deleteAllTasks } = useTaskContext();
	const ref = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		function handleOutClick(event: any) {
			const value = ref?.current;

			if (value && !value.contains(event.target)) {
				closeAlert();
			}
		}
		document.addEventListener("mousedown", handleOutClick);

		return () => {
			document.removeEventListener("mousedown", handleOutClick);
		};
	}, []);
	return (
		<Container>
			<AlertBody ref={ref}>
				<h3>Delete {typeAlert} tasks</h3>
				<p>This will be permanently deleted.</p>
				<div className="alert__buttons">
					<button onClick={closeAlert} className="cancel__button">
						cancel
					</button>
					<button
						className="confirm__button"
						onClick={() => {
							deleteAllTasks(typeAlert!);
							closeAlert();
						}}
					>
						confirm
					</button>
				</div>
			</AlertBody>
		</Container>
	);
};

export default Alert;
