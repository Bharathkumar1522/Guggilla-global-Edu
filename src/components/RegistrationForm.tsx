import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, User, Mail, Phone, BookOpen, CheckCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message?: string;
}

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Your actual EmailJS credentials
      const serviceId = 'service_tni7amd';
      const templateId = 'template_lxdr94g';
      const publicKey = 'PCK4G3jSKG0E291_2';

      const templateParams = {
        to_email: 'guggillarakkesh@gmail.com',
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        interested_in: data.interestedIn,
        message: data.message || 'No additional message provided',
        reply_to: data.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Free 30-minute consultation',
    'Personalized university recommendations',
    'SOP review and feedback',
    'Visa guidance checklist'
  ];

  return (
    <section className="form-section py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Get Free Guidance from Our Experts
            </h2>
            <p className="text-xl text-secondary-600">
              Start your study abroad journey with personalized advice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="registration-form bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span className="font-semibold">Success!</span>
                  </div>
                  <p className="mt-1 text-sm">Your inquiry has been sent successfully! We'll contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-semibold">Something went wrong. Please try again or contact us directly via WhatsApp.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-secondary-700 font-medium mb-2">
                      <User size={18} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-secondary-700 font-medium mb-2">
                      <Mail size={18} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email'
                        }
                      })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-secondary-700 font-medium mb-2">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter phone with country code"
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-secondary-700 font-medium mb-2">
                      <BookOpen size={18} />
                      Interested Course/Country
                    </label>
                    <select
                      {...register('interestedIn', { required: 'Please select an option' })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      <option value="">Select your interest</option>
                      <option value="UK - Engineering">UK - Engineering</option>
                      <option value="UK - Business & Management">UK - Business & Management</option>
                      <option value="UK - Computer Science">UK - Computer Science</option>
                      <option value="UK - Medicine">UK - Medicine</option>
                      <option value="UK - Arts & Humanities">UK - Arts & Humanities</option>
                      <option value="Other Countries">Other Countries</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                    {errors.interestedIn && (
                      <p className="text-red-500 text-sm mt-1">{errors.interestedIn.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-secondary-700 font-medium mb-2 block">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your goals or any specific questions..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="animated-button w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="hidden sm:block" />
                      <span className="text-sm sm:text-base">Submit & Get Free Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-secondary-500 text-center">
                  By submitting this form, you agree to receive communication from our team regarding your inquiry.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">What You'll Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Students Choose Us</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Visa Success*</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-sm opacity-90">Universities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1:1</div>
                    <div className="text-sm opacity-90">Guidance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;