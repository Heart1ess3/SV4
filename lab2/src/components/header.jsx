import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box 
      component="header" 
      sx={{ backgroundColor: "#007bff", color: "#fff", p: 2, textAlign: "center", borderBottom: "4px solid #0056b3" }}
    >
      <Typography variant="h1" sx={{ fontSize: "32px" }}>
        Welcome to Our Store
      </Typography>
      <Typography sx={{ fontSize: "18px", mt: 1, fontStyle: "italic" }}>
        Delivering quality products since 2010
      </Typography>
      <nav style={{ marginTop: "15px" }}>
        <Link to="/about" style={linkStyles}>
          About
        </Link>
        <Link to="/profile" style={linkStyles}>
          Profile
        </Link>
        <Link to="/cards" style={linkStyles}>
          Cards
        </Link>
      </nav>
    </Box>
  );
};

export default Header;

const linkStyles = {
  color: "#fff",
  margin: "0 15px",
  textDecoration: "none"
};
