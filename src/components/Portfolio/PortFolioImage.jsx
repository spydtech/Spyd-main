import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../../assets/portfolio/headerImage.png"

function PortFolioImage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
    data-aos="zoom-in-up"
      className="relative w-full h-44 lg:h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${main})`,
      }}
    >
      {/* Opacity Overlay */}
      {/* <div className="absolute inset-0 bg-[#0866e2] opacity-60"></div> */}
    </div>
  );
}

export default PortFolioImage;
