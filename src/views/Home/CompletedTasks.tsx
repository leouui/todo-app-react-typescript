import { Spinner } from "../../components"
import { useTaskContext } from "../../hooks"
import { TaskItem } from "./components/TaskItem"
import "./styles.css"

const CompletedTasks = () => {
	const {state:{tasks,loading}} = useTaskContext()
	
    const completedTasks = tasks.filter((task) => task.completed === true)

	return <div className="task-container">
		{
			loading 
				? <div className="wid-100 flex flex-x-center"><Spinner color="#000"/></div> 
				: !completedTasks.length 
					? <div className="txt-center">
						There are not tasks
					</div>
					: completedTasks.map((task) => <TaskItem key={task.uid} {...task} />)
		}
	</div>
}

export default CompletedTasks