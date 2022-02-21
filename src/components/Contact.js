import React from 'react';
import { Link } from 'react-router-dom';
import chilling from '../assets/png/chilling.png';
import cherry from '../assets/jpg/cherry.jpg';

export default function Contact() {
  return (
    <div className='relative bg-[#F58B57] px-6 h-screen'>
        <h2 className='py-4 text-4xl font-bold text-center'>Contact</h2>
        <div className='text-2xl font-bold'>
            <span className=''>FRONT END DEV MIK NAHTAN</span>
            <ul className='ml-6'>
                <li>FRONT END DEV {'<br/>'} NATHAN KIM</li>
                <li>FRONT END DEV {'<br/>'} NATHAN KIM</li>
            </ul>
            <div className='relative'>
                <span className=''>FRONT END DEV</span>
                <span className='absolute bottom-0'>NATHAN KIM</span>
            </div>
        </div>
        <div className='flex justify-between leading-4'>
            <ul>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
            </ul>
            <ul className='mr-4'>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
                <li>HIRE ME</li>
            </ul>
        </div>
        <div className='ml-8'>
            <h3>SOCIAL LINKS</h3>
            <ul>
                <li>
                    <Link to=''>Linkedin</Link>
                    <Link to=''>Github</Link>
                    <Link to=''>Twitter</Link>
                </li>
                <li>
                    <Link to=''>Github</Link>
                </li>
                <li>
                    <Link to=''>Twitter</Link>
                </li>
                <li>
                    <Link to=''>Github</Link>
                </li>
                <li>
                    <Link to=''>Github</Link>
                </li>
                <li>
                    <Link to=''>Github</Link>
                </li>
            </ul>
        </div>
        <div className='absolute w-1/2 left-5 top-1/3'>
            <img src={chilling} alt="Chilling" />
            <span>Screen Shot 2022-02-19 at 5.18.49 AM</span>
        </div>
        <div className='flex font-bold leading-3'>
            <ul>
                <li>WHICH / ONE</li>
                <li>WHICH / ONE</li>
                <li>WHICH / ONE</li>
                <li>WHICH / ONE</li>
            </ul>
            <ul>
                <li>WHICH / ONE</li>
                <li>WHICH / DOG</li>
                <li>WHICH / DOG</li>
                <li>WHICH / ONE</li>
                <li>WHICH / ONE</li>
                <li>WHICH / ONE</li>
            </ul>
        </div>
        <div className='absolute top-2/4 right-6'>
            <img className='h-auto w-36' src={cherry} alt="" />
        </div>
    </div>
  )
}
