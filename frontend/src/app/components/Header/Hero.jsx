// components/Hero.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Hero = ({ categories }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Integrate with your search API
  };

  return (
    <section className="bg-[#D3DAD9]">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#37353E] mb-4">
            Discover Local Shops Instantly
          </h1>
          <p className="text-[#44444E] text-lg mb-6">
            Find groceries, pharmacies, services, and hidden gems around you in just a few clicks.
          </p>

          {/* Search Bar */}
          <div className="flex max-w-xl mx-auto lg:mx-0 mb-6">
            <input
              type="text"
              placeholder="Search for shops, groceries, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none text-[#37353E]"
            />
            <button
              onClick={handleSearch}
              className="bg-[#715A5A] text-white px-6 rounded-r-lg hover:bg-[#5a4a4a] transition-colors"
            >
              Search
            </button>
          </div>

          {/* Quick Category Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-[#44444E] text-[#D3DAD9] rounded-lg hover:bg-[#715A5A] hover:text-white transition-colors"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/suggest"
              className="px-6 py-3 bg-[#715A5A] text-white rounded-lg hover:bg-[#5a4a4a] transition-colors"
            >
              Suggest a Place
            </Link>
            <Link
              href="/verify"
              className="px-6 py-3 border border-[#715A5A] text-[#715A5A] rounded-lg hover:bg-[#715A5A] hover:text-white transition-colors"
            >
              Verify Listings
            </Link>
          </div>
        </div>

        {/* Right Illustration / Placeholder */}
        <div className="flex-1">
          <div className="w-full h-64 lg:h-96 bg-[#44444E] rounded-xl flex items-center justify-center text-[#D3DAD9] text-xl font-bold">
            Map / Illustration Here
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
