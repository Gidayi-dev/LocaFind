// components/HowItWorks.jsx
'use client';

import { useState } from 'react';
import {
  MapPin, Search, Store, Navigation,
  PlusCircle, CheckCircle, Camera, Star,
  ScanSearch, Smartphone, Settings, TrendingUp,
  ShoppingCart, Pill, ChevronRight
} from 'lucide-react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const userJourneys = {
    discover: {
      title: "For Explorers",
      subtitle: "Find what you need nearby",
      description: "Quickly locate essential services and businesses around you without any hassle.",
      steps: [
        { Icon: MapPin,      title: "Allow Location",  description: "Enable location access to see businesses in your immediate area" },
        { Icon: Search,      title: "Search & Filter", description: "Find specific categories or use keywords to narrow down results" },
        { Icon: Store,       title: "View Listings",   description: "See verified businesses with ratings, distance, and contact info" },
        { Icon: Navigation,  title: "Get Directions",  description: "Navigate directly to your chosen business with one click" },
      ],
      cta: "Start Exploring",
    },
    contribute: {
      title: "For Contributors",
      subtitle: "Help build the community map",
      description: "Add missing businesses and verify information to help your neighbors.",
      steps: [
        { Icon: PlusCircle,   title: "Add Business",        description: "Submit a new business that's not yet in our directory" },
        { Icon: CheckCircle,  title: "Verify Information",  description: "Confirm details for existing listings to improve accuracy" },
        { Icon: Camera,       title: "Add Photos",          description: "Upload pictures to help others recognize the business" },
        { Icon: Star,         title: "Earn Reputation",     description: "Build your community reputation with each contribution" },
      ],
      cta: "Start Contributing",
    },
    business: {
      title: "For Business Owners",
      subtitle: "Get discovered locally",
      description: "Claim your business listing and connect with customers in your neighborhood.",
      steps: [
        { Icon: ScanSearch,   title: "Find Your Business",  description: "Search for your existing listing or create a new one" },
        { Icon: Smartphone,   title: "Verify Ownership",    description: "Complete quick verification to claim your business" },
        { Icon: Settings,     title: "Manage Listing",      description: "Update hours, photos, contact info, and services" },
        { Icon: TrendingUp,   title: "Get More Customers",  description: "Appear in local searches and get discovered by neighbors" },
      ],
      cta: "Claim Your Business",
    },
  };

  const currentJourney = userJourneys[activeTab];

  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #D9E0E1 0%, #f0f4f3 100%)" }}>
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#3B3539" }}>
            How Locafind Works For You
          </h2>
          <p className="text-xl" style={{ color: "#5F6368" }}>
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
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300"
                style={
                  activeTab === key
                    ? { background: "#3B3438", color: "#FFFFFF", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", transform: "scale(1.05)" }
                    : { background: "#FFFFFF", color: "#5F6368", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }
                }
                onMouseOver={(e) => { if (activeTab !== key) { e.currentTarget.style.background = "#3B3438"; e.currentTarget.style.color = "#FFFFFF"; } }}
                onMouseOut={(e) => { if (activeTab !== key) { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#5F6368"; } }}
              >
                {journey.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left Side - Steps */}
              <div className="p-8 lg:p-12" style={{ background: "#3F3A44" }}>
                <div className="max-w-md mx-auto lg:mx-0">
                  <h3 className="text-3xl font-bold mb-1" style={{ color: "#FFFFFF" }}>
                    {currentJourney.title}
                  </h3>
                  <p className="text-lg mb-8" style={{ color: "#D9E0E1", opacity: 0.85 }}>
                    {currentJourney.subtitle}
                  </p>

                  <div className="space-y-6">
                    {currentJourney.steps.map(({ Icon, title, description }, index) => (
                      <div key={index} className="flex items-start gap-4 group cursor-pointer">
                        {/* Step icon */}
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                          style={{ background: "rgba(255,255,255,0.12)" }}
                          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                        >
                          <Icon size={20} color="#FFFFFF" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs font-medium px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(255,255,255,0.15)", color: "#D9E0E1" }}
                            >
                              Step {index + 1}
                            </span>
                            <h4 className="font-bold text-base" style={{ color: "#FFFFFF" }}>{title}</h4>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "#D9E0E1", opacity: 0.8 }}>
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full mt-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                    style={{ background: "#FFFFFF", color: "#3B3438" }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#D9E0E1")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#FFFFFF")}
                  >
                    {currentJourney.cta}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Side - Preview */}
              <div className="p-8 lg:p-12 bg-white">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h4 className="text-2xl font-bold mb-3" style={{ color: "#3B3539" }}>
                    See It In Action
                  </h4>
                  <p className="mb-8 text-sm leading-relaxed" style={{ color: "#5F6368" }}>
                    {currentJourney.description}
                  </p>

                  {/* Mockup card */}
                  <div className="rounded-2xl p-5" style={{ background: "#D9E0E1", border: "1px solid #c5cdd0" }}>

                    {activeTab === 'discover' && (
                      <div className="space-y-3">
                        {[
                          { name: "Kimathi Grocers",     meta: "250m away",  Icon: ShoppingCart },
                          { name: "Westlands Pharmacy",  meta: "180m away",  Icon: Pill         },
                        ].map(({ name, meta, Icon: I }) => (
                          <div key={name} className="bg-white rounded-xl p-4" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#7C605A20" }}>
                                <I size={18} color="#7C605A" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm" style={{ color: "#3B3539" }}>{name}</div>
                                <div className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#5F6368" }}>
                                  <MapPin size={10} /> {meta}
                                </div>
                              </div>
                              <div className="ml-auto">
                                <ChevronRight size={16} color="#5F6368" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'contribute' && (
                      <div className="space-y-3">
                        {[
                          { label: "Add New Business",  sub: "Help expand our directory",    Icon: PlusCircle  },
                          { label: "Verify Listing",    sub: "Confirm business details",      Icon: CheckCircle },
                        ].map(({ label, sub, Icon: I }) => (
                          <div key={label} className="bg-white rounded-xl p-4 text-center" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ background: "#3B343812" }}>
                              <I size={18} color="#3B3438" />
                            </div>
                            <div className="font-semibold text-sm" style={{ color: "#3B3539" }}>{label}</div>
                            <div className="text-xs mt-0.5" style={{ color: "#5F6368" }}>{sub}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'business' && (
                      <div className="space-y-3">
                        {[
                          { label: "Your Business",      sub: "Claim and manage listing",   Icon: Store,       check: true  },
                          { label: "Customer Insights",  sub: "See who's finding you",      Icon: TrendingUp,  check: false },
                        ].map(({ label, sub, Icon: I, check }) => (
                          <div key={label} className="bg-white rounded-xl p-4" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm" style={{ color: "#3B3539" }}>{label}</div>
                                <div className="text-xs mt-0.5" style={{ color: "#5F6368" }}>{sub}</div>
                              </div>
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: check ? "#2DBA6720" : "#3B343812" }}>
                                <I size={15} color={check ? "#2DBA67" : "#3B3438"} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    {[
                      { val: "1.2k+", label: "Active Users"  },
                      { val: "4.5k+", label: "Listings"      },
                      { val: "98%",   label: "Accuracy"      },
                    ].map(({ val, label }) => (
                      <div key={label}>
                        <div className="text-2xl font-bold" style={{ color: "#3B3539" }}>{val}</div>
                        <div className="text-xs mt-0.5" style={{ color: "#5F6368" }}>{label}</div>
                      </div>
                    ))}
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