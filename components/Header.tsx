import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Admissions', href: '#admissions' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Placements', href: '#placements' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClass = isScrolled 
        ? 'bg-sidi-white/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent';
    const linkColor = isScrolled ? 'text-sidi-black' : 'text-sidi-white';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className={`text-3xl font-poppins font-bold tracking-tighter transition-colors duration-300 ${linkColor}`}>
                    SIDI.
                </a>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`font-medium hover:text-sidi-orange transition-colors duration-300 ${linkColor}`}>
                            {link.name}
                        </a>
                    ))}
                </nav>
                 <a href="#admissions" className="hidden lg:inline-block bg-sidi-orange text-white font-poppins px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                </a>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className={`transition-colors duration-300 ${linkColor}`}>
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-sidi-white/95 backdrop-blur-xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-3xl font-poppins font-bold text-sidi-black tracking-tighter">
                        SIDI.
                    </a>
                    <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-sidi-black">
                        <CloseIcon />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-poppins text-sidi-black hover:text-sidi-orange transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                     <a href="#admissions" onClick={() => setIsOpen(false)} className="bg-sidi-orange text-white font-poppins px-8 py-4 rounded-lg text-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 mt-8">
                        Apply Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
