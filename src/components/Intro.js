import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import arrowDown from '../assets/gif/arrow-down.gif';
// import Particles from 'react-tsparticles';
// import particleConfig from '../config/particle';

export default function Intro() {
  return (
    <div className='relative flex flex-col justify-center h-screen'>
      {/* <Particles id='space-particles' className='absolute top-0 bottom-0 left-0 right-0' params={particleConfig} /> */}
      <div className='flex flex-col items-start px-6 text-white xs:items-center xs:max-w-2xl sm:mx-auto z-[1]'>
        <div>
          <h1 className='text-5xl font-monoton xs:text-center'>Nathan Kim.</h1>
          <p className='mt-4 mb-8 text-lg text-slate-300 xs:text-xl xs:text-center'>I am a <strong className='text-[#15ebd9] font-normal'>software developer</strong> that builds and designs responsive web applications.</p>
        </div>
        <div className='flex items-center w-full sm:w-1/2 drop-shadow-lg xs:justify-center'>
          <button className='w-1/2 mr-4 md:mr-8 purple-btn hover:scale-105'>Contact</button>
          <div className='flex px-2 py-2 bg-gray-900 rounded-full md:px-4 md:py-3'>
            <Link to='https://github.com/nathankim137311'>
              <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
            </Link>
            <Link to='https://www.linkedin.com/in/nathan-kim-826a25230/'>
              <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
            </Link>
            <Link to='https://twitter.com/underdawg347'>
              <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
            </Link>
          </div>
        </div>
      </div>
      <img className='absolute w-12 h-auto -translate-x-1/2 md:w-16 bottom-10 left-1/2' src={arrowDown} alt="Animated down arrow" />
      <NavBar />
    </div>
  )
}
