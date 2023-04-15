import styled, { css } from "styled-components";

interface ITaskCardProps {
	borderColor: "orange" | "green";
}

export const TaskCardContainer = styled.div<ITaskCardProps>`
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
	}

	& > .task__list {
		margin-bottom: 28px;
		flex-direction: column;
		display: flex;
	}

	@media screen and (min-width: 464px) {
		width: 380px;
	}
`;

interface ITaskItemContainerProps {
	isDragging?: boolean;
}
export const TaskItemContainer = styled.div<ITaskItemContainerProps>`
	display: flex;
	padding-left: 23px;
	padding-right: 38px;
	justify-content: space-between;
	border: 1px solid transparent;
	padding-bottom: 10px;
	padding-top: 10px;
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

	.task-button__delete {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 700;
		font-size: 0.75rem;
		line-height: 24px;
		color: #999999;
		background-color: transparent;
	}
`;
