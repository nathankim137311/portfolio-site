import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti'

export default function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-navy font-archivo'>
        <AiOutlineCheckCircle className='h-auto text-green-400 w-14 xs:w-20 md:w-28'/>
        <h1 className='py-4 text-3xl sm:text-4xl md:text-5xl text-slate-200'>Thank You!</h1>
        <span className='text-base xs:text-xl text-slate-400'>I'll reach out to you shortly.</span>
        <div className='flex flex-row items-center mt-6'>
          <span className='mr-4'>
            <Link className='text-hotpink-200' to='/'>Back to portfolio</Link>
          </span>
          <Link to='/' className='text-slate-200'>
            <TiArrowBack className='w-8 h-auto' />
          </Link>
        </div>
        <NavBar />
        <Footer />
    </div>
  )
}
