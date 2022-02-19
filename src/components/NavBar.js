import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'

export default function NavBar() {
  return (
    <header className='fixed top-0 flex items-center justify-between w-full px-4 py-2 text-white bg-transparent'>
        <h1 className='text-lg'>Nathan Kim</h1>
        <button>
            <MenuIcon className='w-8 h-8'/>
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
  )
}
