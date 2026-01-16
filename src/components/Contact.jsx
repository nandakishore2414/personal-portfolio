import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaTimes } from 'react-icons/fa';

const Contact = () => {
    // Statues: null | 'success' | 'error'
    const [modalStatus, setModalStatus] = useState(null);

    const handleSubmit = (e) => {
        setModalStatus('success');
        // Delay the reset to ensure the form data is sent before clearing
        setTimeout(() => {
            e.target.reset();
        }, 100);
    };

    const closeModal = () => {
        setModalStatus(null);
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    };

    return (
        <div name='contact' className='w-full min-h-screen bg-primary flex justify-center items-center p-4 py-20 relative overflow-hidden'>
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10'>
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col justify-center'
                >
                    <p className='text-4xl font-bold inline border-b-4 border-accent text-gray-300 w-fit mb-6'>Contact</p>
                    <h2 className='text-3xl font-bold text-white mb-4'>Let's discuss something <span className='text-accent'>cool</span> together</h2>
                    <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                        I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.
                    </p>
                    <div className='flex items-center gap-4 text-gray-300 mb-8'>
                        <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0'>
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <p className='text-sm text-gray-400'>Email me at</p>
                            <p className='text-white font-medium'>nandakishore.builds@gmail.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form
                        method='POST'
                        action="https://docs.google.com/forms/d/e/1FAIpQLScYhdy-UzcmqptSYrQwVQQMcc1S8EiCd4dn84P8nC2lKCNnbg/formResponse"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}
                        className='flex flex-col w-full bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative'
                    >
                        <div className='absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none' />

                        <div className='flex flex-col gap-4 relative z-10'>
                            <div className='flex flex-col'>
                                <label className='text-gray-300 text-sm mb-2 ml-1 font-medium'>Name</label>
                                <input className='bg-primary/50 text-white p-3 rounded-lg border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all' type="text" placeholder='What should I call you?' name='entry.2104831859' required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-300 text-sm mb-2 ml-1 font-medium'>Email</label>
                                <input className='bg-primary/50 text-white p-3 rounded-lg border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all' type="email" placeholder='Where can I reach you?' name='entry.1340723325' required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-300 text-sm mb-2 ml-1 font-medium'>Message</label>
                                <textarea className='bg-primary/50 text-white p-3 rounded-lg border border-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none' name="entry.1262612293" rows="6" placeholder='Tell me about your project...' required></textarea>
                            </div>
                        </div>
                        <button className='group text-white bg-accent hover:bg-accent/80 px-6 py-4 my-6 mx-auto flex items-center rounded-lg font-bold transition-all duration-300 w-full justify-center shadow-lg shadow-accent/20 relative z-10'>
                            Send Message
                            <span className='group-hover:translate-x-2 duration-300 ml-3'>
                                <FaPaperPlane />
                            </span>
                        </button>
                    </form>
                </motion.div>
            </div>

            <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>

            {/* Custom Modal Overlay */}
            <AnimatePresence>
                {modalStatus && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex justify-center items-center bg-black/60 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-[#1a1a1a] border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-sm w-full relative text-center"
                            onClick={(e) => e.stopPropagation()} // Prevent click-through closing
                        >
                            {/* Close Icon (Optional Helper) */}
                            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                                <FaTimes />
                            </button>

                            {modalStatus === 'success' ? (
                                <>
                                    <h3 className="text-3xl font-bold text-accent mb-4">Thank you!</h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        Your message has been sent successfully. I'll get back to you soon.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="bg-accent hover:bg-accent/80 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 w-full"
                                    >
                                        Close
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-bold text-red-500 mb-4">Oops!</h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        Something went wrong sending your message. Please try again later.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-500/20 transition-all duration-300 w-full"
                                    >
                                        Close
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
