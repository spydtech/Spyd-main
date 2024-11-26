// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [dropdownOpenFor, setDropdownOpenFor] = useState(null); // Stores which item dropdown is open
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle
//   const dropdownRef = useRef(null); // Reference for outside click detection

//   const menuItems = [
//     "Home",
//     "Company",
//     "Services",
//     "Products",
//     "Portfolio",
//     "Careers",
//     "Contact us",
//   ];

//   // Function to handle outside clicks and close dropdown
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpenFor(null);
//     }
//   };

//   // Attach the click event listener on mount
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Function to toggle dropdown
//   const toggleDropdown = (item) => {
//     setDropdownOpenFor(dropdownOpenFor === item ? null : item);
//   };

//   return (
//     <nav className="bg-white shadow-md relative">
//       <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/6afd/6969/7f4008740e9cb8e93ea7c495aeef6cdc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1Q37h-RnsB0cNvstrzDggGXoCrOmMyFhQ2squMJ8YUNzRdZuH7AeutSjIQvtiTbOZy6~6TZc87nnIpC8cECwp0U40pZYQbk79aUcSuY1Q8oab5FUXn0ncY~HrSPjjgFlpGzWIFKzYvg74F4dHICjt3S277LXGiEKLeLAaRXh~-S~9v~qpcX1PMRjC60AKcFqWHxXXYTHsS4rYWqdILdlB5r--uB8M~ieSDQqNhIzkVSnmZFBO3d~bw5ZQjlWOYv3ZLq9cZAeR45IzbecCKlIUkuGgARCXkYUGXUfgDZG3aA37Bw7mj4ZssqXRN1hPGVXuyI-MGyuOAHou~6hy5QeA__"
//             alt="SpY D Technology"
//             className="h-10 mr-2"
//           />
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="text-blue-600 hover:text-blue-800 focus:outline-none text-2xl"
//           >
//             {mobileMenuOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-6 relative">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`${
//                 activeIndex === index
//                   ? "bg-blue-600 text-white"
//                   : "text-blue-600"
//               } font-semibold px-3 py-1 rounded cursor-pointer transition-all hover:bg-blue-600 hover:text-white relative`}
//             >
//               {item}

//               {/* Dropdown Toggle Button */}
//               {(item === "Company" || item === "Services") && (
//                 <button
//                   onClick={() => toggleDropdown(item)}
//                   className={`text-blue-700 hover:text-white justify-center  font-medium rounded-lg px-1 py-1 inline-flex items-center focus:outline-none transition-transform ${
//                     dropdownOpenFor === item ? "rotate-180" : ""
//                   }`}
//                 >
//                   <svg
//                     className="w-2.5 h-2.5 ml-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 1l4 4 4-4"
//                     />
//                   </svg>
//                 </button>
//               )}

//               {/* Dropdown Content */}
//               {dropdownOpenFor === item && (
//                 <>
//                   {/* Dropdown Content for "Company" */}
//                   {item === "Company" && (
//                     <div
//                       ref={dropdownRef}
//                       className="absolute top-full -left-20 mt-10 w-[700px] bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20"
//                     >
//                       <ul className="py-2 flex justify-center text-sm text-gray-700">
//                         <li>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 hover:bg-gray-100"
//                           >
//                             About Us
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 hover:bg-gray-100"
//                           >
//                             Vision & Mission
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 hover:bg-gray-100"
//                           >
//                             What Makes Us Different
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 hover:bg-gray-100"
//                           >
//                             Our Core Values
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   )}

//                   {/* Dropdown Content for "Services" */}
//                   {item === "Services" && (
//                     <div
//                     ref={dropdownRef} className="absolute left-0 mt-2 w-[750px] bg-blue-50 shadow-lg rounded-lg p-6 grid grid-cols-4 gap-6 z-20">
//                     {/* Column 1 */}
//                     <div>
                     
//                       <li>
//         <details class="group">

//             <summary
//                 class="flex text-blue-600  font-semibold items-center justify-between gap-2 p-2  marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                         ERP Next
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-blue-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                 </ul>
//             </article>

//         </details>
//     </li>
                      
//     <li>
//         <details class="group">

//             <summary
//                 class="flex text-blue-600  font-semibold items-center justify-between gap-2 p-2  marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                         ERP Next
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-blue-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                 </ul>
//             </article>

//         </details>
//     </li>

//     <li>
//         <details class="group">

