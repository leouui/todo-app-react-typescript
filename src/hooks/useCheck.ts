import { useEffect, useState } from "react"
import { tokenRequest } from "../helpers"
import { login } from "../stateManagment/actions/app.actions"
import { useAppContext } from "./useAppContext"

export const useCheck = () => {
    const [check,setCheck] = useState({loading:true})
    const {state,dispatch} = useAppContext()

    useEffect(() =>{
        tokenRequest("/auth/check")
            .then(({user,token})=> {
                if(token !== "null" && token) dispatch(login(user,token!))
            })
            .catch(err=>err)
            .finally(() => setCheck(state=>({...state,loading:false})))
    },[dispatch])
    
    return {
        ...check,
        isAuthenticated:state.auth.isAuthenticated
    }
}