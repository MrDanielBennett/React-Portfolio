import React from 'react';

function Solo(){
  const soloStyle = {
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginLeft: '450',
    marginRight: '450',
    marginTop: '20'
  };
  const projectBox ={
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginTop: '20',
    margin: '30',
  };
  const projectGrid={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  };
  const linkText={
    color: 'white',
  };
  return (
    <div>
      <div style={soloStyle}>
        <h1>Independent Projects</h1>
      </div>

      <div style={projectGrid}>

        <div style={projectBox}>
          <h2>Doctor Look Up</h2>
          <hr/>
          <p>A javascript web app that takes user input and calls an api to show doctors in the Portland area that treat the inputed symptom.</p>
          <a style={linkText} href="https://github.com/MrDanielBennett/doctor-lookup"><p>Check it out here</p></a>
        </div>

        <div style={projectBox}>
          <h2>Moviebase</h2>
          <hr/>
          <p>A basic movie search app that will return movies from an API call from a movie database based on inputed name, year, or word in title.</p>
          <a style={linkText} href="https://github.com/MrDanielBennett/moviebase"><p>Check it out here</p></a>
        </div>

        <div style={projectBox}>
          <h2>Track Selector</h2>
          <hr/>
          <p>A javascript/HTML quiz that asks users to select certain projects and then the program will let them know which course they should take at Epicodus based on the results.</p>
          <a style={linkText} href="https://github.com/MrDanielBennett/track-selector.git"><p>Check it out here</p></a>
        </div>

        <div style={projectBox}>
          <h2>Pizza Time</h2>
          <hr/>
          <p>A javascript/HTML webpage that will allow users to order a pizza from a fake pizzaria site.</p>
          <a style={linkText} href="https://github.com/MrDanielBennett/pizza-time"><p>Check it out here</p></a>
        </div>

      </div>
    </div>
    );
  }

  export default Solo;
