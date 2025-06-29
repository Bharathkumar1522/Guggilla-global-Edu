import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I found your website and would like to know more about studying abroad.');
    const whatsappUrl = `https://wa.me/917731855953?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Full navigation for desktop
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'Process', id: 'study-steps' },
    { name: 'Universities', id: 'partner-universities' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  // Trimmed navigation for mobile - only key sections
  const mobileNavLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img 
                src="/logo rg.pdf" 
                alt="Guggilla Global Education Logo"
                className="h-10 w-auto lg:h-12"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden">
                <div className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled ? 'bg-blue-500' : 'bg-white/20 backdrop-blur-sm'
                }`}>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">GG</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Guggilla Global
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-secondary-600' : 'text-white/80'
              }`}>
                Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-secondary-700' : 'text-white hover:text-blue-200'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={18} />
              <span className="hidden xl:inline">WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-secondary-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Using trimmed navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl border border-secondary-100">
            {mobileNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-6 py-3 text-secondary-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            
            <div className="px-6 py-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={18} />
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;