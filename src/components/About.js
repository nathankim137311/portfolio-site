import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import Heading from './Heading';

export default function About() {
    const {ref, inView} = useInView();
    const headingControls = useAnimation();
    const containerControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await headingControls.start(heading.show);
            return await containerControls.start(container.show); 
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


  return (
    <div id='about' className='relative h-screen text-white'>
        <div ref={ref} className='absolute w-full max-w-5xl px-6 py-20 -translate-x-1/2 -translate-y-1/2 shadow-lg xs:px-10 xs:mx-auto left-1/2 top-1/2'>
            <motion.div 
                initial='hidden'
                animate={headingControls}
                variants={heading}
                className='mb-4'
            >
                <Heading section='About' heading='Get to know me!' />
            </motion.div>
            <motion.div 
                initial='hidden'
                animate={containerControls}
                variants={container}
                className='px-4 py-10 bg-space rounded-xl xs:py-14 xs:px-8'
            >
                <div className='text-base xs:text-lg text-slate-300 md:text-xl'>
                    <p className='mb-4 text-left xs:mb-6'>I am a software developer that has a background in digital art. I combine my skills as an artist and my passion for technology to make my ideas come to life. <strong className='font-bold text-hotpink-200'>I am a creator</strong>, I always have been. From playing with legos, painting on canvas, or typing lines of code on an IDE, I love creating and that is my passion.</p>
                    <p className='mb-4 text-left xs:mb-6'>
                    Programming allows me to build for the future, and that makes me super excited. I want to be working with cutting-edge technology and building tools that will solve future problems. The most fufilling thing about programming is manifesting your vision and your ideas. Software gives value to people. That's why I am passionate about programming. 
                    </p>
                    <p className='mb-4 text-left xs:mb-6'>When I am not coding, I like to hang out with friends on Discord, go to the gym, and create art.</p>
                    <p className='px-3 py-2 text-gray-400 border-l-8 border-hotpink-200 bg-denim xs:py-4 xs:px-6'>I wish I could by me a spaceship and fly past the sky - Kanye West</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
