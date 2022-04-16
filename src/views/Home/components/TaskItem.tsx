import { memo } from "react";
import {TaskItem as props} from "../../../stateManagment/interfaces/task.interfaces"
import { startCompleteTask, startUpdateTask } from "../../../stateManagment/actions/tasks.actions";
import { useModal, useTaskContext } from "../../../hooks";
import { TaskDelete, TaskModal } from "../../../components";

export const TaskItem = memo(({title,desc,completed,uid}:props) => {    
    const {dispatch} = useTaskContext()
    const {open: openEdit,openModal: openEditM,closeModal: closeEditM} = useModal()
    const {open: openDelete,openModal: openDeleteM,closeModal: closeDeleteM} = useModal()

    const completeTask = () => startCompleteTask(uid!,!completed,dispatch)

    return <div className={`task__item flex flex-y-center flex-x-between ${
            completed ? 'task__item--completed' : ''
        }`} 
        onClick={completeTask}
    >
        <div className="task__content">
            <h2 className="task__title">{title}</h2>
            <p className="task__desc">{desc}</p>
        </div>
        
        <div className="task__tools flex">
            <button onClick={(e:any) =>{
                e.stopPropagation()
                openEditM()
            }} className="btn btn-primary"><i className="fa-solid fa-pen"></i></button>

            <button onClick={(e:any) =>{
                e.stopPropagation()
                openDeleteM()
            }} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
        </div>
        
        <TaskDelete
            uid={uid!}
            open={openDelete}
            closeModal={closeDeleteM}
        />
        
        <TaskModal
            title="Edit Task"
            btnContent="Save"
            open={openEdit}
            initialValues={{title,desc}}
            submitAction={(data:any) => {
                startUpdateTask(uid!,data,closeEditM,dispatch)
            }}
            closeModal={closeEditM}
        />
    </div>
})