import './App.css';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function App() {
  return (
    <div className='flex flex-col justify-center bg-[#1A1A1A] bg-clouds-pattern h-screen'>
      <div className='flex flex-col items-start py-2 text-white'>
        <div>

        </div>
        <div className='px-6'>
          <h1 className='text-5xl font-monoton'>Nathan Kim.</h1>
          <p className='mt-4 mb-8 text-lg'>I am a <strong className='text-[#A400FF]'>software developer</strong> who builds and designs responsive web applications.</p>
        </div>
        <div className='flex items-center justify-between w-full px-6'>
          <button className='bg-[#A400FF] py-2 px-6 text-md rounded-md font-bold w-1/2'>Projects</button>
          <div className='flex'>
            <Link to='https://github.com/nathankim137311'>
              <BsGithub className='w-6 h-6 mx-2'/>
            </Link>
            <Link to='https://www.linkedin.com/in/nathan-kim-826a25230/'>
              <BsLinkedin className='w-6 h-6 mx-2'/>
            </Link>
          </div>
        </div>
      </div>
      <div>

      </div>
      <NavBar />
    </div>
  );
}

export default App;
