import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div name='contact' className='w-full min-h-screen bg-primary flex justify-center items-center p-4 py-20'>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                method='POST'
                action="https://getform.io/f/example-endpoint"
                className='flex flex-col max-w-[600px] w-full'
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - example@email.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-accent hover:border-accent px-4 py-3 my-8 mx-auto flex items-center transition-all duration-300'>Let's Collaborate</button>
            </motion.form>
        </div>
    );
};

export default Contact;
