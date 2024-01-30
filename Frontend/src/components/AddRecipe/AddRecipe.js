import React, { useState, useEffect } from 'react';
import styles from './AddRecipe.module.css';

function AddRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null); // Store the image file as state

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => {
                if (data && data.recipes) {
                    setRecipes(data.recipes);
                } else {
                    console.error("Expected 'recipes' key not found in data");
                }
            })
            .catch(error => console.error('Error fetching recipes:', error.message));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image); // Append the image file to the FormData object

        fetch('http://localhost:5000/api/recipes', {
            method: 'POST',
            body: formData, // Send the FormData object with the image file
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setTitle('');
                setDescription('');
                setImage(null); // Clear the image state after successful upload
            } else {
                alert('Error adding recipe');
            }
        });
    };

    const handleDelete = (recipeId) => {
        const token = localStorage.getItem('access_token');  // Assuming you're storing the JWT token in local storage
    
        fetch(`http://localhost:5000/api/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
            } else {
                alert('Error deleting recipe');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.addRecipe}>
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data"> {/* Use "multipart/form-data" for file uploads */}
                    <div className={styles.inputGroup}>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Description:</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Image:</label>
                        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                    </div>
                    <button type="submit" className={styles.recipeButton}>Add Recipe</button>
                </form>
            </div>

            <div className={styles.recipeList}>
                <h2>Recipes</h2>
                <ul>
                    {Array.isArray(recipes) && recipes.map(recipe => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <img src={`http://localhost:5000${recipe.image}`} alt={recipe.title} width="200" />

                            <button onClick={() => handleDelete(recipe.id)} className={styles.recipeButton}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddRecipe;
