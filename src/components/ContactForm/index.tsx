import InputMask from "react-input-mask";
import contactGrafismo from "../../assets/contact-grafismo.svg";
import contactInfoImage from "../../assets/contact-image.svg";
import contactEmailImage from "../../assets/icon-mail.svg";
import { FormGroup } from "../FormGroup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { Container, FormContainer, FormGroupTextArea } from "./styles";
interface IFormContact {
	name: string;
	email: string;
	telephone: string;
	message: string;
}
const ContactForm = () => {
	const formSchema = yup.object().shape({
		username: yup.string().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IFormContact>({
		resolver: yupResolver(formSchema),
	});

	const onError = () => {
		// toast.error("Preencha todos os campos corretamente");
	};

	const onSuccess = (data: IFormContact) => {
		//chamada de login
	};
	return (
		<Container>
			<div className="figure__container">
				<figure>
					<img
						src={contactGrafismo}
						alt="graphism-image"
						className="graphism-image"
					/>
					<img
						src={contactInfoImage}
						alt="contact-image"
						className="contact-image"
					/>
				</figure>
			</div>

			<FormContainer>
				<div className="title-contact__container">
					<img src={contactEmailImage} alt="username" />
					<h4>
						<span>GET IN</span>
						<span className="title-contact--bold">TOUCH</span>
					</h4>
				</div>
				<form>
					<FormGroup
						label="Your name"
						placeholder="type your name here.."
						register={register}
						registerName="name"
						typeInput="text"
						isContactInput
					/>
					<div className="form__group--inline">
						<FormGroup
							label="Email*"
							placeholder="example@example.com"
							register={register}
							registerName="name"
							typeInput="text"
							isContactInput
						/>
						<FormGroup
							label="Telephone*"
							register={register}
							registerName="Telephone"
							control={control}
							isPhone
							typeInput="text"
							isContactInput
						/>
					</div>

					<FormGroupTextArea>
						<label htmlFor="message">Message*</label>
						<textarea
							name="message"
							id="message"
							placeholder="Type what you want to say to us"
						></textarea>
					</FormGroupTextArea>
					<Button
						backgroundColor="green"
						fontSize="16px"
						height={52}
						borderRadius="4px"
						title="SEND NOW"
						fontFamily="Montserrat"
						type="submit"
						boxShadow="0px 16px 24px rgba(6, 21, 43, 0.12)"
					/>
				</form>
			</FormContainer>
		</Container>
	);
};

export default ContactForm;
