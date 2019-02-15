import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App(){
  return (
    <div>
      <style jsx global>{`
          body{
            background-color: #212121;
            color: white;
          }
          `}</style>
    <Header/>
    <Switch>
      <Route exact path='/' component={AboutMe} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={ContactMe} />
    </Switch>
    <Footer/>
  </div>
    );
  }

  export default App;
