import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import image from "../assets/Home/home/methodology.png"

function Methodology() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-white min-h-screen py-10 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Background grid lines */}
      <div className="grid-lines"></div>

      {/* Banner */}
      <div className="text-center max-w-4xl z-10" 
       data-aos="fade-left"
      >
        <h1 className="text-lg md:text-3xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent md:mb-6">
          We are a one-stop, full-service, and turnkey solutions provider for
          Web, Mobility and Digital Marketing Services.
        </h1>
      </div>

      {/* Image Section */}
      <div className="my-8 flex justify-center z-10"
       data-aos="fade-right"
      >
        <img
          src={image}
          alt="Responsive Web Design"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Methodology Section */}
      <div className="text-center max-w-3xl md:mt-8 z-10"
       data-aos="fade-up"
      >
        <h2 className="md:text-2xl text-lg font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
          Our Methodology for Website Design
        </h2>
        <p className="text-[#141414] leading-relaxed md:text-lg text-sm">
          Crafting a website that aligns with your distinct business objectives. Explore our meticulous design process,
          meticulously designed to deliver tailor-made and goal-centric digital solutions.
        </p>
        
      </div>

      {/* Inline CSS for diamond grid background */}
      <style jsx>{`
        .grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, #c4c4c4 1px, transparent 1px),
            linear-gradient(-45deg, #c4c4c4 1px, transparent 1px);
          background-size: 40px 40px; /* Size of the diamond grid */
          opacity: 0.5; /* Transparency of the lines */
          pointer-events: none; /* Allows clicks to pass through */
          z-index: 0; /* Keeps lines behind the content */
        }
      `}</style>
    </div>
  );
}

export default Methodology;
