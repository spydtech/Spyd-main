import React, { useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-10">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Cards */}
        <div className="grid perspective grid-cols-1 sm:grid-cols-2 gap-6"
         data-aos="fade-down"
        >
          {/* Card 1 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md transform transition-transform duration-500 hover:rotate-y-180">
            <FaHandshake className="text-5xl mx-auto mb-4" />
            <h3 className="text-base">High added Value Services</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md transform transition-transform duration-500 hover:rotate-y-180">
            <FaGlobe className="text-5xl mx-auto mb-4" />
            <h3 className="text-base">Global Approach</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md transform transition-transform duration-500 hover:rotate-y-180">
            <HiUserGroup className="text-5xl mx-auto mb-4" />
            <h3 className="text-base">Human and Talents at the Heart of Our Developments</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-600 text-white p-5 rounded-lg text-center shadow-md transform transition-transform duration-500 hover:rotate-y-180">
            <FaLeaf className="text-5xl mx-auto mb-4" />
            <h3 className="text-base">Commitment to a Virtuous Digital Transition</h3>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center text-justify lg:space-y-14"
         data-aos="fade-right"
        >
          <h2 className="text-2xl lg:-mt-10 md:text-3xl lg:text-4xl text-center bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">
            Welcome to SpY D Technology
          </h2>
          <p className="text-[#141414] text-sm md:text-base lg:text-base">
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
      <style jsx>
        {`
          .perspective {
            perspective: 1000px;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default WelcomeSection;
