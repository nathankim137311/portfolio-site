import React from 'react';
import Avatar from '../assets/png/myAvatar.png';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-6 text-white'>
        <h2 className='text-3xl font-bold text-center text-white'>About</h2>
        <div className='my-10'>
            <img className='w-40 h-40 rounded-full' src={Avatar} alt="" />
        </div>
            <span className='mb-4'>Based in Bothell, WA</span>
        <div className=''>
            <p className='mb-4 text-left'>Nathan Kim is a who has a thirst for all things programming. He has went from not having written a single line of code to creating his own full stack project in five months. He is a <strong className='text-[#15ebd9]'>creative and logical person</strong>, who has an eye for design.</p>
            <p className='mb-4 text-left'>When he is not coding, he spends his free time hanging out with friends on Discord, working out and watching Football.</p>
            <p className='border-l-4 border-[#15ebd9] px-3 py-2 bg-[#1A1A1A] text-gray-400'>I wish I could by me a spaceship and fly past the sky - Kanye West</p>
        </div>

    </div>
  )
}
