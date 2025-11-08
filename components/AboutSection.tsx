import React from 'react';

const milestones = [
    { year: 2010, event: "SIDI Founded" },
    { year: 2014, event: "First Graduating Class" },
    { year: 2018, event: "International Partnership" },
    { year: 2023, event: "New Campus Inaugurated" },
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-black mb-6">
                        We don't just teach design, <br/> we <span className="text-sidi-orange">live</span> it.
                    </h2>
                    <p className="text-lg text-sidi-black/80 leading-relaxed">
                        At SIDI, we believe in the power of <span className="font-semibold text-sidi-black">Creativity</span>, the drive of <span className="font-semibold text-sidi-black">Innovation</span>, and the synergy of <span className="font-semibold text-sidi-black">Collaboration</span> to shape the next generation of design leaders.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="relative">
                        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
                        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                            {milestones.map((item, index) => (
                                <div key={index} className="text-center group">
                                    <div className="relative flex justify-center items-center">
                                       <div className="w-4 h-4 rounded-full bg-gray-200 group-hover:bg-sidi-orange transition-colors duration-300"></div>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-poppins font-semibold text-sidi-orange">{item.year}</h3>
                                    <p className="text-sidi-black/70">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;