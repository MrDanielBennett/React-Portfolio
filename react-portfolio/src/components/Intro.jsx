import React from 'react';
import profilePic from '../../assets/images/Profile.png';
import styled, { keyframes } from 'styled-components';
import { flipInX, fadeInLeft } from 'react-animations';

const flipAnimation = keyframes`${flipInX}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`

const FlipDiv = styled.div`
  animation: 5s ${flipAnimation};
`;
const FadeInLeftDiv = styled.div`
  animation: 3s ${fadeInLeftAnimation};
`;

class Intro extends React.Component{
    constructor(props) {
    super(props);
  }
  render(){
    const introStyle = {
      marginTop: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
    };
    const imageStyle = {
      height: '400px',
      border: 'solid',
      borderRadius: '50%',
      borderColor: '#424242',
      marginLeft: '25px',
      marginRight: '5px'
    };
    const contentStyle = {
      marginRight: '25px',
      border: 'solid',
      borderRadius: '5px',
      borderColor: '#424242',
      padding: '10px',
      backgroundColor: '#303030'
    };
  return (
      <div style={introStyle}>
        <FadeInLeftDiv>
          <img style={imageStyle} src={profilePic}/>
        </FadeInLeftDiv>
        <FlipDiv style={contentStyle}>
          <h1>The Fluff</h1>
          <hr/>
          <p>A young, motivated, high energy junior web developer who is searching for an oppertunity to grow and expand his knowledge in the world of Front End Development.  As time went on and as I worked with mulitple languages/frameworks I found myself really enjoying the styling and upmost front-end parts of programing, styling gives me an oppertunity to make something that isn't just functional but also pleasing to look at.
            <br/><br/> Outside of programing I really enjoy exploring new ideas, new places, and meeting new people. Everything has a story and learning more about those stories is what drives my creative mind to explore. The only thing better than discovering new things is discovering new things with others, I am a very family/friends oriented person who enjoys making memories with those around me as well as creating postive and memoriable expereicnes for those peeople as well.
            <br/> <br/>Much like other people I also enjoy my down time watching movies, and playing games with friends. Movies themselves are attractive to me from a design view because each movie has its own look, feel, and story. Taking these things into account I'm able to use these themes I see in other places and impliment them into my work creating my own themes, stories, and looks.</p>
        </FlipDiv>
      </div>
  );
}
}

export default Intro;
