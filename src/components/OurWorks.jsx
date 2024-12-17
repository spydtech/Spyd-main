import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-700 to-[#38bdf8] py-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title and Subtitle */}
        <div className="flex justify-center">
          <div className="bg-[#38bdf8] w-[90%] sm:w-[600px] rounded-full py-4 px-4 mb-8"
          data-aos="fade-down"
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent"
           
            >
              Our Works
            </h2>
            <p className="text-blue-800 mt-2 text-sm sm:text-base">
              Our works are for clients who are spreading values and principles
              to the world to become a better place.
            </p>
          </div>
        </div>

        {/* Work Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 px-4 sm:px-0"
        data-aos="fade-up"
        >
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Optimizing Safeguarding Workflows with OneRan
          </div>
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Enhancing Efficiency through OneRan Solutions
          </div>
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Crafting a Powerful Online Presence with OneRan
          </div>
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Designing Elegance: Your Unique Website Experience
          </div>
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Creating a Superb Professional Website for You
          </div>
          <div 
           data-aos="fade-up"
          className="bg-white shadow-md rounded-md p-4 text-sm sm:text-base">
            Revolutionizing Workouts with Asana Rebel Integration
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8"
        data-aos="fade-up"
        >
          <button className="bg-blue-200 text-blue-800 px-4 sm:px-6 py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-blue-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
