import React, { useState } from 'react';
import { MenuIcon, XIcon, } from '@heroicons/react/outline';
import { EmojiHappyIcon, DocumentTextIcon, CollectionIcon, PhoneIcon } from '@heroicons/react/solid';

export default function NavBar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  }

  return (
    <>
      <header className='fixed top-0 flex items-center justify-between w-full px-6 py-4 text-white bg-transparent'>
          <h1 className='text-sm font-bold'>nathankim</h1>
          <button onClick={toggleMenu}>
              <MenuIcon className='w-6 h-6'/>
          </button>
          <nav className='xs:hidden'>
              <ul className='flex'>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
      <Menu active={active} setActive={setActive} />
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
        <ul className='text-md'>
          <li className='flex items-center justify-start h-10 px-2 border-gray-700 border-y-2 text-slate-200'>
            <EmojiHappyIcon className='w-6 h-6 mr-4'/>
            <h3>About</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700 text-slate-200'>
            <DocumentTextIcon className='w-6 h-6 mr-4'/>
            <h3>Skills</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700 text-slate-200'>
            <CollectionIcon className='w-6 h-6 mr-4'/>
            <h3>Projects</h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-2 border-gray-700 text-slate-200'>
            <PhoneIcon className='w-6 h-6 mr-4'/>
            <h3>Contact</h3>
          </li>
        </ul>
      </nav>
    </div>
  )
}
