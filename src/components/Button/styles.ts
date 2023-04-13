import styled from "styled-components";

interface IButtonProps {
	backgroundColor: "black" | "green";
	width: number;
	height: number;
	padding?: string;
	fontSize: string;
	borderRadius?: string;
	boxShadow?: string;
	fontFamily?: "Montserrat";
}

export const ButtonStyle = styled.button<IButtonProps>`
	background-color: ${(props) =>
		props.backgroundColor === "green" ? "var(--green-200)" : "var(--black)"};
	font-family: "Poppins";
	font-family: ${(props) => props.fontFamily || "Poppins"};

	font-style: normal;
	font-weight: 600;
	font-size: ${(props) => props.fontSize};
	width: ${(props) => props.width + "px"};
	height: ${(props) => props.height + "px"};
	padding: ${(props) => props.padding};
	border-radius: ${(props) => props.borderRadius};
	box-shadow: ${(props) => props.boxShadow};
	color: var(--white);
`;
