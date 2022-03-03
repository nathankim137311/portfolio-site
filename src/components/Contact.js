import React from 'react';
import { MdEmail } from 'react-icons/md';

const endpoint = 'https://public.herotofu.com/v1/3e818700-9b39-11ec-bdf8-dd9c99f898ec'; 

export default function Contact() {    
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='px-6'>
            <div className='flex justify-center w-full'>
                <MdEmail className='w-auto h-20 mb-8 text-white shadow-md' />
            </div>
            <form 
                action={endpoint}
                method='POST'
                target='_blank' // routes to default thank you page
            >
                <div className='pt-0 mb-6'>
                    <input 
                        type="text" 
                        placeholder='Your name'
                        name='name'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='pt-0 mb-6'>
                    <input 
                        type="email" 
                        placeholder='Your email'
                        name='email'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='pt-0 mb-8'>
                    <textarea
                        placeholder='Your message'
                        name='message'
                        className='contact-input'
                        required
                    />
                </div>
                <div className="flex justify-center pt-0">
                    <button
                        className="purple-btn"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
