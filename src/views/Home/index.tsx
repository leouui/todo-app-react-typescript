import { Spinner } from "../../components"
import { useTaskContext } from "../../hooks"
import { TaskItem } from "./components/TaskItem"
import "./styles.css"

const Home = () => {
	const {state:{tasks,loading}} = useTaskContext()
	
	return <div className="task-container">
		{
			loading 
				? <div className="wid-100 flex flex-x-center"><Spinner color="#000"/></div> 
				: !tasks.length 
					? <div className="txt-center">
						There are not tasks
					</div>
					: tasks.map((task) => <TaskItem key={task.uid} {...task} />)
		}
	</div>
}

export default Home