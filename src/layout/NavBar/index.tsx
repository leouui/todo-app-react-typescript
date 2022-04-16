import { useEffect } from "react"
import { useForm, useModal, useTaskContext } from "../../hooks"
import { useLocation, useNavigate } from "react-router-dom"
import { TaskModal } from "../../components"
import { startAddTask } from "../../stateManagment/actions/tasks.actions"
import "./styles.css"

export const NavBar = () => {    
	const navigate = useNavigate()
	const {pathname} = useLocation()
	const {dispatch} = useTaskContext()
	const {open,openModal,closeModal} = useModal()
	const {register,watch} = useForm({
		watchValues:["select"],
	})
	
	useEffect(() =>{
		const {select = pathname} = watch
		navigate(`${select}`,{replace:true})
	},[watch,navigate,pathname])
	
	return <nav className="tasks-navbar flex flex-y-center">
		<button className="btn btn-primary" onClick={openModal}>
			<i className="fa-solid fa-plus"></i>
			Create a new Task
		</button>
		
		<select {...register("select")} value={pathname} className="tasks-select">
			<option value="/">All</option>
			<option value="/completed-tasks">Completed Tasks</option>
			<option value="/pending-tasks">Pending tasks</option>
		</select>

		<TaskModal 
			title="Create a new Task"
			btnContent="Create task"
			open={open} 
			closeModal={closeModal}
			submitAction={(data:any) => startAddTask(data,closeModal,dispatch)}
		/>
	</nav>
}