import styled from "styled-components";

interface IFormGroupProps {
	errors: boolean;
}
export const FormGroupContainer = styled.div<IFormGroupProps>`
	width: 342px;
	display: flex;
	flex-direction: column;
	gap: 3px;
`;

export const Label = styled.label`
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 1.8125rem;
`;

export const Input = styled.input`
	background: #ffffff;
	border: 1px solid #959595;
	border-radius: 10px;
	height: 54px;
	font-family: Montserrat;
	font-size: 1rem;
	padding: 0 1rem;
`;

export const ErrorMessage = styled.p<IFormGroupProps>`
	color: red;
	height: 0;
`;
