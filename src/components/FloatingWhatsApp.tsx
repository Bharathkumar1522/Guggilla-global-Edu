import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (countryCode: string) => {
    const phoneNumbers = {
      india: '+917731855953',
      uk: '+447803874492'
    };
    
    const message = encodeURIComponent('Hi! I found your website and would like to know more about studying abroad.');
    const whatsappUrl = `https://wa.me/${phoneNumbers[countryCode as keyof typeof phoneNumbers]}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-secondary-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-secondary-900">Quick Contact</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-secondary-400 hover:text-secondary-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-secondary-600 mb-4 text-sm">
            Choose your preferred contact method:
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => handleWhatsAppClick('india')}
              className="w-full flex items-center gap-3 bg-whatsapp-500 hover:bg-whatsapp-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300"
            >
              <Phone size={18} />
              WhatsApp India
            </button>
            
            <button
              onClick={() => handleWhatsAppClick('uk')}
              className="w-full flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300"
            >
              <Phone size={18} />
              WhatsApp UK
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-whatsapp-500 hover:bg-whatsapp-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;