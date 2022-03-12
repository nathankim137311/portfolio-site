import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

export default function SocialLinks() {
  return (
    <>
        <div className='flex px-2 py-2 bg-gray-900 rounded-full md:px-4 md:py-3 text-slate-400'>
            <a href='https://github.com/nathankim137311'>
              <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-aqua hover:scale-110'/>
            </a>
            <a href='https://www.linkedin.com/in/nathan-kim-826a25230/'>
              <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-aqua hover:scale-110'/>
            </a>
            <a href='https://twitter.com/underdawg347'>
              <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-aqua hover:scale-110'/>
            </a>
        </div>
    </>
  )
}
