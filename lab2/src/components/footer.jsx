const Footer = () => {
  const navLinkStyle = {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <footer style={{ backgroundColor: "#007bff", color: "#fff", padding: "20px", textAlign: "center", position: "relative", bottom: 0, width: "100%" }}>
      <p>&copy; 2024 Our Store. All rights reserved.</p>
      <nav>
        <a href="/privacy" style={navLinkStyle}>Privacy Policy</a>
        <a href="/terms" style={navLinkStyle}>Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
