import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PpcTypes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:mt-10 my-4 py-10 px-1 lg:px-4 bg-gradient-to-r from-[#00ceff] to-[#0072ff] ">
      <div className="text-center">
        <p 
        data-aos="flip-up"
        className="lg:text-3xl text-2xl text-white">
          What are the different types of PPC Advertising?
        </p>
      </div>

      <div 
      data-aos="flip-up"
      className=" px-6 text-xl py-6 text-white  mt-6 ">
        <div className="">
          {" "}
          Now that you know what paid search is, the next thing to do is
          understand the various types of PPC marketing campaigns that can
          enhance your online visibility and advertise your services to your
          target audience. Our PPC advertising agency collaborates with your
          team to choose the suitable PPC ads for filling your sales funnel.
          Different kinds of pay per click advertisements are accessible,
          depending on what you want to achieve.
        </div>
      </div>
    </div>
  );
}

export default PpcTypes;
