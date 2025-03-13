import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoIosSend } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Contact = () => {
    const [state, handleSubmit] = useForm("xblryqrr");
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (state.succeeded) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            setFormData({ name: '', email: '', message: '' });
            setErrorMessage('');

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();


        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('All fields are required.');
            return;
        }

        handleSubmit(e);
    };

    return (
        <>
            <section className='bg-primary opacity-95' id='contact'>
                <div className='flex flex-col md:flex-row px-5 py-32 container mx-auto justify-center items-center'>

                <div className='flex flex-col px-10 py-5 justify-center'>
                    
                    <div className='flex justify-center'>
                        <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-primary md:w-[205px] w-[140px]'>
                            Contact Me</h1>
                    </div>


                    <form className='flex flex-col items-end gap-6 w-72 py-10 justify-center' onSubmit={handleFormSubmit}>

                        <div className='flex flex-col mt-5 w-full'>
                            <label className='text-white md:text-2xl text-xl font-list-font' htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none font-list-font border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <ValidationError
                                prefix="name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className='flex flex-col mt-5 w-full'>
                            <label className='text-white md:text-2xl text-xl font-list-font' htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className='flex flex-col mt-5 w-full'>
                            <label className='text-white md:text-2xl text-xl font-list-font' htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <div className='flex justify-center w-full'>
                        <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    
                                >
                            <button className='text-gray-900 md:text-2xl text-xl font-list-font button-link mt-5 flex gap-1 items-center justify-center' type="submit" disabled={state.submitting}>
                                Send Message <TbMailFilled size={28}/>
                            </button>
                            </motion.div>
                        </div>
                    </form>

                    {isVisible && <p className='text-white text-center text-xl font-list-font mt-5'>Thanks for your response!</p>}
                    {errorMessage && <div className='flex justify-center'><p className='text-red-500 text-xl font-list-font mt-5'>{errorMessage}</p></div>}
               
                </div>
              
              </div>
            </section>
        </>
    );
};

export default Contact;
