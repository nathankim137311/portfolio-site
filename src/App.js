import './App.css';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative bg-[#030406] bg-clouds-pattern'>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
