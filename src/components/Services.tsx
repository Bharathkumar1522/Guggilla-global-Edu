import React from 'react';
import { GraduationCap, FileText, Import as Passport } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap size={48} />,
      title: 'University Admissions',
      description: 'Get help selecting and applying to UK universities that match your goals and qualifications.',
      features: ['Course Selection', 'Application Guidance', 'University Matching', 'Scholarship Assistance'],
      highlight: 'Most Popular'
    },
    {
      icon: <FileText size={48} />,
      title: 'SOP & CV Assistance',
      description: 'We craft impactful application documents tailored to you and your target universities.',
      features: ['Statement of Purpose', 'CV Optimization', 'Personal Statement', 'Document Review'],
      highlight: 'Expert Writers'
    },
    {
      icon: <Passport size={48} />,
      title: 'Visa & Interview Support',
      description: 'End-to-end support for your visa process and interviews to ensure your success.',
      features: ['Visa Application', 'Interview Preparation', 'Document Checklist', 'Mock Interviews'],
      highlight: '100% Success*'
    }
  ];

  return (
    <section className="services-section py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive support for your international education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 group relative overflow-hidden"
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </div>
              )}
              
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;