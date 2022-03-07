import React from 'react';
import Avatar from '../assets/png/myAvatar.png';

export default function About() {
  return (
    <div className='h-screen text-white'>
        <div className='px-6 max-w-[768px] md:mx-auto my-20'>
            <h2 className='text-3xl font-extrabold text-center text-white underline underline-offset-8'>About</h2>
            <div className='bg-[#151c29] rounded-xl px-4 py-10'>
                <div className='flex flex-row justify-center my-10 sm:my-14 lg:my-20'>
                    <img className='w-40 h-40 border-2 border-white rounded-full sm:w-44 sm:h-44 lg:w-52 lg:h-52' src={Avatar} alt="" />
                </div>
                <span className='block w-full mb-4 font-bold text-center'>Based in Bothell, WA</span>
                <div className='xxs:text-base xs:text-lg'>
                    <p className='mb-4 text-left'>Nathan Kim is a who has a thirst for all things programming. He has went from not having written a single line of code to creating his own full stack project in five months. He is a <strong className='text-[#15ebd9]'>creative and logical person</strong>, who has an eye for design.</p>
                    <p className='mb-4 text-left'>When he is not coding, he spends his free time hanging out with friends on Discord, working out and watching football.</p>
                    <p className='border-l-4 border-[#15ebd9] px-3 py-2 bg-[#030406] text-gray-300'>I wish I could by me a spaceship and fly past the sky - Kanye West</p>
                </div>
            </div>
        </div>
    </div>
  )
}
