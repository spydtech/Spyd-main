import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md">
            <FaHandshake className="text-5xl mx-auto mb-4" />
            <h3 className=" text-base">
              High added Value Services
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md">
            <FaGlobe className="text-5xl mx-auto mb-4" />
            <h3 className=" text-base">Global Approach</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md">
            <HiUserGroup className="text-5xl mx-auto mb-4" />
            <h3 className=" text-base">
              Human and Talents at the Heart of Our Developments
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md">
            <FaLeaf className="text-5xl mx-auto mb-4" />
            <h3 className=" text-base">
              Commitment to a Virtuous Digital Transition
            </h3>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">
            Welcome to SpY D Technology
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
            SpY D Technology Private Limited is India’s leading, one-stop,
            full-scale, full-service software and information technology
            company. We thrive on cutting-edge, state-of-the-art, emerging
            technologies, offering a wide range of services and solutions in
            areas such as Web Technologies, Mobility Applications, Web & Mobile
            Products, Custom Applications, End-to-End Digital Transformation,
            Augmented and Virtual Reality, and Design Thinking Innovation and
            Digital Marketing Services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
