// app/components/CategoriesSection.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const CategoriesSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Food & Dining",
      icon: "🍽️",
      description: "Restaurants, cafes, food trucks, and local eateries",
      businessCount: "2,500+",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      popular: ["Nyama Choma", "Fast Food", "Cafes", "Bakeries"]
    },
    {
      id: 2,
      name: "Retail & Shops",
      icon: "🛍️",
      description: "Local stores, boutiques, supermarkets, and markets",
      businessCount: "3,200+",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      popular: ["Mama Mboga", "Clothing", "Electronics", "Hardware"]
    },
    {
      id: 3,
      name: "Health & Beauty",
      icon: "💇",
      description: "Salons, barbershops, spas, and wellness centers",
      businessCount: "1,800+",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      popular: ["Salons", "Barbers", "Spas", "Pharmacies"]
    },
    {
      id: 4,
      name: "Services",
      icon: "🔧",
      description: "Repair shops, cleaning, printing, and professional services",
      businessCount: "1,500+",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      popular: ["Repairs", "Cleaning", "Printing", "Consulting"]
    },
    {
      id: 5,
      name: "Education",
      icon: "📚",
      description: "Tutors, schools, training centers, and educational resources",
      businessCount: "900+",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      popular: ["Tutors", "Schools", "Vocational", "Music Lessons"]
    },
    {
      id: 6,
      name: "Home & Living",
      icon: "🏠",
      description: "Furniture, decor, appliances, and home improvement",
      businessCount: "1,200+",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      popular: ["Furniture", "Decor", "Appliances", "Construction"]
    },
    {
      id: 7,
      name: "Automotive",
      icon: "🚗",
      description: "Car repairs, spare parts, car washes, and dealers",
      businessCount: "850+",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      popular: ["Repairs", "Spare Parts", "Car Wash", "Dealers"]
    },
    {
      id: 8,
      name: "Entertainment",
      icon: "🎉",
      description: "Bars, clubs, events, and recreational activities",
      businessCount: "600+",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      popular: ["Bars", "Clubs", "Events", "Recreation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 bg-[#715A5A] text-white px-6 py-3 rounded-full mb-6">
            <span className="text-2xl">🔍</span>
            <span className="font-semibold">BROWSE BY CATEGORY</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find What You're Looking For
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore thousands of local businesses across different categories. 
            From your favorite restaurants to essential services, we've got you covered.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#715A5A] to-[#D3DAD9] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-20 h-20 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{category.icon}</span>
                </div>

                {/* Category Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#715A5A] transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Business Count */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-[#715A5A] bg-[#715A5A]/10 px-3 py-1 rounded-full">
                    {category.businessCount} businesses
                  </span>
                </div>

                {/* Popular Items - Visible on Hover */}
                <div className={`space-y-2 overflow-hidden transition-all duration-500 ${
                  hoveredCategory === category.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm font-semibold text-gray-700">Popular:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.popular.map((item, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View All Link */}
                <div className="mt-6 flex items-center text-[#715A5A] font-semibold group-hover:gap-2 transition-all">
                  <span>View All</span>
                  <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-16">
          <Link href="/categories">
            <button className="group relative bg-gradient-to-r from-[#715A5A] to-[#5a4a4a] text-white px-12 py-5 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Explore All Categories
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "12,000+", label: "Listed Businesses" },
            { number: "25+", label: "Categories" },
            { number: "8", label: "Cities Covered" },
            { number: "50,000+", label: "Monthly Visitors" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;