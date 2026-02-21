// app/about/page.jsx
import LayoutWrapper from "../components/LayoutWrapper";

function About() {
  const values = [
    {
      icon: "👥",
      title: "Community First",
      description: "We build with communities, not for them. Every feature is designed around real local needs."
    },
    {
      icon: "🔍",
      title: "Radical Transparency",
      description: "Open verification processes and clear data practices you can trust and understand."
    },
    {
      icon: "🌱",
      title: "Sustainable Growth",
      description: "We grow organically with our communities, prioritizing quality over rapid expansion."
    },
    {
      icon: "💪",
      title: "Local Empowerment",
      description: "Providing tools that help small businesses compete and thrive in their neighborhoods."
    }
  ];

  const milestones = [
    { 
      year: "2025", 
      title: "The Beginning", 
      description: "Locafind was founded in Nairobi with a vision to transform local business discovery through community power."
    },
    { 
      year: "2025 Q2", 
      title: "First Prototype", 
      description: "Launched our first community-driven prototype with 50 local businesses in Nairobi."
    },
    { 
      year: "2025 Q4", 
      title: "Platform Launch", 
      description: "Officially launched Locafind platform with 1,000+ verified local business listings."
    },
    { 
      year: "2026 Q1", 
      title: "Community Growth", 
      description: "Reached 5,000 active users and expanded to 3 major Kenyan cities."
    }
  ];

  const stats = [
    { number: "1,000+", label: "Verified Local Businesses" },
    { number: "5,000+", label: "Active Community Members" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "24h", label: "Average Verification Time" }
  ];

  return (
    <LayoutWrapper>
      {/* Section 1: Our Story - Hero */}
      <section className="min-h-screen bg-gradient-to-br from-[#37353E] via-[#2d2b34] to-[#24222a] text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-60 h-60 bg-[#715A5A]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D3DAD9]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-[#D3DAD9] rounded-full animate-pulse"></span>
              <span className="text-lg text-white-700 font-large">OUR STORY</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-400">
                Building Bridges
              </span>
              <br />
              <span className="text-gray-400">
                In Communities
              </span>
            </h1>

            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto mb-8">
              Locafind began with a simple observation: the most essential local businesses the ones that form 
              the heartbeat of our neighborhoods were becoming invisible in the digital age. We're changing that.
            </p>

            <p className="text-lg text-gray leading-relaxed max-w-2xl mx-auto">
              Founded in 2025, we set out to create a platform where communities could collectively map 
              their local economy, ensuring no business remains hidden and no neighborhood need goes unmet.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-[#715A5A] mx-auto mb-8 rounded-full"></div>
            
            <div className="bg-gradient-to-br from-[#D3DAD9] to-[#b8c4c3] rounded-3xl p-8 md:p-12 mx-auto max-w-3xl">
              <p className="text-xl md:text-xl text-gray-800 leading-relaxed font-light italic">
                "To empower local communities by creating the most trusted platform for discovering 
                neighborhood businesses, ensuring every hidden gem gets the visibility it deserves."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision */}
      <section className="py-20 bg-[#37353E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Vision</h2>
            <div className="w-24 h-1 bg-[#D3DAD9] mx-auto mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <p className="text-gray-300">
                We envision a world where technology strengthens community bonds rather than replacing them. 
                Where local businesses thrive because they're discovered, supported, and celebrated by their neighborhoods.
              </p>
              
              <p className="text-gray-300">
                A future where every "mama mboga," every repair shop, every local service provider can compete 
                on equal footing and build sustainable businesses that serve their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-[#715A5A] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#715A5A] to-[#37353E] rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Journey
      <section className="py-20 bg-[#D3DAD9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-700">From idea to impact</p>
              <div className="w-24 h-1 bg-[#715A5A] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="bg-[#715A5A] text-white px-6 py-3 rounded-xl font-semibold min-w-32 text-center transform group-hover:scale-105 transition-transform duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 6: Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">By The Numbers</h2>
              <div className="w-24 h-1 bg-[#715A5A] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-gray to-gray-700 rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-4xl font-bold text-black mb-4">{stat.number}</div>
                    <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Join Us */}
      <section className="py-20 bg-gradient-to-br from-[#715A5A] to-[#5a4a4a] text-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Join Our Movement</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the community that's reshaping how neighborhoods discover and support local businesses. 
            Together, we're building a more connected future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg transform hover:scale-105 duration-300">
              Explore Local Businesses
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-gray rounded-xl hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg transform hover:scale-105 duration-300">
              Contact Our Team
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/30">
            <p className="text-gray-200 text-lg">Ready to make your local business discoverable?</p>
            <p className="text-gray-300 text-sm mt-2">Join thousands of businesses already on Locafind</p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

export default About;
// // app/about/page.jsx
// import LayoutWrapper from "../components/LayoutWrapper";

// function About() {
//   return (
//     <LayoutWrapper>
//       {/* Simple Hero */}
//       <section className="bg-white pt-16 pb-20">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-[#37353E] mb-6">
//               About Locafind
//             </h1>
//             <p className="text-lg text-[#44444E] leading-relaxed">
//               We're building a community-powered platform to help people discover local businesses 
//               and support neighborhood economies.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Single Column Story */}
//       <section className="py-16 bg-[#D3DAD9]">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
//             <h2 className="text-2xl font-bold text-[#37353E] mb-6">Our Story</h2>
//             <div className="space-y-6 text-[#44444E] leading-relaxed">
//               <p>
//                 Locafind started with a simple observation: while big tech companies were building 
//                 massive business directories, they were missing the smallest, most essential local 
//                 businesses that form the backbone of our communities.
//               </p>
//               <p>
//                 We saw mama mbogas, local repair shops, and neighborhood services operating without 
//                 any digital presence. These businesses were invisible to people just meters away 
//                 who needed their services.
//               </p>
//               <p>
//                 So we built Locafind - a platform where communities can collectively map their local 
//                 economy, ensuring that no business remains hidden and no neighborhood need goes unmet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Simple Mission */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#37353E] mb-4">Our Mission</h2>
//             <div className="w-20 h-1 bg-[#715A5A] mx-auto"></div>
//           </div>
          
//           <div className="bg-[#D3DAD9] rounded-2xl p-8 text-center">
//             <p className="text-xl text-[#37353E] font-medium">
//               To connect communities with local businesses, making it easier for people to 
//               discover and support the hidden gems in their neighborhoods.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Simple Stats */}
//       <section className="py-16 bg-[#37353E] text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#715A5A] mb-2">50k+</div>
//               <div className="text-[#D3DAD9]">Active Users</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#715A5A] mb-2">15k+</div>
//               <div className="text-[#D3DAD9]">Business Listings</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#715A5A] mb-2">25+</div>
//               <div className="text-[#D3DAD9]">Cities</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#715A5A] mb-2">98%</div>
//               <div className="text-[#D3DAD9]">Accuracy</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Simple CTA */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-2xl text-center">
//           <h2 className="text-2xl font-bold text-[#37353E] mb-4">Ready to explore your neighborhood?</h2>
//           <p className="text-[#44444E] mb-8">
//             Join thousands of users discovering local businesses around them.
//           </p>
//           <button className="bg-[#715A5A] text-white px-8 py-3 rounded-lg hover:bg-[#5a4a4a] transition-colors">
//             Get Started
//           </button>
//         </div>
//       </section>
//     </LayoutWrapper>
//   );
// }

// export default About;