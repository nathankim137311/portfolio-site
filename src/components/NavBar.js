import React, { useState } from 'react';
import { MenuIcon, XIcon, } from '@heroicons/react/outline';
import { EmojiHappyIcon, DocumentTextIcon, CollectionIcon, PhoneIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  }

  return (
    <>
      <header className='absolute top-0 w-full px-6 py-4 text-white bg-transparent sm:px-10 sm:py-6'>
          <div className='flex items-center justify-between lg:max-w-6xl lg:mx-auto'>
            <h1 className='text-sm font-bold text-white md:text-base'>nathankim</h1>
            <button onClick={toggleMenu}>
                <MenuIcon className='w-6 h-6 md:hidden'/>
            </button>
            <nav className='hidden w-1/2 md:block'>
                <ul className='flex justify-between'>
                    <li className=''>
                      <Link to=''>About</Link>
                    </li>
                    <li className=''>
                      <Link to=''>Skills</Link>
                    </li>
                    <li className=''>
                      <Link to=''>Projects</Link>
                    </li>
                    <li>
                      <Link to=''>Contact</Link>
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
