import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-primary relative overflow-hidden flex items-center pt-[80px]">

            {/* Background Animations */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-accent text-lg font-mono mb-4 tracking-wider">Hi, my name is</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                        Nandakishore
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl sm:text-7xl font-bold text-muted mb-6"
                >
                    I'm a <span className="text-gray-200">Freelance MERN Stack</span> Developer.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-muted text-lg max-w-[700px] mb-10 leading-relaxed"
                >
                    I specialize in building exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications using MongoDB, Express, React, and Node.js.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='flex flex-wrap gap-4'
                >
                    <Link to="projects" smooth={true} duration={500} offset={-80}>
                        <button className="group text-white border-2 border-accent px-8 py-4 flex items-center hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all duration-300 rounded font-medium text-lg backdrop-blur-sm">
                            View Work
                            <span className="group-hover:translate-x-1 duration-300 ml-3">
                                <HiArrowNarrowRight />
                            </span>
                        </button>
                    </Link>
                    <a href="https://wa.me/+918921382414" target="_blank" rel="noopener noreferrer" className="group text-white border-2 border-[#25D366] bg-[#25D366]/10 px-8 py-4 flex items-center hover:bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 rounded font-medium text-lg backdrop-blur-sm">
                        WhatsApp Me <FaWhatsapp className='ml-3' size={22} />
                    </a>
                </motion.div>

                {/* Mobile/Tablet Social Icons - Inline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="lg:hidden flex gap-6 mt-8"
                >
                    <a className="text-gray-300 hover:text-[#0077b5] transition-colors" href="https://www.linkedin.com/in/nandakishore--p" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={35} />
                    </a>
                    <a className="text-gray-300 hover:text-white transition-colors" href="https://github.com/nandakishore2414" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={35} />
                    </a>
                    <a className="text-gray-300 hover:text-[#E4405F] transition-colors" href="https://www.instagram.com/nandakishore.dev?igsh=MWNlaDZqOG0xdWlpOQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={35} />
                    </a>
                </motion.div>

                {/* Social Icons - Desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50"
                >
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-md shadow-lg">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="https://www.linkedin.com/in/nandakishore--p" target="_blank" rel="noopener noreferrer">
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-md shadow-lg">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="https://github.com/nandakishore2414" target="_blank" rel="noopener noreferrer">
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-r-md shadow-lg">
                            <a className="flex justify-between items-center w-full text-gray-100 font-bold px-4" href="https://www.instagram.com/nandakishore.dev?igsh=MWNlaDZqOG0xdWlpOQ==" target="_blank" rel="noopener noreferrer">
                                Instagram <FaInstagram size={30} />
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
