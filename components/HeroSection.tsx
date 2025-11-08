import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ImagesSlider } from './ui/images-slider';

const HeroSection: React.FC = () => {
    const images = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop", // Team working
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop", // Modern office
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop", // Presentation
        "https://images.unsplash.com/photo-1616594418293-845a783d78b8?q=80&w=1920&auto=format&fit=crop", // Interior design shot
    ];

    return (
        <section id="home" className="scroll-mt-24">
             <ImagesSlider className="h-screen" images={images}>
                <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="text-center px-6 flex flex-col items-center"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold tracking-tight leading-tight mb-4 text-sidi-white">
                            Where Creativity<br/> Becomes a <span className="text-sidi-orange">Career.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl font-inter text-sidi-white/90 mb-8">
                            SIDI fosters innovation, design thinking, and excellence in creative education.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#admissions" className="w-full sm:w-auto bg-sidi-orange text-white font-poppins px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-lg">
                                Apply Now for 2025-26
                            </a>
                            <a href="#programs" className="w-full sm:w-auto border-2 border-sidi-white text-sidi-white font-poppins px-10 py-4 rounded-lg hover:bg-sidi-white hover:text-sidi-black transition-all duration-300 text-lg">
                                Explore Programs
                            </a>
                        </div>
                    </motion.div>
                    
                    <div className="absolute bottom-10">
                        <div className="animate-bounce">
                            <ArrowDownIcon />
                        </div>
                    </div>
                </div>
            </ImagesSlider>
        </section>
    );
};

export default HeroSection;