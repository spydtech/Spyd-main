import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";

function Java() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="lg:mt-10 my-4 mx-1 lg:mx-4">
        <div className="text-center">
          <p 
          data-aos="zoom-in-up"
          className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            Leading Java Development Company
          </p>
        </div>

        <div 
        data-aos="fade-right"
        className="text-lg lg:text-xl mt-6 mx-2 lg:mx-6">
          <p>
            Java has emerged as a valuable asset for developers globally. Java,
            being an open-source programming language, provides pre-built code,
            relieving developers from the need to write everything from scratch.
            This eliminates the laborious process of manual coding, saving time,
            and facilitating swift development.
          </p>
        </div>
      </div>
    </>
  );
}
export default Java;
