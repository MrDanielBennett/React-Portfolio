import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyle = {
    textAlign: 'center',
  }
  const navbar = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    color: 'white'
  }
  const linkStyle ={
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div style={headerStyle}>
    <div>
      <h1>Daniel Bennett</h1>
      <h3>Junior Web Developer</h3>
    </div>
    <div style={navbar}>
        <Link style={linkStyle} to="/"><h3>About Me</h3></Link>
        <Link style={linkStyle} to="/projects"><h3>Projects</h3></Link>
        <Link style={linkStyle} to="/contact"><h3>Contact Me</h3></Link>
    </div>
  </div>
    );
  }

  export default Header;
