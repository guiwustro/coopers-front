import { UseFormRegister } from "react-hook-form";

import { ErrorMessage, FormGroupContainer, Input, Label } from "./styles";

interface IFormGroupProps {
	errors?: string;
	register: UseFormRegister<any>;
	label: string;
	registerName: string;
	typeInput: "text" | "password";
}

export const FormGroup = ({
	errors,
	register,
	registerName,
	label,
	typeInput,
}: IFormGroupProps) => {
	return (
		<FormGroupContainer errors={!!errors}>
			<Label htmlFor={registerName}>{label}</Label>
			<Input type={typeInput} id={registerName} {...register(registerName)} />
			{!!errors && <ErrorMessage errors={!!errors}>{errors}</ErrorMessage>}
		</FormGroupContainer>
	);
};
