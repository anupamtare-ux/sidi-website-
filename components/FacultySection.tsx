import React from 'react';
import type { FacultyMember } from '../types';

const facultyData: FacultyMember[] = [
    { name: 'Dr. Anjali Sharma', specialization: 'Head of Fashion', philosophy: 'Design is intelligence made visible.', imageUrl: 'https://images.unsplash.com/photo-1580894742443-029a1b44293a?q=80&w=400&h=400&auto=format&fit=crop' },
    { name: 'Rohan Mehta', specialization: 'Interior Architecture', philosophy: 'We shape our buildings; thereafter they shape us.', imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&h=400&auto=format&fit=crop' },
    { name: 'Priya Singh', specialization: 'Textile Innovation', philosophy: 'Creativity is a wild mind and a disciplined eye.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop' },
    { name: 'Vikram Patel', specialization: 'Digital Design', philosophy: 'Simplicity is the ultimate sophistication.', imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=400&auto=format&fit=crop' },
];

const FacultyCard: React.FC<{ member: FacultyMember }> = ({ member }) => (
    <div className="text-center flex flex-col items-center">
        <div className="relative w-40 h-40 mb-4">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full rounded-full object-cover shadow-lg" />
        </div>
        <h3 className="text-xl font-poppins font-semibold text-sidi-black">{member.name}</h3>
        <p className="text-sidi-orange">{member.specialization}</p>
        <p className="text-sidi-black/60 mt-2 italic max-w-xs">"{member.philosophy}"</p>
    </div>
);

const FacultySection: React.FC = () => {
    return (
        <section id="faculty" className="py-20 md:py-32 bg-[#f0f0f0] scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-black">Faculty & Mentors</h2>
                    <p className="max-w-2xl mx-auto text-lg text-sidi-black/70 mt-4">Learn from industry experts and passionate educators who guide your creative journey.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {facultyData.map((member, index) => (
                        <FacultyCard key={index} member={member} />
                    ))}
                </div>
                <div className="text-center mt-16">
                    <a href="#" className="border-2 border-sidi-orange text-sidi-orange font-poppins px-10 py-3 rounded-lg hover:bg-sidi-orange hover:text-white transition-all duration-300 text-lg">
                        Meet The Entire Team
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FacultySection;