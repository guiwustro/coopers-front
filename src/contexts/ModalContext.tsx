import { createContext, ReactNode, useContext, useState } from "react";

interface IModalProviderData {
	toogleModal: () => void;
	isModalOpen: boolean;
}

interface IModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
	const [isModalOpen, setModalIsOpen] = useState(false);

	const toogleModal = () => {
		setModalIsOpen((previous) => !previous);
	};

	return (
		<ModalContext.Provider
			value={{
				toogleModal,
				isModalOpen,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
