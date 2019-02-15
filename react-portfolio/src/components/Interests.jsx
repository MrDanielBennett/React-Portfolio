import React from 'react';

function Interests(){
  const interestStyle = {
      border: 'solid',
      borderRadius: '5',
      borderColor: '#424242',
      padding: '10',
      backgroundColor: '#303030'
  }
  const interestGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }
  return (
    <div style = {interestStyle}>
    <h1>Interests</h1>
    <hr/>
    <p>I have many interests, most being some form of art/creative projects whether it be film, music, books, video games, and others, here are some of my favorites:</p>
    <div style={interestGrid}>
      <div>
      <h3>Movies:</h3>
      <ul>
        <li><em>Jurassic Park</em></li>
        <li><em>Intersteller</em></li>
        <li><em>Inception</em></li>
        <li><em>The Aquatic Life of Steve Zissou</em></li>
      </ul>
      </div>
      <div>
        <h3>Music:</h3>
        <ul>
          <li>Miniature Tigers</li>
          <li>Grouplove</li>
          <li>Cage the Elephant</li>
          <li>Beach House</li>
        </ul>
      </div>
      <div>
      <h3>Places:</h3>
      <ul>
        <li>Silverton, OR</li>
        <li>Pacific City, OR</li>
        <li>Kualoa Ranch, HI</li>
        <li>Seattle, WA</li>
      </ul>
    </div>
    </div>
  </div>
    );
  }

  export default Interests;
