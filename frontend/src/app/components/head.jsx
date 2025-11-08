// 'use client'
// import react, { useState, useRef, useEffect } from "react";
// import { shopTypes, categories, bookmarkedShops } from "../data/data";

// const Navbar = () => {
//     const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
//     const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//     const [isBookmarkOpen, setIsBookmarkOpen] = useState(false)
//     const [selectedShopType, setSelectedShopType] = useState(shopTypes[0])
//     const [selectedCategory, setSelectedCategory] = useState(categories[0])
//     const [searchQuery, setSearchQuery] = useState('');

//     const shopDropdownRef = useRef(null);
//     const categoryDropdownRef = useRef(null);
//     const bookmarksRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
//                 setIsShopDropdownOpen(false)
//             }
//             if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)){
//                 setIsCategoryDropdownOpen(false)
//             }
//             if (bookmarksRef.current && ! bookmarksRef.current.contains(event.target)) {
//                 setIsBookmarkOpen(false)
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside);
//         return() => document.removeEventListener('mousedown', handleClickOutside)
//     }, []);

//     const handlesSearch = () => {
//         console.log('Searchind for:', {
//             query: searchQuery,
//             shopType: selectedShopType.name,
//             category: selectedCategory.name
//         });
        
//     }
//     return(
//         <div className="head-container">
//         <div className="head text-center place-content-center flex bg-gray-300 h-7 text-xs items-center text-gray-700 gap-4">
//             <div>
//                 <p>LocalFind Ecommerce</p>
//             </div>
//             <div>
//                 <p>Quality guarantee of products</p>
//             </div>
//             <div>
//                 <p>Fast returning program</p>
//             </div>
//             <div>
//                 <p>No additional fees</p>
//             </div>
//         </div>
//         <div className="nav-section bg-white text-black h-15">

        
//         <div className="navbar flex place-content-around items-center ">
//             <div className="logo font-extrabold">
//                 <p>LocaFind</p>
//             </div>
//             <div className="nav-links gap-4 flex text-xs">
//                 <div>
//                 <a href="#">Super Deals</a>
//                 </div>
//                 <div>
//                 <a href="#">Clothes</a>
//                 </div>
//                 <div>
//                 <a href="#">Food & Beverages</a>
//                 </div>
//                 <div>
//                 <a href="#">Electronics</a>
//                 </div>
//                 <div>
//                 <a href="#">Health care</a>
//                 </div>
//                 <div>
//                 <a href="#">Beauty</a>
//                 </div>
//             </div>
//             <div className="nav-left gap-4 flex text-xs">
//                 <div>
//                 <a href="#">Track your order</a>
//                 </div>
//                 <div>
//                 <a href="#">Register or Sign in</a>
//                 </div>
//             </div>
//         </div>
//         {/* <div className="filter flex text-xs place-content-around p-1.5 font-thin text-gray-400 ">
//             <div className="store-filter w-80 border-gray-400 border-1 rounded-l p-1.5">
//             All Stores
//             </div>
//             <div className="heyy flex">
//             <div className="search-filter w-100 border-gray-400 border-1 rounded-l p-1.5">
//                 Search for products
//             </div>
//             <button>Search</button>
//             </div>
//             <div>
//                 Your Cart
//             </div>
//         </div> */}
//           <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-blue-600">LocaFind</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
            
//             {/* All Shops Dropdown */}
//             <div className="relative" ref={shopDropdownRef}>
//               <button
//                 onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
//                 className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
//               >
//                 <span>{selectedShopType.name}</span>
//                 <svg className={w-4 h-4 transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}} 
//                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {isShopDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                   {shopTypes.map((shop) => (
//                     <button
//                       key={shop.id}
//                       onClick={() => {
//                         setSelectedShopType(shop);
//                         setIsShopDropdownOpen(false);
//                       }}
//                       className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ${
//                         selectedShopType.id === shop.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
//                       }`}
//                     >
//                       <span className="text-lg">{shop.icon}</span>
//                       <span>{shop.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Search Section */}
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for products..."
//                 className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//               />

//               {/* Categories Dropdown */}
//               <div className="relative" ref={categoryDropdownRef}>
//                 <button
//                   onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
//                   className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-w-[140px]"
//                 >
//                   <span className="truncate">{selectedCategory.name}</span>
//                   <svg className={w-4 h-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}} 
//                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {isCategoryDropdownOpen && (
//                   <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                     {categories.map((category) => (
//                       <button
//                         key={category.id}
//                         onClick={() => {
//                           setSelectedCategory(category);
//                           setIsCategoryDropdownOpen(false);
//                         }}
//                         className={`block w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ${
//                           selectedCategory.id === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
//                         }`}
//                       >
//                         {category.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Search Button */}
//               <button
//                 onClick={handleSearch}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Search
//               </button>
//             </div>

//             {/* Your Shops */}
//             <div className="relative" ref={bookmarksRef}>
//               <button
//                 onClick={() => setIsBookmarksOpen(!isBookmarksOpen)}
//                 className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                         d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//                 </svg>
//                 <span>Your Shops</span>
//               </button>

