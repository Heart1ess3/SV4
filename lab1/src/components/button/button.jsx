import { Component } from "react";

class Button extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: '#00BFFF',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '1em',
      marginBottom: '20px'
    };

    return (
      <button
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '##009AC1'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#00BFFF'}
      >
        Update
      </button>
    );
  }
}

export default Button;