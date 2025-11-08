import React from 'react';
import type { Program } from '../types';
import { GlowCard } from './ui/spotlight-card';

const programsData: Program[] = [
    { title: 'Fashion Design', duration: '3 Years, B.Des', imageUrl: 'https://i.pinimg.com/736x/58/5b/62/585b62584e2d01119f854d556aeb4516.jpg' },
    { title: 'Interior Design', duration: '3 Years, B.Des', imageUrl: 'https://i.pinimg.com/1200x/30/c8/c4/30c8c4d796bafbdeec26cfbd161fb2ed.jpg' },
    { title: 'Product Design', duration: '3 Years, B.Des', imageUrl: 'https://i.pinimg.com/736x/10/3f/4b/103f4b850a0a0283c9534749d06c5468.jpg' },
    { title: 'Communication Design', duration: '2 Years, Diploma', imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&h=1000&auto=format&fit=crop' },
    { title: 'Fashion Management', duration: '2 Years, MBA', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=1000&auto=format&fit=crop' },
    { title: 'Graphic Design', duration: '2 Years, Diploma', imageUrl: 'https://i.pinimg.com/1200x/1a/b8/80/1ab880e94c978beb8ec1de80e7958cd5.jpg' },
    { title: 'Online Learning (SIDI+)', duration: '6 Months, Certificate', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=1000&auto=format&fit=crop', isNew: true },
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
                    {programsData.slice(0, 4).map((program) => (
                         <ProgramCard key={program.title} program={program} />
                    ))}
                </div>
                {programsData.length > 4 &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px] mt-8">
                         {programsData.slice(4).map((program) => (
                            <ProgramCard key={program.title} program={program} />
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default ProgramsSection;