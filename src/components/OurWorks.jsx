import React from "react";

const OurWorks = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-[#38bdf8] py-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title and Subtitle */}
        <div className="justify-center ml-[20%]">
        <div className="bg-[#38bdf8] w-[600px]  rounded-full py-4 px-4 mb-8 mx-2 sm:mx-0">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">Our Works</h2>
          <p className="text-blue-800 mt-2">
            Our works are for clients who are spreading values and principles
            to the world to become a better place.
          </p>
          </div>
        </div>

        {/* Work Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 sm:px-0">
          <div className="bg-white shadow-md rounded-md p-4">
            Optimizing Safeguarding Workflows with OneRan
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            Enhancing Efficiency through OneRan Solutions
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            Crafting a Powerful Online Presence with OneRan
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            Designing Elegance: Your Unique Website Experience
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            Creating a Superb Professional Website for You
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            Revolutionizing Workouts with Asana Rebel Integration
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8">
          <button className="bg-blue-200 text-blue-800 px-6 py-2 rounded-md font-semibold hover:bg-blue-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
