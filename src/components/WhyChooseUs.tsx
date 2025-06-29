import React from 'react';
import { Award, Users, HeartHandshake, TrendingUp, Sparkles, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Users size={40} />,
      title: '1:1 Personalized Guidance',
      description: 'Every student gets dedicated attention with customized advice based on their unique goals and background.',
      color: 'blue'
    },
    {
      icon: <Award size={40} />,
      title: 'Real UK Education Experience',
      description: 'Our consultants have studied and worked in the UK, bringing firsthand knowledge to your journey.',
      color: 'green'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Modern Approach to Applications',
      description: 'We use the latest strategies and digital tools to make your application stand out in 2025.',
      color: 'purple'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Fresh Perspective',
      description: 'As a new consultancy, we bring innovative solutions without outdated practices.',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'text-blue-500 group-hover:bg-blue-50',
    green: 'text-green-500 group-hover:bg-green-50',
    purple: 'text-purple-500 group-hover:bg-purple-50',
    orange: 'text-orange-500 group-hover:bg-orange-50'
  };

  return (
    <section id="why-choose-us" className="benefits-section py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            New but trusted - we're committed to making your study abroad dreams come true
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-sm text-secondary-600">Universities Assisted</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-secondary-600">Visa Success Rate*</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-secondary-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-item text-center group hover:bg-white p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className={`${colorClasses[benefit.color as keyof typeof colorClasses]} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision section */}
        <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-secondary-900 mb-6">Our Vision</h3>
          <p className="text-lg text-secondary-600 leading-relaxed mb-6">
            Founded by passionate advisors to simplify your global education dream. We believe every student deserves personalized guidance and modern solutions for their international education journey.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" size={20} />
            <span className="text-blue-600 font-semibold">Making dreams accessible, one student at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;