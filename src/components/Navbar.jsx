import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const navItems = [
        { link: 'Home', to: 'home' },
        { link: 'About', to: 'about' },
        { link: 'Skills', to: 'skills' },
        { link: 'Projects', to: 'projects' },
        { link: 'Services', to: 'services' },
        { link: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary/90 backdrop-blur-sm text-gray-300 z-50 border-b border-gray-800"
        >
            <div className="z-10">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 cursor-pointer font-sans">
                    Nandakishore
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                    <li key={index} className="hover:text-accent transition-colors duration-300 cursor-pointer font-medium">
                        <Link to={item.to} smooth={true} duration={500} offset={-80}>
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl hover:text-accent transition-colors">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
                {navItems.map((item, index) => (
                    <li key={index} className="py-6 text-4xl hover:text-accent transition-colors cursor-pointer">
                        <Link onClick={handleClick} to={item.to} smooth={true} duration={500} offset={-80}>
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
