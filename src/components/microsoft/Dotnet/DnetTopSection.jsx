import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../../../assets/dotnet/main.png"

function DnetTopSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  return (
    <div
     data-aos="zoom-in-up"
      style={{
        backgroundImage: `url(${main})`,
      }}
      className="relative bg-center md:bg-cover h-44 md:h-60 lg:h-80 flex justify-center items-center"
    >
      <div className="absolute inset-0 bg-[#0866E299] bg-opacity-60"></div>
      <div className="absolute ">
        <h1 
        data-aos="fade-up"
        className="text-white text-lg w-48 md:w-72 lg:w-[600px] md:text-xl lg:text-4xl text-center">
          Unleash Innovation with "SpY D Technology’s, .NET Development
          Solutions
        </h1>
      </div>
    </div>
  );
}

export default DnetTopSection;
