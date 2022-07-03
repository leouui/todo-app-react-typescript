import { InputItem, LoadingButton} from '../../components'
import { useForm, useTaskContext } from '../../hooks'
import { TaskItem } from '../../stateManagment/interfaces/task.interfaces'

const data = [
	{ name: "title",type:"text",placeholder: "Task's Title"},
	{ name: "desc",type:"text", placeholder: "Task's Description" },
]

interface props {
    submitAction:(data: any) => void,
    btnContent:string,
    initialValues?:TaskItem
}

const TaskForm = ({submitAction,btnContent,initialValues} : props) => {
    const {state:{
        taskLoading
    }} = useTaskContext()
    
    const {register,onSubmit,errors} = useForm({
        validations:{
            title:[
                (data) => !data.length && "The task needs a title!",
                (data) => data.length > 20 && "Title should be less than 30 characters"
            ],
            desc:(data) => data.length > 50 && "The Description should be less than 50 characters"
        },
        defaultValues:initialValues
    })
    
    return <form 
        className="form" 
        onSubmit={onSubmit(submitAction)}
        noValidate
        autoComplete='off'
    >
        {data.map(({name,...rest}) =>
            <InputItem 
                key={name}
                {...register(name)}
                {...rest}
                error={errors[name]} 
                className="form-item auth__form-item"
            />
        )}

        <LoadingButton loading={taskLoading}>
            {btnContent}
        </LoadingButton>
    </form>
}
export default TaskForm