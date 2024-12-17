import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import seoimage from "../../../assets/digitalmarketing/seo/seo.png";
function SeoImage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="">
        <img
        data-aos="zoom-in-up"
          className="object-cover w-full"
          src={seoimage}
          alt="digitalMarket"
        />
      </div>
      <div>
        <p 
        data-aos="flip-up"
        className="lg:text-2xl text-sm mx-4 text-center mt-6">
          <span className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-3xl ">
            {" "}
            SpY D Technologies{" "}
          </span>{" "}
          Providing SEO Solutions to Solve Your Problems
        </p>
      </div>
    </>
  );
}

export default SeoImage;
