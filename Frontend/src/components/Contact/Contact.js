import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or feedback, please reach out to us!</p>
      <p>Email: contact@ourwebsite.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
}

export default Contact;
