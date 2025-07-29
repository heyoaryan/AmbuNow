import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      urgency: 'normal'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize emergency response in your city? Let's discuss how AmbuNow can save more lives together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Save Lives Together</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every second counts in an emergency. Join us in creating a future where help arrives faster and lives are saved through intelligent technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emergency Hotline</div>
                  <div className="text-gray-600">+1 (555) AMBUNOW</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">contact@ambunow.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Headquarters</div>
                  <div className="text-gray-600">Delhi, India</div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Medical Emergency?</h4>
                  <p className="text-red-700">
                    If you're experiencing a medical emergency, please call 911 immediately. 
                    This form is for business inquiries and partnerships only.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Hospital, EMS Service, City Government, etc."
                />
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="normal">Normal Inquiry</option>
                  <option value="urgent">Urgent - Partnership Discussion</option>
                  <option value="critical">Critical - Implementation Needed</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your emergency response needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Emergency Signal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Emergency Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;