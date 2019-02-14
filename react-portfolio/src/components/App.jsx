import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={AboutMe} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={ContactMe} />
    </Switch>
  </div>
    );
  }

  export default App;
