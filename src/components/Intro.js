import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import arrowDown from '../assets/gif/arrow-down.gif';

export default function Intro() {
  return (
    <div className='flex flex-col justify-center bg-[#1A1A1A] bg-clouds-pattern h-screen'>
      <div className='flex flex-col items-start py-2 text-white'>
        <div className='px-6'>
          <h1 className='text-5xl font-monoton'>Nathan Kim.</h1>
          <p className='mt-4 mb-8 text-lg text-gray-300'>I am a <strong className='text-[#A400FF]'>software developer</strong> that builds and designs responsive web applications.</p>
        </div>
        <div className='flex items-center justify-between w-full px-6 drop-shadow-lg'>
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
      <img className='absolute w-12 h-auto -translate-x-1/2 bottom-10 left-1/2' src={arrowDown} alt="Animated down arrow" />
      <NavBar />
    </div>
  )
}
