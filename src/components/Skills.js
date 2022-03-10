import React, { useEffect } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { 
    SiSass, 
    SiMongodb, 
    SiReact, 
    SiExpress, 
    SiTailwindcss 
} from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { IoLogoNodejs } from 'react-icons/io'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                opacity: 1,
                x: '0',
                transition: {
                    type: 'spring',
                    ease: 'linear',
                    duration: .5,
                    delay: .25
                }
            })
        }
        if(!inView) {
            animation.start({ opacity: 0, x: '-100vw'});
        }
        console.log(inView);
    }, [inView])

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
      
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

  return (
    <div id='skills' className='relative h-screen bg-architect'>
        <div ref={ref} className='absolute flex flex-col items-center w-full max-w-5xl px-6 py-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 sm:px-10'>
            <motion.div 
                animate={animation}
                className='w-full mb-4'
            >
                <h2 className='w-full mb-4 text-base font-normal text-left underline text-slate-500 font-archivo underline-offset-8 decoration-2'>Skills</h2>
                <span className='text-xl font-bold sm:text-2xl text-slate-100'>Technologies and languages</span>
            </motion.div>
            <motion.div 
                animate={animation}
                className='w-full px-6 xs:px-12 sm:px-16 py-12 bg-[#0E131F] flex flex-row justify-center shadow-lg rounded-xl'
            >
                <motion.ul 
                    initial='hidden'
                    animate='visible'
                    variants={list}
                    className='grid w-full max-w-4xl grid-cols-2 text-sm text-slate-200 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-12'
                >
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#E44D26] text-white'>
                            <AiFillHtml5 className='w-10 h-10'/>
                        </div>
                        <span>HTML</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#264DE4] text-white'>
                            <DiCss3 className='w-10 h-10'/>
                        </div>
                        <span>CSS</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#e8cd00] text-white'>
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
                        <div className='skill-badge bg-[#00AF6F] text-white'>
                            <SiExpress className='w-10 h-10'/>
                        </div>
                        <span>Express</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#52A74B] text-white'>
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
                        <div className='skill-badge bg-[#E44D26] text-white'>
                            <ImGit className='w-10 h-10'/>
                        </div>
                        <span>Git</span>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='skill-badge bg-[#CF649A] text-white'>
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
                </motion.ul>
            </motion.div>
        </div>
    </div>
  )
}
