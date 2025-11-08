(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bookmarkedShops",
    ()=>bookmarkedShops,
    "categories",
    ()=>categories,
    "shopTypes",
    ()=>shopTypes
]);
const shopTypes = [
    {
        id: 1,
        name: "All Shops"
    },
    {
        id: 2,
        name: "Kibanda"
    },
    {
        id: 3,
        name: "Supermarkets"
    },
    {
        id: 4,
        name: "Restaurant"
    },
    {
        id: 5,
        name: "Electronics"
    },
    {
        id: 6,
        name: "Clothing"
    },
    {
        id: 7,
        name: "Pharmacies"
    },
    {
        id: 8,
        name: "Hardware"
    }
];
const categories = [
    {
        id: 1,
        name: "All Categories"
    },
    {
        id: 2,
        name: "Food & Drinks"
    },
    {
        id: 3,
        name: "Electronics"
    },
    {
        id: 4,
        name: "Fashion"
    },
    {
        id: 5,
        name: "Home & Garden"
    },
    {
        id: 6,
        name: "Health and Beauty"
    },
    {
        id: 7,
        name: "Sports"
    },
    {
        id: 8,
        name: "Books"
    }
];
const bookmarkedShops = [
    {
        id: 1,
        name: "Mama Kevo Kibanda",
        type: "Kibanda"
    },
    {
        id: 2,
        name: "Khetias Supermarket",
        type: "Supermarket"
    },
    {
        id: 3,
        name: "TechHub Electronics",
        type: "Electronics"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/head.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // Fixed: 'react' to 'React'
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Navbar = ()=>{
    _s();
    const [isShopDropdownOpen, setIsShopDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBookmarksOpen, setIsBookmarksOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Fixed: 'isBookmarkOpen' to 'isBookmarksOpen'
    const [selectedShopType, setSelectedShopType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shopTypes"][0]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][0]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const shopDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bookmarksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
                        setIsShopDropdownOpen(false);
                    }
                    if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
                        setIsCategoryDropdownOpen(false);
                    }
                    if (bookmarksRef.current && !bookmarksRef.current.contains(event.target)) {
                        setIsBookmarksOpen(false); // Fixed: 'setIsBookmarkOpen' to 'setIsBookmarksOpen'
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleSearch = ()=>{
        console.log('Searching for:', {
            query: searchQuery,
            shopType: selectedShopType.name,
            category: selectedCategory.name
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "head-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "head text-center place-content-center flex bg-gray-300 h-7 text-xs items-center text-gray-700 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "LocalFind Ecommerce"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/head.jsx",
                            lineNumber: 298,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Quality guarantee of products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/head.jsx",
                            lineNumber: 301,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Fast returning program"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/head.jsx",
                            lineNumber: 304,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 303,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No additional fees"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/head.jsx",
                            lineNumber: 307,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 306,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/head.jsx",
                lineNumber: 296,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-section bg-white text-black h-15",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar flex place-content-around items-center ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo font-extrabold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "LocaFind"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/head.jsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/head.jsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-links gap-4 flex text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Super Deals"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Clothes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Food & Beverages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Electronics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Health care"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Beauty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/head.jsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-left gap-4 flex text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Track your order"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: "Register or Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/head.jsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center h-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                ref: shopDropdownRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsShopDropdownOpen(!isShopDropdownOpen),
                                                        className: "flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedShopType.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 379,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 transition-transform ".concat(isShopDropdownOpen ? 'rotate-180' : ''),
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M19 9l-7 7-7-7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/head.jsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 380,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 375,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isShopDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shopTypes"].map((shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedShopType(shop);
                                                                    setIsShopDropdownOpen(false);
                                                                },
                                                                className: "flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ".concat(selectedShopType.id === shop.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lg",
                                                                        children: shop.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/head.jsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: shop.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/head.jsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, shop.id, true, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/head.jsx",
                                                lineNumber: 374,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        placeholder: "Search for products...",
                                                        className: "w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        onKeyPress: (e)=>e.key === 'Enter' && handleSearch()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 409,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        ref: categoryDropdownRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setIsCategoryDropdownOpen(!isCategoryDropdownOpen),
                                                                className: "flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-w-[140px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: selectedCategory.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/head.jsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 transition-transform ".concat(isCategoryDropdownOpen ? 'rotate-180' : ''),
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/head.jsx",
                                                                            lineNumber: 427,
                                                                            columnNumber: 21
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/head.jsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 420,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            isCategoryDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setSelectedCategory(category);
                                                                            setIsCategoryDropdownOpen(false);
                                                                        },
                                                                        className: "block w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors ".concat(selectedCategory.id === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'),
                                                                        children: category.name
                                                                    }, category.id, false, {
                                                                        fileName: "[project]/src/app/components/head.jsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 432,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 419,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSearch,
                                                        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 452,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/head.jsx",
                                                lineNumber: 408,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                ref: bookmarksRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsBookmarksOpen(!isBookmarksOpen),
                                                        className: "flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/head.jsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 466,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Your Shops"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 462,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isBookmarksOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-2 border-b border-gray-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-gray-700",
                                                                    children: "Bookmarked Shops"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/head.jsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 475,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 text-gray-500 text-center",
                                                                children: "No bookmarked shops yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/head.jsx",
                                                                lineNumber: 478,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/head.jsx",
                                                        lineNumber: 474,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/head.jsx",
                                                lineNumber: 461,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 371,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/head.jsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/head.jsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/head.jsx",
                                            lineNumber: 488,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/head.jsx",
                                        lineNumber: 487,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/head.jsx",
                                lineNumber: 363,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/head.jsx",
                            lineNumber: 362,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/head.jsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/head.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/head.jsx",
        lineNumber: 295,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "y5livWfs6dnXGnrrVYthvZha/+8=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_1ecaaa4d._.js.map