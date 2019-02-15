import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyle = {
    textAlign: 'center',
  }
  const navbar = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    color: 'white',
    borderBottom: '2px solid white',
  }
  const linkStyle ={
    color: 'white',
    textDecoration: 'none',
    border: 'solid',
    borderColor: '#424242',
    backgroundColor: '#303030',
    padding: '1',
    margin: '30',
    marginBottom: '3',
    marginTop: '0',
    borderRadius: '5',
  }
  const titleStyle = {
    fontSize: '36pt',
    marginBottom: '1'
  }
  return (
    <div style={headerStyle}>
    <div>
      <h1 style={titleStyle}>Daniel Bennett</h1>
      <h3>Junior Front End Web Developer | Portland, OR</h3>
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
