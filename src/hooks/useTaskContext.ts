import { useContext } from "react";
import { TaskContext } from "../stateManagment/context/TaskContext";

export const useTaskContext = () => useContext(TaskContext)