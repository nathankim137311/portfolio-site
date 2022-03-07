import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { 
    SiJavascript, 
    SiSass, 
    SiMongodb, 
    SiReact, 
    SiExpress, 
    SiTailwindcss 
} from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { IoLogoNodejs } from 'react-icons/io'

export default function Skills() {
  return (
    <>
        <div className='flex flex-col items-center my-20'>
            <h2 className='mb-20 text-3xl font-extrabold text-center text-white underline underline-offset-8'>Skills</h2>
            <div className='w-full px-6 xs:px-12 sm:px-16 py-12 bg-[#0E131F] flex flex-row justify-center'>
                <ul className='grid w-full max-w-4xl grid-cols-2 text-sm text-white gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-12'>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#E44D26]'>
                            <AiFillHtml5 className='w-10 h-10'/>
                        </div>
                        <span>HTML</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#264DE4]'>
                            <DiCss3 className='w-10 h-10'/>
                        </div>
                        <span>CSS</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#e8cd00]'>
                            <DiJavascript1 className='w-10 h-10'/>
                        </div>
                        <span>JavaScript</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-black  text-[#15ebd9]'>
                            <SiReact className='w-10 h-10'/>
                        </div>
                        <span>React</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#00AF6F]'>
                            <SiExpress className='w-10 h-10'/>
                        </div>
                        <span>Express</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#52A74B]'>
                            <SiMongodb className='w-10 h-10'/>
                        </div>
                        <span>MongoDB</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='bg-black skill-badge text-[#91F086]'>
                            <IoLogoNodejs className='w-10 h-10'/>
                        </div>
                        <span>NodeJS</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#E44D26]'>
                            <ImGit className='w-10 h-10'/>
                        </div>
                        <span>Git</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#CF649A]'>
                            <SiSass className='w-10 h-10'/>
                        </div>
                        <span>SASS</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#151C2B] text-[#15B4C1]'>
                            <SiTailwindcss className='w-10 h-10'/>
                        </div>
                        <span>TailwindCSS</span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
