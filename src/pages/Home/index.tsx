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
import ModalRegister from "../../components/ModalRegister";

export const Home = () => {
	const { isOpenAlert, configModal } = useModalContext();
	const { tasks } = useTaskContext();

	return (
		<>
			<Header />
			<Banner />
			<ToDoTitle />
			<CardContainer>
				<img src={Grafismo} alt="grafismos" className="to-do__grafismo" />
				<CardList>
					<TaskCard
						tasks={tasks.progress}
						borderColor="orange"
						title="To-do"
						subtitle="Take a breath. Start doing."
						statusTask="progress"
					/>
					<TaskCard
						tasks={tasks.done}
						borderColor="green"
						title="Done"
						subtitle={
							tasks.done.length > 0
								? `You have done ${tasks.done.length} tasks.`
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
			{configModal.isOpen && configModal.modalType === "login" && (
				<ModalLogin />
			)}
			{configModal.isOpen && configModal.modalType === "register" && (
				<ModalRegister />
			)}
		</>
	);
};
