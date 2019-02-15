import React from 'react';

function Skills(){
  const skillsStyle = {
    marginTop: '25',
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030'
  }
  const skillGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
  const skillTypesStyle ={
    margin: '25',
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center'
  }
  return (
    <div>
      <div style = {skillsStyle}>
        <h1>The Chops</h1>
        <hr/>
        <p>Pulling from all aspects of my life wheter it be my time at Epicodus, my short year in Community College, the years in retail, or even the character molder that was high school I have decided to break down these skills into two catagories.</p>
      </div>
      <div style = {skillGrid}>
        <div style = {skillTypesStyle}>
          <h1>Technical Skills</h1>
          <hr/>
          <ul>
            <li></li>
          </ul>
        </div>
        <div style = {skillTypesStyle}>
          <h1>Communicable Skills</h1>
          <hr/>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>


    );
  }

  export default Skills;
