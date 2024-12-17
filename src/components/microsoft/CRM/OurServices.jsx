import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSettings } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { PiHandTapLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";

function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="h-auto bg-[#00CEFF] py-12 px-4">
      <h1 
      data-aos="fade-down"
      className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
        Our CRM Services Include
      </h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {/* Card 1 */}
        <div 
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div
           
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <FiSettings 
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Enhancing the existing functionality
          </p>
        </div>

        {/* Card 2 */}
        <div 
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div 
          
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <LuUser
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Increase in-house capability to deploy single-tenant and multi-tenant solutions
          </p>
        </div>

        {/* Card 3 */}
        <div
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div 
          
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <PiHandTapLight 
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Offer user-friendly design with special settings installation
          </p>
        </div>

        {/* Card 4 */}
        <div 
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div 
          
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <FiSettings 
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Provide workflow customizations specific to your business processes
          </p>
        </div>

        {/* Card 5 */}
        <div 
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div 
          
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <FiSettings 
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Extending the solutions to WCF web services
          </p>
        </div>

        {/* Card 6 */}
        <div 
         data-aos="flip-up"
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 w-full sm:w-[45%] lg:w-[30%] max-w-sm">
          <div 
          
          className="flex items-center justify-center w-20 h-20 bg-[#00CEFF] rounded-full mb-6">
            <HiOutlineUserGroup 
             data-aos="fade-down"
            className="text-white text-3xl" />
          </div>
          <p className="text-[#00CEFF] font-medium text-lg leading-6">
            Offer advanced customization integrating third-party solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
