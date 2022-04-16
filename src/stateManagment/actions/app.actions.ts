import React from "react"
import { request } from "../../helpers"
import {AppActions,User,Error} from "../interfaces/app.interfaces"

type dispatch = React.Dispatch<AppActions>

export const login = (user:User,token:string) : AppActions => {
    localStorage.setItem("x-token",token)
    return {
        type:"LOGIN",
        payload:user
    }
}
export const setAuthLoading = (state:boolean) : AppActions => ({
    type:"SET_AUTH_LOADING",
    payload:state
})
export const setAuthError = (error:Error | null) : AppActions => ({
    type:"SET_AUTH_ERROR",
    payload:error
})

export const logout = () : AppActions => ({
    type:"LOG_OUT"
})

export const startLogout = (dispatch:dispatch) => {
    localStorage.clear()
    dispatch(logout())
}

export const startAuth = (
    endpoint : "/auth/login" | "/auth/register",
    body:{[key:string]:any},
    dispatch:React.Dispatch<AppActions>
) => {
    dispatch(setAuthLoading(true))

    request(endpoint,"POST",{
        body:JSON.stringify(body),
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(({user,token})=> {
            dispatch(login(user,token))
            dispatch(setAuthError(null))
        })
        .catch((err) =>{
            console.log(err);
            dispatch(setAuthError(err))
        })
        .finally(()=>{
            dispatch(setAuthLoading(false))
        })
}