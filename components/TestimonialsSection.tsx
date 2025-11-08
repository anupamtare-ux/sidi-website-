import React, { useState } from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
    { name: 'Aisha Khan', quote: 'SIDI gave me the confidence to launch my own label. The faculty are true mentors.', outcome: 'Founder, AK Designs', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Ravi Kumar', quote: 'The practical workshops were a game-changer. I was industry-ready before I even graduated.', outcome: 'Interior Designer, XYZ Studio, Milan', imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Sunita Sharma', quote: 'The collaborative environment at SIDI is incredible. I built a network for life.', outcome: 'Lead UX Designer, Innovate Co.', imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&h=200&auto=format&fit=crop' },
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <section id="placements" className="py-20 md:py-32 bg-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-black">From Our Alumni</h2>
                    <p className="max-w-2xl mx-auto text-lg text-sidi-black/70 mt-4">See where a SIDI education can take you.</p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-80">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="flex flex-col items-center justify-center text-center h-full">
                                    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-6" />
                                    <p className="text-xl md:text-2xl font-playfair italic text-sidi-black mb-4">"{testimonial.quote}"</p>
                                    <div className="font-poppins font-semibold text-sidi-black">{testimonial.name}</div>
                                    <div className="text-sidi-orange">{testimonial.outcome}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors hidden md:block" aria-label="Previous testimonial">
                        &#8592;
                    </button>
                    <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors hidden md:block" aria-label="Next testimonial">
                        &#8594;
                    </button>
                     <div className="flex justify-center mt-8 space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-sidi-orange' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;