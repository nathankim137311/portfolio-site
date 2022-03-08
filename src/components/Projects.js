import React from 'react';
import legoCloneHome from '../assets/png/lego-clone-home.png';
import starWarsApiImg from '../assets/png/lego-star-wars-api.png';
import weatherAppImg from '../assets/png/weather-app.png';
import restaurantSiteImg from '../assets/png/korean-street.png';
import { BsGithub } from 'react-icons/bs';

export default function Projects() {
    const legoClone = {
        id: 1,
        title: 'Lego Clone',
        query: 'lego-clone',
        img_url: legoCloneHome,
        tech: 'MongoDB | Express | React | Node | Git | TailwindCSS',
        live_url: 'https://lego-clone.herokuapp.com/',
        github_url: 'https://github.com/nathankim137311/lego-store',
        type: 'E-COMMERCE',
        description: 'An e-commerce application that has all the features you would want!'
    }

    const starWarsApi = {
        id: 2,
        title: 'Lego Star Wars API',
        query: 'lego-star-wars-api',
        img_url: starWarsApiImg,
        tech: 'MongoDB | Express | Node | Git | Postman',
        live_url: 'https://rapidapi.com/nathankim137311/api/lego-star-wars-sets/',
        github_url: 'https://github.com/nathankim137311/lego-starwars-api',
        type: 'REST API',
        description: 'A RESTful API that serves product data from Lego.com.'
    }

    const weatherApp = {
        id: 3,
        title: 'Weather App',
        query: 'weather-app',
        img_url: weatherAppImg,
        tech: 'HTML | SCSS | JavaScript | Git | Postman',
        live_url: 'https://nathankim137311.github.io/weather-app/',
        github_url: 'https://github.com/nathankim137311/weather-app',
        type: 'SPA',
        description: 'A simple weather app that fetches current weather forecast based on city.'
    }

    const restaurantSite = {
        id: 4, 
        title: 'Restaurant Site',
        query: 'restaurant-site',
        img_url: restaurantSiteImg,
        tech: 'HTML | SCSS | JavaScript | Git | Webpack',
        live_url: 'https://nathankim137311.github.io/restaurant-page/',
        github_url: 'https://github.com/nathankim137311/restaurant-page',
        type: 'MPA',
        description: 'A custom-designed restaurant site that utilizes Google Maps API.'
    }

    const projects = [legoClone, starWarsApi, weatherApp, restaurantSite]; 

    return (
        <div className='flex flex-row justify-center'>
            <div className='w-full max-w-5xl px-6 py-20 text-white xs:px-10'>
                <div className='mb-4'>
                    <h2 className='w-full mb-4 font-serif text-base font-extrabold text-left text-white underline underline-offset-8 decoration-2'>Projects</h2>
                    <span className='text-xl text-[#15ebd9] sm:text-2xl'>Check out what I've built!</span>
                </div>
                <ul className='bg-transparent'>
                    {projects.map(project => {
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
            <div className='px-4 py-8 border-2 border-slate-800 text-slate-300 md:flex md:flex-row md:items-center md:px-6 bg-[#0E131F] mb-16 rounded-xl'>
                <div className='md:w-1/2'>
                    <div>
                        <span className='text-[.85rem] text-[#15ebd9]'>{project.type}</span>
                        <h2 className='mb-2 text-base font-bold text-white md:text-2xl'>{project.title}</h2>
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
                        <a className='transition-all duration-200 ease-linear text-white hover:text-[#ED018C] hover:scale-110' href={project.github_url}>
                            <BsGithub className='w-6 h-6 mr-6 md:w-7 md:h-7' />
                        </a>
                        <a className='bg-[#A400FF] hover:scale-105 text-white px-3 py-1 rounded-md shadow outline-none active:bg-[#be44ff] hover:shadow-lg focus:outline-none font-bold text-base md:px-5 md:py-2' href={project.live_url}>
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