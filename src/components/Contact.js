import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'; 
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const endpoint = 'https://public.herotofu.com/v1/3e818700-9b39-11ec-bdf8-dd9c99f898ec'; 

export default function Contact() {    
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='w-full px-6 xs:mx-auto xs:max-w-md'>
            <div className='flex justify-center w-auto'>
                <MdEmail className='w-auto h-20 mb-8 text-white shadow-md' />
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
                        placeholder='Your name'
                        name='name'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-6 xs:mb-8'>
                    <input 
                        type="email" 
                        placeholder='Your email'
                        name='email'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-8 xs:h-20 xs:mb-10'>
                    <textarea
                        placeholder='Your message'
                        name='message'
                        className='h-full contact-input' 
                        required
                    />
                </div>
                <div className="flex flex-col items-center w-full">
                    <button
                        className="mb-8 xxs:w-full purple-btn"
                        type="submit"
                    >
                        Send a message
                    </button>
                    <div className='flex items-center justify-between px-4 py-2 text-white bg-gray-900 rounded-full w-fit'>
                        <Link to='https://github.com/nathankim137311'>
                            <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/nathan-kim-826a25230/'>
                            <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
                        </Link>
                        <Link to='https://twitter.com/underdawg347'>
                            <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-[#15ebd9]'/>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
