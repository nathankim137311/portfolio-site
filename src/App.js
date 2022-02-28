import './App.css';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative bg-[#1A1A1A] bg-clouds-pattern'>
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
