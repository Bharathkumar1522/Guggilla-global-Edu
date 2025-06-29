import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleWhatsAppClick = (countryCode: string) => {
    const phoneNumbers = {
      india: '+917731855953',
      uk: '+447803874492'
    };
    
    const message = encodeURIComponent('Hi! I would like to speak with a consultant about studying abroad.');
    const whatsappUrl = `https://wa.me/${phoneNumbers[countryCode as keyof typeof phoneNumbers]}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('guggillarakkesh@gmail.com');
      setCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'guggillarakkesh@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="contact-section py-20 bg-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 break-words">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto break-words">
            Ready to start your journey? Get in touch with our expert consultants
          </p>
        </div>

        <div className="contact-content max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8 w-full">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-3 rounded-full flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a 
                          href="mailto:guggillarakkesh@gmail.com" 
                          className="text-secondary-600 hover:text-blue-500 transition-colors duration-300 break-all text-sm sm:text-base"
                        >
                          guggillarakkesh@gmail.com
                        </a>
                        <button 
                          onClick={copyEmail}
                          className={`transition-all duration-300 flex-shrink-0 p-1 rounded ${
                            copied 
                              ? 'text-green-500 bg-green-50 scale-110' 
                              : 'text-secondary-400 hover:text-blue-500 hover:bg-blue-50'
                          }`}
                          title={copied ? 'Copied!' : 'Copy email'}
                        >
                          {copied ? (
                            <Check size={16} className="animate-pulse" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      {copied && (
                        <p className="text-xs text-green-600 mt-1 animate-fade-in">
                          Email copied to clipboard!
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-3 rounded-full flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <MapPin size={16} className="text-secondary-400 flex-shrink-0" />
                          <span className="text-secondary-600 text-sm sm:text-base break-all">India: +91 7731855953</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <MapPin size={16} className="text-secondary-400 flex-shrink-0" />
                          <span className="text-secondary-600 text-sm sm:text-base break-all">UK: +44 7803874492</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-3 rounded-full flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Office Hours</h3>
                    <div className="space-y-1 text-secondary-600 text-sm sm:text-base">
                      <p className="break-words">Monday - Friday: 9:00 AM - 7:00 PM (IST)</p>
                      <p className="break-words">Saturday: 10:00 AM - 5:00 PM (IST)</p>
                      <p className="break-words">Sunday: By appointment only</p>
                    </div>
                    <p className="text-sm text-blue-600 mt-2 font-medium break-words">Online consultations available across India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Buttons */}
            <div className="flex flex-col justify-center space-y-6 w-full">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-6 break-words">
                  Talk to a Consultant
                </h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => handleWhatsAppClick('india')}
                    className="animated-button w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-6 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full"
                  >
                    <MessageCircle size={24} className="flex-shrink-0" />
                    <span className="truncate">WhatsApp India</span>
                  </button>
                  
                  <button 
                    onClick={() => handleWhatsAppClick('uk')}
                    className="animated-button w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 sm:px-6 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full"
                  >
                    <MessageCircle size={24} className="flex-shrink-0" />
                    <span className="truncate">WhatsApp UK</span>
                  </button>
                </div>

                <p className="text-sm text-secondary-500 mt-4 break-words">
                  Get instant responses to your queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;