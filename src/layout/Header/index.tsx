import { CheckTime } from "../../components"
import { useAppContext } from "../../hooks"
import { startLogout } from "../../stateManagment/actions/app.actions"
import "./styles.css"


export const Header = () => {
    const {state,dispatch} =  useAppContext()
	const {name} = state.auth.user!
    
    return <header className="tasks-actions flex flex-x-between flex-y-center">
        <h1 className="greeting">
            <CheckTime/>,
            <span className="tertirary-color"> {name}</span>
        </h1>
        
        <button className="btn btn-danger" onClick={() => startLogout(dispatch) }>
            <i className="fa-solid fa-right-from-bracket"></i>
        </button>
    </header>
}
