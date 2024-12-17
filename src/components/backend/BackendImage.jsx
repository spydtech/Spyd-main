import React, { useEffect } from "react";
import AOS from "aos"; // Corrected import
import "aos/dist/aos.css";
import backend from "../../assets/backend/backendmain.png";

function BackendImage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="relative">
        {/* Background image */}
        <div
    data-aos="fade-zoom-up"
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url(${backend})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-[#00CEFF99] opacity-95"></div>

  {/* Centered text content */}
  <div 
  data-aos="fade-right"
  className='space-y-5'>
  <h1 className="relative md:text-4xl text-lg text-center text-white p-5">
  Crafting Seamless User Experiences: Unleashing the Power of
  </h1>
  <p className="relative md:text-4xl text-xl text-center text-white ">
 Backend Development
  </p>
 
  </div>
</div>
       
      </div>
    </>
  );
}

export default BackendImage;
