import React from "react"
import { LoginScreen, RegisterScreen, Home, CompletedTasks, PendingTasks } from "../views"

const DashboardRouter = React.lazy(() => import("./DashBoardRouter"))

export const routes = [
    {
        path:"/login",
        to:"/login",
        name:"login",
        isPrivate:false,
        Component:LoginScreen
    },
    {
        path:"/register",
        to:"/register",
        name:"register",
        isPrivate:false,
        Component:RegisterScreen
    },
    {
        path:"/*",
        to:"/",
        name:"dashboard",
        isPrivate:true,
        Component:DashboardRouter
    },
]

export const dashBoardRoutes = [
    {
        path:"/",
        to:"/",
        name:"task",
        isPrivate:false,
        Component:Home
    },
    {
        path:"/completed-tasks",
        to:"/completed-tasks",
        name:"completed-tasks",
        isPrivate:false,
        Component:CompletedTasks
    },
    {
        path:"/pending-tasks",
        to:"/pending-tasks",
        name:"pending-tasks",
        isPrivate:false,
        Component:PendingTasks
    },
]