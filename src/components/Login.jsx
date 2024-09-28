import { useState } from "react"
import LoginForm from "./LoginForm";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();


    return (
        <div>
            <h1>Login Page</h1>
            {isLoggedIn ? 'Welcome, user!' : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </div>
    )
}

export default Login