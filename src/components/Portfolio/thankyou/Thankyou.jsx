import React, { useEffect } from 'react'
import logo from "../../../assets/images/image.png"
import AOS from "aos"
import "aos/dist/aos.css"

const Thankyou = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="relative font-ubuntu min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white via-cyan-300 to-cyan-600 overflow-hidden">
      {/* Centered Thank You text */}
      <div className="flex gap-3 text-center">
        <p
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl md:text-[150px] font-bold text-gray-900 transform transition-all duration-700 ease-out hover:scale-105"
        >
          Thank
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-[150px] font-bold text-gray-900 transform transition-all duration-700 ease-out hover:scale-105"
        >
          You!
        </p>
      </div>
      

      {/* Logo aligned to right-bottom */}
      <img
        src={logo}
        alt="Logo"
        className="absolute z-10 top-[300px] right-[10px] md:top-2/3 md:right-[250px] w-24 md:w-44 object-contain animate-fadeIn"
      />
    </div>
  )
}

export default Thankyou