//             <summary
//                 class="flex text-blue-600  font-semibold items-center justify-between gap-2 p-2  marker:content-none hover:cursor-pointer">

//                 <span class="flex gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                         stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round"
//                             d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>

//                     <span>
//                         ERP Next
//                     </span>
//                 </span>
//                 <svg class="w-5 h-5 text-blue-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
//                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd"
//                         d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
//                     </path>
//                 </svg>
//             </summary>

//             <article class="px-4 pb-4">
//                 <ul class="flex flex-col gap-1 pl-2">
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                     <li><a href="">Document title</a></li>
//                 </ul>
//             </article>

//         </details>
//     </li>
//                     </div>
    
//                     {/* Column 2 */}
//                     <div>
//                       <h3 className="text-blue-600 font-bold mb-3">
//                         Performance Management
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-3">
//                         Unlock Your Employees' True Potential
//                       </p>
//                       <a
//                         href="#"
//                         className="text-blue-500 font-medium hover:underline"
//                       >
//                         Learn More →
//                       </a>
//                     </div>
    
//                     {/* Column 3 */}
//                     <div>
//                       <h3 className="text-blue-600 font-bold mb-3">
//                         Payroll & Expenses
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-3">
//                         100% Online and Audit-Ready Always
//                       </p>
//                       <a
//                         href="#"
//                         className="text-blue-500 font-medium hover:underline"
//                       >
//                         Learn More →
//                       </a>
//                     </div>
    
//                     {/* Column 4 */}
                   
//                   </div>
//                   )}
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Try a Demo Button */}
//         <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           TRY A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
//           <ul className="space-y-4 p-4">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`${
//                   activeIndex === index ? "text-blue-600" : "text-blue-600"
//                 } font-semibold px-3 py-2 rounded cursor-pointer transition-all`}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//           <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
//             TRY A DEMO
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartShopping,
  faLaptop,
  faMobile,
  faCloud,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import { Link } from "react-router-dom"

