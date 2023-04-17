import { createContext, ReactNode, useContext, useState } from "react";

interface IModalProviderData {
	toogleModal: () => void;
	isModalOpen: boolean;
	openAlert: (statusTask: "done" | "progress") => void;
	isOpenAlert: boolean;
	closeAlert: () => void;
	typeAlert?: "done" | "progress";
	openModal: (modalType: "login" | "register") => void;
	configModal: IConfigModal;
}

interface IModalProviderProps {
	children: ReactNode;
}
interface IConfigModal {
	isOpen: boolean;
	modalType: "login" | "register";
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	const [isOpenAlert, setIsOpenAlert] = useState(false);
	const [typeAlert, setTypeAlert] = useState<"done" | "progress">();
	const [configModal, setConfigModal] = useState<IConfigModal>({
		isOpen: false,
		modalType: "login",
	});

	const toogleModal = () => {
		setModalIsOpen((previous) => !previous);
		setConfigModal((previous) => {
			return {
				...previous,
				isOpen: !previous.isOpen,
			};
		});
	};

	const openModal = (modalType: "login" | "register") => {
		setConfigModal({
			isOpen: true,
			modalType,
		});
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
				openModal,
				configModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
