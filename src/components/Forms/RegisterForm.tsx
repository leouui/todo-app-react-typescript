import { InputItem, LoadingButton } from "../../components";
import { useAppContext, useForm } from "../../hooks/"
import { startAuth } from "../../stateManagment/actions/app.actions";

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const data = [
    { name:"name", type:"text", placeholder:"Name" },
    { name:"email", type:"email", placeholder:"Email" },
    { name:"password",type:"password",placeholder:"Password" },
    { name:"confirm_password",type:"password",placeholder:"Confirm Password" },
]

const RegisterForm = () => {
    const {state,dispatch} = useAppContext()
    const {loading,error} = state.auth
    
    const {onSubmit,register,errors} = useForm({
        watchValues:["password"],
        validations:{
            name:(value) => !value.length && "You will need a name",
            email:(value) => !value.match(emailReg) && "Invalid Email",
            password:(value) => value.length < 6 && "Your password must be at least 6 characters",
            confirm_password:(value,watch) => value !== watch?.password && "The passwords are not equal"
        }
    })
    
    const onSubmitAction = (data:any) => startAuth("/auth/register",data,dispatch)
    
    return <form 
        onSubmit={onSubmit(onSubmitAction)} 
        className="form"
        noValidate 
        autoComplete="off"
    >
        { error && 
            <div className="auth__box-error">
                {error.msg}
            </div>
        }
        {data.map(({name,...rest}) =>
            <InputItem 
                key={name}
                {...register(name)}
                {...rest}
                error={errors[name]} 
                className="form-item auth__form-item"
            />
        )}
        <LoadingButton loading={loading}>Register</LoadingButton>
    </form>
}

export default RegisterForm