import styled from "styled-components";
import { ICordinatesTask } from "../../contexts/TaskContext";

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(12, 12, 12, 0.3);
`;

interface IModalContainerProps {
	cordinates: ICordinatesTask;
}

export const ModalContainer = styled.div<IModalContainerProps>`
	background-color: white;
	position: absolute;
	height: 80px;
	border-radius: 4px;
	background-color: transparent;
	& > textarea {
		width: 100%;
		height: 45px;

		resize: none;
		border-color: transparent;
		border-radius: 4px;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		align-self: center;
		&:focus {
			outline: 0;
		}
	}
	& > .edit-task__button-save {
		background-color: var(--orange);
		color: white;
		font-family: "Montserrat";
		font-weight: 600;
		width: 60px;
		height: 30px;
		border-radius: 4px;
		font-size: 1rem;
		margin-top: 3px;
	}

	& > .edit-task__button-close {
		position: absolute;
		top: -20px;
		right: -20px;
		background-color: transparent;
		color: white;
		font-family: "Montserrat";
	}
	top: ${({ cordinates }) => cordinates.y + 10 + "px"};
	left: ${({ cordinates }) => cordinates.x + 55 + "px"};
	width: ${({ cordinates }) => "240px"};
`;
