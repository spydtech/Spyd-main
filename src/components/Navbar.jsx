import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dropdownOpenFor, setDropdownOpenFor] = useState(null); // Stores which item dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle
  const dropdownRef = useRef(null); // Reference for outside click detection

  const menuItems = [
    "Home",
    "Company",
    "Services",
    "Products",
    "Portfolio",
    "Careers",
    "Contact us",
  ];

  // Function to handle outside clicks and close dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpenFor(null);
    }
  };

  // Attach the click event listener on mount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle dropdown
  const toggleDropdown = (item) => {
    setDropdownOpenFor(dropdownOpenFor === item ? null : item);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6afd/6969/7f4008740e9cb8e93ea7c495aeef6cdc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1Q37h-RnsB0cNvstrzDggGXoCrOmMyFhQ2squMJ8YUNzRdZuH7AeutSjIQvtiTbOZy6~6TZc87nnIpC8cECwp0U40pZYQbk79aUcSuY1Q8oab5FUXn0ncY~HrSPjjgFlpGzWIFKzYvg74F4dHICjt3S277LXGiEKLeLAaRXh~-S~9v~qpcX1PMRjC60AKcFqWHxXXYTHsS4rYWqdILdlB5r--uB8M~ieSDQqNhIzkVSnmZFBO3d~bw5ZQjlWOYv3ZLq9cZAeR45IzbecCKlIUkuGgARCXkYUGXUfgDZG3aA37Bw7mj4ZssqXRN1hPGVXuyI-MGyuOAHou~6hy5QeA__"
            alt="SpY D Technology"
            className="h-10 mr-2"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-blue-600 hover:text-blue-800 focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              } font-semibold px-3 py-1 rounded cursor-pointer transition-all hover:bg-blue-600 hover:text-white relative`}
            >
              {item}

              {/* Dropdown Toggle Button */}
              {(item === "Company" || item === "Services") && (
                <button
                  onClick={() => toggleDropdown(item)}
                  className={`text-blue-700 hover:text-white justify-center items-center font-medium rounded-lg px-1 py-1 inline-flex items-center focus:outline-none transition-transform ${
                    dropdownOpenFor === item ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-2.5 h-2.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>
              )}

              {/* Dropdown Content */}
              {dropdownOpenFor === item && (
                <>
                  {/* Dropdown Content for "Company" */}
                  {item === "Company" && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full -left-20 mt-10 w-[700px] bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20"
                    >
                      <ul className="py-2 flex justify-center text-sm text-gray-700">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Vision & Mission
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            What Makes Us Different
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Our Core Values
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Dropdown Content for "Services" */}
                  {item === "Services" && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full -left-64 mt-10 w-[700px] bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20"
                    >
                      <ul className="py-2 flex justify-center text-sm text-gray-700">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            App Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Consulting
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/digitalmarketing"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Digital Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Try a Demo Button */}
        <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          TRY A DEMO
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="space-y-4 p-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  activeIndex === index ? "text-blue-600" : "text-blue-600"
                } font-semibold px-3 py-2 rounded cursor-pointer transition-all`}
              >
                {item}
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
