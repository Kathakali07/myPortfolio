import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
    </>
  );
}

export default App;
