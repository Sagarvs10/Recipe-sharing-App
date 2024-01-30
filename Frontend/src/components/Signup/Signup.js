import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== rePassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password,  }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Error from server');
      }

      const data = await response.json();

      if (data.status === 'success') {
        navigate('/login');
      } else {
        setError(data.message || 'Failed to signup');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Re-type Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p className={styles.signInLink}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
      {/* "Login with" options */}
      <div className={styles.loginWith}>
        <button className={styles.google}>
          <i className="fab fa-google"></i> Google
        </button>
        <button className={styles.facebook}>
          <i className="fab fa-facebook-f"></i> Facebook
        </button>
        <button className={styles.twitter}>
          <i className="fab fa-twitter"></i> Twitter
        </button>
      </div>
    </div>
  );
}

export default Signup;