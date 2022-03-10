import './App.css';
import React, { useRef } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative bg-[#030406]'>
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
