// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isProfilePage = location.pathname.startsWith("/profile");

//   return (
//     <div className="border-b  p-4 w-full bg-[#0c544e] rounded-2xl mt-3 shadow-md">
//       <div className="grid grid-cols-12 md:grid-cols-12 gap-4 items-center">

//         {/* Menu icon (visible on all screens) */}
//         <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start text-white cursor-pointer">
//           <button className="p-2 hover:bg-teal-700 rounded">
//             {/* Hamburger Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="col-span-4 md:col-span-2 flex justify-start items-center">
//           <Link to={"/"}>
//             <h1 className="text-2xl font-bold text-white">ShopMate</h1>
//           </Link>
//         </div>

//         {/* Search bar - hidden on small screens */}
//         {/* <div className="hidden md:flex md:col-span-5 justify-center items-center">
//           <input
//             type="text"
//             placeholder="Search for products, brands and more"
//             className="w-3/4 h-10 rounded-l-full border border-r-0 px-4 focus:outline-none bg-white"
//           />
//           <button className="bg-blue-500 text-white h-10 rounded-r-full px-4 hover:bg-blue-600">
//             Search
//           </button>
//         </div> */}

//         <div className="hidden md:flex md:col-span-5 justify-center items-center">
//           {!isProfilePage && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Search for products, brands and more"
//                 className="w-3/4 h-10 rounded-l-full border border-r-0 px-4 focus:outline-none bg-white"
//               />
//               <button className="bg-blue-500 text-white h-10 rounded-r-full px-4 hover:bg-blue-600">
//                 Search
//               </button>
//             </>
//           )}
//         </div>

//         {/* Info Text - hidden on small screens */}
//         <div className="hidden md:flex md:col-span-3 justify-end items-center pr-4">
//           <p className="text-xs text-white text-right">
//             Order now and get it within 15 min
//           </p>
//         </div>

//         {/* Cart and Profile */}
//         <div className="col-span-6 md:col-span-1 flex justify-end items-center space-x-4">


//           {/* Cart */}
//           <div className="relative cursor-pointer hover:bg-amber-400 rounded p-2 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//             </svg>
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//               3
//             </span>
//           </div>

//           {/* Profile */}
//           {
//             !isProfilePage && (

//               <div
//                 onClick={() => navigate('/profile')}
//                 className="cursor-pointer hover:bg-amber-400 rounded p-2 text-white"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>

//             )
//           }



//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;
// <div className="col-span-6 md:col-span-1 flex justify-end items-center space-x-4">
//   {/* Cart */}
//   <div className="relative cursor-pointer hover:bg-amber-400 rounded p-2 text-white">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//     </svg>
//     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//       3
//     </span>
//   </div>

//   {/* Profile */}
//   <div
//     onClick={() => navigate('/profile')}
//     className="cursor-pointer hover:bg-amber-400 rounded p-2 text-white">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
//     </svg>
//   </div>
// </div>

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith("/profile");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b p-4 w-full bg-[#0c544e] rounded-2xl mt-3 shadow-md">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-4 items-center">
        {/* Menu icon */}
        <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start text-white cursor-pointer">
          <button className="p-2 hover:bg-teal-700 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="col-span-4 md:col-span-2 flex justify-start items-center">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold text-white">ShopMate</h1>
          </Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex md:col-span-5 justify-center items-center">
          {!isProfilePage && (
            <>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-3/4 h-10 rounded-l-full border border-r-0 px-4 focus:outline-none bg-white"
              />
              <button className="bg-blue-500 text-white h-10 rounded-r-full px-4 hover:bg-blue-600">
                Search
              </button>
            </>
          )}
        </div>

        {/* Info Text */}
        <div className="hidden md:flex md:col-span-3 justify-end items-center pr-4">
          <p className="text-xs text-white text-right">
            Order now and get it within 15 min
          </p>
        </div>

        {/* Cart + Dropdown */}
        <div className="col-span-6 md:col-span-1 flex justify-end items-center space-x-4">

          {/* Cart */}
          <div className="relative cursor-pointer hover:bg-amber-400 rounded p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Dropdown menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="cursor-pointer hover:bg-amber-400 rounded p-2 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                <ul className="text-sm text-gray-700">
                  <li>
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Signup
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
