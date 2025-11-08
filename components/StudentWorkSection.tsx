import React, { useState } from 'react';
import type { StudentWork } from '../types';

const workData: StudentWork[] = [
    { id: 1, category: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=800&auto=format&fit=crop' },
    { id: 2, category: 'Interiors', imageUrl: 'https://images.unsplash.com/photo-1537726235470-8504e3b77cb1?q=80&w=900&auto=format&fit=crop' },
    { id: 3, category: 'Workshops', imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop' },
    { id: 4, category: 'Exhibitions', imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop' },
    { id: 5, category: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
    { id: 6, category: 'Interiors', imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop' },
    { id: 7, 'category': 'Workshops', 'imageUrl': 'https://images.unsplash.com/photo-1519452575417-5e04442f4def?q=80&w=800&auto=format&fit=crop' },
    { id: 8, 'category': 'Exhibitions', 'imageUrl': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop' },
];

const categories: (StudentWork['category'] | 'All')[] = ['All', 'Fashion', 'Interiors', 'Workshops', 'Exhibitions'];

const StudentWorkSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<StudentWork['category'] | 'All'>('All');

    const filteredWork = activeFilter === 'All'
        ? workData
        : workData.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className="py-20 md:py-32 bg-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-black">Campus Life & Student Work</h2>
                    <p className="max-w-2xl mx-auto text-lg text-sidi-black/70 mt-4">Discover the vibrant creations and collaborations that happen every day at SIDI.</p>
                </div>
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${activeFilter === category ? 'bg-sidi-orange text-white' : 'bg-gray-200 text-sidi-black hover:bg-gray-300'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-6">
                    {filteredWork.map(item => (
                        <div key={item.id} className="overflow-hidden rounded-lg group relative break-inside-avoid">
                            <img src={item.imageUrl} alt={`Student work in ${item.category}`} className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentWorkSection;