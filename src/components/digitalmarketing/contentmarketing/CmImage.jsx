import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";
import cmimage from "../../../assets/digitalmarketing/contentmarketing/contentmarketing.png";
function CmImage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="">
        <img
        data-aos="zoom-in-up"
          className="object-cover w-full"
          src={cmimage}
          alt="digitalMarket"
        />
      </div>
    </>
  );
}

export default CmImage;
