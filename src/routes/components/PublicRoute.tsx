import { Navigate } from "react-router-dom"

interface props {
    element:any,
    isPrivate:boolean,
    to?:string
} 

export const PublicRoute = ({element,isPrivate,to="/"}:props) => {      
    if(isPrivate) return <Navigate to={to} replace={true}/>
    
    return element
}