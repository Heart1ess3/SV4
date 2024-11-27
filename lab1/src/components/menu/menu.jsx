import { Component } from "react";

class Menu extends Component {
  render() {
    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
    };

    return (
    <nav style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#services" style={linkStyle}>Services</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
    );
  }
}

export default Menu;