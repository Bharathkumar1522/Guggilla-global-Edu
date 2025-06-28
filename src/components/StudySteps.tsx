import React from 'react';
import { Search, FileText, CheckCircle, Plane, GraduationCap } from 'lucide-react';

const StudySteps: React.FC = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: 'Course Selection',
      description: 'We help you identify the perfect course and university based on your goals and qualifications.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Application Process',
      description: 'Complete application assistance including document preparation and submission.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'SOP & CV Help',
      description: 'Professional guidance to create compelling personal statements and CVs.'
    },
    {
      icon: <Plane size={32} />,
      title: 'Visa Support',
      description: 'Comprehensive visa guidance and interview preparation for successful approval.'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Pre-Departure',
      description: 'Final preparations including accommodation, flights, and pre-departure briefing.'
    }
  ];

  return (
    <section className="steps-section py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Your Journey to Study Abroad
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A step-by-step process designed to make your transition smooth and successful
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="step-item relative">
                  <div className="text-center">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full font-bold text-xl mb-6 relative z-10">
                      {index + 1}
                    </div>
                    
                    {/* Step icon */}
                    <div className="text-primary-500 mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    
                    {/* Step content */}
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySteps;