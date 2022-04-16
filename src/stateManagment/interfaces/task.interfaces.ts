export interface TaskItem {
    uid?: string,
    title?: string,
    desc?: string,
    completed?:boolean
}

export interface TaskState {
    tasks:TaskItem[],
    loading:boolean,
    taskLoading:boolean
}

export type TaskActions = {
    type:"LOAD_TASKS",
    payload:TaskItem[]
} | {
    type:"SET_LOADING",
    payload:boolean
} | {
    type:"SET_TASKS_ACTIONS_LOADING",
    payload:boolean
} | {
    type:"ADD_TASK",
    payload:TaskItem
} | {
    type:"UPDATE_TASK",
    payload:{
        id:string,
        data:TaskItem
    }
} | {
    type:"DELETE_TASK",
    payload:string
}