import { ButtonStyle } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: "green" | "black";
	width?: number;
	height: number;
	padding?: string;
	fontSize: string;
	title: string;
	borderRadius?: string;
	boxShadow?: string;
	fontFamily?: "Montserrat";
}

const Button = ({
	title,
	backgroundColor,
	width,
	height,
	padding,
	fontSize,
	borderRadius,
	boxShadow,
	fontFamily,
	...props
}: IButtonProps) => {
	return (
		<ButtonStyle
			backgroundColor={backgroundColor}
			width={width}
			height={height}
			padding={padding}
			fontSize={fontSize}
			borderRadius={borderRadius}
			boxShadow={boxShadow}
			fontFamily={fontFamily}
			{...props}
		>
			{title}
		</ButtonStyle>
	);
};

export default Button;
