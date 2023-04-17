import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckImage from "../../assets/Checklist.jpg";

import { useModalContext } from "../../contexts/ModalContext";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { FormGroup } from "../FormGroup";
import { CenterContainer, Container, ModalContainer } from "./styles";

export interface IFormRegister {
	username: string;
	password: string;
	password_confirmation: string;
}

const ModalRegister = () => {
	const { toogleModal } = useModalContext();
	const { createUser } = useUserContext();
	const formSchema = yup.object().shape({
		username: yup.string().required("Required field"),
		password: yup
			.string()
			.required("Required field")
			.min(6, "The password must contain at least six characters")
			.matches(/\d/, "The password must contain at least one digit")
			.matches(
				/(?=.*[A-Z])/,
				"The password must contain at least one capital letter"
			)
			.matches(
				/(?=.*[a-z])/,
				"The password must contain at least one lower case letter"
			),
		password_confirmation: yup
			.string()
			.required("Required field")
			.oneOf([yup.ref("password")], "Fields do not match"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormRegister>({
		resolver: yupResolver(formSchema),
	});

	const onError = () => {
		// toast.error("Preencha todos os campos corretamente");
	};
	console.log(errors);

	const onSuccess = (data: IFormRegister) => {
		//chamada de login
		createUser({
			username: data.username,
			password: data.password,
		});
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
						<img src={CheckImage} alt="Login Image" className="modal__image" />
					</div>
					<div className="modal__right-side">
						<h1 className="modal__title">
							<span className="modal__title--black">Register</span>
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
									typeInput="password"
								/>
								<FormGroup
									label="Password Confirmation:"
									register={register}
									errors={errors.password_confirmation?.message}
									registerName={"password_confirmation"}
									typeInput="password"
								/>
							</div>
							<CenterContainer>
								<Button
									backgroundColor="green"
									fontSize="1.5rem"
									height={64}
									width={300}
									title="Register"
									type="submit"
								/>
							</CenterContainer>
						</form>
					</div>
				</div>
			</ModalContainer>
		</Container>
	);
};

export default ModalRegister;
