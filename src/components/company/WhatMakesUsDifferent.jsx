import React, { useEffect } from "react";
import Footer from '../../components/Footer'
import image from "./../../assets/whatMakesUsDifferent/hero.png"
import image1 from "./../../assets/whatMakesUsDifferent/image-1.png";
import image2 from "./../../assets/whatMakesUsDifferent/image-2.png";
import image3 from "./../../assets/whatMakesUsDifferent/image-3.png";
import image4 from "./../../assets/whatMakesUsDifferent/image-4.png";
import AOS from "aos";
import "aos/dist/aos.css";



const WhatMakesUsDifferent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-serif">
      <img
      data-aos="fade-in"
        src={image}
        alt="visionHeroImg"
        className="w-full h-44 lg:h-96"
      />

      {/* <div className="m-5 max-w-5xl mx-auto md:flex flex-col items-center space-y-5">
        <h1 className="text-lg lg:text-2xl text-center bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
          What makes us different from other software companies
        </h1>

        <div className="flex flex-col  max-w-9xl mx-auto md:flex-row gap-4 md:gap-10 lg:gap-20 md:items-center ">
          <div className="space-y-2 md:w-[400px]  lg:w-[500px] xl:w-[800px] md:order-2">
            <h1 className="text-xl  bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Trust
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                Our clients trust is paramount to us, we know this is earned not
                assumed and work accordingly.
              </li>
              <li className=" list-disc">
                We view our clients as partners, we're here to help optimize
                your business and work tirelessly to ensure your success.
              </li>
            </ul>
          </div>
          <img
            src={image1}
            alt="image-2"
            className="w-40  mx-auto md:w-52"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-20 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px]">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Transparency
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                We adopt an approach that ensures our customers receive absolute
                clarity about the services we offer, and take pride in
                delivering exactly what is promised - delivered on time and
                within budget. You can be assured there will be no unwelcome
                surprises!
              </li>
            </ul>
          </div>
          <img
            src={image2}
            alt="image-1"
            className="w-40 mx-auto md:w-52 "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px] md:order-2">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Reliability
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                We adopt an approach that ensures our customers receive absolute
                clarity about the services we offer, and take pride in
                delivering exactly what is promised - delivered on time and
                within budget. You can be assured there will be no unwelcome
                surprises!
              </li>
            </ul>
          </div>
          <img
            src={image3}
            alt="image-2"
            className="w-40 mx-auto md:w-52"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px]">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Honesty
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                Our approach is based on honesty and part of that is
                acknowledging that while we deliver 99+% of our work accurately
                and on schedule we can sometimes make errors. To ensure valuable
                long term relationships, both for our clients, and our business,
                in the unlikely event we do get something wrong we'll take
                responsibility and work with you to resolve them quickly,
                efficiently and with utmost integrity.
              </li>
            </ul>
          </div>
          <img
            src={image4}
            alt="image-1"
            className="w-40 mx-auto md:w-52"
          />
        </div>
      </div> */}

<div data-aos="fade-down">
  <h1 className="text-3xl text-center pt-10 bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  font-bold">What makes us different from other software companies</h1>
</div>

    {/* Makeus Trust */}
    <div className="flex flex-col  md:flex-row items-center justify-between md:mt-10 p-6 lg:space-x-10 bg-white  ">
      <div className="md:w-1/2  mt-6 md:mt-0 flex justify-center"
      data-aos="fade-left"
      >
        <img
         src={image1}
         alt="Cloud Technologies"
          className="md:w-[420px] md:h-[420px] object-contain"
        />
      </div>
      <div className="md:w-1/2 md:space-y-10 mt-5 lg:mt-0 space-y-5"
      data-aos="fade-right"
      >
        <h2 className="md:text-3xl font-bold text-2xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
          Trust
        </h2>
        
        <div className="flex lg:w-3/4">
          <li className="list-disc text-2xl"></li>
        <p className="text-gray-700 md:text-lg text-sm md:mb-4 text-justify ">
        Our clients trust is paramount to us, we know this is earned not assumed and work accordingly.
        </p>
        </div>
        <div className="flex w-3/4">
          <li className="list-disc text-2xl"></li>
        <p className="text-gray-700 md:text-lg text-sm md:mb-4 text-justify ">
        We view our clients as partners, we're here to help optimize your business and work tirelessly to ensure your success.
        </p>
        </div>
       
       
      </div>
    </div>
    
      <div className="max-w-9xl mx-auto md:px-20 px-6">
        {/* Software Testing Section */}
        <div 
        data-aos="fade-left"
        className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent ">
          <div className="md:w-1/2  md:space-y-10 space-y-5" >
            <h2 className="md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
              Transparency
            </h2>
            <div className="flex lg:w-3/4">
              <li className="list-disc text-2xl"></li>
            <p className="text-gray-700  md:text-lg  text-sm mb-4 text-justify">
            We adopt an approach that ensures our customers receive absolute clarity
             about the services we offer, and take pride in delivering exactly what is promised 
             - delivered on time and within budget. You can be assured there will be no unwelcome surprises!
            </p>
            </div>
            
           
          </div>
          <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
            <img
            data-aos="fade-right"
              src={image2}
              alt="Software Testing"
              className="md:w-[489px] md:h-[329.58px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-10 md:mt-0  md:px-20  bg-white bg-opacity-95 bg-transparent  ">
          <div className="md:w-1/2 md:space-y-10 space-y-5"
          data-aos="fade-left"
          >
            <h2 className="md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
              Reliability
            </h2>
            <div className="flex ">
            <li className="list-disc text-2xl"></li>
            <p className="text-gray-700 md:text-lg text-sm  mb-4 text-justify">
            We adopt an approach that ensures our customers receive absolute clarity 
            about the services we offer, and take pride in delivering exactly what is 
            promised - delivered on time and within budget. You can be assured there will be no unwelcome surprises!
            </p>
            </div>
           
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
            data-aos="fade-right"
             src={image3}
             alt="Cyber Security"
              className="md:w-[464px] md:h-[379px] object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-9xl mx-auto md:px-20 px-6">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent ">
          <div className="md:w-1/2  md:space-y-10 space-y-5" 
          data-aos="fade-left"
          >
            <h2 className="md:text-3xl text-2xl  font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
              Honesty
            </h2>
            <div className="flex lg:w-4/8">
              <li className="list-disc text-2xl"></li>
            <p className="text-gray-700  md:text-lg  text-sm mb-4 text-justify">
            Our approach is based on honesty and part of that is acknowledging 
            that while we deliver 99+% of our work accurately and on schedule we can sometimes make errors. 
            To ensure valuable long term relationships, both for our clients, and our business, 
            in the unlikely event we do get something wrong we'll take responsibility and work 
            with you to resolve them quickly, efficiently and with utmost integrity.

              </p>
            </div>
            
           
          </div>
          <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
            <img
            data-aos="fade-right"
              src={image4}
              alt="Software Testing"
              className="md:w-[489px] md:h-[329.58px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
       
      </div>
      <Footer />
    </div>
  );
};

export default WhatMakesUsDifferent;
