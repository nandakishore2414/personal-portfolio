import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-primary text-gray-300 py-20'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='sm:text-right pb-8 pl-4'
                    >
                        <p className='text-4xl font-bold inline border-b-4 border-accent'>
                            About
                        </p>
                    </motion.div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='sm:text-right text-4xl font-bold'
                    >
                        <p>Hi. I'm Nandakishore, nice to meet you. Please take a look around.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted leading-loose">
                            I am a passionate freelancer based in India, specializing in the MERN stack (MongoDB, Express, React, Node.js).
                            With a dedicated focus on creating responsive, user-friendly web applications, I help individuals and small businesses bring their digital visions to life.
                            Before becoming a freelancer, I honed my skills building varied projects and learning the ins and outs of modern web development.
                        </p>
                        <br />
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent transition-all duration-300'>
                            Download Resume
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
