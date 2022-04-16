export interface User {
    uid:string,
    name:string,
    email:string,
    state:boolean
}

export interface Error {
    msg:string,
    cod:number | string
}

export interface AppState {
    auth:{
        user:User | null,
        loading:boolean,
        error:Error | null,
        isAuthenticated:boolean,
    }
}

export type AppActions = {
    type:"LOGIN",
    payload:User
} | {
    type:"SET_AUTH_LOADING",
    payload:boolean
} | {
    type:"SET_AUTH_ERROR",
    payload:Error | null
} | {
    type:"LOG_OUT"
}