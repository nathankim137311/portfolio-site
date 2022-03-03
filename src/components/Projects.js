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
        tech: 'MongoDB | Express | React | Node | Git | Tailwind CSS',
        live_url: 'https://lego-clone.herokuapp.com/',
        github_url: 'https://github.com/nathankim137311/lego-store',
        type: 'E-commerce app',
        description: 'A clone of the Lego.com which features: authentication / authorization with JWT, mobile-responsive design, a functional shopping cart, Stripe-Integration and multiple pages of navigation.'
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
        description: 'A simple restaurant site with multiple pages of navigation utilizing Google Maps API.'
    }

    const projects = [legoClone, starWarsApi, weatherApp, restaurantSite]; 

    return (
        <div className='text-white'>
            <h2 className='pt-20 text-3xl font-bold text-center text-white'>Projects</h2>
            <div className='grid items-center justify-center grid-cols-1 gap-12 px-6 pt-20 mx-auto w-fit grid-row-4'>
                {projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center px-4 pt-4 pb-6 text-black bg-white shadow-lg rounded-xl'>
                <div className='w-full py-4 font-medium text-gray-600'>
                    <span className='text-sm'>{project.type}</span>
                </div>
                <div className='w-full h-32'>
                    <a href={project.live_url}>
                        <img className='object-cover object-top w-full h-full rounded shadow-lg' src={ project.img_url } alt="" />
                    </a>
                </div>
                <div className='flex flex-col items-start w-full py-4'>
                    <a className='w-full text-xl font-bold' href={project.live_url} target='_blank' rel='noreferrer'>
                        {project.title}
                    </a>
                </div>
                <div className='h-20 py-2 overflow-hidden leading-6 text-left text-gray-600'>
                    <p>{project.description}</p>
                </div>
                <div className='flex items-center justify-between w-full py-6'>
                    <a href={project.github_url} target='_blank' rel='noreferrer'>
                        <BsGithub className='w-6 h-6 transition-all duration-200 ease-linear hover:text-[#66D3FA]' />
                    </a>
                    <a href={project.live_url} className='bg-[#A400FF] text-white text-sm py-2 rounded-md px-4 hover:bg-transparent hover:text-black border-[#A400FF] border-2 shadow-lg'>
                        Live site
                    </a>
                </div>
                <small className='text-justify text-slate-600'>{project.tech}</small>
            </div>
        </>
    )
}