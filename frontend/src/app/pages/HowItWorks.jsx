// components/HowItWorks.jsx
'use client';

import { useState } from 'react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const userJourneys = {
    discover: {
      title: "For Explorers",
      subtitle: "Find what you need nearby",
      description: "Quickly locate essential services and businesses around you without any hassle.",
      steps: [
        {
          icon: "📍",
          title: "Allow Location",
          description: "Enable location access to see businesses in your immediate area"
        },
        {
          icon: "🔍",
          title: "Search & Filter",
          description: "Find specific categories or use keywords to narrow down results"
        },
        {
          icon: "🏪",
          title: "View Listings",
          description: "See verified businesses with ratings, distance, and contact info"
        },
        {
          icon: "🛣️",
          title: "Get Directions",
          description: "Navigate directly to your chosen business with one click"
        }
      ],
      cta: "Start Exploring",
      color: "from-blue-500 to-purple-600"
    },
    contribute: {
      title: "For Contributors",
      subtitle: "Help build the community map",
      description: "Add missing businesses and verify information to help your neighbors.",
      steps: [
        {
          icon: "➕",
          title: "Add Business",
          description: "Submit a new business that's not yet in our directory"
        },
        {
          icon: "✅",
          title: "Verify Information",
          description: "Confirm details for existing listings to improve accuracy"
        },
        {
          icon: "📸",
          title: "Add Photos",
          description: "Upload pictures to help others recognize the business"
        },
        {
          icon: "⭐",
          title: "Earn Reputation",
          description: "Build your community reputation with each contribution"
        }
      ],
      cta: "Start Contributing",
      color: "from-green-500 to-teal-600"
    },
    business: {
      title: "For Business Owners",
      subtitle: "Get discovered locally",
      description: "Claim your business listing and connect with customers in your neighborhood.",
      steps: [
        {
          icon: "🔍",
          title: "Find Your Business",
          description: "Search for your existing listing or create a new one"
        },
        {
          icon: "📱",
          title: "Verify Ownership",
          description: "Complete quick verification to claim your business"
        },
        {
          icon: "🎯",
          title: "Manage Listing",
          description: "Update hours, photos, contact info, and services"
        },
        {
          icon: "📈",
          title: "Get More Customers",
          description: "Appear in local searches and get discovered by neighbors"
        }
      ],
      cta: "Claim Your Business",
      color: "from-orange-500 to-red-600"
    }
  };

  const currentJourney = userJourneys[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-[#D3DAD9] to-[#f0f4f3]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#37353E] mb-4">
            How Locafind Works For You
          </h2>
          <p className="text-xl text-[#44444E]">
            Whether you're looking for services or want to contribute, we've got you covered
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(userJourneys).map(([key, journey]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-[#37353E] text-white shadow-lg transform scale-105'
                    : 'bg-white text-[#44444E] hover:bg-[#37353E] hover:text-white shadow-md'
                }`}
              >
                {journey.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Visual Steps */}
              <div className={`p-8 lg:p-12 bg-gradient-to-br ${currentJourney.color} text-white`}>
                <div className="max-w-md mx-auto lg:mx-0">
                  <h3 className="text-3xl font-bold mb-2">{currentJourney.title}</h3>
                  <p className="text-xl opacity-90 mb-8">{currentJourney.subtitle}</p>
                  
                  <div className="space-y-6">
                    {currentJourney.steps.map((step, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 group cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <span className="text-xl">{step.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                              Step {index + 1}
                            </span>
                            <h4 className="font-bold text-lg">{step.title}</h4>
                          </div>
                          <p className="text-white/80 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 bg-white text-[#37353E] py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    {currentJourney.cta}
                  </button>
                </div>
              </div>

              {/* Right Side - Interactive Preview */}
              <div className="p-8 lg:p-12 bg-white">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h4 className="text-2xl font-bold text-[#37353E] mb-4">
                    See It In Action
                  </h4>
                  <p className="text-[#44444E] mb-8">
                    {currentJourney.description}
                  </p>

                  {/* Interactive Mockup */}
                  <div className="bg-[#D3DAD9] rounded-2xl p-6 border border-[#44444E]/10">
                    {activeTab === 'discover' && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#715A5A] rounded-lg"></div>
                            <div>
                              <div className="font-semibold text-[#37353E]">Kimathi Grocers</div>
                              <div className="text-sm text-[#44444E]">250m away • 🛒 Groceries</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#715A5A] rounded-lg"></div>
                            <div>
                              <div className="font-semibold text-[#37353E]">Westlands Pharmacy</div>
                              <div className="text-sm text-[#44444E]">180m away • 💊 Pharmacy</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'contribute' && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-2xl mb-2">➕</div>
                            <div className="font-semibold text-[#37353E]">Add New Business</div>
                            <div className="text-sm text-[#44444E]">Help expand our directory</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-2xl mb-2">✅</div>
                            <div className="font-semibold text-[#37353E]">Verify Listing</div>
                            <div className="text-sm text-[#44444E]">Confirm business details</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'business' && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-[#37353E]">Your Business</div>
                              <div className="text-sm text-[#44444E]">Claim and manage listing</div>
                            </div>
                            <div className="w-8 h-8 bg-[#715A5A] rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-[#37353E]">Customer Insights</div>
                              <div className="text-sm text-[#44444E]">See who's finding you</div>
                            </div>
                            <div className="text-2xl">📊</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#37353E]">1.2k+</div>
                      <div className="text-xs text-[#44444E]">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#37353E]">4.5k+</div>
                      <div className="text-xs text-[#44444E]">Listings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#37353E]">98%</div>
                      <div className="text-xs text-[#44444E]">Accuracy</div>
                    </div>
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

export default HowItWorks;