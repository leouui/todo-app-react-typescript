import { Modal,LoadingButton } from '..'
import { useTaskContext } from '../../hooks'
import { startDeleteTask } from '../../stateManagment/actions/tasks.actions'

interface props {
    uid:string,
    open: boolean,
    closeModal:() =>void
}

const TaskDelete = ({uid,open,closeModal}:props) => {
    const {state:{taskLoading},dispatch} = useTaskContext()
    
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
                <h2 className="form__title txt-center">Are you sure you want to delete this task?</h2>  
                
                <div className="flex flex-x-center" style={{gap:"10px"}}>
                    <LoadingButton 
                        onClick={() => startDeleteTask(uid,closeModal,dispatch)} 
                        loading={taskLoading} 
                        className="btn btn-danger"
                    >
                        Delete
                    </LoadingButton>
                    <button onClick={closeModal} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </div>
    </Modal>
}

export default TaskDelete