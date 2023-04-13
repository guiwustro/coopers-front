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

export interface IProviderProps {
	children: React.ReactNode;
}
interface IUserContext {
	loginUser: (data: IFormLogin) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

export interface ILoginRes {
	data: {
		token: string;
	};
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const loginUser = async (loginData: IFormLogin) => {
		try {
			const { data }: ILoginRes = await api.post("/login", loginData);
			localStorage.setItem("@coopers:token", data.token);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem("@me-au:token");
	};

	return (
		<UserContext.Provider
			value={{
				logout,
				loginUser,
				isAuthenticated,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);
