// Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.quickLinks}>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <div className={styles.socialIcons}>
        {/* Replace '#' with your actual social media links */}
        <a href="#"><i className={`fab fa-facebook ${styles.icon}`}></i></a>
        <a href="#"><i className={`fab fa-twitter ${styles.icon}`}></i></a>
        <a href="#"><i className={`fab fa-instagram ${styles.icon}`}></i></a>
      </div>
      <p>&copy; 2023 RecipeSharing App</p>
    </footer>
  );
}

export default Footer;
