import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import StudentWorkSection from './components/StudentWorkSection';
import FacultySection from './components/FacultySection';
import CtaSection from './components/CtaSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-sidi-white overflow-x-hidden">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ProgramsSection />
                <StudentWorkSection />
                <FacultySection />
                <CtaSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
