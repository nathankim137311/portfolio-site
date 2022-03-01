import React from 'react';

export default function Contact() {
  return (
    <div className='flex flex-col justify-center h-screen'>
        <div className='px-6'>
            <h2 className='mb-8 text-3xl font-bold text-center text-white'>Contact</h2>
            <form action="">
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
                <div className='pt-0 mb-6'>
                    <textarea
                        placeholder='Your message'
                        name='message'
                        className='contact-input'
                        required
                    />
                </div>
                <div className="flex justify-center pt-0">
                    <button
                        className="px-6 py-3 mb-1 mr-1 text-md font-bold text-slate-200 transition-all duration-150 ease-linear bg-[#A400FF] rounded-md shadow outline-none active:bg-[#be44ff] hover:shadow-lg focus:outline-none"
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
