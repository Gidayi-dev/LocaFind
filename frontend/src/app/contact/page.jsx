// app/contact/page.jsx
'use client';

import { useState } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+254 700 000 000",
      description: "Mon-Fri from 8am to 6pm",
      action: "Call Now"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "support@locafind.com",
      description: "We'll respond within 12 hours",
      action: "Send Email"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Come say hello at our office",
      action: "Get Directions"
    }
  ];

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#37353E] to-[#715A5A] text-gray-700 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
            <span className="block text-gray-500">We're Here to Help</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Have questions about Locafind? Need help with your business listing? 
            We're always happy to hear from our community.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border border-[#D3DAD9] hover:border-[#715A5A] hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-[#715A5A] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:bg-[#5a4a4a] transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-[#37353E] mb-3">{method.title}</h3>
                <p className="text-lg text-[#715A5A] font-semibold mb-2">{method.details}</p>
                <p className="text-[#44444E] mb-4">{method.description}</p>
                <button className="text-[#715A5A] font-semibold hover:text-[#5a4a4a] transition-colors">
                  {method.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section - MOVED TO TOP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-[#715A5A] text-white px-6 py-3 rounded-full mb-4">
                <span className="text-lg">❓</span>
                <span className="font-semibold">FAST ANSWERS</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to the questions we get asked the most
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    question: "How long does business verification take?",
                    answer: "Typically 24-48 hours. We manually review each submission to ensure accuracy and maintain quality standards."
                  },
                  {
                    question: "Is Locafind really free for businesses?",
                    answer: "Yes! Listing and verification are completely free. We believe in supporting local economies."
                  },
                  {
                    question: "Can I suggest a business I don't own?",
                    answer: "Absolutely! Community contributions are welcome. Business owners can later claim and verify listings."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#715A5A] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D3DAD9] to-[#b8c4c3] rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-[#37353E]">Q{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h4>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How accurate is the location data?",
                    answer: "We use GPS coordinates, community confirmation, and manual reviews for maximum accuracy."
                  },
                  {
                    question: "Can I update my business information?",
                    answer: "Yes! Business owners can claim their listing and update information anytime."
                  },
                  {
                    question: "Do you support businesses outside Kenya?",
                    answer: "Currently we're focused on Kenya, but we plan to expand to other regions soon."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#715A5A] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D3DAD9] to-[#b8c4c3] rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-[#37353E]">Q{index + 4}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h4>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ CTA */}
            <div className="text-center mt-12">
               {/* Additional Help Section */}
    <div className="text-center mt-12 pt-8 border-t border-gray-200">
      <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
      <button className="text-[#715A5A] font-semibold hover:text-[#5a4a4a] transition-colors inline-flex items-center gap-2">
        Contact our support team
        <span className="text-lg">→</span>
      </button>
    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Emergency Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch Directly</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Send us a message or call for immediate assistance
              </p>
              <div className="w-24 h-1 bg-[#715A5A] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200">
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="business">Business Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#715A5A] text-white py-4 rounded-xl hover:bg-[#5a4a4a] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Emergency Support */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#37353E] to-[#2a2830] rounded-3xl p-8 text-gray-900 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Emergency Support</h3>
                      <p className="text-gray-300">Critical issues requiring immediate attention</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-gray-900 mb-2">+254 745 691 986</div>
                      <div className="text-gray-300 text-sm">24/7 Critical Support Line</div>
                    </div>
                    
                    <p className="text-gray-300 text-sm">
                      Use this number for urgent technical issues affecting your business operations or critical platform problems.
                    </p>
                    
                    <button className="w-full bg-[#37353E] text-white py-4 rounded-xl hover:bg-red-600 transition-colors font-semibold text-lg flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Emergency Support
                    </button>
                  </div>
                </div>

                {/* Additional Contact Info */}
                <div className="bg-gradient-to-br from-[#D3DAD9] to-[#b8c4c3] rounded-3xl p-8 space-x-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#715A5A] rounded-xl flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Live Chat</div>
                        <div className="text-gray-700 text-sm">Available during business hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#715A5A] rounded-xl flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Office Visit</div>
                        <div className="text-gray-700 text-sm">Nairobi, Kenya - By appointment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

export default Contact;