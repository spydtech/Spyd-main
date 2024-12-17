import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SmmServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:mt-10 rounded-lg my-4 py-10 px-1 lg:px-10 bg-gradient-to-r from-[#00ceff] to-[#0072ff] ">
      <div 
      
      className="text-center lg:px-6 text-2xl py-6 text-white  mt-6 ">
        <div 
         data-aos="flip-right"
        className="lg:mx-10 mx-2">
          {" "}
          Welcome to the hub of strategic and engaging Social Media Management
          services at SPY D Technology. Our mission is to develop a vibrant
          digital presence for your brand, nurture genuine connections, and
          elevate your digital reputation.
        </div>
      </div>
    </div>
  );
}

export default SmmServices;
