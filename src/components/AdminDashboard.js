import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [ingredients, setIngredients] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState([]);

    

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/ingredient/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setIngredients(response.data.data);
            setMessage(response.data.msg);
        }).catch((error) => {
            setMessage(error.response.data.msg);
        });
    }, []);
    
    const handleAddIngredient =  () => {
        navigate('/add-ingredient')
    }

    const handleAddRecipe = () => {
        navigate('/add-recipe')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/recipe/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setRecipe(response.data.data);
            setMessage(response.data.msg);
        }).catch((error) => {
            setMessage(error.response.data.msg);
        })
    
    }, []);

    return (
        <>
        <div>
            {ingredients.map(ingredient => (
                <div key={ingredient.id}>
                    <h3>Ingredient Name:{ingredient.name}</h3>
                    <p>Ingredient Desc:{ingredient.description}</p>
                </div>
            ))}
            <p>{message}</p>
            <button onClick={handleAddIngredient}>Add Ingredient</button>
            <button onClick={handleAddRecipe}>Add Recipe</button>
        </div>

        <div>
            {recipe.map(recipe => (
                <div key={recipe.id}>
                    <h3>Recipe Name:{recipe.name}</h3>
                    <p>Recipe Desc:{recipe.description}</p>
                    <p>Recipe Ingredients:{recipe.ingredients.map((ingredient)=>{
                        return <li>{ingredient.name}</li>
                    })}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default AdminDashboard;