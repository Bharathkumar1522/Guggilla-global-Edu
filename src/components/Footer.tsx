import React from 'react';
import { MessageCircle, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo rg.pdf" 
                alt="Guggilla Global Education Logo"
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GG</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-400">
                Guggilla Global Education
              </h3>
            </div>
            <p className="text-secondary-300 mb-4 leading-relaxed">
              Your trusted partner for studying in the UK and beyond. We make your international education dreams come true.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/917731855953" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-whatsapp-500 transition-colors duration-300"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/guggilla-global-edu/" 
                className="text-secondary-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/guggillaglobaledu?igsh=MWRiZzRnNm9zcjNlMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">University Admissions</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">SOP & CV Writing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Visa Assistance</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Interview Preparation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Scholarship Guidance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="hover:text-primary-400 transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-primary-400 transition-colors duration-300 text-left"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a 
                  href="mailto:guggillarakkesh@gmail.com"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  guggillarakkesh@gmail.com
                </a>
              </div>
              <div>
                <p>India: +91 7731855953</p>
                <p>UK: +44 7803874492</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              Copyright © {currentYear} Guggilla Global Education. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
