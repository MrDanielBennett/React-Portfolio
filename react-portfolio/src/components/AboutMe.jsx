import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Interests from './Interests';


class AboutMe extends React.Component{
  constructor(props) {
  super(props);
}
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
