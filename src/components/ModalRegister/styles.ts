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
	width: 80%;
	background-color: white;
	overflow-y: auto;
	max-height: 90vh;

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
		justify-content: center;

		& > .modal__left-side {
			padding-top: 12px;

			& > .modal__image {
				display: none;
				width: 200px;
			}
		}
		& > .modal__right-side {
			& > .modal__title {
				font-family: "Montserrat";
				font-weight: 700;
				font-size: 4rem;
				display: flex;
				flex-direction: column;

				color: var(--black);
				& > .modal__title--green {
					color: var(--green-200);
					font-weight: 400;
					font-size: 2.4rem;
				}
			}
		}
	}

	form {
		padding-top: 24px;
		padding-bottom: 53px;
		max-width: 100%;
		flex-direction: column;
		& > .form__inputs {
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-bottom: 56px;
		}
	}

	@media screen and (min-width: 1024px) {
		width: 932px;
		padding-left: 56px;
		form {
			padding-top: 84px;
		}
		.modal__body {
			justify-content: unset;
			/* padding-left: 56px; */
			& > .modal__right-side {
				padding-left: 56px;

				& > .modal__title {
					font-size: 5rem;
					line-height: 4rem;

					& > .modal__title--green {
						font-size: 3.125rem;
					}
				}
			}
			& > .modal__left-side {
				& > .modal__image {
					display: block;
					width: 300px;
				}
			}
		}
	}
`;

export const CenterContainer = styled.div`
	display: flex;
	justify-content: center;
`;
