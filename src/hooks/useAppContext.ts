import { useContext } from "react"
import { AppContext } from "../stateManagment/context/AppContext"

export const useAppContext = () => useContext(AppContext)