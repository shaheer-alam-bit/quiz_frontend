import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            if (response.data.isAdmin) {
                navigate('/admin-dashboard')
            }
            else {
                navigate('/dashboard')
            }
            setMessage(response.data.msg);
        } catch (error) {
            setMessage('User login failed');
        }
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={handleSignIn} >Login</button>
                <p>{message}</p>
            </form>
        </>
    )
}

export default Login;