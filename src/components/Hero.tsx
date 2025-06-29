import React from 'react';
import { MessageCircle, ArrowDown, GraduationCap, Plane, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsAppClick = (countryCode: string) => {
    const phoneNumbers = {
      india: '+917731855953',
      uk: '+447803874492'
    };
    
    const message = encodeURIComponent('Hi! I would like to know more about studying in the UK. Can you help me?');
    const whatsappUrl = `https://wa.me/${phoneNumbers[countryCode as keyof typeof phoneNumbers]}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden pt-16 lg:pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="animate-float absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
        <div className="animate-float absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="animate-float absolute bottom-40 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-15" style={{ animationDelay: '2s' }}></div>
        <div className="animate-float absolute bottom-20 right-10 w-12 h-12 bg-green-300 rounded-full opacity-25" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Animated icons */}
        <div className="animate-float absolute top-32 left-1/4 text-blue-300 opacity-30" style={{ animationDelay: '1.5s' }}>
          <GraduationCap size={32} />
        </div>
        <div className="animate-float absolute bottom-32 right-1/4 text-green-300 opacity-30" style={{ animationDelay: '2.5s' }}>
          <Plane size={28} />
        </div>
        <div className="animate-float absolute top-1/2 left-16 text-blue-400 opacity-25" style={{ animationDelay: '3s' }}>
          <MapPin size={24} />
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
              Guggilla Global
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text">
                Education
              </span>
            </h1>
            
            <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl text-secondary-700 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
              Your Study Abroad Journey Begins Here
            </h2>

            <p className="hero-tagline text-base sm:text-lg md:text-xl text-secondary-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              A newly launched consultancy helping Indian students study in the UK and beyond.
            </p>

            {/* Trust building caption */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <Star className="text-yellow-500 fill-current" size={20} />
              <span className="text-sm text-secondary-600 italic">We're new, but dedicated to your success</span>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <button 
                onClick={() => handleWhatsAppClick('india')}
                className="animated-button flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">Chat on WhatsApp (India)</span>
                <span className="sm:hidden">WhatsApp India</span>
              </button>
              
              <button 
                onClick={() => handleWhatsAppClick('uk')}
                className="animated-button flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">Chat on WhatsApp (UK)</span>
                <span className="sm:hidden">WhatsApp UK</span>
              </button>
            </div>

            <div className="animate-bounce-gentle lg:text-left">
              <ArrowDown className="mx-auto lg:mx-0 text-secondary-400" size={32} />
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Happy international students celebrating graduation at UK university"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Floating success badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-semibold text-secondary-700">100% Visa Success*</span>
                </div>
              </div>
              
              {/* Bottom info card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-500" size={20} />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-secondary-900">30+ Universities</p>
                    <p className="text-xs text-secondary-600">Partnered</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;