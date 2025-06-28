import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Enhanced hero text animations
  gsap.fromTo('.hero-title', 
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
  );

  gsap.fromTo('.hero-subtitle', 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
  );

  gsap.fromTo('.hero-tagline', 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
  );

  gsap.fromTo('.hero-buttons', 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power3.out' }
  );

  // Hero image animation
  gsap.fromTo('.hero-image', 
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: 'power3.out' }
  );

  // Services cards stagger animation
  gsap.fromTo('.service-card',
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // University cards animation
  gsap.fromTo('.university-card',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.partner-universities-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Partnered companies animation
  gsap.fromTo('.partner-card',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.partnered-companies-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Loan partners animation
  gsap.fromTo('.loan-partner-card',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.loan-partners-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Contact section animation
  gsap.fromTo('.contact-content',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Form animation
  gsap.fromTo('.registration-form',
    { x: 40, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.form-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Testimonials animation
  gsap.fromTo('.testimonial-card',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Why choose us benefits
  gsap.fromTo('.benefit-item',
    { x: -30, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.benefits-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Steps timeline animation
  gsap.fromTo('.step-item',
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.steps-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export const addHoverAnimations = () => {
  // Service cards hover
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // Partner cards hover
  document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: 'power2.out',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.out',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      });
    });
  });

  // Loan partner cards hover
  document.querySelectorAll('.loan-partner-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: 'power2.out',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.out',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      });
    });
  });

  // Enhanced button hover animations
  document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { 
        scale: 1.05, 
        duration: 0.2, 
        ease: 'power2.out',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { 
        scale: 1, 
        duration: 0.2, 
        ease: 'power2.out',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      });
    });
  });
};