import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import WomanLoginImage from "../../assets/sign-in-image.svg";

import { useModalContext } from "../../contexts/ModalContext";
import Button from "../Button";
import { CenterContainer, Container, ModalContainer } from "./styles";
import { FormGroup } from "../FormGroup";
import { useUserContext } from "../../contexts/UserContext";

export interface IFormLogin {
	username: string;
	password: string;
}

const ModalLogin = () => {
	const { toogleModal } = useModalContext();
	const { loginUser, isAuthenticated } = useUserContext();
	const formSchema = yup.object().shape({
		username: yup.string().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>({
		resolver: yupResolver(formSchema),
	});

	const onError = () => {
		// toast.error("Preencha todos os campos corretamente");
	};

	const onSuccess = (data: IFormLogin) => {
		//chamada de login
		loginUser(data);
		toogleModal();
	};

	return (
		<Container>
			<ModalContainer>
				<div className="modal__header">
					<button className="modal__close-button" onClick={() => toogleModal()}>
						close
					</button>
				</div>
				<div className="modal__body">
					<div className="modal__left-side">
						<img
							src={WomanLoginImage}
							alt="Login Image"
							className="modal__image"
						/>
					</div>
					<div className="modal__right-side">
						<h1 className="modal__title">
							<span className="modal__title--black">Sign in</span>
							<span className="modal__title--green">to access your list</span>
						</h1>
						<form onSubmit={handleSubmit(onSuccess, onError)}>
							<div className="form__inputs">
								<FormGroup
									label="User:"
									register={register}
									errors={errors.username?.message}
									registerName={"username"}
									typeInput="text"
								/>
								<FormGroup
									label="Password:"
									register={register}
									errors={errors.password?.message}
									registerName={"password"}
									typeInput="text"
								/>
							</div>
							<CenterContainer>
								<Button
									backgroundColor="green"
									fontSize="1.5rem"
									height={64}
									width={300}
									title="Sign in"
								/>
							</CenterContainer>
						</form>
					</div>
				</div>
			</ModalContainer>
		</Container>
	);
};

export default ModalLogin;