import { FaPerson } from "react-icons/fa6";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpenFor, setDropdownOpenFor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    {
      icon: faBox,
      title: "ERPNext TECHNOLOGY",
      items: ["Consulting", "Implementation", "Third-Party Integrations"],
    },
    {
      icon: faCartShopping,
      title: "E-COMMERCE SOLUTIONS",
      items: [
        "Magento eCommerce Development",
        "Mobile Commerce (mCommerce)",
        "eCommerce",
      ],
    },
    {
      icon: faLaptop,
      title: "FRONTEND",
      items: ["Angular JS", "React JS", "NEXT JS"],
    },
    {
      icon: faMobile,
      title: "MOBILE",
      items: ["iPhone Application", "Android Application", "Hybrid App"],
    },
    {
      icon: faCloud,
      title: "OTHER SERVICES",
      items: ["Cloud Technologies", "Software Testing", "Advanced Technologies"],
    },
    {
      icon: faBullhorn,
      title: "DIGITAL MARKETING",
      items: [
        "SEO Services",
        "PPC Management Services",
        "SMM & Content Writing",
      ],
    },
  ];

  const menuItems = [
    { name: "Home", hasDropdown: false },
    { name: "Company", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Products", hasDropdown: false },
    { name: "Portfolio", hasDropdown: false },
    { name: "Careers", hasDropdown: false },
    { name: "Contact Us", hasDropdown: false },
  ];

  // Close dropdown on outside click
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpenFor(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (item) => {
    setDropdownOpenFor(dropdownOpenFor === item ? null : item);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6afd/6969/7f4008740e9cb8e93ea7c495aeef6cdc?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dv05Fl5ckHcMt-s5ZV3Y7P1Bg7hLl3sV2ZjiA5Niyebv811vJcpTgS-uvJey5lY6PR0enPKEOqGSy0lV3iTHHCi-G35~~MjZOVHczVDDLo35mfnbgJZ14PjzHzUnw8ju-epKTcjB3kZLhvsoj0G1DNsAT~3DxVu4xZxMGIZSZ1fgzYvkxBQU0RAGpDWN8rP7cRLlUijI4YMZ82wtqMlc9Ke7CrVkEqP6xLRS77~V52c~SL8WhGU0gIaJApA0Q0p~om7U8CGtL~yXGrnRtZC1cH31Ydknx7C4t8j-kSqQgd5p-ZHjoKyfl1o~QBTuTHmzaOdMkH259F7mb~LPj53Vzg__"
            alt="SpY D Technology"
            className="h-10 mr-2"
          />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-blue-600 focus:outline-none"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
         {/* Desktop Menu */}
         <ul className="hidden lg:flex space-x-6 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => item.hasDropdown && setDropdownOpenFor(item.name)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpenFor(null)}
              className={`relative  px-3 py-2 rounded cursor-pointer ${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              } hover:bg-blue-600 hover:text-white`}
            >
              {item.name}

              {/* Dropdown toggle for desktop */}
              {item.hasDropdown && (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`ml-2 focus:outline-none ${
                    dropdownOpenFor === item.name ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </button>
              )}

              {/* Dropdown Content */}
              {dropdownOpenFor === item.name && (
                <div
                  ref={dropdownRef}
                  className="absolute gap-10  -left-44 w-[1050px] mt-2 bg-white shadow-md rounded-lg z-10 p-2"
                >
                {item.name === "Company" && (
  <ul className="flex flex-row text-blue-600 space-y-2 p-4">
    <Link to="/aboutus">
    <li className="flex mt-2 items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
      <GroupsOutlinedIcon className="text-blue-500" />
      <span>About Us</span>
    </li>
    </Link>
    <Link to="/vision-and-mission">
    <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
      <PodcastsOutlinedIcon className="text-blue-500" />
      <span>Vision & Mission</span>
    </li>
    </Link>
    <Link to="/whatmakeus-different">
    <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
      <DvrOutlinedIcon className="text-blue-500" />
      <span>What Makes Us Different</span>
    </li>
    </Link>
    <Link to="/ourcore-values">
    <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
      <ModelTrainingIcon className="text-blue-500" />
      <span>Our Core Values</span>
    </li>
    </Link>
    <Link to="/staffingservices">
    <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
      <FaPerson className="text-blue-500" />
      <span>Staffing & Services</span>
    </li>
    </Link>
    
  </ul>
)}


{item.name === "Services" && dropdownOpenFor === "Services" && (
                <div
                  ref={dropdownRef}
                  className="absolute  -left-44 w-[950px] -mt-2 bg-white shadow-md rounded-lg z-10 p-6 grid grid-cols-3 gap-10"
                >
                  {services.map((service, idx) => (
                    <div key={idx}>
                      <h3 className=" text-blue-600 mb-2">
                        <FontAwesomeIcon icon={service.icon} className="mr-2" />
                        {service.title}
                      </h3>
                      <ul className="space-y-1">
                        {service.items.map((subItem, subIdx) => (
                          <li
                            key={subIdx}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            ➤ {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
                </div>
              )}
            </li>
          ))}
        </ul>
        

        {/* Call-to-action Button */}
        <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          TRY A DEMO
        </button>
      </div>

      {/* Mobile Menu */}
    {/* Mobile Menu */}
    {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="space-y-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <div
                  className={`font-semibold text-blue-600 px-4 py-2 rounded flex justify-between items-center ${
                    item.hasDropdown ? "cursor-pointer" : ""
                  } hover:bg-blue-600 hover:text-white`}
                  onClick={() => {
                    if (item.hasDropdown) toggleDropdown(item.name);
                  }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <span>{dropdownOpenFor === item.name ? "▲" : "▼"}</span>
                  )}
                </div>
                {item.hasDropdown && dropdownOpenFor === item.name && (
                  <div className="pl-6 mt-2 bg-gray-100 rounded-md shadow-inner">
                    {item.name === "Company" && (
                      <ul className="space-y-2 py-2">
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
                          <GroupsOutlinedIcon className="text-blue-500" />
                          <span>About Us</span>
                        </li>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
                          <PodcastsOutlinedIcon className="text-blue-500" />
                          <span>Vision & Mission</span>
                        </li>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
                          <DvrOutlinedIcon className="text-blue-500" />
                          <span>What Makes Us Different</span>
                        </li>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
                          <ModelTrainingIcon className="text-blue-500" />
                          <span>Our Core Values</span>
                        </li>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
                          <FaPerson className="text-blue-500" />
                          <span>Staffing & Services</span>
                        </li>
                      </ul>
                    )}
                    {item.name === "Services" && (
                      <div className="p-4 grid grid-cols-1 gap-4">
                        {services.map((service, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-blue-600 mb-2">
                              <FontAwesomeIcon
                                icon={service.icon}
                                className="mr-2"
                              />
                              {service.title}
                            </h3>
                            <ul className="space-y-1">
                              {service.items.map((subItem, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                                >
                                  ➤ {subItem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
            TRY A DEMO
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
