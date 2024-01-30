import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './HeroSection.module.css';
import FryingPan from '../FryingPan/FryingPan';  // Import the FryingPan component

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <h1>Welcome to RecipeShare</h1>
      <FryingPan /> {/* Add the FryingPan component */}
      <p>Discover and share delectable recipes from around the world.</p>
    </section>
  );
}

export default HeroSection;
