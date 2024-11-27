import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={{backgroundColor: '#00BFFF', color: 'white', padding: '10px 0'}}>
        <h1 style={{textAlign: 'center'}}>My Website</h1>
      </header>
    )      
  }  
}

export default Header;