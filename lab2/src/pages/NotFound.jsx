import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
          border: '2px solid #dc3545',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '32px',
            marginBottom: '10px',
            color: '#dc3545',
          }}
        >
          404 - Page Not Found
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            marginBottom: '20px',
          }}
        >
          The page with this URL doesn't exist. Please check the URL or go back to the homepage.
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
