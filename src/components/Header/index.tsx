import Logo from "../../assets/Logo.svg";
import { useModalContext } from "../../contexts/ModalContext";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { Container } from "./styles";
const Header = () => {
	const { toogleModal } = useModalContext();
	const { logout, isAuthenticated } = useUserContext();
	console.log(isAuthenticated);
	return (
		<Container>
			<img src={Logo} alt="Logo Cooper" />
			{isAuthenticated ? (
				<Button
					title="logout"
					backgroundColor="black"
					width={120}
					height={40}
					padding="9px 35px 10px 40px"
					fontSize="0.875rem"
					onClick={logout}
				/>
			) : (
				<div className="header__buttons">
					<Button
						title="register"
						backgroundColor="black"
						width={120}
						height={40}
						padding="9px 35px 10px 40px"
						fontSize="0.875rem"
						onClick={toogleModal}
					/>
					<Button
						title="login"
						backgroundColor="black"
						width={120}
						height={40}
						padding="9px 35px 10px 40px"
						fontSize="0.875rem"
						onClick={toogleModal}
					/>
				</div>
			)}
		</Container>
	);
};

export default Header;
