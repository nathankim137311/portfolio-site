import React from 'react'

export default function Heading({ section, heading }) {
  return (
    <div>
        <h2 className='w-full mb-4 text-base font-normal text-left underline text-slate-500 font-archivo underline-offset-8 decoration-2'>{ section }</h2>
        <span className='text-xl font-bold sm:text-2xl text-slate-100'>{ heading }</span>
    </div>
  )
}
