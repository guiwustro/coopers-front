import ModalProvider from "./contexts/ModalContext";
import { TaskContextProvider } from "./contexts/TaskContext";
import { UserContextProvider } from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
	return (
		<UserContextProvider>
			<TaskContextProvider>
				<ModalProvider>
					<GlobalStyle />
					<AppRoutes />
				</ModalProvider>
			</TaskContextProvider>
		</UserContextProvider>
	);
}

export default App;
