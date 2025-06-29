import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { initScrollAnimations, addHoverAnimations } from './utils/animations';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
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
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

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

    // Initialize animations and wait for completion
    const initializeApp = async () => {
      try {
        // Wait for initial animations to complete
        await initScrollAnimations();
        
        // Add hover animations
        addHoverAnimations();
        
        // Fade out loading screen
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
              setShowLoader(false);
            }
          });
        }
      } catch (error) {
        console.error('Error initializing animations:', error);
        // Fallback: hide loader after timeout
        setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeApp, 100);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      {showLoader && <LoadingScreen ref={loaderRef} />}
      
      <Navbar />
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