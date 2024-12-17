import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";
import phpImage from "../../assets/backend/phpdevelopment.png";
import { Link } from "react-router-dom";
function PhpDevelopment() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="lg:mx-4 mt-4">
      <div className=" flex lg:flex-row flex-col justify-around items-center">
        <div className="">
          <img 
           data-aos="fade-up"
          className="float-end w-96 h-96" src={phpImage} />
        </div>
        <div 
         data-aos="fade-right"
        className="lg:w-1/2 w-full p-2 h-auto">
          <p className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            PHP Development
          </p>
          <p className="">
            PHP has emerged as a valuable asset for developers globally. PHP,
            being an open-source scripting language, provides pre-built code,
            relieving developers from the need to write everything from scratch.
            This eliminates the laborious process of manual coding, saving time,
            and facilitating swift development.
          </p>
          <Link to="/services/backend/php">
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhpDevelopment;
