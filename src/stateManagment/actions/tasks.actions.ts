import { tokenRequest } from "../../helpers"
import { TaskActions } from "../interfaces/task.interfaces"
import { TaskItem } from "../interfaces/task.interfaces"

type dispatch = React.Dispatch<TaskActions>

export const setTasks = (tasks:TaskItem[]) : TaskActions => ({
    type:"LOAD_TASKS",
    payload:tasks
})

export const addTask = (task:TaskItem) : TaskActions => ({
    type:"ADD_TASK",
    payload:task
})

export const editTask = (id:string,data:TaskItem) : TaskActions => ({
    type:"UPDATE_TASK",
    payload:{
        id,
        data
    }
})
export const deleteTask = (id:string) : TaskActions => ({
    type:"DELETE_TASK",
    payload:id
})

const setTasksActionsLoading = (loading:boolean) :TaskActions => ({
    type:"SET_TASKS_ACTIONS_LOADING",
    payload:loading
})

const setTaskLoading = (loading:boolean) :TaskActions => ({
    type:"SET_LOADING",
    payload:loading
})

export const startGetTasks = (dispatch:dispatch) => {
    dispatch(setTaskLoading(true))
    
    tokenRequest("/tasks")
        .then(({tasks})=> {
            dispatch(setTasks(tasks))
        })
        .finally(() =>{
            dispatch(setTaskLoading(false))
        })
}

export const startAddTask = (data:TaskItem,closeModal:() => void,dispatch:dispatch) => {
    dispatch(setTasksActionsLoading(true))

    tokenRequest("/tasks/create-task", "POST", {
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    })
        .then(({task})=> {
            dispatch(addTask(task))
        })
        .finally(() =>{
            dispatch(setTasksActionsLoading(false))
            closeModal()
        })
}


export const startCompleteTask = (id:string,state:boolean,dispatch:dispatch) => {
    const toUpdate = {completed:state}
    
    dispatch(editTask(id,toUpdate))
    
    tokenRequest(`/tasks/${id}`, "PUT",{
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(toUpdate),
    })
}

export const startUpdateTask = (id:string,data:TaskItem,closeModal:() => void,dispatch:dispatch) => {
    dispatch(setTasksActionsLoading(true))
    
    tokenRequest(`/tasks/${id}`, "PUT",{
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    })
        .then(({task})=> {
            dispatch(editTask(id,task))
        })
        .finally(() =>{
            dispatch(setTasksActionsLoading(false))
            closeModal()
        })
}

export const startDeleteTask = (id:string,closeModal:() => void,dispatch:dispatch) => {
    dispatch(setTasksActionsLoading(true))
    
    tokenRequest(`/tasks/${id}`,"DELETE")
        .then(()=> {
            dispatch(deleteTask(id))
        })
        .finally(() =>{
            dispatch(setTasksActionsLoading(false))
            closeModal()
        })
}