module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/components/Hero/Hero.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // components/HeroSection.jsx
// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchRadius, setSearchRadius] = useState(500);
//   const [liveStats, setLiveStats] = useState({
//     verifiedListings: 1247,
//     activeUsers: 89,
//     newToday: 23,
//     totalBusinesses: 4561
//   });
//   // Mock categories with icons and counts
//   const featuredCategories = [
//     { id: 'groceries', name: 'Groceries', icon: '🛒', count: 342, color: 'bg-blue-100 text-blue-800' },
//     { id: 'pharmacy', name: 'Pharmacy', icon: '💊', count: 127, color: 'bg-red-100 text-red-800' },
//     { id: 'restaurants', name: 'Food & Dining', icon: '🍴', count: 289, color: 'bg-green-100 text-green-800' },
//     { id: 'services', name: 'Services', icon: '🔧', count: 156, color: 'bg-purple-100 text-purple-800' },
//     { id: 'healthcare', name: 'Healthcare', icon: '🏥', count: 98, color: 'bg-pink-100 text-pink-800' },
//     { id: 'electronics', name: 'Electronics', icon: '📱', count: 203, color: 'bg-yellow-100 text-yellow-800' },
//     { id: 'fashion', name: 'Fashion', icon: '👕', count: 178, color: 'bg-indigo-100 text-indigo-800' },
//     { id: 'beauty', name: 'Beauty', icon: '💄', count: 134, color: 'bg-teal-100 text-teal-800' },
//   ];
//   // Mock recent verifications for social proof
//   const recentActivity = [
//     { user: 'Sarah M.', action: 'verified', business: 'Kimathi Grocers', time: '2 min ago' },
//     { user: 'John D.', action: 'added', business: 'Westlands Pharmacy', time: '5 min ago' },
//     { user: 'Community', action: 'verified', business: '5 listings', time: '10 min ago' },
//   ];
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Search logic would go here
//     console.log('Searching:', { searchQuery, selectedCategory, searchRadius });
//   };
//   // Simulate live stats updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLiveStats(prev => ({
//         ...prev,
//         activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1,
//         newToday: prev.newToday + Math.floor(Math.random() * 2)
//       }));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section className="bg-[#D3DAD9] min-h-screen pt-20 pb-16">
//       <div className="container mx-auto px-4">
//         {/* Main Hero Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* Left Column - Primary Content */}
//           <div className="lg:col-span-2">
//             {/* Main Headline */}
//             <div className="mb-8">
//               <h1 className="text-5xl lg:text-6xl font-bold text-[#37353E] mb-4 leading-tight">
//                 Discover Local
//                 <span className="block text-[#715A5A]">Businesses Near You</span>
//               </h1>
//               <p className="text-xl text-[#44444E] mb-8 max-w-2xl">
//                 Find verified shops, services, and essentials within your neighborhood. 
//                 Powered by community contributions and real-time verification.
//               </p>
//             </div>
//             {/* Advanced Search Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-[#44444E]/10">
//               <form onSubmit={handleSearch} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {/* Search Input */}
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-[#37353E] mb-2">
//                       What are you looking for?
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         placeholder="Search for shops, services, products..."
//                         className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-[#D3DAD9]/20 text-[#37353E] placeholder-[#44444E]/60"
//                       />
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                         <svg className="w-5 h-5 text-[#715A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Category Filter */}
//                   <div>
//                     <label className="block text-sm font-medium text-[#37353E] mb-2">
//                       Category
//                     </label>
//                     <select
//                       value={selectedCategory}
//                       onChange={(e) => setSelectedCategory(e.target.value)}
//                       className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-[#D3DAD9]/20 text-[#37353E]"
//                     >
//                       <option value="all">All Categories</option>
//                       <option value="groceries">Groceries</option>
//                       <option value="pharmacy">Pharmacy</option>
//                       <option value="restaurants">Food & Dining</option>
//                       <option value="services">Services</option>
//                     </select>
//                   </div>
//                 </div>
//                 {/* Radius and Advanced Filters */}
//                 <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D3DAD9]">
//                   <div className="flex items-center space-x-4">
//                     <span className="text-sm text-[#44444E]">Search radius:</span>
//                     <div className="flex items-center space-x-2">
//                       {[250, 500, 1000, 2000].map((radius) => (
//                         <button
//                           key={radius}
//                           type="button"
//                           onClick={() => setSearchRadius(radius)}
//                           className={`px-3 py-1 text-sm rounded-full transition-colors ${
//                             searchRadius === radius
//                               ? 'bg-[#715A5A] text-white'
//                               : 'bg-[#D3DAD9] text-[#44444E] hover:bg-[#44444E] hover:text-white'
//                           }`}
//                         >
//                           {radius}m
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <button
//                       type="button"
//                       className="text-sm text-[#715A5A] hover:text-[#5a4a4a] flex items-center space-x-1"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
//                       </svg>
//                       <span>More Filters</span>
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-6 py-2 bg-[#715A5A] text-white rounded-lg hover:bg-[#5a4a4a] transition-colors flex items-center space-x-2"
//                     >
//                       <span>Search</span>
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//             {/* Quick Action Buttons */}
//             <div className="flex flex-wrap items-center gap-4 mb-8">
//               <Link 
//                 href="/suggest" 
//                 className="flex items-center space-x-2 px-6 py-3 bg-white text-[#37353E] rounded-lg shadow-md hover:shadow-lg transition-all border border-[#D3DAD9] hover:border-[#715A5A] group"
//               >
//                 <svg className="w-5 h-5 text-[#715A5A] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                 </svg>
//                 <span className="font-medium">Add a Business</span>
//               </Link>
//               <Link 
//                 href="/verify" 
//                 className="flex items-center space-x-2 px-6 py-3 bg-[#37353E] text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-[#44444E] group"
//               >
//                 <svg className="w-5 h-5 text-[#D3DAD9] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span className="font-medium">Verify Listings</span>
//               </Link>
//               <Link 
//                 href="/map" 
//                 className="flex items-center space-x-2 px-6 py-3 bg-white text-[#37353E] rounded-lg shadow-md hover:shadow-lg transition-all border border-[#D3DAD9] hover:border-[#715A5A] group"
//               >
//                 <svg className="w-5 h-5 text-[#715A5A] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                 </svg>
//                 <span className="font-medium">View Map</span>
//               </Link>
//             </div>
//           </div>
//           {/* Right Column - Stats & Activity */}
//           <div className="space-y-6">
//             {/* Live Stats Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#44444E]/10">
//               <h3 className="text-lg font-semibold text-[#37353E] mb-4 flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span>Live Community Stats</span>
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#44444E]">Verified Listings</span>
//                   <span className="font-semibold text-[#37353E]">{liveStats.verifiedListings.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#44444E]">Active Users Nearby</span>
//                   <span className="font-semibold text-[#37353E]">{liveStats.activeUsers}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#44444E]">New Today</span>
//                   <span className="font-semibold text-[#37353E]">+{liveStats.newToday}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[#44444E]">Total Businesses</span>
//                   <span className="font-semibold text-[#37353E]">{liveStats.totalBusinesses.toLocaleString()}</span>
//                 </div>
//               </div>
//               <div className="mt-4 pt-4 border-t border-[#D3DAD9]">
//                 <div className="flex items-center space-x-2 text-sm text-[#44444E]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                   <span>Updated in real-time</span>
//                 </div>
//               </div>
//             </div>
//             {/* Recent Activity */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#44444E]/10">
//               <h3 className="text-lg font-semibold text-[#37353E] mb-4">Recent Activity</h3>
//               <div className="space-y-3">
//                 {recentActivity.map((activity, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <div className="w-8 h-8 bg-[#D3DAD9] rounded-full flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 text-[#44444E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm text-[#37353E]">
//                         <span className="font-medium">{activity.user}</span>{' '}
//                         {activity.action === 'verified' ? 'verified' : 'added'}{' '}
//                         <span className="font-medium">{activity.business}</span>
//                       </p>
//                       <p className="text-xs text-[#44444E]">{activity.time}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button className="w-full mt-4 text-center text-sm text-[#715A5A] hover:text-[#5a4a4a] font-medium">
//                 View All Activity
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Featured Categories Grid */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-[#37353E]">Popular Categories</h2>
//             <Link href="/categories" className="text-[#715A5A] hover:text-[#5a4a4a] font-medium flex items-center space-x-1">
//               <span>View All</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
//             {featuredCategories.map((category) => (
//               <Link
//                 key={category.id}
//                 href={`/category/${category.id}`}
//                 className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center border border-[#D3DAD9] hover:border-[#715A5A]"
//               >
//                 <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
//                   {category.icon}
//                 </div>
//                 <h3 className="font-medium text-[#37353E] text-sm mb-1">{category.name}</h3>
//                 <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
//                   {category.count} listings
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         {/* Trust Indicators */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#44444E]/10">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="w-12 h-12 bg-[#715A5A] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold text-[#37353E] mb-2">Community Verified</h3>
//               <p className="text-[#44444E]">Every listing is verified by local users and business owners</p>
//             </div>
//             <div>
//               <div className="w-12 h-12 bg-[#715A5A] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold text-[#37353E] mb-2">Hyperlocal Focus</h3>
//               <p className="text-[#44444E]">Discover businesses within walking distance from your location</p>
//             </div>
//             <div>
//               <div className="w-12 h-12 bg-[#715A5A] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold text-[#37353E] mb-2">Always Free</h3>
//               <p className="text-[#44444E]">Completely free to use for both users and business owners</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default HeroSection;
// components/HeroSection.jsx
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching:', searchQuery);
//     // Navigate to search results
//   };
//   return (
//     <section className="bg-[#D3DAD9] min-h-[80vh] flex items-center">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Main Headline - Clean & Focused */}
//           <div className="mb-12">
//             <h1 className="text-5xl lg:text-7xl font-bold text-[#37353E] mb-6 leading-tight">
//               Find Local
//               <span className="block text-[#715A5A]">Businesses</span>
//             </h1>
//             <p className="text-xl lg:text-2xl text-[#44444E] max-w-2xl mx-auto leading-relaxed">
//               Discover verified shops and services in your neighborhood. 
//               Community-powered and always free.
//             </p>
//           </div>
//           {/* Simplified Search - Single Focus */}
//           <div className="bg-white rounded-2xl shadow-lg p-2 max-w-2xl mx-auto mb-8">
//             <form onSubmit={handleSearch} className="flex">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search for groceries, pharmacies, services..."
//                   className="w-full px-6 py-4 text-lg bg-transparent text-[#37353E] placeholder-[#44444E]/60 focus:outline-none rounded-2xl"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="px-8 py-4 bg-[#715A5A] text-white rounded-xl hover:bg-[#5a4a4a] transition-colors flex items-center space-x-2 text-lg font-medium"
//               >
//                 <span>Search</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>
//             </form>
//           </div>
//           {/* Minimal CTAs */}
//           <div className="flex items-center justify-center space-x-6">
//             <Link 
//               href="/suggest" 
//               className="inline-flex items-center space-x-3 px-8 py-4 bg-[#37353E] text-white rounded-xl hover:bg-[#44444E] transition-colors text-lg font-medium group"
//             >
//               <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//               </svg>
//               <span>Add a Business</span>
//             </Link>
//             <Link 
//               href="/how-it-works" 
//               className="text-[#44444E] hover:text-[#37353E] transition-colors text-lg font-medium border-b-2 border-transparent hover:border-[#715A5A] pb-1"
//             >
//               How it works →
//             </Link>
//           </div>
//           {/* Simple Trust Indicator */}
//           <div className="mt-16">
//             <div className="inline-flex items-center space-x-6 text-[#44444E] text-lg">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span>1,247+ verified listings</span>
//               </div>
//               <div className="h-6 w-px bg-[#44444E]/30"></div>
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-[#715A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 <span>89 people searching nearby</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default HeroSection;
}),
"[project]/src/app/components/Header/Header.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/Header/Header.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/Header/Header.jsx <module evaluation>", "default");
}),
"[project]/src/app/components/Header/Header.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/Header/Header.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/Header/Header.jsx", "default");
}),
"[project]/src/app/components/Header/Header.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/Header/Header.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/Header/Header.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import Image from "next/image";
// import Navbar from "./components/head";
// import Counter from "./components/button";
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Hero/Hero.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header/Header.jsx [app-rsc] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 11,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98b1c95d._.js.map