import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Recipe.module.css';

function Recipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={styles.container}>
            {recipes.map(({ id, title, description, image }) => (
                <div key={id} className={styles.recipe}>
                    {/* Use the absolute URL to the image by combining it with the base URL of your Flask server */}
                    <img src={`http://localhost:5000${image}`} alt={title} width="200" />

                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className={styles.buttonContainer}>
                    <Link to={`/recipes/${id}`} className={styles.readMoreBtn}>Read More</Link>

    </div>
                </div>
            ))}
        </div>
    );
}

export default Recipe;
