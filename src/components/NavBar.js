import React, { useState } from 'react';
import { MenuIcon, XIcon, } from '@heroicons/react/outline';
import { EmojiHappyIcon, DocumentTextIcon, CollectionIcon, PhoneIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  }

  return (
    <>
      <header className='fixed top-0 w-full px-6 py-4 text-slate-500 bg-[#030406] sm:px-10 sm:py-6 z-10'>
          <div className='flex items-center justify-between lg:max-w-6xl lg:mx-auto font-archivo'>
            <h1 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#A400FF] to-[#ED018C] font-light text-white md:text-base hover:cursor-pointer'>nathankim.dev</h1>
            <button onClick={toggleMenu}>
                <MenuIcon className='w-6 h-6 md:hidden'/>
            </button>
            <nav className='hidden w-1/2 md:block'>
                <ul className='flex'>
                    <li className='hover:text-[#15ebd9] transition-all ease-linear duration-200 w-1/2'>
                      <Link
                      className='block w-full text-right hover:cursor-pointer' to='skills' spy={true} smooth={true}>Skills</Link>
                    </li>
                    <li className='hover:text-[#15ebd9] transition-all ease-linear duration-200 w-1/2'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='about' spy={true} smooth={true}>About</Link>
                    </li>
                    <li className='hover:text-[#15ebd9] transition-all ease-linear duration-200 w-1/2'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='projects' spy={true} smooth={true} >Projects</Link>
                    </li>
                    <li className='hover:text-[#15ebd9] transition-all ease-linear duration-200 w-1/2'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='contact' spy={true} smooth={true}>Contact</Link>
                    </li>
                </ul>
            </nav>
          </div>
      </header>
      <Menu className='md:hidden' active={active} setActive={setActive} />
    </>
  )
}

const Menu = ({ active, setActive}) => {
  return (
    <div className={active ? 'side-bar top-0 transition-all ease-in-out duration-500' : 'side-bar -top-1/2'}>
      <div className='flex items-center justify-between py-4'>
        <h1 className='text-sm font-bold' >nathankim</h1>
        <button onClick={() => setActive(!active)}>
          <XIcon className='w-6 h-6'/>
        </button>
      </div>
      <nav>
        <ul className='text-white text-md'>
          <li className='flex items-center justify-start h-10 px-2 border-gray-700 border-y-2'>
            <EmojiHappyIcon className='w-6 h-6 mr-4 text-[#15ebd9]'/>
            <h3>About</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700'>
            <DocumentTextIcon className='w-6 h-6 mr-4 text-[#15ebd9]'/>
            <h3>Skills</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700'>
            <CollectionIcon className='w-6 h-6 mr-4 text-[#15ebd9]'/>
            <h3>Projects</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700'>
            <PhoneIcon className='w-6 h-6 mr-4 text-[#15ebd9]'/>
            <h3>Contact</h3>
          </li>
        </ul>
      </nav>
    </div>
  )
}
