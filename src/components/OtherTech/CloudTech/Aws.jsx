import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IMG from '../../../assets/othertech/aws image.png'
import { LuDatabaseBackup } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { PiNotificationFill } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiVirtualReality } from "react-icons/pi";
import { RiGamepadLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { LuGamepad2 } from "react-icons/lu";
import CallToAction from '../../CallToAction';
import Footer from '../../Footer';
import main from "../../../assets/othertech/aws/main.png";
import image from "../../../assets/othertech/aws/image.png";
import image1 from "../../../assets/othertech/aws/image1.png"

function Aws() {

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
      className="bg-cover bg-center md:h-96 h-40 flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${main})`, // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>
        <div className="flex flex-col  md:items-center justify-center space-y-16 px-4 md:px-8 lg:px-16 py-10 text-gray-800">

{/* Section 1: What is Cloud Computing */}
<div className="flex flex-col md:flex-row items-center justify-between md:mt-10 md:p-6 md:px-20 bg-white rounded-lg"
    >
      <div 
      data-aos="fade-right"
      className="md:w-1/2 md:space-y-10 space-y-4">
        <h2 className="md:text-2xl text-xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
        What is Cloud Computing?
        </h2>
        <p className="text-[#141414] md:text-base  text-sm md:mb-4 text-justify">
        Cloud computing is the delivery of online services 
        (such as servers, databases, software) to users. With the help of cloud computing, 
        storing data on local machines is not required. 
        It helps you access data from a remote server. Moreover,
         it is also used to store and access data from anywhere across the world.
        </p>
        
      </div>
      <div className="md:w-1/2 mt-0 md:mt-0 flex justify-center">
        <img
        data-aos="fade-up"
        src={image} 
        alt="AI and ML"
          className="md:w-[358px] md:h-[311px] object-contain"
        />
      </div>
    </div>

{/* Section 2: What is AWS */}
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
  {/* Image or Icon */}
  <img
  data-aos="fade-up"
  src={image1}  
  alt="AWS Illustration"
    className="object-contain md:w-[464px] md:h-[309.09px]"
  />

  {/* Text Content */}
  <div
  data-aos="fade-left"
  >
    <h2 className="md:text-2xl lg:text-3xl  text-xl text-blue-600">
      What is AWS?
    </h2>
    <ul className=" md:text-lg text-sm lg:text-base mt-4 space-y-2">
      <li>➔ <span className="">AWS Meaning:</span> The Amazon Web Services (AWS) platform provides more than 200 fully featured services from data centers located all over the world, and is the world's most comprehensive cloud platform.</li>
      <li>➔ Amazon Web Service is an online platform that provides scalable and cost-effective cloud computing solutions.</li>
      <li>➔ AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.</li>
    </ul>
  </div>
</div>
<div>
    <img src={IMG}
     data-aos="fade-up"
    className='w-full md:h-[731px] h-44'
     />
</div>

   

</div>
<div className="px-4 md:px-8 lg:px-16 py-0 space-y-0 text-gray-800">

      {/* Section 1: Applications of AWS */}
      <div className="space-y-0 md:text-center text-justify ">
        <p
         data-aos="fade-up"
        className="text-sm md:text-lg leading-relaxed">
          The most common applications of AWS are storage and backup, websites, gaming, mobile, web, and social media applications. Some of the most crucial applications in detail are as follows:
        </p>
        
        {/* Application Icons and Titles */}
        <div className="grid grid-cols-1 text-start sm:grid-cols-3 lg:grid-cols-3 md:gap-6 space-y-5 p-2 text-blue-600 md:p-10">
          {/* Application Item */}
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center md:space-y-2">
            <LuDatabaseBackup className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Storage and Backup</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <FaLaptopCode className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Mobile, Web and Social Applications</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <PiNotificationFill className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Messages and Notifications</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <TbWorldWww className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Websites</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3  space-x-2 items-center space-y-2">
          <BsGraphUpArrow className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Big Data Management and Analytics</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <PiVirtualReality className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Augmented Reality and Virtual Reality</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <RiGamepadLine className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Game Development</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <AiOutlineSetting className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Artificial Intelligence</span>
          </div>
          <div 
           data-aos="fade-up"
          className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <LuGamepad2 className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Game Development</span>
          </div>
        </div>
      </div>

      {/* Section 2: Advantages of AWS */}
      

    </div>
    <div className=" bg-gradient-to-r from-[#38bdf8] to-blue-700 md:p-10 rounded">
  <div className="text-white  md:p-10 space-y-4 p-5">
    <h2 
     data-aos="fade-down"
    className="md:text-3xl  text-xl  decoration-white">Advantages of AWS</h2>
    <ul className="space-y-2  md:text-lg  text-sm pl-5">
      <li
       data-aos="fade-right"
      >➔ AWS provides a user-friendly programming model, architecture, database as well as an operating system that has been already known to employers.</li>
      <li
       data-aos="fade-right"
      >➔ AWS is a very cost-effective service. There is no such thing as long-term commitments for anything you would like to purchase.</li>
      <li
       data-aos="fade-right"
      >➔ It offers billing and management for the centralized sector, hybrid computing, and fast installation or removal of your application in any location with a few clicks.</li>
      <li
       data-aos="fade-right"
      >➔ There is no need to pay extra money on running data servers by AWS.</li>
      <li
       data-aos="fade-right"
      >➔ AWS offers a total ownership cost at very reasonable rates in comparison to other private cloud servers.</li>
    </ul>
  </div>
</div>
<CallToAction />
<Footer />
    </div>
  )
}

export default Aws