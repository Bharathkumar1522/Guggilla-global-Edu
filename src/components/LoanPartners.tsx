import React from 'react';
import { MessageCircle, CreditCard } from 'lucide-react';

const LoanPartners: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about education loan options for studying abroad. Can you help me?');
    const whatsappUrl = `https://wa.me/917731855953?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const loanPartners = [
    {
      name: 'Kotak Mahindra Bank',
      logo: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1751114723/10212024-image3-equitymaster_kdxvfr.jpg'
    },
    {
      name: 'Prodigy Finance',
      logo: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1751114770/PF-logo_dshfx6.jpg'
    },
    {
      name: 'Avanse Financial Services',
      logo: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1751114722/images_rtfrqy.png'
    }
  ];

  return (
    <section className="loan-partners-section py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CreditCard className="text-green-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
              Our Banking Partners
            </h2>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Trusted financial institutions supporting your education journey
          </p>
        </div>

        {/* Banking Partner Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {loanPartners.map((partner, index) => (
            <div 
              key={index}
              className="loan-partner-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 overflow-hidden group p-8 flex items-center justify-center min-h-[140px]"
            >
              <img 
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-20 object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale hover:grayscale-0"
                onError={(e) => {
                  // Fallback to a placeholder if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/200x80/f1f5f9/64748b?text=${partner.name.replace(/\s+/g, '+')}`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-sm text-secondary-600">Banking Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹50L+</div>
            <div className="text-sm text-secondary-600">Loan Amount</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-secondary-600">Approval Rate*</div>
          </div>
        </div>

        {/* Help card */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Need Help with Education Loans?</h3>
          <p className="text-secondary-600 mb-6 leading-relaxed">
            Our experts will guide you through the entire loan application process, help you compare options, 
            and ensure you get the best rates for your study abroad journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free loan consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Document assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Application support</span>
            </div>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            <MessageCircle size={20} />
            Get Loan Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoanPartners;