import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppClick = (countryCode: string) => {
    const phoneNumbers = {
      india: '+917731855953',
      uk: '+447803874492'
    };
    
    const message = encodeURIComponent('Hi! I would like to speak with a consultant about studying abroad.');
    const whatsappUrl = `https://wa.me/${phoneNumbers[countryCode as keyof typeof phoneNumbers]}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('guggillarakkesh@gmail.com');
    // You could add a toast notification here
  };

  return (
    <section className="contact-section py-20 bg-secondary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to start your journey? Get in touch with our expert consultants
          </p>
        </div>

        <div className="contact-content max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email</h3>
                      <div className="flex items-center gap-2">
                        <a 
                          href="mailto:guggillarakkesh@gmail.com" 
                          className="text-secondary-600 hover:text-blue-500 transition-colors duration-300"
                        >
                          guggillarakkesh@gmail.com
                        </a>
                        <button 
                          onClick={copyEmail}
                          className="text-secondary-400 hover:text-blue-500 transition-colors duration-300"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-secondary-400" />
                          <span className="text-secondary-600">India: +91 7731855953</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-secondary-400" />
                          <span className="text-secondary-600">UK: +44 7803874492</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Office Hours</h3>
                    <div className="space-y-1 text-secondary-600">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM (IST)</p>
                      <p>Saturday: 10:00 AM - 5:00 PM (IST)</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                    <p className="text-sm text-blue-600 mt-2 font-medium">Online consultations available across India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Buttons */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Talk to a Consultant
                </h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => handleWhatsAppClick('india')}
                    className="animated-button w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={24} />
                    WhatsApp India
                  </button>
                  
                  <button 
                    onClick={() => handleWhatsAppClick('uk')}
                    className="animated-button w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={24} />
                    WhatsApp UK
                  </button>
                </div>

                <p className="text-sm text-secondary-500 mt-4">
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