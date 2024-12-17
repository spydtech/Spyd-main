import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ppcimage from "../../../assets/digitalmarketing/ppc/ppc.png";
function PpcImage() {
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
          src={ppcimage}
          alt="digitalMarket"
        />
      </div>
    </>
  );
}

export default PpcImage;
