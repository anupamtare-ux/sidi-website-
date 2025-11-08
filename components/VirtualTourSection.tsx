import React from 'react';

const VirtualTourSection: React.FC = () => {
    return (
        <section id="tour" className="py-20 md:py-32 bg-sidi-black text-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-white mb-6">
                        Explore Our Creative Space
                    </h2>
                    <p className="text-lg text-sidi-white/80 leading-relaxed">
                        Step inside SIDI and experience the environment where innovation thrives. Take a 360° tour of our state-of-the-art campus.
                    </p>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!4v1634036256329!6m8!1m7!1sCAoSLEFGMVFpcE5qV3ZfNlJ0N3B6V2FFV2FYV2lmLUZnZzRHY0h6VTlROTdZcE1t!2m2!1d21.250651!2d81.639145!3f234.95!4f-1.95!5f0.78125" 
                        width="100%" 
                        height="600" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="SIDI Campus Virtual Tour"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VirtualTourSection;
