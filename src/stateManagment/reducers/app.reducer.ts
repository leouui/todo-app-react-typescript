import {AppState,AppActions} from "../interfaces/app.interfaces" 

export const AppReducer = (state : AppState , action : AppActions) : AppState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                auth:{
                    ...state.auth,
                    user:action.payload,
                    isAuthenticated:true
                }
            }
        case "LOG_OUT" :
            return {
                ...state,
                auth:{
                    ...state.auth,
                    user:null,
                    isAuthenticated:false
                }
            }
        case "SET_AUTH_LOADING" :
            return {
                ...state,
                auth:{
                    ...state.auth,
                    loading:action.payload
                }
            }
        case "SET_AUTH_ERROR":
            console.log(action.payload);
            
            return {
                ...state,
                auth:{
                    ...state.auth,
                    error:action.payload
                }
            }
        default:
            return state
    }
}