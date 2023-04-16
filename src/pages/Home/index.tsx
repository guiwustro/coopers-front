import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ModalLogin from "../../components/ModalLogin";
import { TaskCard } from "../../components/TaskCard";
import ToDoTitle from "../../components/ToDoTitle";
import { useModalContext } from "../../contexts/ModalContext";
import { useTaskContext } from "../../contexts/TaskContext";
import { CardContainer, CardList } from "./styles";
import Grafismo from "../../assets/grafismos-lateral-esquerda.svg";
import Carroussel from "../../components/Carroussel";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Alert from "../../components/Alert";

export const Home = () => {
	const { isModalOpen, isOpenAlert } = useModalContext();
	const { completedTasks, progressTasks } = useTaskContext();

	return (
		<>
			<Header />
			<Banner />
			<ToDoTitle />
			<CardContainer>
				<img src={Grafismo} alt="grafismos" className="to-do__grafismo" />
				<CardList>
					<TaskCard
						tasks={progressTasks}
						borderColor="orange"
						title="To-do"
						subtitle="Take a breath. Start doing."
						statusTask="progress"
					/>
					<TaskCard
						tasks={completedTasks}
						borderColor="green"
						title="Done"
						subtitle={
							completedTasks.length > 0
								? `You have done ${completedTasks.length} tasks.`
								: "You have done no tasks "
						}
						statusTask="done"
					/>
				</CardList>
			</CardContainer>
			<Carroussel />
			<ContactForm />
			<Footer />
			{isOpenAlert && <Alert />}
			{isModalOpen && <ModalLogin />}
		</>
	);
};
