import styled from "styled-components";

interface IButtonProps {
	backgroundColor: "black" | "green";
	width?: number;
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
	height: ${(props) => props.height + "px"};

	border-radius: ${(props) => props.borderRadius};
	box-shadow: ${(props) => props.boxShadow};
	color: var(--white);
	width: ${(props) => (props.width ? props.width * 0.7 + "px" : "100%")};
	:hover {
		/* filter: opacity(0.8); */
		background-color: ${(props) =>
			props.backgroundColor === "green" ? "#87d490" : "#5d5d5d"};
	}
	@media screen and (min-width: 464px) {
		width: ${(props) => props.width + "px"};
	}
`;
