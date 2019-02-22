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
            color: white;
            background: linear-gradient(231deg, #212121, #0f151c);
            background-size: 400% 400%;

            animation: AnimationName 13s ease infinite;

            @keyframes AnimationName {
                0%{background-position:0% 92%}
                50%{background-position:100% 9%}
                100%{background-position:0% 92%}
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
