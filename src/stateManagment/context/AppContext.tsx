import { createContext, useReducer } from "react";
import { AppState,AppActions } from "../interfaces/app.interfaces";
import { AppReducer } from "../reducers/app.reducer";

export const AppContext = createContext({} as {
    dispatch:React.Dispatch<AppActions>
    state:AppState,
})

const initState : AppState = {
    auth:{
        user:null,
        loading:false,
        error:null,
        isAuthenticated:false
    }
}

export const AppContextHOC = ({children}:{children:JSX.Element | JSX.Element[]}) => {
    const [state,dispatch] = useReducer(AppReducer,initState)
    
    return <AppContext.Provider value={{state,dispatch}}>
        {children}
    </AppContext.Provider>
}