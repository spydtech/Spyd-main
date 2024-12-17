import React, { useEffect } from "react";
import image from "../../../assets/staffingServices/hero.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);

  return (
    <div className="font-serif">
      <div
        className="bg-cover bg-center text-center bg-[#0866E2] space-y-2 md:space-y-3 lg:space-y-5 py-2 h-44 md:h-56 lg:h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
        data-aos="fade-in"
      >
        <h1 className="text-white text-lg md:text-2xl lg:text-4xl"
        data-aos="fade-down"
        >Drive Your Candidate Experience</h1>
        <p 
        data-aos="fade-down"
        className="text-gray-100 text-xs md:text-sm lg:text-base w-64 md:w-80 lg:w-[520px] mx-auto">
          Drive & convert top talent with technology-enabled staffing websites,
          job boards, and career portals.
        </p>
        <button 
        data-aos="fade-down"
        className="bg-[#0866E2] px-2 py-1 md:px-4 md:py-2 text-sm lg:text-base text-white rounded-lg">Book a Demo</button>
      </div>
      
    </div>
  );
};

export default Hero;
