import {useEffect, useState} from 'react';
import axios from 'axios';

const Book = () => {

    const [recipes, setRecipes] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/recipe/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setRecipes(response.data.data);
            setMessage(response.data.msg);
        }).catch((error) => {
            setMessage(error.response.data.msg);
        })
    }, []);
    return (
        <>
        <p>{message}</p>
            {recipes.map(recipe=>(
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <p>{recipe.ingredients}</p>
                </div>
            ))}
        </>
    );
}

export default Book;