import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-primary">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent text-lg font-mono mb-2"
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-7xl font-bold text-white mb-2"
                >
                    Nandakishore
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl sm:text-6xl font-bold text-muted mb-6"
                >
                    I'm a Freelance MERN Stack Developer.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-muted text-lg max-w-[700px] mb-8 leading-relaxed"
                >
                    I specialize in building exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications using MongoDB, Express, React, and Node.js.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex gap-4'
                >
                    <Link to="projects" smooth={true} duration={500} offset={-80}>
                        <button className="group text-white border-2 border-accent px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent transition-all duration-300 rounded-sm">
                            View Work
                            <span className="group-hover:rotate-90 duration-300 ml-3">
                                <HiArrowNarrowRight />
                            </span>
                        </button>
                    </Link>
                    <a href="#" className="group text-muted border-2 border-gray-600 px-6 py-3 my-2 flex items-center hover:text-white hover:border-white transition-all duration-300 rounded-sm">
                        Contact Me
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50"
                >
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-md">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="#">
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-md">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="#">
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2] rounded-r-md">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="#">
                                Twitter <FaTwitter size={30} />
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
