import React, { useEffect } from "react";
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'
import { Link } from "react-router-dom";
import main from "../../../assets/othertech/advanceTech/main.png";
import image from "../../../assets/othertech/advanceTech/image.png";
import image1 from "../../../assets/othertech/advanceTech/image1.png";
import AOS from "aos";
import "aos/dist/aos.css";


function AiandMl() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
    data-aos="fade-zoom-in"
  className="relative bg-cover bg-center md:h-96 h-40 flex items-center justify-center"
  style={{
    backgroundImage: `url(${main})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-blue-500 opacity-70"></div>

  {/* Centered text content */}
  <div 
  data-aos="fade-up"
  className='space-y-5'>
  <h1 className="relative md:text-4xl text-lg text-center text-white">
    AI & Machine Learning
  </h1>
  <p className="relative md:text-xl text-sm text-center text-white ">
  We're working hard to bring you something amazing.
  </p>
  <p className='relative md:text-xl  text-sm text-center text-white'> Stay tuned!</p>
  </div>
</div>



    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between -md:mt-20 mt-5 md:p-6 md:px-24 lg:px-24 px-4  bg-white rounded-lg"
    >
      <div
      data-aos="fade-right"
      className="md:w-1/2 w-full md:space-y-10">
        <h2 className="md:text-2xl text-xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        About Ai...?
        </h2>
        <p className="text-[#141414] md:text-base text-sm md:mb-4 text-justify">
        Artificial intelligence is the intelligence of machines or software, 
        as opposed to the intelligence of other living beings, primarily of humans.
         It is a field of study in computer science that develops and studies intelligent machines. 
         Such machines may be called AIs.
        </p>
        <Link to="/services/ai">
        <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700  md:mt-0 mt-2   text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
        </Link>
        
      </div>
      <div className="md:w-1/2  mt-0 flex justify-center">
        <img
        data-aos="fade-up"
          src={image}
          alt="AI and ML"
          className="md:w-[455px] md:h-[349px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-betwee lg:-mt-20 mt-5 md:p-6 px-4 md:px-24 lg:px-24 bg-white  rounded-lg">
      <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
        <img
        data-aos="fade-up"
          src={image1}
          alt="Cloud Technologies"
          className="md:w-[421px] md:h-[430px] object-contain"
        />
      </div>
      <div
      data-aos="fade-left"
      className="md:w-1/2 md:space-y-10">
        <h2 
        
        className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        About Machine Learning...?
        </h2>
        <p className="text-[#141414] md:text-base text-sm md:mb-4 text-justify">
        Machine Learning is a field of study in artificial 
        intelligence concerned with the development and study 
        of statistical algorithms that can learn from data and generalize to unseen data,
         and thus perform tasks without explicit instructions. 
         Recently, artificial neural networks have been able to surpass many previous approaches in performance.
        </p>
        <Link to="/services/machine-learning">
        <button className=" lg:mt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700  md:mt-0 mt-2   text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
        </Link>
        
      </div>
    </div>
    <div
     
    >
      
    </div>
    <CallToAction />
    <Footer />
  </div>
  )
}

export default AiandMl