import { TaskState,TaskActions} from '../interfaces/task.interfaces';

export const TasksReducer = (state : TaskState , action : TaskActions) : TaskState => {
    switch (action.type) {
        case "LOAD_TASKS":
            return {
                ...state,
                tasks:action.payload
            }
        case "SET_LOADING" :
            return {
                ...state,
                loading:action.payload
            }
        case "SET_TASKS_ACTIONS_LOADING":
            return {
                ...state,
                taskLoading:action.payload
            }
        case "ADD_TASK" :
            return {
                ...state,
                tasks:[action.payload,...state.tasks]
            }
        case "DELETE_TASK" :
            return {
                ...state,
                tasks:state.tasks.filter(task => task.uid !== action.payload)
            }

        case "UPDATE_TASK" :
            return {
                ...state,
                tasks:state.tasks.map(task => 
                    task.uid === action.payload.id ? {
                        ...task,
                        ...action.payload.data
                    }
                    : task
                )
            }
        default:
            return state
    }
}