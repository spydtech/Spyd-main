import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ppc from "../../../assets/digitalmarketing/ppc/utilityppc.png";
function UtilityPpc() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="lg:mx-4 mt-4">
        <div className=" flex lg:flex-row flex-col justify-around items-center">
          <div className="">
            <img 
            data-aos="fade-up"
            className="float-end w-96 h-96" src={ppc} />
          </div>
          <div 
         
          className="lg:w-1/2 w-full p-2 h-auto">
            <p 
            data-aos="fade-left"
            className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Utilize Pay Per Click Advertising and Benefit from Consumer Search
              Opportunities.
            </p>
            <p 
             data-aos="fade-left"
            className="">
              SPY D Digital Marketing Agency is a reliable expert in pay per
              click marketing. Our PPC advertising company collaborates with
              different industry stakeholders and marketing experts to boost
              their leads, enhance brand recognition, and achieve their
              objectives. Over time, Our pay per click marketing firm has
              mastered what is PPC, its effectiveness for various parties, and
              the requirements for achieving success online. If you're still
              unsure about whether pay per click is the suitable advertising
              model for your company, our PPC management firm is available to
              assist you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UtilityPpc;
