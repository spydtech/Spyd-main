import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../../../assets/mobile/hybrid/main.jpg";

function HybridImage() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);

  return (
    <>
      <div className="  w-auto h-44 lg:h-96">
        <div
         data-aos="fade-zoom-in"
          className="  bg-cover sm:bg-center h-full"
          style={{
            backgroundImage: `url(${main})`,
          }}
        ></div>
      </div>
    </>
  );
}

export default HybridImage;
