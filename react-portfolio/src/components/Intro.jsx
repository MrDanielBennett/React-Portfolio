import React from 'react';
import profilePic from '../../assets/images/Profile.png';

function Intro(){
  const introStyle = {
    marginTop: '10',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  }
  const imageStyle = {
    height: '400',
    border: 'solid',
    borderRadius: '50%',
    borderColor: '#424242',
    marginLeft: '25'
  }
  const contentStyle = {
    marginRight: '25',
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030'
  }
  return (
    <div style={introStyle}>
      <div>
        <img style={imageStyle} src={profilePic}/>
      </div>
      <div style={contentStyle}>
        <h1>The Fluff</h1>
        <hr/>
        <p>A young, motivated, high energy junior web developer who is searching for an oppertunity to grow and expand his knowledge in the world of Front End Development.</p>
      </div>
    </div>
  );
}

export default Intro;
