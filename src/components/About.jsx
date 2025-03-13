import React from 'react'
import AboutImg from '../assets/about.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const About = ({ RevealOnScroll }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation runs only once when it first comes into view
        threshold: 0.1, // Animation triggers when 10% of the element is visible
    });

    return (
        <>
            <section className='bg-primary opacity-95' id='about'>

                <div className='flex flex-col md:flex-row px-5 py-32 container mx-auto justify-center'>
                    <div className='py-5 px-10 md:w-1/2'>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5 }}
                        >
                            <img src={AboutImg} alt='hero' />
                        </motion.div>
                    </div>


                    <div className='md:w-1/2 flex justify-center'>
                        <div className='flex flex-col justify-center px-10 py-10'>
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                exit={{ opacity: 0, y: -100 }}
                                transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5, delay: 0.3 }}
                            >
                                <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-secondary md:w-[170px] w-[120px]'>About Me</h1>
                                <ul className='list-none text-white'>
                                    <li>
                                        <p className='text-white text-justify md:text-2xl text-md font-list-font mt-10'>I'm <span className='font-bold'>Rajesh J</span>, a passionate web developer with a background in <span className='font-bold'>Commerce</span>. My journey began in the banking sector, where I worked as a <span className='font-bold'>Relationship Manager</span> in <span className='font-bold'>City Union Bank, Bangalore.</span></p>
                                    </li>
                                    <li>
                                        <p className='text-white text-justify md:text-2xl text-md font-list-font mt-7'> My passion for the technology led me to transition into web development, where I gained expertise in <span className='font-bold'>HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB , Java , Springboot , MySQL </span> and more. </p>
                                    </li>
                                    <li>
                                        <p className='text-white text-justify md:text-2xl text-md font-list-font mt-7'>I'm eager to contribute my diverse skill set and enthusiasm to dynamic teams in the tech industry.</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}

export default About