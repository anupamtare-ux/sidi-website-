import React from 'react';
import type { Program } from '../types';
import { GlowCard } from './ui/spotlight-card';

const programsData: Program[] = [
    { title: 'Fashion Design', duration: '3 Years, B.Des', imageUrl: 'https://images.unsplash.com/photo-1551803091-e2525853ae8b?q=80&w=800&h=1000&auto=format&fit=crop' },
    { title: 'Interior Design', duration: '3 Years, B.Des', imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&h=1000&auto=format&fit=crop' },
    { title: 'Online Learning (SIDI+)', duration: '6 Months, Certificate', imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&h=1000&auto=format&fit=crop', isNew: true },
    { title: 'Graphic Design', duration: '2 Years, Diploma', imageUrl: 'https://images.unsplash.com/photo-1603349206295-dde20617cb7a?q=80&w=800&h=1000&auto=format&fit=crop' },
];

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
    <GlowCard customSize glowColor="orange" className="p-0 gap-0 block h-full overflow-hidden">
        <div className="group relative w-full h-full cursor-pointer">
            <img src={program.imageUrl} alt={program.title} className="w-full h-full object-cover transition-transform duration-300 ease-sidi-ease group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-sidi-black/80 to-transparent"></div>
            {program.isNew && (
                <div className="absolute top-4 right-4 bg-sidi-gold text-sidi-black text-xs font-bold uppercase px-3 py-1 rounded-full">New</div>
            )}
            <div className="absolute bottom-0 left-0 p-6 text-sidi-white w-full">
                <h3 className="text-3xl font-poppins font-semibold">{program.title}</h3>
                <p className="text-sidi-white/80 mb-4">{program.duration}</p>
                <a href="#" className="font-semibold text-sidi-orange group-hover:text-sidi-white transition-colors duration-300">
                    View Curriculum &rarr;
                </a>
            </div>
        </div>
    </GlowCard>
);

const ProgramsSection: React.FC = () => {
    return (
        <section id="programs" className="py-20 md:py-32 bg-[#f0f0f0] scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-black">Our Programs</h2>
                    <p className="max-w-2xl mx-auto text-lg text-sidi-black/70 mt-4">Craft your future with our industry-focused design programs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[500px]">
                    {programsData.map((program, index) => (
                        <ProgramCard key={index} program={program} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;