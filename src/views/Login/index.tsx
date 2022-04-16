import { Link } from "react-router-dom"
import { LoginForm } from "../../components"

const LoginScreen = () => {
    return <main className="bg-auth">
        <div className="form__box">
            <h1 className="txt-center">ToDO App</h1>
            
            <LoginForm/>
            
            <div className="auth__question-state flex">
                Do not you have a account?
                <Link to="/register">
                    Sign up
                </Link>
            </div>
        </div>
    </main>
}

export default LoginScreen