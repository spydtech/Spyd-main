import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Openings() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  return (
    <>
      <div className="text-center my-10 mx-10"
      data-aos="fade-down"
      >
        <p className="lg:text-4xl text-xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
          Openings
        </p>
        <p className="pt-10 text-2xl">
          From support to development, it's an ocean of opportunities in our
          business lifecycle. Walk-ins and referral programs are how we secure
          positions for talented SPY D in our team.
        </p>
      </div>
    </>
  );
}

export default Openings;
