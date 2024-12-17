import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Smm() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="lg:mt-10 my-4 mx-4">
        <div className="text-center">
          <p 
          data-aos="flip-up"
          className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            SOCIAL MEDIA MARKETING
          </p>
        </div>

        <div className="lg:text-xl text-lg text-center mt-6 mx-1 lg:mx-6 lg:px-0">
          <p
          data-aos="fade-up"
          >
            In today’s digital age, traditional marketing techniques are
            insufficient for creating a dedicated and highly engaged customer
            base. In order to reach a larger audience and improve ROI, it is
            important to engage with people where they are most active and
            customize your brand message for different audience groups. 
          </p>
          <p
          data-aos="fade-right"
          >This
            allows you to connect with more consumers without spending too much
            money.</p>
          <p
          data-aos="fade-right"
          >
          
          Social media advertising stands out above all other marketing
            strategies by increasing brand visibility and offering profitable
            chances to engage and convert leads into customers.
          </p>
        </div>
      </div>
    </>
  );
}

export default Smm;
