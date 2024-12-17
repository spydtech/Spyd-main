import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cm from "../../../assets/digitalmarketing/contentmarketing.png";
import { Link } from "react-router-dom";
function ContentMarketing() {
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
            className="float-end w-96 h-96" src={cm} />
          </div>
          <div 
           data-aos="fade-right"
          className="lg:w-1/2 w-full p-2 h-auto">
            <p 
            data-aos="fade-right"
            className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Content Marketing
            </p>
            <p 
             data-aos="fade-right"
            className="">
              As the world has witnessed a great shift of customer’s preference
              from a conventional advertising world to the digital sphere, the
              growing use of internet, technology & digital media has raised the
              dependency of people on the online market. Due to this, the brands
              are rooting their base in various digital platforms, since
              marketing is one of the most essential aspect of a business plan.
            </p>
            <Link to="/services/digitalmarketing/cm">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentMarketing;
