import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../../../assets/images/clients/GirnarSoft.png";
import image2 from "../../../assets/images/clients/mobileprog.jpeg";
import image3 from "../../../assets/images/clients/opsbridge.jpeg";
import image4 from "../../../assets/images/clients/ShawDirect.png";

const Client = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="font-ubuntu py-10">
      {/* Title */}
      <div className="flex justify-center mb-20" data-aos="fade-up">
        <p className="text-xl font-bold md:text-5xl">Our Clients</p>
      </div>

      {/* Logos Layout */}
      <div className="flex justify-center items-center gap-6 md:gap-12">
        {/* Left logo */}
        <div
          className="w-28 h-28 shadow-lg bg-transparent md:w-56 md:h-36 flex items-center justify-center"
          data-aos="fade-right"
        >
          <img
            src={image2}
            alt="MobileProg"
            className="object-contain max-w-full max-h-full transition-transform"
          />
        </div>

        {/* Center two logos (stacked) */}
        <div className="flex flex-col gap-6">
          <div
            className="w-28 h-28 shadow-lg bg-transparent md:w-56 md:h-36 flex items-center justify-center"
            data-aos="zoom-in"
          >
            <img
              src={image1}
              alt="GirnarSoft"
              className="object-contain max-w-full max-h-full transition-transform"
            />
          </div>
          <div
            className="w-28 h-28 shadow-lg bg-transparent md:w-56 md:h-36 flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={image3}
              alt="OpsBridge"
              className="object-contain max-w-full max-h-full transition-transform"
            />
          </div>
        </div>

        {/* Right logo */}
        <div
          className="w-28 h-28 shadow-lg bg-transparent md:w-56 md:h-36 flex items-center justify-center"
          data-aos="fade-left"
        >
          <img
            src={image4}
            alt="ShawDirect"
            className="object-contain max-w-full max-h-full transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
