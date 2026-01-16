import { motion } from 'framer-motion';
import projectImg from '../assets/projects.png';
import Ecommerce from '../assets/ecommerce.png';

const Projects = () => {
    const projects = [
        { id: 1, name: "E-Commerce Dashboard", img: Ecommerce, desc: "A full-stack dashboard for managing products and orders.", link: "http://13.233.118.129/", code: "https://github.com/nandakishore2414/E-commerce.git" },
        { id: 2, name: "Task Management App", img: projectImg, desc: "Real-time task manager with drag and drop functionality.", link: "/", code: "/" },
        { id: 3, name: "Social Media Platform", img: projectImg, desc: "Connect with developers worldwide.", link: "/", code: "/" },
        { id: 4, name: "Portfolio Website", img: projectImg, desc: "My personal portfolio website.", link: "/", code: "/" },
    ];

    return (
        <div name='projects' className='w-full min-h-screen text-gray-300 bg-primary py-20 relative overflow-hidden'>
            {/* Background Animations */}
            <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10 relative'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 border-accent'>Projects</p>
                    <p className='py-6 text-muted'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {projects.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            style={{ backgroundImage: `url(${item.img})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div h-[250px] bg-cover bg-center relative overflow-hidden ring-1 ring-white/10'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 bg-primary/90 absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 backdrop-blur-sm'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.name}
                                </span>
                                <p className="px-4 text-center text-sm mt-3 text-gray-300">{item.desc}</p>
                                <div className='pt-8 text-center flex gap-4'>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-6 py-2 bg-white text-gray-700 font-bold hover:bg-accent hover:text-white transition-colors duration-300'>
                                            View
                                        </button>
                                    </a>
                                    <a href={item.code} target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-6 py-2 border-2 border-white text-white font-bold hover:bg-white hover:text-gray-700 transition-colors duration-300'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
