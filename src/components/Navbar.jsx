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
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import { Link, useNavigate } from "react-router-dom";

import { FaPerson } from "react-icons/fa6";
import logo from "../assets/Home/logo.png";

function Navbar() {
  const [dropdownOpenFor, setDropdownOpenFor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  const services = [
    {
      icon: faBox,
      title: "ERPNext TECHNOLOGY",
      link: "/services/erp/services",
      items: [
        { name: "Consulting", link: "/services/erp/consulting" },
        { name: "Implementation", link: "/services/erp/implementation" },
        { name: "Third-Party Integrations", link: "/services/erp/integrations" },
      ],
    },
    {
      icon: faCartShopping,
      title: "E-COMMERCE SOLUTIONS",
      link: "/service/ecommerce",
      items: [
        { name: "Magento eCommerce Development", link: "/service/ecommerce-details/magento" },
        { name: "Mobile Commerce (mCommerce)", link: "/service/ecommerce-details/mobile" },
        { name: "eCommerce", link: "/service/ecommerce-solutions" },
      ],
    },
    {
      icon: faLaptop,
      title: "FRONTEND",
      link: "/services/frontend",
      items: [
        { name: "Angular JS", link: "/services/angularjs" },
        { name: "React JS", link: "/services/reactjs" },
        { name: "NEXT JS", link: "/services/nextjs" },
      ],
    },
    {
      icon: faMobile,
      title: "MOBILE",
      link: "/services/mobile",
      items: [
        { name: "iPhone Application", link: "/services/iphone" },
        { name: "Android Application", link: "/services/android" },
        { name: "Hybrid App", link: "/services/hybrid" },
      ],
    },
    {
      icon: faServer,
      title: "Backend",
      link: "/services/backend",
      items: [
        { name: "Java", link: "/services/backend/javadevelopment" },
        { name: "PHP", link: "/services/backend/php" },
        { name: "Python", link: "/services/backend/pythondevelopment" },
      ],
    },

    {
      icon: faWindows,
      title: "MICROSOFT",
      link: "/services/microsoft",
      items: [
        { name: "Dynamics CRM", link: "/services/dynamics-crm" },
        { name: "ASP.NET Web Application", link: "/services/dotnet" },
        { name: "PowerBI", link: "/services/powerbi" },
      ],
    },

    {
      icon: faCloud,
      title: "OTHER SERVICES",
      link: "/services/othertech",
      items: [
        { name: "Cloud Technologies", link: "/services/cloudtech" },
        { name: "Software Testing", link: "/services/testing" },
        { name: "Advanced Technologies", link: "/services/ai&ml" },
      ],
    },
    {
      icon: faBullhorn,
      title: "DIGITAL MARKETING",
      link: "/services/digitalmarketing",
      items: [
        { name: "SEO Services", link: "/services/digitalmarketing/Seo" },
        { name: "PPC Management Services", link: "/services/digitalmarketing/Ppc" },
        { name: "SMM & Content Writing", link: "/services/digitalmarketing/Smm" },
      ],
    },
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Company", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    // { name: "Products", link: "/products" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contactus" },
  ];

  const companyItems = [
    { name: "About Us", link: "/aboutus", icon: GroupsOutlinedIcon },
    { name: "Vision & Mission", link: "/vision-and-mission", icon: PodcastsOutlinedIcon },
    { name: "What Makes Us Different", link: "/whatmakeus-different", icon: DvrOutlinedIcon },
    { name: "Our Core Values", link: "/ourcore-values", icon: ModelTrainingIcon },
    { name: "Staffing & Services", link: "/staffingservices", icon: FaPerson },
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
  const toggleMobileDropdown = (item) => {
    setMobileDropdownOpen(mobileDropdownOpen === item ? null : item);
  };
  

  const handleItemClick = () => {
    setDropdownOpenFor(null);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Simulate checking for login status from localStorage or a session
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set login status based on token presence
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex justify-between items-center lg:p-4 p-2 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img className="lg:w-56 lg:h-12" src={logo} alt="Logo" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden ">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-end ml-40 md:ml-92 text-blue-600 focus:outline-none space-x-10"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.hasDropdown ? (
                <span
                  className="cursor-pointer text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded"
                  onClick={() => toggleDropdown(item.name)}
                  onMouseEnter={() => item.hasDropdown && setDropdownOpenFor(item.name)}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.link}
                  onClick={handleItemClick}
                  className="text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded"
                >
                  {item.name}
                </Link>
              )}

              {item.hasDropdown && dropdownOpenFor === item.name && (
                <div
                  ref={dropdownRef}
                  className="absolute gap-10 -left-44 w-[1050px] -ml-[170%] mt-2 bg-white shadow-md rounded-lg z-10 p-2"
                >
                  {item.name === "Company" && (
                    <ul className="flex flex-row text-blue-600 space-y-2 p-4">
                      <Link to="/aboutus" onClick={handleItemClick}>
                        <li className="flex mt-2 items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
                          <GroupsOutlinedIcon className="text-blue-500" />
                          <span>About Us</span>
                        </li>
                      </Link>
                      <Link to="/vision-and-mission" onClick={handleItemClick}>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
                          <PodcastsOutlinedIcon className="text-blue-500" />
                          <span>Vision & Mission</span>
                        </li>
                      </Link>
                      <Link to="/whatmakeus-different" onClick={handleItemClick}>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
                          <DvrOutlinedIcon className="text-blue-500" />
                          <span>What Makes Us Different</span>
                        </li>
                      </Link>
                      <Link to="/ourcore-values" onClick={handleItemClick}>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
                          <ModelTrainingIcon className="text-blue-500" />
                          <span>Our Core Values</span>
                        </li>
                      </Link>
                      <Link to="/staffingservices" onClick={handleItemClick}>
                        <li className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">
                          <FaPerson className="text-blue-500" />
                          <span>Staffing & Services</span>
                        </li>
                      </Link>
                    </ul>
                  )}

                  {item.name === "Services" && (
                    <div className="p-4 grid grid-cols-4 gap-2">
                      {services.map((service, idx) => (
                        <div key={idx}>
                          <Link to={service.link} onClick={handleItemClick}>
                            <h3 className="text-blue-600 mb-2">
                              <FontAwesomeIcon icon={service.icon} className="mr-2" />
                              {service.title}
                            </h3>
                          </Link>
                          <ul>
                            {service.items.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={subItem.link}
                                  onClick={handleItemClick}
                                  className="text-gray-600 hover:text-blue-600"
                                >
                                  ➤ {subItem.name}
                                </Link>
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
        {/* Login/Logout Button */}
        {isLoggedIn ? (
  <button onClick={handleLogout} className="text-blue-600 hover:text-red-500">
    Logout
  </button>
) : (
  <Link to="/login" className="text-blue-600 hover:text-sky-500">
    Login
  </Link>
)}


        <Link to="/tryademo">
          <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            TRY A DEMO
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 shadow-lg">
          <ul className="space-y-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                {item.hasDropdown ? (
                  <>
                    {/* Dropdown Header */}
                    <div
                      className="flex justify-between items-center text-blue-600 font-semibold cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded"
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <span>{mobileDropdownOpen === item.name ? "▲" : "▼"}</span>
                    </div>

                    {/* Company Dropdown */}
                    {mobileDropdownOpen === item.name && item.name === "Company" && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {companyItems.map((company, idx) => (
                          <li key={idx}>
                            <Link
                              to={company.link}
                              onClick={handleItemClick}
                              className="flex items-center text-gray-600 hover:text-blue-600"
                            >
                              <FontAwesomeIcon
                                icon={company.icon}
                                className="mr-2 text-blue-500"
                              />
                              {company.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Services Dropdown */}
                    {mobileDropdownOpen === item.name && item.name === "Services" && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {services.map((service, idx) => (
                          <li key={idx}>
                            <Link
                              to={service.link}
                              onClick={handleItemClick}
                              className="flex items-center text-gray-600 hover:text-blue-600"
                            >
                              <FontAwesomeIcon
                                icon={service.icon}
                                className="mr-2 text-blue-500"
                              />
                              {service.title}
                            </Link>

                            {/* Sub-items */}
                            <ul className="ml-6 mt-1 space-y-1">
                              {service.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={subItem.link}
                                    onClick={handleItemClick}
                                    className="text-gray-500 hover:text-blue-600"
                                  >
                                    ➤ {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    onClick={handleItemClick}
                    className="block text-blue-600 font-semibold p-2 rounded hover:bg-blue-600 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Demo Button */}
          <div className="p-4  ">
          {/* Login/Logout Button */}
          {isLoggedIn ? (
  <button onClick={handleLogout} className="text-blue-600 hover:text-red-500">
    Logout
  </button>
) : (
  <Link to="/login" className="text-blue-600 hover:text-sky-500">
    Login
  </Link>
)}


            <Link to="/tryademo">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                TRY A DEMO
              </button>
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
