import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a community of passionate cooks and chefs, dedicated to 
        bringing you the best recipes from around the world. Join us in our culinary adventures and 
        discover the joy of cooking!
      </p>
    </div>
  );
}

export default About;
