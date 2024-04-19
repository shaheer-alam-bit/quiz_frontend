import axios from 'axios';
import {useState} from 'react';


const CreateIngredient = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleAddIngredient = () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:3000/ingredient/add', {
            name,
            description
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setMessage(response.data.msg);
        }).catch((error) => {
            setMessage(error.response.data.msg);
        });

    }
    return (
        <>
        <form>
            <h1>Create Ingredient</h1>
            <label>
                Name:
                <input type="text" placeholder="Enter Name here" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" placeholder="Enter Description here" value = {description} onChange={(e)=> setDescription(e.target.value)} />
            </label>
        </form>
            <button onClick={handleAddIngredient}>Add Ingredient</button>
            <p>{message}</p>
        </>
    );
}

export default CreateIngredient;