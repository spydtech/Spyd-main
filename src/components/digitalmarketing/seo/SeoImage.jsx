import React from "react";

import seoimage from "../../../assets/digitalmarketing/seo/seo.png";
function SeoImage() {
  return (
    <>
      <div className="">
        <img
          className="object-cover w-full"
          src={seoimage}
          alt="digitalMarket"
        />
      </div>
      <div>
        <p className="lg:text-2xl text-sm mx-4 text-center mt-6">
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
