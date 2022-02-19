import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'

export default function NavBar() {
  return (
    <header className='fixed top-0 flex items-center justify-between w-full px-6 py-4 text-white bg-transparent'>
        <h1 className='text-sm font-bold'>nathankim</h1>
        <button>
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
  )
}

const SideNav = () => {
  return (
    <nav>
      <ul className=''>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
