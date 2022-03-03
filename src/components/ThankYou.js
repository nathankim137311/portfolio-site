import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import NavBar from './NavBar';
import Footer from './Footer';

export default function ThankYou() {
  return (
    <div className='h-screen bg-[#1A1A1A] text-white bg-clouds-pattern flex flex-col justify-center items-center'>
        <AiOutlineCheckCircle className='w-12 h-12 text-green-400'/>
        <h1 className='py-4 text-3xl'>Thank You!</h1>
        <span>I'll reach out to you shortly.</span>
        <NavBar />
        <Footer />
    </div>
  )
}
