import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css'; // Import the styles

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const recipeId = parseInt(id, 10);

    useEffect(() => {
        fetch(`http://localhost:5000/api/recipes`)
            .then(response => response.json())
            .then(data => {
                const fetchedRecipe = data.recipes.find(r => r.id === recipeId);
                if (fetchedRecipe) {
                    setRecipe(fetchedRecipe);
                } else {
                    console.error('Recipe not found.');
                }
            })
            .catch(error => {
                console.error('Error fetching recipe:', error.message);
            });
    }, [recipeId]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Recipe Details Page</h1>
            <h2 className={styles.title}>{recipe.title}</h2>
            <img src={`http://localhost:5000${recipe.image}`} alt={recipe.title} className={styles.image} />
            <p className={styles.description}>{recipe.description}</p>
        </div>
    );
}

export default RecipeDetails;
