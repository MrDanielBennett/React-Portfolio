import React from 'react';

function ContactMe(){
  const contactStyle = {
    marginRight: '25',
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginLeft: '450',
    marginRight: '450',
    marginTop: '20'
  }
  return (
    <div>
      <div style={contactStyle}>
        <h1>Contact Me</h1>
      </div>
    </div>
    );
  }

  export default ContactMe;
