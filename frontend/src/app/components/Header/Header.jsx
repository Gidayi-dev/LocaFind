// components/Header.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [user, setUser] = useState(null); // Would come from auth context
  const [showLocationModal, setShowLocationModal] = useState(false);
  const pathname = usePathname();

  // Mock categories - would come from your database
  const categories = [
    { id: 'groceries', name: 'Groceries', icon: '🛒' },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊' },
    { id: 'restaurants', name: 'Food', icon: '🍴' },
    { id: 'services', name: 'Services', icon: '🔧' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
  ];

  // Mock user location detection
  useEffect(() => {
    // Simulate getting user location
    const detectLocation = () => {
      // In real app, this would use Geolocation API
      setTimeout(() => {
        setUserLocation({
          lat: -1.2921,
          lon: 36.8219,
          area: 'Nairobi CBD',
          lastUpdated: new Date()
        });
      }, 1000);
    };
    
    detectLocation();
  }, []);

  const handleSearch = (query) => {
    // Search logic would go here
    console.log('Searching for:', query);
  };

  const handleLocationSelect = (location) => {
    setUserLocation(location);
    setShowLocationModal(false);
  };

  return (
    <header className="bg-[#37353E] text-[#D3DAD9] shadow-lg">
      {/* Top Bar */}
      <div className="border-b border-[#44444E]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#715A5A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold text-white">Locafind</span>
              </Link>
               </div>

              {/* Search Bar */}
              {/* <div className="flex-1 max-w-2xl">
                <div className={`relative rounded-lg transition-all duration-200 ${
                  isSearchFocused ? 'ring-2 ring-[#715A5A] bg-white' : 'bg-[#44444E]'
                }`}>
                  <input
                    type="text"
                    placeholder="Search for shops, groceries, services..."
                    className="w-full py-2 px-4 bg-transparent text-[#37353E] placeholder-[#715A5A] focus:outline-none rounded-lg"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-[#715A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div> */}
           

            {/* User Auth Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  {/* Notifications */}
                  <button className="relative p-2 rounded-lg hover:bg-[#44444E] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25l-2 2v3h6.5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#715A5A] text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>

                  {/* User Profile Menu */}
                  <div className="flex items-center space-x-2 cursor-pointer group relative">
                    <div className="w-8 h-8 bg-[#715A5A] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                    <span className="text-sm">{user.name || 'User'}</span>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/profile" className="block px-4 py-2 text-[#37353E] hover:bg-[#D3DAD9]">
                        My Profile
                      </Link>
                      <Link href="/my-listings" className="block px-4 py-2 text-[#37353E] hover:bg-[#D3DAD9]">
                        My Listings
                      </Link>
                      <Link href="/favorites" className="block px-4 py-2 text-[#37353E] hover:bg-[#D3DAD9]">
                        Favorites
                      </Link>
                      <hr className="my-2 border-[#D3DAD9]" />
                      <button className="block w-full text-left px-4 py-2 text-[#37353E] hover:bg-[#D3DAD9]">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link href="/signup" className="px-4 py-2 text-sm rounded-lg border border-[#715A5A] text-[#715A5A] hover:bg-[#715A5A] hover:text-white transition-colors">
                    Sign In / Sign Up
                  </Link>
                  
                  <button className="px-4 py-2 text-sm rounded-lg bg-[#715A5A] text-white hover:bg-[#5a4a4a] transition-colors">
                    Add Business
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="border-b border-[#44444E]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            {/* Main Categories */}
            <div className="flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    pathname.includes(category.id) 
                      ? 'bg-[#715A5A] text-white' 
                      : 'text-[#D3DAD9] hover:bg-[#44444E]'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/suggest" 
                className="flex items-center space-x-2 text-sm text-[#D3DAD9] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Suggest a Place</span>
              </Link>
              
              <Link 
                href="/verify" 
                className="flex items-center space-x-2 text-sm text-[#D3DAD9] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verify Listings</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Contextual Bar */}
      <div className="bg-[#44444E]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            {/* Location Display */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#715A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Searching in:</span>
                <button 
                  onClick={() => setShowLocationModal(true)}
                  className="font-medium text-white hover:text-[#D3DAD9] transition-colors flex items-center space-x-1"
                >
                  <span>{userLocation?.area || 'Detecting location...'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Verification Status */}
              <div className="flex items-center space-x-2 text-[#D3DAD9]">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>124 verified listings nearby</span>
              </div>
            </div>

            {/* Announcements */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#D3DAD9]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>New: Mobile payments now supported!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#37353E] mb-4">Select Your Location</h3>
            <div className="space-y-2">
              {['Nairobi CBD', 'Westlands', 'Karen', 'Eastleigh', 'Kilimani'].map((area) => (
                <button
                  key={area}
                  onClick={() => handleLocationSelect({ area })}
                  className="w-full text-left px-4 py-3 rounded-lg border border-[#D3DAD9] hover:bg-[#D3DAD9] transition-colors text-[#37353E]"
                >
                  {area}
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                onClick={() => setShowLocationModal(false)}
                className="px-4 py-2 text-sm text-[#44444E] hover:text-[#37353E] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowLocationModal(false)}
                className="px-4 py-2 text-sm bg-[#715A5A] text-white rounded-lg hover:bg-[#5a4a4a] transition-colors"
              >
                Use Current Location
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;