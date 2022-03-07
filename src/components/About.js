import React from 'react';
import Avatar from '../assets/png/myAvatar.png';

export default function About() {
  return (
    <div className='text-white'>
        <div className='px-6 max-w-[578px] xs:mx-auto py-20'>
            <h2 className='mb-20 font-serif text-3xl font-extrabold text-center text-white underline underline-offset-8'>About</h2>
            <div className='bg-[#151c29] rounded-xl px-4 py-10 xs:py-14 xs:px-8'>
                <div className='flex flex-row justify-center mb-10'>
                    <img className='w-40 h-40 border-2 border-white rounded-md shadow-md xs:w-48 xs:h-48' src={Avatar} alt="" />
                </div>
                <span className='block w-full mb-4 text-sm font-bold text-center xs:text-base'>Based in Bothell, WA</span>
                <div className='xxs:text-base xs:text-lg text-slate-300 '>
                    <p className='mb-4 text-left xs:mb-6'>Nathan Kim is a who has a thirst for all things programming. He has went from not having written a single line of code to creating his own full stack project in five months. He is a <strong className='text-[#15ebd9]'>creative and logical person</strong>, who has an eye for design.</p>
                    <p className='mb-4 text-left xs:mb-6'>When he is not coding, he spends his free time hanging out with friends on Discord, working out and watching football.</p>
                    <p className='border-l-4 border-[#15ebd9] px-3 py-2 bg-gray-900 text-gray-400'>I wish I could by me a spaceship and fly past the sky - Kanye West</p>
                </div>
            </div>
        </div>
    </div>
  )
}
