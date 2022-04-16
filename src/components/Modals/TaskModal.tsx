import { Modal, TaskForm } from '../../components'
import { TaskItem } from '../../stateManagment/interfaces/task.interfaces'

interface props {
    title:string,
    btnContent:string,
    initialValues?:TaskItem,
    open:boolean,
    closeModal:() => void,
    submitAction:(data:any) => void
}

const TaskModal = ({title,btnContent,initialValues,open,closeModal,submitAction}:props) => {    
    return <Modal open={open}>
        <div className="bg-modal flex flex-x-center flex-y-center" onClick={(e:any)=>{
            e.stopPropagation()
            closeModal()
        }}>
            <div className="form__box" onClick={(e:any) => e.stopPropagation()}>
                <div className="form__tools">
                    <button className="btn form_tool" onClick={closeModal}>
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
                
                <h2 className="form__title">{title}</h2>
                
                <TaskForm 
                    initialValues={initialValues}
                    btnContent={btnContent}
                    submitAction={submitAction} 
                />                
            </div>
        </div>
    </Modal>
}

export default TaskModal