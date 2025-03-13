import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const skillsData = [
    {
        category: 'Front-end',
        skills: [
            {
                name: 'HTML', imgSrc: "", icon: FaHtml5, skill: 90,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            {
                name: 'CSS', imgSrc: "", icon: FaCss3Alt, skill: 95,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            {
                name: 'JavaScript', imgSrc: "", icon: IoLogoJavascript, skill: 85,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            {
                name: 'React', imgSrc: "", icon: FaReact, skill: 90,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            { name: 'Redux', imgSrc: "", icon: SiRedux, skill: 72, certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"},
            {
                name: 'Bootstrap', imgSrc: "", icon: FaBootstrap, skill: 85,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            { name: 'Tailwind', imgSrc: "", icon: RiTailwindCssFill, skill: 90, certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"},
        ],
    },
    {
        category: 'Back-end',
        skills: [
            {
                name: 'NodeJs', imgSrc: "", icon: FaNodeJs, skill: 85,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            { name: 'ExpressJs', imgSrc: "", icon: SiExpress, skill: 80, certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg" },
            {
                name: 'Java', imgSrc: "", icon: FaJava , skill: 85,
                certificate: ""
            },
            {
                name: 'Springboot', imgSrc: "", icon: SiSpringboot , skill: 75,
                certificate: ""
            },
            {
                name: 'MongoDB', imgSrc: "", icon: SiMongodb, skill: 85,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
            {
                name: 'MySQL', imgSrc: "", icon: GrMysql, skill: 60,
                certificate: "https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg"
            },
        ],
    },
    {
        category: 'Tools Known',
        skills: [
            { name: 'VsCode', imgSrc: "", icon: VscVscode, skill: 90, certificate: "" },
            { name: 'ViteJs', imgSrc: "", icon: SiVite, skill: 75, certificate: "" },
            { name: 'Git', imgSrc: "", icon: FaGitAlt, skill: 85, certificate: "" },
            { name: 'GitHub', imgSrc: "", icon: FaGithub, skill: 90, certificate: "" },
            { name: 'NPM', imgSrc: "", icon: SiNpm, skill: 60, certificate: "" },
            { name: 'Postman', imgSrc: "", icon: SiPostman, skill: 90, certificate: "" },
        ],
    },
];

function Skills({ RevealOnScroll }) {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation runs only once when it first comes into view
        threshold: 0.1, // Animation triggers when 10% of the element is visible
    });

    return (
        <section className='bg-secondary shadow-lg opacity-95' id='skills'>
            <RevealOnScroll>
                <div className='flex flex-col px-5 py-32 container mx-auto justify-center' >
                    <div className='flex justify-center px-10 py-5' ref={ref}>
                        <h1 className='text-white text-center font-bold md:text-4xl text-md font-list-font border-b-0 border-secondary md:w-[500px] w-[230px]'>
                            Skills & Technologies I Know
                        </h1>
                    </div>

                    {skillsData.map((category, index) => (
                        <div key={index} >
                            <div className='flex justify-center px-10 mb-5 mt-10'>
                                <h3 className='text-white font-bold md:text-2xl text-md font-list-font border-b-0 border-secondary'>
                                    {category.category}
                                </h3>
                            </div>


                            <div className='flex md:flex-row flex-wrap items-center justify-center gap-5 md:justify-center py-2'>
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        className="box"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: idx * 0.1 }}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={inView ? { opacity: 1, y: 0 }: {}}
                                        exit={{ opacity: 0, y: -100 }}
                                        key={idx}
                                    >
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div
                                                    key={idx}
                                                    className='flex flex-col items-center justify-center gap-1 px-7 py-7 bg-gray-100 md:h-[154px] md:w-[115px] w-[90px] card-hoverr-eff rounded-lg shadow-md'
                                                >
                                                    <skill.icon className="md:text-4xl text-3xl text-teal-800" />


                                                    <p className='text-teal-800 text-center font-bold md:text-lg text-sm font-list-font mt-2'>
                                                        {skill.name}
                                                    </p>

                                                    <div className="w-full bg-gray-400 rounded-full h-1.5 mt-2">
                                                        <div
                                                            className="bg-teal-800 h-1.5 rounded-full"
                                                            style={{ width: `${skill.skill}%` }}
                                                        ></div>
                                                    </div>

                                                </div>
                                            </DialogTrigger>

                                            <DialogContent className="sm:max-w-[700px] p-5">
                                                <DialogHeader>
                                                    {/* <DialogTitle>{skill.name}</DialogTitle> */}
                                                </DialogHeader>
                                                {skill.certificate ? (
                                                    <div className="w-full">
                                                        <img src={skill.certificate} />
                                                    </div>
                                                ) : <div className="w-full">
                                                    <h1 className='font-list-font text-xl font-bold text-center p-10'>Certificate not yet availed...</h1>
                                                </div>}
                                            </DialogContent>

                                        </Dialog>
                                    </motion.div>

                                ))}
                            </div>






                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section >
    );
}

export default Skills;
