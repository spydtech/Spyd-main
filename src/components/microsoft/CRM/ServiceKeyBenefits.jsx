import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdPlayArrow } from "react-icons/md";
import image1 from "../../../assets/Crm/dynamic/image1.png";

function ServiceKeyBenefits() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center max-w-7xl mx-auto mt-8 sm:mt-12 px-4">
      
      {/* Image Section */}
      <img 
      data-aos="fade-up"
        className="w-full max-w-[350px] h-auto object-cover mb-8 sm:mb-0 sm:mr-8" 
        src={image1}
        alt="CRM Benefits" 
      />

      {/* Text Section */}
      <div className="sm:ml-8">
        <h1 
        data-aos="fade-down"
        className="text-xl lg:text-2xl  text-[#00CEFF] text-center sm:text-left">
          The key benefits of CRM solutions include
        </h1>

        {/* List of Benefits */}
        <div className="mt-6 space-y-4">
          {[
            "Pay-as-you-go pricing model",
            "Dedicated API for each service offered",
            "Increase profitability and efficiency",
            "Seamless Database Management",
            "Security through compliance program and highly secure data centers",
            "Scalability regardless of application size",
          ].map((benefit, index) => (
            <div
            data-aos="fade-right"
            key={index} className="flex items-center">
              <MdPlayArrow className="text-[#00CEFF] text-2xl" />
              <p className="ml-3 text-sm sm:text-base lg:text-lg text-gray-800">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceKeyBenefits;
