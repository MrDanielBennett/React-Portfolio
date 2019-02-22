import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Interests from './Interests';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 5s ${fadeInAnimation};
`;

class AboutMe extends React.Component{
  constructor(props) {
  super(props);
}
  render(){

  return (
  <FadeInDiv>
    <div>
      <Intro/>
      <Skills/>
      <Interests/>
    </div>
  </FadeInDiv>
    );
  }
}

  export default AboutMe;
