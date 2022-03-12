import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../config/skillsArr';
import Heading from './Heading';

export default function Skills() {
    const {ref, inView} = useInView();

    const headingControls = useAnimation();
    const containerControls = useAnimation();

    const skillsArr = skills; 

    useEffect(() => {
        const sequence = async () => {
            await headingControls.start(heading.show);
            return await containerControls.start(container.show);
        }

        if(inView) {
            sequence();
        }
        
    }, [inView])

    const heading = {
        hidden: {
            opacity: 0,
            y: -50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: .75,
                type: 'spring'
            }
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                duration: .75,
                ease: 'linear',
            }
        }
    }

    const list = {
        hidden: { 
            opacity: 0, 
            x: -100,
            transition: {
                when: "afterChildren",
            },
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .35,
                ease: 'linear',
                type: 'spring',
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: index =>  ({
            opacity: 1,
            transition: {
                delay: index * 0.5,
                duration: 1,
                type: 'spring'
            },
        }),
    }

  return (
    <div id='skills' className='relative h-screen bg-architect'>
        <div ref={ref} className='absolute flex flex-col items-center w-full max-w-5xl px-6 py-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 sm:px-10'>
            <motion.div 
                initial='hidden'
                animate={headingControls}
                variants={heading}
                className='w-full mb-4'
            >
                <Heading section='Skills' heading='Technologies and languages' />
            </motion.div>
            <motion.div 
                initial='hidden'
                animate={containerControls}
                variants={container}
                className='flex flex-row justify-center w-full px-6 py-12 shadow-lg xs:px-12 sm:px-16 bg-space rounded-xl'
            >
                <motion.ul 
                    initial='hidden'
                    animate='show'
                    variants={list}
                    className='grid w-full max-w-4xl grid-cols-2 text-sm text-slate-200 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-12'
                >
                    {skillsArr.map((skill, index) => {
                        return (
                            <motion.li
                                initial='hidden'
                                animate='show'
                                variants={item}
                                custom={index}
                                key={index} 
                                className='flex flex-col items-center'
                            >
                                <SkillBadge skill={skill} />
                            </motion.li>
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