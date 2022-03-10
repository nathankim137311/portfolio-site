import React from 'react';

export default function About() {
  return (
    <div id='about' className='text-white'>
        <div className='max-w-5xl px-6 py-20 shadow-lg xs:px-10 xs:mx-auto'>
                <div className='mb-4'>
                    <h2 className='w-full mb-4 text-base font-normal text-left underline text-slate-500 underline-offset-8 decoration-2 font-archivo'>About</h2>
                    <span className='text-xl text-[#DF00FE] font-bold sm:text-2xl'>Background info</span>
                </div>
            <div className='bg-[#0E131F] rounded-xl px-4 py-10 xs:py-14 xs:px-8'>
                <div className='text-base xs:text-lg text-slate-300 md:text-xl'>
                    <p className='mb-4 text-left xs:mb-6'>I am a software developer that has a background in digital art. I combine my skills as an artist and my passion for technology to make my ideas come to life. <strong className='font-bold text-[#ED018C]'>I am a creator</strong>, I always have been. From playing with legos, painting on canvas, or typing lines of code on an IDE, I love creating and that is my passion.</p>
                    <p className='mb-4 text-left xs:mb-6'>
                    Programming allows me to build for the future, and that makes me super excited. I want to be working with cutting-edge technology and building tools that will solve future problems. The most fufilling thing about programming is manifesting your vision and your ideas. Software gives value to people. That's why I am passionate about programming. 
                    </p>
                    <p className='mb-4 text-left xs:mb-6'>When I am not coding, I like to hang out with friends on Discord, go to the gym, and create art.</p>
                    <p className='border-l-8 border-[#ED018C] px-3 py-2 bg-[#000A21] text-gray-400 xs:py-4 xs:px-6'>I wish I could by me a spaceship and fly past the sky - Kanye West</p>
                </div>
            </div>
        </div>
    </div>
  )
}