//               {isBookmarksOpen && (
//                 <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                   <div className="px-4 py-2 border-b border-gray-200">
//                     <h3 className="font-semibold text-gray-700">Bookmarked Shops</h3>
//                   </div>
//                   <div className="px-4 py-3 text-gray-500 text-center">
//                     No bookmarked shops yet
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>


//         </div>

//         </div>
//     )
// }

// export default Navbar;
'use client'
import React, { useState, useRef, useEffect } from "react"; // Fixed: 'react' to 'React'
import { shopTypes, categories, bookmarkedShops } from "../data/data";

const Navbar = () => {
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isBookmarksOpen, setIsBookmarksOpen] = useState(false); // Fixed: 'isBookmarkOpen' to 'isBookmarksOpen'
    const [selectedShopType, setSelectedShopType] = useState(shopTypes[0])
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [searchQuery, setSearchQuery] = useState('');

    const shopDropdownRef = useRef(null);
    const categoryDropdownRef = useRef(null);
    const bookmarksRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
                setIsShopDropdownOpen(false)
            }
            if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)){
                setIsCategoryDropdownOpen(false)
            }
            if (bookmarksRef.current && !bookmarksRef.current.contains(event.target)) {
                setIsBookmarksOpen(false) // Fixed: 'setIsBookmarkOpen' to 'setIsBookmarksOpen'
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return() => document.removeEventListener('mousedown', handleClickOutside)
    }, []);

    const handleSearch = () => { // Fixed: 'handlesSearch' to 'handleSearch'
        console.log('Searching for:', { // Fixed: 'Searchind' to 'Searching'
            query: searchQuery,
            shopType: selectedShopType.name,
            category: selectedCategory.name
        });
        
    }
    return(
        <div className="head-container">
        <div className="head text-center place-content-center flex bg-gray-300 h-7 text-xs items-center text-gray-700 gap-4">
            <div>
                <p>LocalFind Ecommerce</p>
            </div>
            <div>
                <p>Quality guarantee of products</p>
            </div>
            <div>
                <p>Fast returning program</p>
            </div>
            <div>
                <p>No additional fees</p>
            </div>
        </div>
        <div className="nav-section bg-white text-black h-15">

        
        <div className="navbar flex place-content-around items-center ">
            <div className="logo font-extrabold">
                <p>LocaFind</p>
            </div>
            <div className="nav-links gap-4 flex text-xs">
                <div>
                <a href="#">Super Deals</a>
                </div>
                <div>
                <a href="#">Clothes</a>
                </div>
                <div>
                <a href="#">Food & Beverages</a>
                </div>
                <div>
                <a href="#">Electronics</a>
                </div>
                <div>
                <a href="#">Health care</a>
                </div>
                <div>
                <a href="#">Beauty</a>
                </div>
            </div>
            <div className="nav-left gap-4 flex text-xs">
                <div>
                <a href="#">Track your order</a>
                </div>
                <div>
                <a href="#">Register or Sign in</a>
                </div>
            </div>
        </div>
        {/* Commented out filter section - keeping it as is */}
        {/* <div className="filter flex text-xs place-content-around p-1.5 font-thin text-gray-400 ">
            <div className="store-filter w-80 border-gray-400 border-1 rounded-l p-1.5">
            All Stores
            </div>
            <div className="heyy flex">
            <div className="search-filter w-100 border-gray-400 border-1 rounded-l p-1.5">
                Search for products
            </div>
            <button>Search</button>
            </div>
            <div>
                Your Cart
            </div>
        </div> */}
          <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">LocaFind</h1>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* All Shops Dropdown */}
            <div className="relative" ref={shopDropdownRef}>
              <button
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <span>{selectedShopType.name}</span>
                <svg className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`} // Fixed: added backticks
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {shopTypes.map((shop) => (
                    <button
                      key={shop.id}
                      onClick={() => {
                        setSelectedShopType(shop);
                        setIsShopDropdownOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ${
                        selectedShopType.id === shop.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{shop.icon}</span>
                      <span>{shop.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Section */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Fixed: 'handleSearch'
              />

              {/* Categories Dropdown */}
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-w-[140px]"
                >
                  <span className="truncate">{selectedCategory.name}</span>
                  <svg className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} // Fixed: added backticks
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ${
                          selectedCategory.id === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch} // Fixed: 'handleSearch'
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>

            {/* Your Shops */}
            <div className="relative" ref={bookmarksRef}>
              <button
                onClick={() => setIsBookmarksOpen(!isBookmarksOpen)} // Fixed: 'setIsBookmarksOpen'
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Your Shops</span>
              </button>

              {isBookmarksOpen && ( // Fixed: 'isBookmarksOpen'
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-700">Bookmarked Shops</h3>
                  </div>
                  <div className="px-4 py-3 text-gray-500 text-center">
                    No bookmarked shops yet
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>


        </div>

        </div>
    )
}

export default Navbar;