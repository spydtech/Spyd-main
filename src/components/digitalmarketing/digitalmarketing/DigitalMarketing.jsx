import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import digitalmarketingimage from "../../../assets/digitalmarketing/digitalmarketing.png";

function digitalmarketing() {
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
          className="object-cover w-full "
          src={digitalmarketingimage}
          alt="digitalMarket"
        />
      </div>
      <div>
        <p 
        data-aos="fade-right"
        className="lg:text-xl text-sm mx-4 text-center mt-6">
          "Introducing <span className="text-[#0866e2] ">SpY D Technology</span>
          , the cutting-edge solution revolutionizing surveillance in the
          digital age. Say goodbye to outdated methods and hello to
          unprecedented security and intelligence with our state-of-the-art
          technology".
        </p>
      </div>
    </>
  );
}

export default digitalmarketing;
