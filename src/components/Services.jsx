import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const Services = () => {
    const services = [
        { id: 1, icon: <FaCode size={40} />, title: "Frontend Development", desc: "Building responsive and interactive user interfaces using React and Tailwind CSS." },
        { id: 2, icon: <FaServer size={40} />, title: "Backend Development", desc: "Creating robust server-side logic and APIs with Node.js and Express." },
        { id: 3, icon: <FaDatabase size={40} />, title: "Database Design", desc: "Designing efficient database schemas with MongoDB and SQL." },
        { id: 4, icon: <FaMobileAlt size={40} />, title: "Mobile Friendly", desc: "Ensuring applications look great on all devices, from desktops to smartphones." },
    ];

    return (
        <div name='services' className='w-full min-h-screen bg-primary text-gray-300 py-20 relative overflow-hidden'>
            {/* Background Animations */}
            <div className="absolute center w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10 relative'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>Services</p>
                    <p className='py-4 text-muted'>// What I can do for you</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {services.map(service => (
                        <motion.div
                            key={service.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: service.id * 0.1 }}
                            whileHover={{ y: -5 }}
                            className='bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-xl shadow-lg hover:shadow-accent/10 hover:border-accent/30 duration-300 group'
                        >
                            <div className='text-accent mb-6 bg-accent/10 w-fit p-4 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300'>
                                {service.icon}
                            </div>
                            <h3 className='text-2xl font-bold mb-3 group-hover:text-white transition-colors'>{service.title}</h3>
                            <p className='text-gray-400 leading-relaxed'>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
