import styled, { css } from "styled-components";

interface IFormGroupProps {
	errors: boolean;
	isContactInput?: boolean;
}

interface IInputProps {
	isContactInput?: boolean;
}

export const FormGroupContainer = styled.div<IFormGroupProps>`
	width: 342px;
	display: flex;
	flex-direction: column;
	gap: 3px;
	${(props) =>
		props.isContactInput &&
		css`
			width: 100%;
			gap: 8px;
		`}
`;

export const Label = styled.label<IInputProps>`
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 1.8125rem;
	${(props) =>
		props.isContactInput &&
		css`
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.25rem;
			color: #06152b;
		`}
`;

export const Input = styled.input<IInputProps>`
	background: #ffffff;
	border: 1px solid #959595;
	border-radius: 10px;
	height: 54px;
	font-family: Montserrat;
	font-size: 1rem;
	padding: 0 1rem;

	${(props) =>
		props.isContactInput &&
		css`
			height: 50px;
			border-radius: 4px;
			::placeholder {
				color: #9a9a9a;
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 400;
				font-size: 1rem;
				line-height: 1.25rem;
			}
		`}
`;

export const ErrorMessage = styled.p<IFormGroupProps>`
	color: red;
	height: 0;
`;
