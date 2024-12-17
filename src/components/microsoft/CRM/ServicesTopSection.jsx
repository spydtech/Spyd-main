import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import crmhome from "./../../../assets/Crm/crmhome.png"; // Background image

function ServicesTopSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
     data-aos="fade-zoom-in"
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url(${crmhome})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-blue-700 opacity-50"></div>

  {/* Centered text content */}
  <div className='space-y-5 ml-0 md:-mt-20 -mt-0'>
  <h1 
   data-aos="fade-down"
  className="relative md:text-5xl text-xl font-semibold  text-center text-white p-5">
  Transforming Customer Relationships:
  </h1>
  <p
   data-aos="fade-down"
  className="relative md:text-3xl  font-serif lg:w-4/6 lg:ml-24 text-lg text-center text-white ">
  Unleashing the Power of Microsoft Dynamics CRM with "SpY D Technology,,
  </p>
 
  </div>
</div>
  );
}

export default ServicesTopSection;
