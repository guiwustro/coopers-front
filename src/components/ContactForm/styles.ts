import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
	border-radius: 4px;
	max-width: 700px;
	margin: 172px auto 0;
	width: 90%;
	padding: 0 40px;
	& > .figure__container {
		height: 87px;
	}
	& > .figure__container > figure {
		position: relative;
		width: 150px;
		height: 150px;
		bottom: 99px;
		& > .contact-image {
			position: absolute;
			top: 0px;
			right: 0px;
			width: 150px;
			height: 150px;
		}
		& > .graphism-image {
			position: absolute;
			right: 40px;
			top: 86px;
		}
	}
	@media screen and (min-width: 768px) {
		width: 100%;

		& > .figure__container > figure {
			position: relative;
			width: 191px;
			height: 191px;
			bottom: 99px;

			& > .contact-image {
				position: absolute;
				top: 0px;
				right: 0px;
				width: 191px;
				height: 191px;
			}
			& > .graphism-image {
				top: 86px;
				right: 86px;
			}
		}
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	& > .title-contact__container {
		display: flex;
		gap: 24px;

		& > h4 {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: 24px;
			line-height: 29px;
			display: flex;
			align-items: center;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			display: flex;
			flex-direction: column;
			& > .title-contact--bold {
				font-weight: 700;
			}
		}
	}
	& > form {
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-bottom: 60px;

		.form__group--inline {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}
	@media screen and (min-width: 768px) {
		& > form {
			.form__group--inline {
				display: flex;
				flex-direction: row;
			}
		}
	}
`;

export const FormGroupTextArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	& > textarea {
		height: 150px;
		resize: none;
		border-radius: 4px;
		background: #ffffff;
		border: 1px solid #959595;
		font-family: "Montserrat";
		font-size: 1rem;
		padding: 0.9375rem 0.9375rem;

		::placeholder {
			color: #9a9a9a;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.25rem;
		}
	}
	& > label {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.25rem;
		color: #06152b;
	}
`;
