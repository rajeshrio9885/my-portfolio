import Hero3Img from "../assets/hero3.png";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { IoMdCloudDownload } from "react-icons/io";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation runs only once when it first comes into view
    threshold: 0.1, // Animation triggers when 10% of the element is visible
  });

  return (
    <>
      <section
        className="px-10 md:py-40 py-20 bg-secondary opacity-95"
        id="hero"
        ref={ref}
      >
        <div className="flex flex-col md:flex-row md:mt-1 mt-16 justify-center container mx-auto">
          <div className="flex md:flex-row flex-col justify-center items-center md:w-1/2">
            <div className="md:flex md:flex-col text-gray-100 gap-7 drop-shadow-md px-16 items-center justify-center hidden">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                exit={{ opacity: 0, y: -100 }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.5,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/rajesh13698"
                  target="_blank"
                  className="btn-icons"
                >
                  <FaLinkedin size={30} />
                </a>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                exit={{ opacity: 0, y: -100 }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                <a
                  href="https://github.com/rajeshrio9885"
                  target="_blank"
                  className="btn-icons"
                >
                  <AiOutlineGithub size={30} />
                </a>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                exit={{ opacity: 0, y: -100 }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.5,
                  delay: 0.3,
                }}
              >
                <a
                  href="https://drive.google.com/file/d/16b1eRxkIs_V2Pef5qCDaaxAb-Y1nNqCn/view"
                  target="_blank"
                  className="btn-icons"
                >
                  <BsFillSuitcaseLgFill size={30} />
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col mt-10 mb-10">
              <div className="text-white font-list-font drop-shadow-md w-max">
                <h1 className="text-teal-300 md:text-4xl text-2xl font-extrabold mb-3">
                  Hi,
                </h1>
                <h1 className="animate-typing max-w-[180px] sm:max-w-[285px] overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 md:text-5xl text-3xl text-white  font-list-font font-bold">
                  It&apos;s Rajesh J,
                </h1>

                <p className="md:text-4xl text-xl mt-3">
                  I am a{" "}
                  <span className="text-teal-300 md:text-4xl text-2xl font-extrabold">
                    Fullstack
                  </span>{" "}
                  Developer
                </p>
              </div>

              <div className="flex justify-center items-center mt-10">
                <p className="md:text-xl font-list-font drop-shadow-md text-white text-justify">
                  I blend creativity and code to build web applications that not
                  only function seamlessly but leave a lasting impression.{" "}
                  <br />
                  Let’s build and learn something extraordinary together!
                </p>
              </div>

              <div className="flex gap-5 mt-7 text-white drop-shadow-md md:hidden">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                  exit={{ opacity: 0, y: -100 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.5,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/rajesh13698"
                    target="_blank"
                    className="btn-icons"
                  >
                    <FaLinkedin size={25} />
                  </a>
                </motion.div>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                  exit={{ opacity: 0, y: -100 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  <a
                    href="https://github.com/rajeshrio9885"
                    target="_blank"
                    className="btn-icons"
                  >
                    <AiOutlineGithub size={25} />
                  </a>
                </motion.div>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                  exit={{ opacity: 0, y: -100 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/16b1eRxkIs_V2Pef5qCDaaxAb-Y1nNqCn/view"
                    target="_blank"
                    className="btn-icons"
                  >
                    <BsFillSuitcaseLgFill size={25} />
                  </a>
                </motion.div>
              </div>

              <div className="flex justify-start drop-shadow-md mt-10">
                <div className="flex gap-2 items-center font-bold">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                    exit={{ opacity: 0, y: -100 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.5,
                    }}
                  >
                    <a
                      className="btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center"
                      href="#contact"
                    >
                      Contact <TbMessage size={25} />
                    </a>
                  </motion.div>
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                    exit={{ opacity: 0, y: -100 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  >
                    <a
                      className="btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center"
                      href="https://drive.google.com/file/d/11yRow8ufI1vnwV5gICdY_gJULenZtBoH/view?usp=sharing"
                      target="_blank"
                    >
                      Resume <IoMdCloudDownload size={25} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-1/3" ref={ref}>
            <motion.div
              className="flex magicpattern mix-blend-lighten md:relative"
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
              exit={{ opacity: 0, y: -100 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <img
                className="h-auto max-w-full md:absolute md:bottom-12"
                src={Hero3Img}
                alt="hero"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
