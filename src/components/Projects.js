import React from 'react';
import projectText from '../assets/gif/project-text.gif';
import ufo from '../assets/gif/ufo.gif';
import rainbowBar from '../assets/png/rainbow_bar.png';
import { Link } from 'react-router-dom';

export default function Projects() {
  
  return (
    <div className='h-screen bg-galaxy bg-repeat bg-96 text-[#f5f5f5] px-6'>
        <div className='flex flex-col items-center py-4'>
            <img src={projectText} alt="Projects animated heading" />
            <img className='w-20 h-auto my-8' src={ufo} alt="" />
            <span className='text-3xl font-bold text-yellow-200 font-caveat'>!!Watch for UFOS!!!</span>
            <small>This page last updated January 1st, 2001</small>
            <img className='w-full my-4' src={rainbowBar} alt="" />
            <div className='bg-[#FF0000]'>
                <h3>Lego Clone</h3>
                <img src="" alt="" />
            </div>
            <span className='text-[#10F0F7] italic text-justify'>
              feedback and comments always appreciated! Send to <Link className='underline' to='nathankim137311@gmail.com'>nathankim137311@gmail.com</Link>
            </span>
            <span className='text-sm text-start'>background graphic Milky Way Galaxy from the 
              <Link className='underline' to='https://en.wikipedia.org/wiki/Hubble_Space_Telescope'> Hubble Telescope</Link></span>
        </div>
    </div>
  )
}
