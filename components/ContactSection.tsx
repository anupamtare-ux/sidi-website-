import React from 'react';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="bg-[#f0f0f0] scroll-mt-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full h-80 lg:h-full bg-gray-300 flex items-center justify-center text-gray-500">
                        {/* Placeholder for Google Map */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.528345719999!2d81.639222314886!3d21.250523985878694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be36269%3A0x295147573f55a206!2sSIDI%20-%20Space%20Institute%20of%20Design%20and%20Innovation!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SIDI Location"
                        ></iframe>
                    </div>
                    <div className="p-8 md:p-16">
                        <h2 className="text-4xl font-poppins font-bold text-sidi-black mb-2">Visit or Contact Us</h2>
                        <p className="text-sidi-black/70 mb-8">We're here to answer your questions. Reach out and let's talk about your future in design.</p>
                        
                        <form action="#" method="POST">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea name="message" id="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-sidi-orange text-white font-poppins px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                        <div className="mt-12 text-center">
                            <p className="text-sidi-black/80 font-semibold mb-4">Follow us on social media</p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" aria-label="Instagram" className="text-sidi-black hover:text-sidi-orange transition-colors duration-300"><InstagramIcon /></a>
                                <a href="#" aria-label="YouTube" className="text-sidi-black hover:text-sidi-orange transition-colors duration-300"><YouTubeIcon /></a>
                                <a href="#" aria-label="WhatsApp" className="text-sidi-black hover:text-sidi-orange transition-colors duration-300"><WhatsAppIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;