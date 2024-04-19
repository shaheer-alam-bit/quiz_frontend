import axios from 'axios';
import {useState ,useEffect} from 'react';

const CreateRecipe = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients,setIngredients] = useState([]);
    const [message, setMessage] = useState('');
    const [availableIngredients, setAvailableIngredients] = useState([]);

    const handleAddRecipe = () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:3000/recipe/add', {
            name,
            description,
            ingredients
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

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/ingredient/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setAvailableIngredients(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching ingredients:', error);
        });
    }, []);
    

    return (
        <>
            <form>
                <h1>Create Recipe</h1>
                <label>
                    Name:
                    <input type="text" placeholder="Enter Name here" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" placeholder="Enter Description here" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Ingredients:
                    <select value={ingredients} onChange={(e) => setIngredients(e.target.value)}>
                        <option value="">Select Ingredient</option>
                        {availableIngredients.map(ingredient => (
                            <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                        ))}
                    </select>
                </label>
            </form>
            <button onClick={handleAddRecipe}>Add Recipe</button>
            <p>{message}</p>
        </>
    );
}

export default CreateRecipe;