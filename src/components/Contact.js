import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'; 
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const endpoint = 'https://public.herotofu.com/v1/3e818700-9b39-11ec-bdf8-dd9c99f898ec'; 

export default function Contact() {    
  return (
    <div id='contact' className='flex flex-col items-center justify-center h-screen'>
        <div className='w-full max-w-5xl'>
            <div className='w-full px-6 mb-4 xs:px-10'>
                <h2 className='w-full mb-4 text-base font-normal text-left underline text-slate-500 font-archivo underline-offset-8 decoration-2'>Contact</h2>
                <span className='text-xl font-bold text-slate-100 sm:text-2xl'>Let's chat!</span>
            </div>
        </div>
        <div className='w-full px-6 xs:mx-auto xs:max-w-md'>
            <div className='flex justify-center w-auto'>
                <MdEmail className='w-auto h-20 mb-8 shadow-md text-slate-100' />
            </div>
            <form
                className='w-auto' 
                action={endpoint}
                method='POST'
                target='_blank' // routes to default thank you page
            >
                <div className='mb-6 xs:mb-8'>
                    <input 
                        type="text" 
                        placeholder='Your name *'
                        name='name'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-6 xs:mb-8'>
                    <input 
                        type="email" 
                        placeholder='Your email *'
                        name='email'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-8 xs:h-20'>
                    <textarea
                        placeholder='Your message *'
                        name='message'
                        className='h-full contact-input' 
                        required
                    />
                </div>
                <div className="flex flex-col items-center w-full">
                    <button
                        className="mb-8 px-6 py-2 xxs:w-full text-base font-bold md:text-lg text-slate-300 transition-all duration-150 ease-linear rounded-lg shadow outline-none active:bg-[#be44ff] hover:shadow-lg focus:outline-none border-2 border-[#A400FF]"
                        type="submit"
                    >
                        Send a message
                    </button>
                    <div className='flex items-center justify-between px-4 py-3 bg-gray-900 rounded-full text-slate-400 w-fit'>
                        <Link to='https://github.com/nathankim137311'>
                            <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/nathan-kim-826a25230/'>
                            <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
                        </Link>
                        <Link to='https://twitter.com/underdawg347'>
                            <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9] hover:scale-110'/>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
