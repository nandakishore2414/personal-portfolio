import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { id: 1, icon: <FaHtml5 size={50} className="text-orange-500" />, name: 'HTML' },
        { id: 2, icon: <FaCss3Alt size={50} className="text-blue-500" />, name: 'CSS' },
        { id: 3, icon: <FaJs size={50} className="text-yellow-400" />, name: 'JavaScript' },
        { id: 4, icon: <FaReact size={50} className="text-blue-400" />, name: 'React' },
        { id: 5, icon: <FaGithub size={50} className="text-gray-100" />, name: 'GitHub' },
        { id: 6, icon: <FaNode size={50} className="text-green-500" />, name: 'Node.js' },
        { id: 7, icon: <SiMongodb size={50} className="text-green-600" />, name: 'MongoDB' },
        { id: 8, icon: <SiTailwindcss size={50} className="text-sky-400" />, name: 'Tailwind' },
        // Add more as needed
    ];

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div name='skills' className='w-full min-h-screen bg-primary text-gray-300 py-20'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Skills</p>
                    <p className='py-4 text-muted'>// These are the technologies I've worked with</p>
                </div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariant}
                            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-secondary py-4 rounded-md'
                        >
                            <div className='flex justify-center'>{skill.icon}</div>
                            <p className='my-4 font-medium'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
