import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section id="admissions" className="py-24 md:py-32 bg-sidi-black text-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-8">
                    Ready to begin your<br/> design journey?
                </h2>
                <a href="#" className="inline-block bg-sidi-orange text-white font-poppins px-12 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-xl">
                    Start Application
                </a>
            </div>
        </section>
    );
};

export default CtaSection;