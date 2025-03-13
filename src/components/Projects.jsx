import React from 'react'

import biriyani from '../assets/biriyani.png'
import rightfood from "../assets/rightFood.png"
import jsoncart from "../assets/jsoncart.png"
import barcode from '../assets/barcode.png'
import filterpro from '../assets/filter.png'
import TwitterImg from '../assets/Twitter.png'
import auth from "../assets/authentication.png"
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from 'react-router-dom'


const Projects = ({ RevealOnScroll }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation runs only once when it first comes into view
        threshold: 0.1, // Animation triggers when 10% of the element is visible
    });

    const projects = [
        {
            imgSrc: TwitterImg,
            title: "X Clone App",
            description: "MERN Fullstack X Clone App",
            liveLink: "https://server-gorc.onrender.com/",
            codeLink: "https://github.com/rajeshrio9885/Twitter-clone",
            codesUsed: ["React Js", "NodeJs", "MongoDB", "React Query"],
        },
        {
            imgSrc: auth,
            title: "OTP Authentication ",
            description: "MERN Fullstack Chat App",
            liveLink: "https://auth-verfied-self-practice-with-email.onrender.com/",
            codeLink: " https://github.com/rajeshrio9885/auth-verfied-self-practice-with-email-opt-nodemailer",
            codesUsed: ["React Js", "NodeJs", "MongoDB", "nodemailer"],
        },
        {
            imgSrc:biriyani,
            title: "Rio Biriyani",
            description: "Rio Biriyani using HTML ,Css and javascript",
            liveLink: " https://rajeshrio9885.github.io/Rio-biriyani/",
            codeLink: "https://github.com/rajeshrio9885/Rio-biriyani",
            codesUsed: ["Html", "Css","javascript"],
        },
        {
            imgSrc: jsoncart,
            title: "Cart using Json",
            description: "Cart project with json data",
            liveLink: " https://rajeshrio9885.github.io/cart-project/",
            codeLink: "https://github.com/rajeshrio9885/cart-project",
            codesUsed: ["Html", "Css","Bootstrap","Javascript"],
        },
        {
            imgSrc: filterpro,
            title: "Filtering Products",
            description: "Filtering Products using Html, Css,javascript",
            liveLink: "https://rajeshrio9885.github.io/filtering-project/",
            codeLink: "https://github.com/rajeshrio9885/filtering-project",
            codesUsed: ["Html", "Css","Javascript"],
        },
        {
            imgSrc: barcode,
            title: "Barcode Genernator",
            description: "Barcode genernator using CDN",
            liveLink: "https://rajeshrio9885.github.io/barcode/",
            codeLink: "https://github.com/rajeshrio9885/barcode",
            codesUsed: ["Html", "Css","Javascript","Barcode CDN"],
        },
        {
            imgSrc: rightfood,
            title: "Hotel Landing Page",
            description: "Simple Hotel Landing Page",
            liveLink: " https://rajeshrio9885.github.io/RIO-Restraunt/",
            codeLink: "https://github.com/rajeshrio9885/RIO-Restraunt",
            codesUsed: ["Html", "Css","Javascript","Bootstrap"],
        },
       

    ];


    return (
        <>
            <section className='bg-primary opacity-95 text-white' id='projects'>

                <RevealOnScroll>
                    <div className='flex flex-col px-10 py-32 justify-center container mx-auto'>
                        <div className='py-5 md:px-24 px-10 md:w-full'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-primary md:w-[140px] w-[100px]'>Projects</h1>
                                <p className='text-white md:text-2xl text-xl font-list-font mt-10'>Here are some of my projects, Check them out...</p>
                            </div>
                        </div>

                        <div className='py-5 md:w-full ' ref={ref}>

                            <div className='flex flex-col md:flex-row flex-wrap items-center md:justify-center px-10  gap-7 parent-container'>
                                <Carousel
                                    opts={{
                                        align: "start",
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 4000,
                                        }),
                                    ]}
                                    className="w-full"
                                >
                                    <CarouselContent>
                                        {projects.map((project, index) => (
                                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                                                <motion.div
                                                    className="box"
                                                    initial={{ opacity: 0, y: 100 }}
                                                    animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                                    exit={{ opacity: 0, y: -100 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: index * 0.1 }}
                                                >
                                                    <a href={project.liveLink} target='_blank'>
                                                        <motion.div className='bg-border-prj card-hoverr-eff card'
                                                            whileHover={{ scale: 1.03 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                            key={index}>

                                                            <div className='relative' >
                                                                <img
                                                                    className='md:h-[200px] h-[160px] w-full rounded-lg object-cover img-prj'
                                                                    src={project.imgSrc}
                                                                />
                                                                <div className='project-desc card-content flex flex-col justify-center gap-3 px-3 py-3 rounded-lg'>
                                                                    <div>
                                                                        <p className='text-center text-white md:text-2xl text-md font-list-font'>
                                                                            {project.description}
                                                                        </p>
                                                                    </div>
                                                                    <div className='flex justify-center md:gap-7 gap-3'>

                                                                        <div className='transition duration-300 ease-in-out'>
                                                                            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                                                                <motion.div
                                                                                    className="box"
                                                                                    whileHover={{ scale: 1.05 }}
                                                                                    whileTap={{ scale: 0.9 }}
                                                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                                                >
                                                                                    <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                                        <FaLink size={28} />
                                                                                    </button>
                                                                                </motion.div>
                                                                            </a>
                                                                        </div>
                                                                        <div className='transition duration-300 ease-in-out'>
                                                                            <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                                                                <motion.div
                                                                                    className="box"
                                                                                    whileHover={{ scale: 1.05 }}
                                                                                    whileTap={{ scale: 0.9 }}
                                                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                                                >
                                                                                    <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                                        <FaCode size={28} />
                                                                                    </button>
                                                                                </motion.div>
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {project.title &&
                                                                    <h1 className='p-3 text-white md:text-2xl text-xl font-list-font font-semibold mt-1 drop-shadow-md'>{project.title}</h1>}
                                                            </div>
                                                            <div className='px-3 flex flex-row flex-wrap gap-2'>
                                                                {project.codesUsed.map((code, idx) => (
                                                                    <span key={idx} className='text-gray-200 md:text-md text-xs font-semibold font-hero-font bg-slate-900 border-primary-2 p-2 rounded-lg shadow-lg mr-2'>{code}</span>
                                                                ))}
                                                            </div>

                                                        </motion.div>
                                                    </a>
                                                </motion.div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="bg-slate-900" />
                                    <CarouselNext className="bg-slate-950" />
                                </Carousel>

                              

                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    )
}

export default Projects