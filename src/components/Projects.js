import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const legoClone = {
        id: 1,
        title: 'Lego Clone',
        query: 'lego-clone'
    }

    const starWarsApi = {
        id: 2,
        title: 'Lego Star Wars API',
        query: 'lego-star-wars-api'
    }

    const weatherApp = {
        id: 3,
        title: 'Weather App',
        query: 'weather-app'
    }

    const restaurantSite = {
        id: 4, 
        title: 'Restaurant Site',
        query: 'restaurant-site'
    }

    const projects = [legoClone, starWarsApi, weatherApp, restaurantSite]; 

    return (
        <div className='text-white'>
            <h2 className='text-3xl font-bold text-center text-white'>Projects</h2>
            <div className='grid items-center justify-center grid-cols-1 gap-12 px-6 pt-8 grid-row-4'>
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
            <Link to={ `/projects/${project.query}` }>
                <div className='h-64 w-auto bg-[#1A1A1A] rounded-xl shadow-lg border-2 flex justify-center items-center'>
                    { project.title }
                </div>
            </Link>
        </>
    )
}
