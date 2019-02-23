import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyle = {
    textAlign: 'center',
  };
  const navbar = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    color: 'white',
    borderBottom: '2px solid white',
  };
  const linkStyle ={
    color: 'white',
    textDecoration: 'none',
    border: 'solid',
    borderColor: '#424242',
    backgroundColor: '#303030',
    padding: '1px',
    margin: '30px',
    marginBottom: '3px',
    marginTop: '0px',
    borderRadius: '5px',
  };
  const titleStyle = {
    fontSize: '36pt',
    marginBottom: '3px'
  };
  const title2Style = {
    marginTop: '5px'
  };
  return (
    <div className='header' style={headerStyle}>
      <style jsx>{`
        .header {
          animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

          @keyframes text-focus-in {
            0% {
              filter: blur(12px);
              opacity: 0;
            }
            100% {
              filter: blur(0px);
              opacity: 1;
            }
          }
          `}</style>
      <div>
        <h1 style={titleStyle}>Daniel Bennett</h1>
        <h3 style={title2Style}>Junior Front End Web Developer | Portland, OR</h3>
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
