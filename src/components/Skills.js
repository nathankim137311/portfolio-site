import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../config/skillsArr';

export default function Skills() {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    const skillsArr = skills; 

    useEffect(() => {
        if(inView) {
            animation.start({
                opacity: 1,
                x: '0',
                transition: {
                    type: 'spring',
                    ease: 'linear',
                    duration: .5,
                    delay: .35
                }
            })
        }
        if(!inView) {
            animation.start({ opacity: 0, x: '-50vw'});
        }
    }, [inView])

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        transition: {
            type: 'spring',
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 2
        }
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
                    {skillsArr.map((skill, index) => {
                        return (
                            <li key={index} className='flex flex-col items-center'>
                                <SkillBadge skill={skill} />
                            </li>
                        )
                    })}
                </motion.ul>
            </motion.div>
        </div>
    </div>
  )
}

const SkillBadge = ({ skill }) => {
    return (
        <>
            <div className={`skill-badge ${skill.background} ${skill.text}`}>
                {skill.icon}
            </div>
            <span>{skill.title}</span>
        </>
    )
}