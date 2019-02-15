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
        <p>Pulling from all aspects of my life whether it be my time at Epicodus, my short year in Community College, the years in retail, or even the character molder that was high school I have decided to break down the skills I obtained into two catagories.</p>
      </div>
      <div style = {skillGrid}>
        <div style = {skillTypesStyle}>
          <h1>Technical Skills</h1>
          <hr/>
          <ul style={skillGrid}>
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>BootStrap</li>
              </div>
              <div>
                <li>Adobe Photoshop(certifed)</li>
                <li>Git</li>
                <li>CMD</li>
                <li>TDD</li>
                <li>Angular</li>
                <li>JQuery</li>
                <li>SQL Databases</li>
              </div>
          </ul>
        </div>
        <div style = {skillTypesStyle}>
          <h1>Communicable Skills/Traits</h1>
          <hr/>
          <ul style = {skillGrid}>
            <div>
              <li>Team Player</li>
              <li>Problem Solver</li>
              <li>Communicative</li>
              <li>Focused</li>
              <li>Resourceful</li>
            </div>
            <div>
            <li>Know when/what to prioritize</li>
            <li>Compasionate</li>
            <li>Creative Thinker</li>
            <li>Honest</li>
            <li>Know when to ask for help</li>
          </div>
          </ul>
        </div>
      </div>
    </div>


    );
  }

  export default Skills;
