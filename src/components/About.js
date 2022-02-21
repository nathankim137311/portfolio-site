import React from 'react';
import avatar from '../assets/png/avatar.png';
import pointDown from '../assets/gif/point-down.gif';

export default function About() {
  return (
    <div className='relative h-screen bg-[#222431] text-white px-6 flex flex-col justify-start items-center bg-glamorous'>
      <h2 className='mt-12 text-3xl text-center font-reggae'>ABOUT</h2>
      <img className='w-1/2 h-auto my-10 text-white rounded-full' src={avatar} alt="" />
      <p className='text-lg text-start'>Hello world! (not overused at all) I am a front end developer based in Washington state. From painting on canvas to typing lines of code on an IDE. I combine <strong className='text-green-500'> creativity and logic</strong> to building front end web applications.
      </p>
      <div>
        <p className='pl-2 my-6 italic border-l-4 border-green-500 text-md text-slate-400'>I wish I could buy me a spaceship and fly past the sky</p>
      </div>
      <p className='text-lg text-start xs:hidden'>
        I am looking to join a <strong className='text-green-500'>progressive</strong> tech company where my skills can be fully harnessed. 
      </p>
      <img className='absolute bottom-0 w-24 h-auto' src={pointDown} alt="" />
    </div>
  )
}
