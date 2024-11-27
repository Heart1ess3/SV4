import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutContent from '../components/aboutContent';
import { Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <AboutContent />
      <Footer />
    </Box>
  );
};

export default AboutPage;
