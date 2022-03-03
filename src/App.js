import './App.css';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'; 
import Projects from './components/Projects';

function App() {
  return (
    <div className='relative bg-[#1A1A1A] bg-clouds-pattern'>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
