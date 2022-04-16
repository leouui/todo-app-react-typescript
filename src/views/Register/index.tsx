import { Link } from "react-router-dom"
import { RegisterForm } from "../../components"

const RegisterScreen = () => {
    return <main className="bg-auth">
        <div className="form__box">
            <h1 className="txt-center">ToDO App</h1>

            <RegisterForm/>
            
            <div className="auth__question-state flex">
                Do you have an account?
                <Link to="/login">
                    Log in
                </Link>
            </div>
        </div>
    </main>
}

export default RegisterScreen