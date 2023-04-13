import ModalProvider from "./contexts/ModalContext";
import { TaskContextProvider } from "./contexts/TaskContext";
import { UserContextProvider } from "./contexts/UserContext";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<UserContextProvider>
				<TaskContextProvider>
					<ModalProvider>
						<GlobalStyle />
						<AppRoutes />
					</ModalProvider>
				</TaskContextProvider>
			</UserContextProvider>
		</DndProvider>
	);
}

export default App;
