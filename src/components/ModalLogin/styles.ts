import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(12, 12, 12, 0.8);
`;

export const ModalContainer = styled.div`
	width: 932px;
	background-color: white;
	.modal__header {
		display: flex;
		justify-content: flex-end;
		padding-right: 23px;
		height: 64px;
		align-items: center;
		.modal__close-button {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 700;
			font-size: 1.25rem;
			color: #000000;
			background-color: white;
			&:hover {
				cursor: pointer;
			}
		}
	}

	.modal__body {
		display: flex;
		flex-direction: row;
		padding-left: 56px;
		gap: 42px;
		& > .modal__left-side {
			padding-top: 12px;
		}
		& > .modal__right-side {
			padding-top: 57px;
			& > .main__title {
				font-family: "Montserrat";
				font-weight: 700;
				font-size: 5rem;
				line-height: 4rem;
				display: flex;
				flex-direction: column;

				color: var(--black);
				& > .main__title--green {
					color: var(--green-200);
					font-weight: 400;
					font-size: 3.125rem;
				}
			}
		}
	}

	form {
		padding-top: 84px;
		padding-bottom: 53px;
		max-width: 342px;
		& > .form__inputs {
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-bottom: 56px;
		}
	}
`;

export const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
`;
