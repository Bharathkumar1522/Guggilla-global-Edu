import React from 'react';
import { MapPin } from 'lucide-react';

const PartnerUniversities: React.FC = () => {
  const universities = [
    {
      name: 'Coventry University',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      ranking: '#50 in UK',
      location: 'Coventry, England',
      programs: ['Engineering', 'Business', 'Computer Science']
    },
    {
      name: 'University of Hertfordshire',
      logo: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      ranking: '#67 in UK',
      location: 'Hatfield, England',
      programs: ['Business', 'Engineering', 'Health Sciences']
    },
    {
      name: 'University of East Anglia',
      logo: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      ranking: '#23 in UK',
      location: 'Norwich, England',
      programs: ['Medicine', 'Environmental Sciences', 'Creative Writing']
    },
    {
      name: 'BPP University',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      ranking: 'Specialist',
      location: 'London, England',
      programs: ['Law', 'Business', 'Health']
    },
    {
      name: 'Teesside University',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      ranking: '#89 in UK',
      location: 'Middlesbrough, England',
      programs: ['Engineering', 'Digital Media', 'Health Sciences']
    }
  ];

  return (
    <section className="partner-universities-section py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Partner Universities
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We work with top-ranked UK universities to help you achieve your academic goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {universities.map((university, index) => (
            <div 
              key={index}
              className="university-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={university.logo} 
                  alt={university.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-blue-600">{university.ranking}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {university.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={14} className="text-secondary-400" />
                  <span className="text-sm text-secondary-600">{university.location}</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-secondary-700 mb-2">Popular Programs:</h4>
                  <div className="flex flex-wrap gap-1">
                    {university.programs.map((program, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-600">And many more universities across the UK</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;