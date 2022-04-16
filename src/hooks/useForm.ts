import { useState } from "react"

type ObjectItem<V> = {[key:string]:V}
type validationItem = (value:any,watchValues?:ObjectItem<any>) => string | boolean | ObjectItem<any>

interface Options {
    defaultValues?: ObjectItem<any>,
    validations?: ObjectItem<validationItem | (validationItem)[]>,
    watchValues?: string[] | "*"
}

const validate = (item: validationItem | (validationItem)[],value:any,watchValues?:any) => {
    if(typeof item === "object") {
        for (const callBack of item) {
            const err = callBack(value,watchValues)
            if(err) return err
        }
    }else {
        const err = item(value,watchValues)
        if(err) return err
    }
}

export const useForm = (options:Options = {}) => {
    const {
        defaultValues = {},
        validations = {},
        watchValues = []
    } = options
    
    const [watch,setWatch] = useState<ObjectItem<any>>({})
    const [errors,setErrors] = useState<ObjectItem<any>>({})

    const register = (name:string) => {        
        const v = defaultValues[name] ? {defaultValue:defaultValues[name]} : {}
        
        return {
            ...v,
            name,
            onChange:({target:{value}}:any) => {                
                (watchValues.includes(name) || watchValues === "*") && setWatch(v => ({...v,[name]:value}))

                const item = validations[name]
                
                if(item) {
                    const error = validate(item,value,watch)
                    const {[name]:key,...rest} = errors;

                    (key !== error) && setErrors(e=> error ? ({...e,[name]:error}) : rest)
                }
            }
        }
    }
    
    const onSubmit = (callBack : (data:ObjectItem<any>) => void) => {        
        return (e:any) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target))

            let tempErrs : ObjectItem<any> = {}
            
            for (const err of Object.entries(data)) {
                const [name,value] = err
                const item = validations[name]

                if(item) {
                    const error = validate(item,value,watch)
                    const {[name]:key,...rest} = tempErrs
                    tempErrs = error ? {...tempErrs,[name]:error} : rest
                }
            }
            
            if(!Object.values(tempErrs).length) return callBack(data)
            
            setErrors(tempErrs)
        }
    }

    return {
        onSubmit,
        register,
        errors,
        watch,
    }
}