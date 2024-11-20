import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Line Above */}
        

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Vertical Line Between Columns */}
          <div className="absolute inset-y-0 left-1/4 w-px bg-blue-300 hidden md:block h-[250px] "></div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-blue-300 hidden md:block h-[250px]"></div>
          <div className="absolute inset-y-0 right-1/4 w-px bg-blue-300 hidden md:block h-[250px]"></div>

          {/* Column 1: Company Info */}
          <div className="space-y-10">
          <img 
          src="https://s3-alpha-sig.figma.com/img/6afd/6969/7f4008740e9cb8e93ea7c495aeef6cdc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1Q37h-RnsB0cNvstrzDggGXoCrOmMyFhQ2squMJ8YUNzRdZuH7AeutSjIQvtiTbOZy6~6TZc87nnIpC8cECwp0U40pZYQbk79aUcSuY1Q8oab5FUXn0ncY~HrSPjjgFlpGzWIFKzYvg74F4dHICjt3S277LXGiEKLeLAaRXh~-S~9v~qpcX1PMRjC60AKcFqWHxXXYTHsS4rYWqdILdlB5r--uB8M~ieSDQqNhIzkVSnmZFBO3d~bw5ZQjlWOYv3ZLq9cZAeR45IzbecCKlIUkuGgARCXkYUGXUfgDZG3aA37Bw7mj4ZssqXRN1hPGVXuyI-MGyuOAHou~6hy5QeA__"
          alt="SpY D Technology" 
          className="h-10  mr-2" 
        />
            <ul className="space-y-2">
              <li className="flex items-start">
                <LuMapPin className="mr-2 -mt-2 text-5xl"></LuMapPin>
                <p>Plot no-852, Meera Complex, Rd no-45, Madhapur, Hyderabad-81</p>
              </li>
              <li className="flex items-center">
                <FaRegAddressCard className="mr-2 text-xl"></FaRegAddressCard>
                <a
                  href="http://www.spydtech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.spydtech.com
                </a>
              </li>
              <li className="flex items-center">
                <IoMailOutline className="mr-2 text-xl font-bold"></IoMailOutline>
                <a href="mailto:info@spydtech.com" className="hover:underline">
                  info@spydtech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Main Links */}
          <div className="ml-10">
            <h2 className="text-xl font-bold mb-4 ">Main</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resource Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="ml-10">
            <h2 className="text-xl font-bold mb-4">Service</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  ERPNext
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Staffing Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Focus and Social Links */}
          <div className="ml-10">
            <h2 className="text-xl font-bold mb-4">Focus</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  ERPNext Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ERPNext Implementation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ERPNext Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Headless Ecommerce With ERPNext
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Websites with ERPNext
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Third-party integrations
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h2 className="font-bold mb-2">Follow us:</h2>
              <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300 text-2xl">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl">
                <FaLinkedinIn />
              </a>
            </div>
            </div>
          </div>
        </div>

       

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p>© 2024 SpY D Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
