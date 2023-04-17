import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { api } from "../api";
import { IFormLogin } from "../components/ModalLogin";
import { useModalContext } from "./ModalContext";
import { toast } from "react-hot-toast";

export interface IProviderProps {
	children: React.ReactNode;
}
interface IUserContext {
	loginUser: (data: IFormLogin) => void;
	logout: () => void;
	isAuthenticated: boolean;
	setIsAuthenticated: (value: SetStateAction<boolean>) => void;
	createUser: (userData: IFormLogin) => Promise<void>;
}

export interface ILoginRes {
	data: {
		token: string;
	};
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { toogleModal } = useModalContext();

	const loginUser = async (loginData: IFormLogin) => {
		toast.loading("Loading infos... ");

		try {
			const { data }: ILoginRes = await api.post("/login", loginData);
			localStorage.setItem("@coopers:token", data.token);
			toogleModal();
			toast.dismiss();

			setIsAuthenticated(true);
		} catch (error) {
			console.log(error);
			toast.error("Wrong username or password.");
		}
	};

	const createUser = async (userData: IFormLogin) => {
		try {
			await api.post("/users", userData).then((data) => {
				toast.success("Registration successful. Please login now.");
				toogleModal();
			});
		} catch (error) {
			toast.error("username already registered. Please use another.");
		}
	};

	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem("@coopers:token");
	};

	return (
		<UserContext.Provider
			value={{
				logout,
				loginUser,
				isAuthenticated,
				setIsAuthenticated,
				createUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);
