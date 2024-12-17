import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Footer'
import CallToAction from '../CallToAction'
import { Link } from "react-router-dom"
import image from "../../assets/othertech/main.png";
import image1 from"../../assets/othertech/image1.png";
import image2 from "../../assets/othertech/image2.png";
import image3 from "../../assets/othertech/image3.png";
import image4 from "../../assets/othertech/image4.png";
import bgimage from "../../assets/othertech/bgimage.png"


function AdvancedTech() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
    {/* Background Header Section */}
    <div
    data-aos="fade-zoom-in"
      className="bg-cover bg-center md:h-96 h-44 flex items-center justify-center"
      style={{
        backgroundImage:
        `url(${image})`, // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>

    {/* AI and ML Section */}
    
    <div className="flex flex-col md:flex-row items-center justify-between mt-10  md:px-24 lg:px-24 bg-white rounded-lg">
      <div
      data-aos="fade-left"
      className="md:w-1/2 md:space-y-10 lg:px-10">
        <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
          What is AI and ML?
        </h2>
        <p className="text-[#141414] md:text-base text-sm mb-4 text-justify">
          Machine learning is a field of study in artificial intelligence
          concerned with the development and study of statistical algorithms
          that can learn from data and generalize to unseen data, and thus
          perform tasks without explicit programming.
        </p>
        <Link to="/services/ai&ml">
        <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-sm md:text-lg text-white py-1 px-2 md:py-3 md:px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
        </Link>
       
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
        data-aos="fade-up"
          src={image1}
           alt="AI and ML"
          className="md:w-[344px] md:h-[338px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-5  md:px-24 lg:px-24   ">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center ">
        <img
        data-aos="fade-up"
          src={image2}
         alt="Cloud Technologies"
          className="md:w-[464px] md:h-[379px] object-contain"
        />
      </div>
      <div 
      data-aos="fade-right"
      className="md:w-1/2 md:space-y-10 space-y-5 lg:px-10">
        <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
          What is Cloud Technologies?
        </h2>
        <p className="text-[#141414] md:text-base text-sm md:mb-4 text-justify">
          Cloud computing is the on-demand availability of computer system
          resources, especially data storage and computing power, without
          direct active management by the user. Large clouds often have
          functions distributed over multiple locations, each of which is a
          data center.
        </p>
        <Link to="/services/cloudtech">
        <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-sm md:text-lg py-1 px-2 text-white md:py-3 md:px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button></Link>
        
      </div>
    </div>
    <div
      className="bg-cover bg-center min-h-screen "
      style={{
        backgroundImage: `url(${bgimage})`, // Replace with the actual background image URL
        backgroundSize: "cover", // Zoomed-out effect
        backgroundPosition: "center ",
    }}
    >
      <div className="max-w-9xl mx-auto md:px-24 lg:px-24 px-6">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between   bg-opacity-95 bg-transparent ">
          <div 
          data-aos="fade-left"
          className="md:w-1/2  md:space-y-10 space-y-5 lg:px-10" >
            <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
              Software Testing:
            </h2>
            <p className="text-[#141414]  md:text-base  text-sm mb-4 text-justify">
              Software testing is the act of examining the artifacts and the
              behavior of the software under test by verification and validation.
              Software testing can also provide an objective, independent view
              of the software to allow the business to appreciate and understand
              the risks of software implementation.
            </p>
            <Link to="/services/testing">
            <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-sm md:text-lg  text-white py-1 px-2 md:py-3 md:px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
            </Link>
          </div>
          <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
            <img
            data-aos="fade-up"
              src={image3}
             alt="Software Testing"
              className="md:w-[408px] md:h-[438px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-10 md:mt-0  md:px-20   bg-opacity-95 bg-transparent  ">
          <div 
          data-aos="fade-right"
          className="md:w-1/2 md:space-y-10 space-y-5 ">
            <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
              What is Cyber Security:
            </h2>
            <p className="text-[#141414] md:text-base text-sm  mb-4 text-justify">
              Cyber security is the practice of defending computers, servers,
              mobile devices, electronic systems, networks, and data from
              malicious attacks. It’s also known as information technology
              security or electronic information security. The term applies in a
              variety of contexts, from business to mobile computing.
            </p>
            <Link to="/services/cybersecurity">
            <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-sm md:text-lg text-white py-1 px-2 md:py-3 md:px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
            </Link>
            
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
            data-aos="fade-up"
              src={image4}
             alt="Cyber Security"
              className="md:w-[464px] md:h-[379px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <CallToAction />
    <Footer />
  </div>
  )
}

export default AdvancedTech