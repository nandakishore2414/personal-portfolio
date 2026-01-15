import { motion } from 'framer-motion';
import projectImg from '../assets/projects.png';

const Projects = () => {
    const projects = [
        { id: 1, name: "E-Commerce Dashboard", img: projectImg, desc: "A full-stack dashboard for managing products and orders." },
        { id: 2, name: "Task Management App", img: projectImg, desc: "Real-time task manager with drag and drop functionality." },
        { id: 3, name: "Social Media Platform", img: projectImg, desc: "Connect with developers worldwide." },
        { id: 4, name: "Portfolio Website", img: projectImg, desc: "My personal portfolio website." },
    ];

    return (
        <div name='projects' className='w-full min-h-screen text-gray-300 bg-primary py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-accent'>Projects</p>
                    <p className='py-6 text-muted'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                    {/* Grid Item */}
                    {projects.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ backgroundImage: `url(${item.img})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] bg-cover bg-center relative overflow-hidden'
                        >
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 bg-primary/80 absolute inset-0 flex flex-col justify-center items-center transition-all duration-500'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.name}
                                </span>
                                <p className="pl-2 px-4 text-center text-sm mt-2">{item.desc}</p>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
