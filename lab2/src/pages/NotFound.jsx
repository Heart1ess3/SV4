import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      color: '#343a40',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: '500px',
        border: '2px solid #dc3545',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#dc3545',
        }}>
          404 - Page Not Found
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '20px',
        }}>
          The page with this URL doesn't exist. Please check the URL or go back to the homepage.
        </p>        
      </div>
    </div>
  )
}

export default NotFoundPage;
