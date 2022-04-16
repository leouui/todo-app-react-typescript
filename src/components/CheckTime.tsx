import { useEffect, useState } from "react"
const checkHour = (hour:number) => {
    if(hour >= 0 && hour < 12) return ("⛅ Good morning")
    if(hour >= 12 && hour < 18) return ("🌞 Good afternoon")
    
    return ("🌙 Good evening")
}

const CheckTime = () => {
    const [dayState,setDayState] = useState({
        msg:"",
        hour:0
    })
    
    useEffect(() => {
        const hour = new Date().getHours()
        setDayState(state=>({...state,msg:checkHour(hour),hour}))
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            const hour = new Date().getHours()
            if(dayState.hour !== hour) setDayState(state=>({...state,msg:checkHour(hour),hour}))
        },1000)
    },[dayState])

    return <>{dayState.msg}</>
}

export default CheckTime