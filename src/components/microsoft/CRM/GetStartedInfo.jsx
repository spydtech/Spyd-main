import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimage1 from "../../../assets/Crm/dynamic/bgimage1.png";
import image2 from "../../../assets/Crm/dynamic/image2.png";

function GetStartedInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="relative overflow-hidden  flex flex-col  "
      style={{
        backgroundImage: `url(${bgimage1})`,
            backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Flex Section for Text and Image */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:gap-24 lg:px-24 lg:pt-16 px-8 bg-transparent">
        <div className="lg:w-2/5">
          <h2 
          data-aos="fade-right"
          className="text-lg lg:text-2xl text-[#00CEFF] font-semibold">
            SpY D Technology Experience Transformation
          </h2>
          <p 
          data-aos="fade-right"
          className="mt-4 lg:mt-6 text-sm lg:text-lg text-[#333333] text-justify">
            With more than a decade of experience, our CRM Development India team has achieved a new height of unprecedented success through our CRM solutions and services. We help explore a new dimension in customer service by leveraging CRM platforms to support various relationship scenarios.
          </p>
        </div>
        <img
        data-aos="fade-up"
          className="mt-8 lg:mt-0 lg:h-[300px] lg:w-[320px] w-full max-w-xs lg:max-w-none object-contain"
         src={image2}
          alt="CRM Illustration"
        />
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 py-12 bg-transparent">
        <h1 
        data-aos="fade-right"
        className="text-sm lg:text-4xl text-[#0866E2]">
        Unlock the full potential of your customer relationships with 
        </h1>
        <h1 
        data-aos="fade-right"
        className="text-sm lg:text-4xl text-[#0866E2]">
        Microsoft Dynamics CRM by Spyd Technology. 
        Get Started Today!
        </h1>
        <p 
        data-aos="fade-right"
        className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-2xl text-[#141414] mx-auto w-full  lg:w-3/4">
          Contact us today to learn more about our tailored solutions and start driving meaningful business outcomes.
        </p>
        <button 
        data-aos="fade-up"
        className="mt-8 text-[#00CEFF] bg-white border rounded-lg shadow-t-lg lg:px-10 lg:py-5  text-lg sm:text-xl lg:text-sm mx-auto hover:bg-[#00b3ff] hover:text-white transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default GetStartedInfo;
