import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutContent from '../components/aboutContent';

const AboutPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <AboutContent></AboutContent>
      <Footer />
    </div>
  );
};

export default AboutPage;
