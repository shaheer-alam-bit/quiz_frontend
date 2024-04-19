import {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [message, setMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', {
                email,
                password,
                name,
                isAdmin
            });
            console.log(response);
            setMessage('User created successfully');
        }
        catch (error) {
            console.log(error);
            setMessage('User creation failed');
        }
    }
    return (
        <>
        <form>
            <h1>Sign Up</h1>
            <label>
                Name:
                <input type="text" placeholder="Enter Name here" value = {name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" placeholder="Enter Email address" value = {email} onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter Password here" value = {password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            <label>
                Admin:
                <input type="checkbox" value = {isAdmin} onChange={(e)=> setIsAdmin(e.target.checked)}/>
            </label>
        </form>
            <button onClick={handleSignUp}>Sign Up</button>
            <p>{message}</p>
        </>
    )
}

export default SignUp;