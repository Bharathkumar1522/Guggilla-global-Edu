import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { initScrollAnimations, addHoverAnimations } from './utils/animations';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import StudySteps from './components/StudySteps';
import PartnerUniversities from './components/PartnerUniversities';
import PartneredCompanies from './components/PartneredCompanies';
import LoanPartners from './components/LoanPartners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize animations
    const timer = setTimeout(() => {
      initScrollAnimations();
      addHoverAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <Services />
      <WhyChooseUs />
      <StudySteps />
      <PartnerUniversities />
      <PartneredCompanies />
      <LoanPartners />
      <Testimonials />
      <Contact />
      <RegistrationForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;