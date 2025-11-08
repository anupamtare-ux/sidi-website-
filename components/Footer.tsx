
import React from 'react';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-sidi-black text-sidi-white/70">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <a href="#" className="text-4xl font-poppins font-bold text-sidi-white tracking-tighter mb-4 inline-block">SIDI.</a>
                        <p>Space Institute of Design & Innovation, Raipur</p>
                    </div>
                    <div>
                        <h4 className="font-poppins font-semibold text-sidi-white mb-4">Institute Info</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">Campus</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">News & Blog</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-poppins font-semibold text-sidi-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">Admissions</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">Career / Join Us</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-sidi-orange transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-poppins font-semibold text-sidi-white mb-4">Connect</h4>
                         <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram" className="hover:text-sidi-orange transition-colors"><InstagramIcon /></a>
                            <a href="#" aria-label="YouTube" className="hover:text-sidi-orange transition-colors"><YouTubeIcon /></a>
                            <a href="#" aria-label="WhatsApp" className="hover:text-sidi-orange transition-colors"><WhatsAppIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} SIDI Raipur. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
