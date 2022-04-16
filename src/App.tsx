import AppRouter from "./routes/AppRouter"
import { AppContextHOC } from "./stateManagment/context/"
import "./styles/index.css"

const App = () => {
	return <AppContextHOC>
		<AppRouter/>
	</AppContextHOC>
}

export default App