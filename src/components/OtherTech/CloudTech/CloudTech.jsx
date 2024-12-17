import React, { useEffect } from "react";
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'
import { Link } from "react-router-dom"
import main from "../../../assets/othertech/cloude/main.jpg";
import image from "../../../assets/othertech/cloude/image1.png";
import image1 from "../../../assets/othertech/cloude/image2.jpg";
import image2 from "../../../assets/othertech/cloude/image3.png";
import AOS from "aos";
import "aos/dist/aos.css";


function CloudTech() {

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
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage:`url(${main})`
           }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>

    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white rounded-lg"
    >
      <div
       data-aos="fade-right"
      className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Amazon Cloud
        </h2>
        <p className="text-[#141414] text-base mb-4  lg:pb-10 text-justify">
        Amazon Web Services, Inc.
         is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals,
          companies, and governments, on a metered, pay-as-you-go basis. 
          Clients will often use this in combination with autoscaling.
        </p>
        <Link to="/services/aws">
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
        </Link>
        
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
         data-aos="fade-up"
          src={image}
          alt="AI and ML"
          className="w-[348px] h-[310px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white  rounded-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
         data-aos="fade-up"
          src={image1}
          alt="Cloud Technologies"
          className="w-[320px] h-[320px] object-contain"
        />
      </div>
      <div
       data-aos="fade-left"
      className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Microsoft Azure Cloud
        </h2>
        <p className="text-[#141414] text-base mb-4 lg:pb-10 text-justify">
        Microsoft Azure, often referred to as Azure, 
        is a cloud computing platform run by Microsoft. 
        It offers access, management, 
        and the development of applications and services through global data centers.
        </p>

        <Link to="/services/azure">
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
        </Link>
       
      </div>
    </div>
    <div
     
    >
      <div className="max-w-9xl mx-auto px-20">
        {/* Software Testing Section */}
        <div 
         data-aos="fade-right"
        className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent  rounded-lg ">
          <div className="md:w-1/2  space-y-10" >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            Google Cloud
            </h2>
            <p className="text-[#141414]  text-base pb-10 mb-4 text-justify">
            Google Cloud Platform, offered by Google, 
            is a suite of cloud computing services that provides a 
            series of modular cloud services including computing, 
            data storage, data analytics, and machine learning, 
            alongside a set of management tools.
            </p>

<Link to="/services/gcloude">
<button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>

</Link>

           
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
             data-aos="fade-up"
              src={image2}
              alt="Software Testing"
              className="w-[332px] h-[285px] object-contain"
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

export default CloudTech