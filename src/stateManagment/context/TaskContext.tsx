import { createContext, useEffect, useReducer } from "react";
import { TasksReducer } from "../reducers/tasks.reducer";
import { TaskActions, TaskState } from '../interfaces/task.interfaces';
import { startGetTasks } from "../actions/tasks.actions";

export const TaskContext = createContext({} as {
    dispatch:React.Dispatch<TaskActions>
    state:TaskState,
})

const initState : TaskState = {
    tasks:[],
    loading:false,
    taskLoading:false
}

export const TaskContextHOC = ({children}:{children:JSX.Element | JSX.Element[]}) => {
    const [state,dispatch] = useReducer(TasksReducer,initState)
    
    useEffect(()=>{
        startGetTasks(dispatch)
    },[])
    
    return <TaskContext.Provider value={{state,dispatch}}>
        {children}
    </TaskContext.Provider>
}