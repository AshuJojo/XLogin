import { useState } from "react"

const LoginForm = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
            setError('');
            setUsername('');
            setPassword('');
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error}
            <label for='username'>Username</label>
            <input type="text" name='username' id='username' value={username} onChange={(e) => { setUsername(e.target.value) }} required />
            <label for='password'>Password</label>
            <input type="password" name='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm