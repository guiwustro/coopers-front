import styled, { css } from "styled-components";

interface ITaskCardProps {
	borderColor: "orange" | "green";
}

export const TaskCardContainer = styled.li<ITaskCardProps>`
	width: 80%;
	padding: 40px 23px 40px 23px;
	border-top: 20px solid;
	border-color: ${(props) =>
		props.borderColor === "orange" ? "var(--orange)" : "var(--green-300)"};
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3px;
	box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
	& > h3 {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-size: 2.5rem;
		line-height: 24px;
		color: #000000;
		text-align: center;
		padding-bottom: 20px;
	}

	& > h4 {
		font-family: "Montserrat";
		text-align: center;
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 29px;
		text-align: center;
		padding-bottom: 30px;

		& > button {
			font-family: "Montserrat";
			text-align: center;
			font-weight: 600;
			font-size: 1.5rem;
			color: var(--green-300);
			background-color: transparent;
			:hover {
				filter: brightness(1.5);
			}
		}
	}

	& > .task__list {
		margin-bottom: 28px;
		flex-direction: column;
		display: flex;
	}

	@media screen and (min-width: 400px) {
		width: 380px;
	}
`;

interface ITaskItemContainerProps {
	isDragging?: boolean;
}
export const TaskItemContainer = styled.div<ITaskItemContainerProps>`
	display: flex;

	justify-content: space-between;
	border: 1px solid transparent;
	padding: 0px 0px 10px 0px;

	${(props) =>
		props.isDragging &&
		css`
			border-color: rgba(0, 0, 0, 0.21);
			border-style: dashed;
			cursor: grabbing;
			box-shadow: none;
			background-color: white;
		`}

	.task__name {
		display: flex;
		gap: 16px;
		word-break: break-word;

		& > button {
			background-color: transparent;
			padding: 0;
		}
		& > p {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: 1rem;
			align-self: center;
		}
	}
	& > .task-button__container {
		display: flex;
		align-items: center;
		.task-button__delete {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 700;
			font-size: 0.75rem;
			line-height: 24px;
			color: #999999;
			background-color: transparent;
		}
		.task-button__edit {
			background-color: transparent;
		}
	}

	@media screen and (min-width: 400px) {
		padding: 10px 38px 10px 23px;
	}
`;

export const ContainerButton = styled.div`
	display: flex;
	justify-content: center;
	& > button {
		max-width: 300px;
	}
`;

export const AddButton = styled.button`
	background-color: var(--orange);
	color: white;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 700;
	font-size: 0.9rem;
	height: 34px;
	padding: 5px 10px;
	border-radius: 5px;
	:disabled {
		background-color: rgb(153, 153, 153);
	}
`;

export const FormAddContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	& > textarea {
		resize: none;
		border-radius: 4px;
		border-color: #999999;
		min-height: 46px;
		padding: 8px;
	}
	@media screen and (min-width: 400px) {
		padding: 0 38px 0 23px;

		& > textarea {
			width: 200px;
		}
	}
`;
