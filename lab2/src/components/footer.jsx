import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ backgroundColor: "#007bff", color: "#fff", p: 3, textAlign: "center", position: "relative", bottom: 0, width: "100%" }}
    >
      <Typography variant="body2" component="p" sx={{ mb: 2 }}>
        &copy; 2024 Our Store. All rights reserved.
      </Typography>
      <nav>
        <Link href="/privacy" underline="none" sx={{ color: "#fff", mx: 2, fontWeight: "bold" }}>
          Privacy Policy
        </Link>
        <Link href="/terms" underline="none" sx={{ color: "#fff", mx: 2, fontWeight: "bold" }}>
          Terms of Service
        </Link>
      </nav>
    </Box>
  );
};

export default Footer;
