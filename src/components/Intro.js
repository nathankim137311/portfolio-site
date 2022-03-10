import React from 'react';
import { Link } from 'react-scroll';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import arrowDown from '../assets/gif/arrow-down.gif';
import { motion } from 'framer-motion';

export default function Intro() {

  return (
    <div className='relative flex flex-col justify-center h-screen'>
      <div className='flex flex-col items-start px-6 text-white xs:items-center xs:max-w-2xl sm:mx-auto z-[1]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <h1 className='text-6xl text-transparent font-archivo xs:text-center bg-clip-text bg-gradient-to-r from-[#A400FF] to-[#ED018C]'>Nathan Kim.</h1>
          <p className='mt-4 mb-8 text-lg text-slate-300 xs:text-xl xs:text-center'>I am a <strong className='font-normal underline decoration-dotted underline-offset-[6px] decoration-[#ED018C] decoration-[3px]'>software developer</strong> that builds and designs responsive web applications.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1, delay: .35 }}
          className='flex items-center w-full sm:w-1/2 drop-shadow-lg xs:justify-center'
        >
          <Link className='w-1/2 mr-4 text-center md:mr-8 purple-btn hover:scale-105 hover:cursor-pointer' to='contact' spy={true} smooth={true}>Contact</Link>
          <div className='flex px-2 py-2 bg-gray-900 rounded-full md:px-4 md:py-3 text-slate-400'>
            <a href='https://github.com/nathankim137311'>
              <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
            </a>
            <a href='https://www.linkedin.com/in/nathan-kim-826a25230/'>
              <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
            </a>
            <a href='https://twitter.com/underdawg347'>
              <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
            </a>
          </div>
        </motion.div>
      </div>
      <img className='absolute w-12 h-auto -translate-x-1/2 md:w-16 bottom-10 left-1/2' src={arrowDown} alt="Animated down arrow" />
    </div>
  )
}
