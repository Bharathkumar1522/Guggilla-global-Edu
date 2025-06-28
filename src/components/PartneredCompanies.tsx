import React from 'react';
import { Building2, Users } from 'lucide-react';

const PartneredCompanies: React.FC = () => {
  const partners = [
    {
      name: 'Adventus.io',
      logo: '/WhatsApp Image 2025-06-20 at 09.32.37_457e76c1.jpg',
      description: 'Global Education Platform'
    },
    {
      name: 'ApplyBoard',
      logo: '/WhatsApp Image 2025-06-20 at 09.32.36_2fb8c2fc.jpg',
      description: 'Student Recruitment Platform'
    }
  ];

  return (
    <section className="partnered-companies-section py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="text-blue-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
              Our Technology Partners
            </h2>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We collaborate with leading education technology platforms to enhance your application experience
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="partner-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 overflow-hidden group p-8"
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-secondary-600">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-green-500" size={32} />
            <h3 className="text-2xl font-bold text-secondary-900">Partnership Benefits</h3>
          </div>
          <p className="text-secondary-600 mb-6 leading-relaxed">
            Through our strategic partnerships, we provide you with cutting-edge tools and platforms 
            that streamline your application process and enhance your chances of success.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Advanced application tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Real-time university updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Enhanced document management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneredCompanies;