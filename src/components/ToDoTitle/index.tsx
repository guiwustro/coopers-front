import blackBackGround from "../../assets/bg-black-horizontal.png";
import GreenLine from "../../assets/green-line.svg";
import Arrow from "../../assets/icon-scroll.svg";
import {
	CenterContainer,
	Container,
	ContainerBackGround,
	Title,
} from "./styles";
const ToDoTitle = () => {
	return (
		<ContainerBackGround>
			<CenterContainer>
				<img src={Arrow} alt="scroll" />
			</CenterContainer>
			<Container>
				<div></div>
				<Title>
					<h2>To-do List</h2>
					<img src={GreenLine} alt="Linha verde" />
				</Title>
				<p>
					Drag and drop to set your main priorities, check when done and create
					what's new.
				</p>
			</Container>
		</ContainerBackGround>
	);
};

export default ToDoTitle;
