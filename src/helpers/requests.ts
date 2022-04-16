type methods = "POST" | "PUT" | "DELETE" | "GET"
interface options {
    method?:methods,
    body?:string,
    headers?:{[key:string]:any}
}

const CODE_ERRORS = [401,400]

const apiFetch = async(endpoint:string,options?:options) => {
    const req = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`,options)
    const res = await req.json()
    
    if(CODE_ERRORS.includes(res.cod)) throw res
    
    return res
}

export const tokenRequest = async(
    endpoint:string,
    method:methods = "GET",
    options:options = {}
) => {
    const token = localStorage.getItem("x-token")
    
    const res = await apiFetch(endpoint,{
        ...options,
        method,
        headers: {
            ...options.headers,
            "x-token":token,
        }
    })
    
    return {...res,token}
}

export const request = async(
    endpoint:string,
    method:methods = "GET",
    options:options = {}
) => await apiFetch(endpoint,{...options,method})