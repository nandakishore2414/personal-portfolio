import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const Services = () => {
    const services = [
        { id: 1, icon: <FaCode size={50} />, title: "Frontend Development", desc: "Building responsive and interactive user interfaces using React and Tailwind CSS." },
        { id: 2, icon: <FaServer size={50} />, title: "Backend Development", desc: "Creating robust server-side logic and APIs with Node.js and Express." },
        { id: 3, icon: <FaDatabase size={50} />, title: "Database Design", desc: "Designing efficient database schemas with MongoDB and SQL." },
        { id: 4, icon: <FaMobileAlt size={50} />, title: "Mobile Friendly", desc: "Ensuring applications look great on all devices, from desktops to smartphones." },
    ];

    return (
        <div name='services' className='w-full min-h-screen bg-primary text-gray-300 py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Services</p>
                    <p className='py-4 text-muted'>// What I can do for you</p>
                </div>

                <div className='grid sm:grid-cols-2 gap-8'>
                    {services.map(service => (
                        <motion.div
                            key={service.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='bg-secondary p-8 rounded-lg shadow-lg hover:shadow-[#040c16] hover:-translate-y-2 duration-300'
                        >
                            <div className='text-accent mb-4'>
                                {service.icon}
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
                            <p className='text-muted'>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
