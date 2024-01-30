import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../AuthContext/AuthContext'; 

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/logo.gif" alt="Logo" />
      </div>
      <ul className={styles.leftNavList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
      </ul>
      <ul className={styles.rightNavList}>
        {isLoggedIn ? (
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li>
              <button className={styles.logoutButton} onClick={() => setIsLoggedIn(false)}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
