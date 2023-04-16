import { createContext, ReactNode, useContext, useState } from "react";

interface IModalProviderData {
	toogleModal: () => void;
	isModalOpen: boolean;
	openAlert: (statusTask: "done" | "progress") => void;
	isOpenAlert: boolean;
	closeAlert: () => void;
	typeAlert?: "done" | "progress";
}

interface IModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	const [isOpenAlert, setIsOpenAlert] = useState(false);
	const [typeAlert, setTypeAlert] = useState<"done" | "progress">();

	const toogleModal = () => {
		setModalIsOpen((previous) => !previous);
	};
	const openAlert = (statusTask: "done" | "progress") => {
		setTypeAlert(statusTask);
		setIsOpenAlert((previous) => !previous);
	};
	const closeAlert = () => {
		setTypeAlert(undefined);
		setIsOpenAlert((previous) => !previous);
	};

	return (
		<ModalContext.Provider
			value={{
				toogleModal,
				isModalOpen,
				isOpenAlert,
				openAlert,
				closeAlert,
				typeAlert,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
