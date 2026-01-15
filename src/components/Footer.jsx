const Footer = () => {
    return (
        <div className="bg-primary text-gray-400 py-8 text-center border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} Nandakishore. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
    );
};

export default Footer;
