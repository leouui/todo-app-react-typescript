import { InputItem, LoadingButton } from "../../components";
import { useAppContext, useForm } from "../../hooks/"
import { startAuth } from "../../stateManagment/actions/app.actions";

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const data = [
    { name:"email", type:"email", placeholder:"Email" },
    { name:"password",type:"password",placeholder:"Password" },
]

const LoginForm = () => {
    const {state,dispatch} = useAppContext()
    const {error,loading} = state.auth
    
    const {onSubmit,register,errors} = useForm({
        validations:{
            email:(value) => !value.match(emailReg) && "Invalid Email",
        }
    })
    
    const onSubmitAction = (data:any) => startAuth("/auth/login",data,dispatch)
    
    return <form 
        onSubmit={onSubmit(onSubmitAction)} 
        className="form"
        noValidate 
        autoComplete="off"
    >
        { 
            error && 
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
        <LoadingButton loading={loading}>Log in</LoadingButton>
    </form>
}

export default LoginForm