import { Component } from "react";

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
      position: 'relative',
      bottom: '0',
      width: '100%',
    };

    return(
      <footer style={footerStyle}>
          <p>2024 My Website</p>
      </footer>
    )    
  }
}

export default Footer;