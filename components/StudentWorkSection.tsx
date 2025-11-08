import React, { useState } from 'react';
import type { StudentWork } from '../types';

const workData: StudentWork[] = [
    { id: 1, category: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { id: 2, category: 'Interiors', imageUrl: 'https://images.unsplash.com/photo-1530018607932-654560a2d5b8?q=80&w=800&auto=format&fit=crop' },
    { id: 3, category: 'Workshops', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop' },
    { id: 4, category: 'Exhibitions', imageUrl: 'https://images.unsplash.com/photo-1543168256-41881f5281d8?q=80&w=600&auto=format&fit=crop' },
    { id: 5, category: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1585255318859-f5c71e1a83e7?q=80&w=700&auto=format&fit=crop' },
    { id: 6, category: 'Interiors', imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=900&auto=format&fit=crop' },
    { id: 7, 'category': 'Fashion', 'imageUrl': 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop' },
    { id: 8, 'category': 'Workshops', 'imageUrl': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop' },
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