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
  const contactGrid={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  const contactBox ={
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginTop: '20',
    margin: '60',
    marginLeft: '150',
    marginRight: '150',
  };
  const linkText={
    color: 'white',
  };
  return (
    <div>
      <div style={contactStyle}>
        <h1>Contact Me</h1>
      </div>
      <div style={contactGrid}>
        <div style={contactBox}>
          <h2>Social Media</h2>
          <p>LinkedIn: <a style={linkText} href="https://www.linkedin.com/in/mrdanielkbennett/">https://www.linkedin.com/in/mrdanielkbennett/</a></p>
          <p>Twiter: <a style={linkText} href="https://twitter.com/mrdanielbennett">https://twitter.com/mrdanielbennett</a></p>
          <p>Instagram: <a style={linkText} href="https://www.instagram.com/danielkbennett/">https://www.instagram.com/danielkbennett/</a></p>
        </div>
        <div style={contactBox}>
          <h2>Projects and Email</h2>
          <p>GitHub: <a style={linkText} href="https://github.com/MrDanielBennett">https://github.com/MrDanielBennett</a></p>
          <p>Email Me: daniel.bennett1999@gmail.com</p>
        </div>
      </div>
    </div>
    );
  }

  export default ContactMe;
