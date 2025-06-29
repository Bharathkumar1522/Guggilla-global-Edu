import React from 'react';
import { Star, Quote, MapPin, MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I saw the success stories on your website and would like to start my study abroad journey. Can you help me?');
    const whatsappUrl = `https://wa.me/917731855953?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'MSc Computer Science',
      university: 'University of Edinburgh',
      location: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'The best decision I made — helped me get clarity in one call! Their personalized approach made all the difference in my application.',
      isNew: true
    },
    {
      name: 'Arjun Patel',
      course: 'MBA',
      university: 'London Business School',
      location: 'Delhi, India',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'Amazing support throughout my MBA application. They understood my goals and helped me craft a compelling story.',
      isNew: false
    },
    {
      name: 'Sneha Reddy',
      course: 'MA International Relations',
      university: 'King\'s College London',
      location: 'Bangalore, India',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'Professional, reliable, and genuinely caring. They made the complex visa process so much easier to navigate.',
      isNew: true
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section py-20 bg-secondary-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Hear from our students who are now studying at top UK universities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-white rounded-2xl p-8 shadow-lg relative transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-blue-500 rounded-full p-3">
                <Quote className="text-white" size={24} />
              </div>

              {testimonial.isNew && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Recent Success
                </div>
              )}

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-secondary-700 mb-6 leading-relaxed font-medium">
                "{testimonial.testimonial}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-600">{testimonial.course}</p>
                  <p className="text-sm text-blue-500 font-medium">{testimonial.university}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-secondary-400" />
                    <span className="text-xs text-secondary-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-secondary-300 mb-6">Ready to be our next success story?</p>
          <button 
            onClick={handleWhatsAppClick}
            className="animated-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={20} />
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;