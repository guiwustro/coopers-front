import Logo from "../../assets/Logo.svg";
import { useModalContext } from "../../contexts/ModalContext";
import Button from "../Button";
import { Container } from "./styles";
const Header = () => {
	const { toogleModal } = useModalContext();
	return (
		<Container>
			<img src={Logo} alt="Logo Cooper" />
			<Button
				title="entrar"
				backgroundColor="black"
				width={120}
				height={40}
				padding="9px 35px 10px 40px"
				fontSize="0.875rem"
				onClick={toogleModal}
			/>
		</Container>
	);
};

export default Header;
