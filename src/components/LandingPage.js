import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome to UPI Tracker</h1>
        <p style={styles.subText}>
          Securely track and analyze your UPI transactions in one place.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleLogin}>Login</button>
          <button style={styles.button} onClick={handleRegister}>Register</button>
        </div>
      </div>
      <footer style={styles.footer}>© 2025 Vishal</footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f0f0f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    position: 'relative',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
    marginBottom: '60px', // leave space for footer
  },
  heading: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '20px',
  },
  subText: {
    color: '#bbbbbb',
    fontSize: '1rem',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    background: '#8e2de2',
    backgroundImage: 'linear-gradient(45deg, #8e2de2, #4a00e0)',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  footer: {
    position: 'absolute',
    bottom: '10px',
    textAlign: 'center',
    color: '#888',
    fontSize: '0.9rem',
  },
};

export default LandingPage;
