import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInRightDiv = styled.div`
  animation: 2s ${fadeInRightAnimation};
`;

class Group extends React.Component{
  constructor(props) {
  super(props);
}
render(){

  const groupStyle = {
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginLeft: '450px',
    marginRight: '450px',
    marginTop: '20px'
  };
  const projectBox ={
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginTop: '20px',
    margin: '30px',
  };
  const projectGrid={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  };
  const linkText={
    color: 'white',
  };
  return (
    <FadeInRightDiv>
      <div style={groupStyle}>
        <h1>Group Projects</h1>
      </div>

      <div style={projectGrid}>

        <div style={projectBox}>
          <h2>MasterMind</h2>
          <hr/>
          <p>A browser remake of the classic game MasterMind, guess the correct combination of colors and become the mastermind.</p>
          <a style={linkText} href="https://mrdanielbennett.github.io/Mastermind/"><p>Check it out here</p></a>
        </div>

        <div style={projectBox}>
          <h2>Action Wallet</h2>
          <hr/>
          <p>This crypto cold wallet allows secure viewing of all your crypto assets in one place. No more hassling with multiple wallets to figure out what your funds look like, Action Wallet makes it easy!</p>
          <a style={linkText} href="https://github.com/MrDanielBennett/ActionWallet"><p>Check it out here</p></a>
        </div>

        <div style={projectBox}>
          <h2>Quizzle me Timbers</h2>
          <hr/>
          <p>An Angular app that streamlines how bar triva works, making the old saying of "What was that Question again?" walk the plank.</p>
          <a style={linkText} href="https://trivia-b096e.firebaseapp.com"><p>Check it out here</p></a>
        </div>

      </div>
    </FadeInRightDiv>
    );
  }
  }

  export default Group;
