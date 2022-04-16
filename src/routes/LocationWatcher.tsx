import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppContext } from "../hooks"
import { setAuthError } from "../stateManagment/actions/app.actions"

export const LocationWatcher = () => {
    const location = useLocation()
    const {dispatch} = useAppContext()
    
    useEffect(()=>{
        dispatch(setAuthError(null))
    },[location,dispatch,])

    return null
}