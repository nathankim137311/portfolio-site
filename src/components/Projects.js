import React, { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { projects } from '../config/projectsArr';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heading from './Heading';

export default function Projects() {
    const {ref, inView} = useInView();
    
    const headingControls = useAnimation();
    const listControls = useAnimation();
    const itemControls = useAnimation();

    const projectsArr = projects; 

    useEffect(() => {
        const sequence = async () => {
            await headingControls.start(heading.show);
            await listControls.start(list.show);
            return await itemControls.start(item.show);
        }

        if(inView) {
            sequence();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const list = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: .5,
                type: 'spring',
                delay: 0
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -100  },
        show: index =>  ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * .5,
                type: 'spring'
            },
        }),
    }

    return (
        <div id='projects' className='flex flex-row justify-center'>
            <div ref={ref} className='w-full max-w-5xl px-6 py-20 text-white xs:px-10'>
                <motion.div 
                    initial='hidden'
                    animate={headingControls}
                    variants={heading}
                    className='mb-4'
                >
                    <Heading section='Projects' heading={'Check out what I\'ve built!'} />
                </motion.div>
                <motion.ul 
                    initial='hidden'
                    animate={listControls}
                    variants={list}
                    className='bg-transparent'
                >
                    {projectsArr.map((project, index) => {
                        return (
                            <motion.li
                                custom={index}
                                initial='hidden'
                                animate={itemControls}
                                variants={item}
                                key={project.id}
                            >
                                <ProjectCard project={project} />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </div>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className='px-4 py-8 mb-16 text-slate-300 md:flex md:flex-row md:items-center md:px-6 bg-space rounded-xl'>
                <div className='md:w-1/2'>
                    <div>
                        <span className='text-[.85rem] text-hotpink-200'>{project.type}</span>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            <h2 className='mb-2 text-base font-bold text-white md:text-2xl'>{project.title}</h2>
                        </a>
                    </div>
                    <div className='h-32 my-4 sm:h-40 md:h-56 opacity-80'>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            <img className='object-cover object-top w-full h-full rounded-md shadow-lg' src={project.img_url} alt="" />
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 md:pl-6'>
                    <div className='mb-2'>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            <h2 className='mb-2 text-base font-bold text-white md:text-xl md:hidden'>{project.title}</h2>
                        </a>
                        <p className='h-20 overflow-hidden md:h-16 md:text-lg md:text-justify'>{project.description}</p>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <a className='transition-all duration-200 ease-linear text-slate-400 hover:text-aqua hover:scale-110' href={project.github_url} target='_blank' rel='noreferrer'>
                            <BsGithub className='w-6 h-6 mr-6 md:w-7 md:h-7' />
                        </a>
                        <a className='px-3 py-1 text-base font-bold text-white rounded-md shadow outline-none bg-hotpink-200 hover:scale-105 active:bg-hotpink-100 hover:shadow-lg focus:outline-none md:px-5 md:py-2' href={project.live_url} target='_blank' rel='noreferrer'>
                            Live
                        </a>
                    </div>
                    <div>
                        <span className='text-sm text-slate-500'>{project.tech}</span>
                    </div>
                </div>
            </div>
        </>
    )
}