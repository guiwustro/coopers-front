import { Controller, UseFormRegister } from "react-hook-form";

import { ErrorMessage, FormGroupContainer, Input, Label } from "./styles";
import InputMask from "react-input-mask";

interface IFormGroupProps {
	errors?: string;
	register: UseFormRegister<any>;
	label: string;
	registerName: string;
	typeInput: "text" | "password";
	placeholder?: string;
	control?: any;
	isPhone?: boolean;
	isContactInput?: boolean;
	typeForm?: string;
}

export const FormGroup = ({
	errors,
	register,
	registerName,
	label,
	typeInput,
	control,
	placeholder,
	isPhone,
	isContactInput,
	typeForm = "form",
}: IFormGroupProps) => {
	if (isPhone) {
		return (
			<FormGroupContainer errors={!!errors} isContactInput={isContactInput}>
				<Label htmlFor="telephone" isContactInput={isContactInput}>
					Telephone*
				</Label>
				<Controller
					render={({ field }) => (
						<InputMask
							mask="(99) 99999-9999"
							{...field}
							id="telephone"
							placeholder="(   ) _____-_____"
							style={{
								background: "#ffffff",
								border: "1px solid #959595",
								borderRadius: "4px",
								height: "50px",
								fontFamily: "Montserrat",
								fontSize: "1rem",
								padding: "0 1rem",
							}}
						/>
					)}
					control={control}
					name="phone"
				/>
			</FormGroupContainer>
		);
	}
	return (
		<FormGroupContainer errors={!!errors} isContactInput={isContactInput}>
			<Label htmlFor={registerName + typeForm} isContactInput={isContactInput}>
				{label}
			</Label>
			<Input
				type={typeInput}
				id={registerName + typeForm}
				isContactInput={isContactInput}
				{...register(registerName)}
				placeholder={placeholder}
			/>
			{!!errors && <ErrorMessage errors={!!errors}>{errors}</ErrorMessage>}
		</FormGroupContainer>
	);
};
