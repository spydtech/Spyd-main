import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoPlaySharp } from "react-icons/io5";
import image from "../../../assets/dotnet/asp.net web application/devProcess/analytics.png";
import image1 from "../../../assets/dotnet/asp.net web application/devProcess/tracking.png";
import image2 from "../../../assets/dotnet/asp.net web application/devProcess/iot.png";
import image3 from "../../../assets/dotnet/asp.net web application/devProcess/delivery.png";
import image4 from "../../../assets/dotnet/asp.net web application/devProcess/data.png";
function DevProcess() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  

  return (
    <div className="bg-[#00ceff] text-white lg:py-">
      <h1 
      data-aos="zoom-in-up"
      className=" text-center text-lg lg:text-2xl py-3">
        Our Development Process
      </h1>

      <div className="px-20 py-3 md:py-7">
        <div className="flex justify-around -mb-2 md:-mb-6">
          <div className="flex flex-col items-center gap-1">
            <p 
            data-aos="fade-down"
            className="text-[8px] md:text-base text-center">
              Develop the App & <br />
              Data Analytics
            </p>
            <div 
            data-aos="fade-right"
            className="border-4 lg:border-8 p-2 md:p-3 lg:p-5 text-white rounded-full">
              <img
              data-aos="fade-right"
               src={image}
               alt=""
                className="w-4 md:w-6  md:h-6 lg:w-20 lg:h-20 p-4"
              />
            </div>
          </div>
          <div 
          data-aos="fade-down"
          className="flex flex-col items-center gap-1">
            <p 
            data-aos="fade-up"
            className="text-[8px] md:text-base text-center">
              Remote Monitoring <br />& Real-time Tracking
            </p>
            <div 
            data-aos="fade-left"
            className="border-4 lg:border-8 p-2 md:p-3 lg:p-5 text-white rounded-full">
              <img
              data-aos="fade-up"
                src={image1}
                alt=""
                className="w-4 md:w-6  md:h-6 lg:w-20 lg:h-20 p-4"
              />
            </div>
          </div>
          <div 
          data-aos="fade-left"
          className="flex flex-col items-center gap-1">
            <p 
            data-aos="fade-down"
            className="text-[8px] md:text-base text-center">
              Control And Manage <br />
              IOT Platform
            </p>
            <div className="border-4 lg:border-8 p-2 md:p-3 lg:p-5 text-white rounded-full">
              <img
              data-aos="fade-left"
                src={image2}
                alt=""
                className="w-4 md:w-6 md:h-6 lg:w-20 lg:h-20 p-4"
              />
            </div>
          </div>
        </div>

        <div
        data-aos="fade-right"
        className="flex items-center">
          <hr className="text-[#ffffff] border-2 lg:border-[5px] w-full" />
          <IoPlaySharp className="text-[#ffffff] md:text-5xl" />
        </div>

        <div className="flex justify-around max-md:mx-14 md:mx-24 lg:mx-32 xl:mx-40 -mt-2 md:-mt-6">
          <div className="flex flex-col items-center gap-1">
            <div 
            data-aos="fade-up"
            className="border-4 lg:border-8 p-2 md:p-3 lg:p-5 text-white rounded-full">
              <img
              data-aos="fade-left"
                src={image3}
                alt=""
                className="w-4 md:w-6  md:h-6 lg:w-20 lg:h-20 p-4"
              />
            </div>
            <p 
            data-aos="fade-up"
            className="text-[8px] md:text-base text-center">
              App Deployment & <br />
              Delivery
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div 
            data-aos="fade-up"
            className="border-4 lg:border-8 p-2 md:p-3 lg:p-5 text-white rounded-full">
              <img
              data-aos="fade-right"
               src={image4}
               alt=""
                className="w-4 md:w-6 md:h-6 lg:h-20 lg:w-20 p-4"
              />
            </div>
            <p 
            data-aos="fade-up"
            className="text-[8px] md:text-base text-center">
              Predictive Analysis of App <br />
              Performance & Data Points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevProcess;
