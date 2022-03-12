import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import NavBar from './NavBar';
import Footer from './Footer';

export default function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-navy font-archivo'>
        <AiOutlineCheckCircle className='h-auto text-green-400 w-14 xs:w-20 md:w-28'/>
        <h1 className='py-4 text-3xl sm:text-4xl md:text-5xl text-slate-200'>Thank You!</h1>
        <span className='text-base xs:text-xl text-slate-400'>I'll reach out to you shortly.</span>
        <NavBar />
        <Footer />
    </div>
  )
}
