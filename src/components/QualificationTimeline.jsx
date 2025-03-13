import { useState } from 'react';
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const QualificationTimeline = () => {
    const [isEducation, setIsEducation] = useState(true); // default to Education view

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation runs only once when it first comes into view
        threshold: 0.1, // Animation triggers when 10% of the element is visible
    });

    const toggleTimeline = (view) => {
        setIsEducation(view === 'education');
    };

    return (
        <section className="bg-secondary opacity-95 px-5 py-32" id='qualification'>
            <div className="flex flex-col items-center text-center container mx-auto py-10 px-5">
                <h2 className="text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-secondary md:w-[224px] w-[160px] mb-7">Qualification</h2>
                {/* <p className="text-gray-300 mt-1">My journey</p> */}

                <div className="flex gap-7 mt-6 justify-center" ref={ref}>
                    <span
                        onClick={() => toggleTimeline('education')}
                        className={`cursor-pointer ${isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-2 font-list-font md:text-xl text-md`}
                    >
                        <RiGraduationCapFill />Education
                    </span>
                    <span
                        onClick={() => toggleTimeline('work')}
                        className={`cursor-pointer ${!isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-1 font-list-font md:text-xl text-md`}
                    >
                        <MdOutlineWork />Experience
                    </span>
                </div>

                <div className="relative mt-10 max-w-md w-full">
                    {isEducation ? (
                        // Education Timeline
                        <div>
                            <div className="flex items-start space-x-2 mb-10">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            className="box w-full hover:cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5 }}
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                            exit={{ opacity: 0, y: -100 }}
                                        >
                                            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                                <h3 className="md:text-xl text-md font-medium">MERN Full Stack Development</h3>
                                                <p className="text-gray-600 md:text-md text-sm">Udemy - Dr.Angela Yu </p>
                                                <span className="text-sm text-gray-500">2024</span>
                                            </div>

                                        </motion.div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[700px] p-5">
                                        <div className="w-full">
                                            <img src="https://res.cloudinary.com/dfa5j3hbx/image/upload/v1733718325/certificate_dk3xi6.jpg" />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="flex items-start space-x-2 mb-10">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            className="box w-full hover:cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5, delay: 0.2 }}
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                            exit={{ opacity: 0, y: -100 }}


                                        >
                                            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                                <h3 className="md:text-xl text-md font-medium">Bachelor of Commerce</h3>
                                                <p className="text-gray-600 md:text-md text-sm">Ramakrishna mission vivekananda college</p>
                                                <span className="text-sm text-gray-500">2021 - 2023</span>
                                            </div>
                                        </motion.div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] p-5">
                                        <div className="w-full">
                                            <img src="" />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="flex items-start space-x-2 mb-10">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            className="box w-full hover:cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5, delay: 0.5 }}
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                            exit={{ opacity: 0, y: -100 }}


                                        > <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                                <h3 className="md:text-xl text-md font-medium">Higher Secondary Education</h3>
                                                <p className="text-gray-600 md:text-md text-sm">St.Mary's Matric Higher Secondary School</p>
                                                <span className="text-sm text-gray-500">2020</span>
                                            </div>
                                        </motion.div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] p-5">
                                        <div className="w-full">
                                            <img src="" />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    ) : (
                        // Work Timeline
                        <div>
                            <div className="flex items-start space-x-4 mb-10">
                                <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5 }}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                    exit={{ opacity: 0, y: -100 }}
                                >
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                        <h3 className="md:text-xl text-md font-medium">Relationship Manager</h3>
                                        <p className="text-gray-600 md:text-md text-sm">City Union Bank Private Limited, Bangalore</p>
                                        <span className="text-sm text-gray-500">2023 - 2024</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Add more work timeline items here */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QualificationTimeline;
