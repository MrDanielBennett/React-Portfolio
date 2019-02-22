import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Interests from './Interests';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

class AboutMe extends React.Component{
  constructor(props) {
  super(props);
  this.state={}
};
  render(){

  return (
      <div>
        <Intro/>
        <Skills/>
        <Interests/>
      </div>
    );
  }
}

export default AboutMe;
