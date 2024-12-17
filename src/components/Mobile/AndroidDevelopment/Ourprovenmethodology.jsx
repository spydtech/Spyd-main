

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Provenmethodologycard from "../../../assets/mobile/android/cardbgimage.jpg";

function Ourprovenmethodology() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const methodology = [
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
  ];

  return (
    <>
    <div className="my-3 px-5 md:px-10">
  <h1
    data-aos="zoom-in-up"
    className="text-center my-8 text-xl sm:text-2xl lg:text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text"
  >
    Our Proven Methodology
  </h1>
  
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-y-14">
    {methodology.map((point) => (
      <li
        data-aos="flip-up"
        key={point.id}
        className="relative bg-opacity-70 grayscale hover:grayscale-0 transition-all duration-300 bg-gray-500 rounded-lg text-sm sm:text-base bg-center bg-cover h-40 sm:h-52 md:h-60 lg:h-72 w-full sm:w-56 md:w-64 lg:w-72 flex items-center justify-center mx-auto"
        style={{
          backgroundImage: `url(${Provenmethodologycard})`,
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 rounded-lg bg-gray-700 opacity-80"></div>

        {/* Description text */}
        <p className="relative z-10 text-white px-4 text-center leading-relaxed">
          {point.description}
        </p>
      </li>
    ))}
  </ul>
</div>

    
     </>
  );
}

export default Ourprovenmethodology;
