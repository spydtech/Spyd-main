import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center  shadow-md">
            
            <FaHandshake className="text-5xl justify-center ml-[40%] mb-4"></FaHandshake>
            <h3 className="font-semibold text-lg">High added Value Services</h3>
          </div>
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md">
            <FaGlobe className="text-5xl justify-center ml-[40%] mb-4"></FaGlobe>
            <h3 className="font-semibold text-lg">Global Approach</h3>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-lg text-center shadow-md">
            <HiUserGroup className="text-5xl justify-center ml-[40%] mb-4"></HiUserGroup>
            <h3 className="font-semibold text-lg">
              Human and Talents at the heart of our developments
            </h3>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-lg text-center shadow-md">
            <FaLeaf className="text-5xl justify-center ml-[40%] mb-4"></FaLeaf>
            <h3 className="font-semibold text-lg">
              Commitment to a Virtuous Digital Transition
            </h3>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-6">
            Welcome to SpY D Technology
          </h2>
          <p className="text-gray-700 text-xl md:text-base leading-relaxed w-4/7">
            SpY D Technology private limited is India’s leading, one-stop, 
            full-scale, full-service software and information technology company.
             We thrive on cutting-edge, state-of-the-art, emerging technologies, 
             offering a wide range of services and solutions in areas such as Web Technologies, 
             Mobility Applications, Web & Mobile Products, Custom Applications, 
             End-to-End Digital Transformation, Augmented and Virtual reality,
              and Design Thinking Innovation and Digital Marketing Services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
