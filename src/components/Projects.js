import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { projects } from '../config/projectsArr';

export default function Projects() {
    const projectsArr = projects; 

    return (
        <div id='projects' className='flex flex-row justify-center'>
            <div className='w-full max-w-5xl px-6 py-20 text-white xs:px-10'>
                <div className='mb-4'>
                    <h2 className='w-full mb-4 text-base font-normal text-left underline font-archivo underline-offset-8 decoration-2 text-slate-500'>Projects</h2>
                    <span className='text-xl font-bold text-slate-100 sm:text-2xl'>Check out what I've built!</span>
                </div>
                <ul className='bg-transparent'>
                    {projectsArr.map(project => {
                        return (
                            <li key={project.id}>
                                <ProjectCard project={project} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className='px-4 py-8 text-slate-300 md:flex md:flex-row md:items-center md:px-6 bg-[#0E131F] mb-16 rounded-xl'>
                <div className='md:w-1/2'>
                    <div>
                        <span className='text-[.85rem] text-[#ED018C]'>{project.type}</span>
                        <a href={project.live_url}>
                            <h2 className='mb-2 text-base font-bold text-white md:text-2xl'>{project.title}</h2>
                        </a>
                    </div>
                    <div className='h-32 my-4 sm:h-40 md:h-56 opacity-80'>
                        <a href={project.live_url}>
                            <img className='object-cover object-top w-full h-full rounded-md shadow-lg' src={project.img_url} alt="" />
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 md:pl-6'>
                    <div className='mb-2'>
                        <a href={project.live_url}>
                            <h2 className='mb-2 text-base font-bold text-white md:text-xl md:hidden'>{project.title}</h2>
                        </a>
                        <p className='h-20 overflow-hidden md:h-16 md:text-lg md:text-justify'>{project.description}</p>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <a className='transition-all duration-200 ease-linear text-slate-400 hover:text-[#15ebd9] hover:scale-110' href={project.github_url}>
                            <BsGithub className='w-6 h-6 mr-6 md:w-7 md:h-7' />
                        </a>
                        <a className='bg-[#ED018C] hover:scale-105 text-white px-3 py-1 rounded-md shadow outline-none active:bg-[#be44ff] hover:shadow-lg focus:outline-none font-bold text-base md:px-5 md:py-2' href={project.live_url}>
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