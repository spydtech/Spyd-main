import React from 'react'
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

function Aws() {
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center md:h-96 h-40 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/1873/db09/ce0c79275d90f69fa33f6b31ce427992?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CL4zR4Kiw3n9SujoEfOoNb0XVgnCpUwr~gOGxt-3PDvLZlmvXVrNJPB5IRQDzECUBA~0Quj4PbEze~5zHHZ6ku39VKX1HPZuN1DMLWm5v-jaO8ra5fhjndULAi0696T~iM6MiugImev8Sr6MzMCcWYwAOz3LLlGLeofdJ2D0EDIU1ZvvFPKmO-W9vb3y5KBRul4sJwFJvaXIEGKfpSft27852tvups3BlGIlKHwUDHPgvFlgjjfcKntX2o8sv8zxNyx6yUFjelwuS1eEoeD6b6PdkIl16h98djAFyStw8Tttey2EQ9jGMjCpiD3vLQHYXVJT1axrM-UaElz0ELKG7Q__')", // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>
        <div className="flex flex-col  md:items-center justify-center space-y-16 px-4 md:px-8 lg:px-16 py-10 text-gray-800">

{/* Section 1: What is Cloud Computing */}
<div className="flex flex-col md:flex-row items-center justify-between md:mt-10 md:p-6 md:px-20 bg-white rounded-lg"
    >
      <div className="md:w-1/2 md:space-y-10 space-y-4">
        <h2 className="md:text-2xl text-xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  md:mb-4">
        What is Cloud Computing?
        </h2>
        <p className="text-gray-700 md:text-xl  text-sm md:mb-4 text-justify">
        Cloud computing is the delivery of online services 
        (such as servers, databases, software) to users. With the help of cloud computing, 
        storing data on local machines is not required. 
        It helps you access data from a remote server. Moreover,
         it is also used to store and access data from anywhere across the world.
        </p>
        
      </div>
      <div className="md:w-1/2 mt-0 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/b546/6c4b/8a2b859c44b9b194d2e7d67e9b17a935?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsK4S0EK8vHKbqJPo3jSOn2wS5SnXkFADWUni4z3Akt18WZYzq3q~1qZuYPBTplhUOP3HTblI6XhQd3X6C0HLSTBcX4PEUFxZVfkDW2exxAUCUahHmK9qZnQ7ETmwb6OzjvJ5CsgIpCnE94icpHbGDPJUsGJMDeemcBT0ypuu28fNDmKyLdUx8LqvEVlbOVFhjqP9nmo6rKlFfoqrHSs2QqSyuZeVbN2wRH7Q1ps9AUu3nSkjXEWM1PjxNgEVILMVsRnHnzXZi~uC1cgEUSrHkMMeF9j8tQD4481mnFzBgGgJZtdgh5Wy~CAquk2CFoSpWYK5onU4PqHOEO9aizHkw__" // Replace with an AI/ML illustration URL
          alt="AI and ML"
          className="md:w-[358px] md:h-[311px] object-contain"
        />
      </div>
    </div>

{/* Section 2: What is AWS */}
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
  {/* Image or Icon */}
  <img
    src="https://s3-alpha-sig.figma.com/img/4ffa/74c2/50d1a3b3f2e450547c73ad7b44dca90f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aX7sWhEF96xt8ETpf79ztvKYTWwQzMJ4OKx~DpLcF9U0LmSUXg0zXP7NG~ZZ3qK91ScyqIyoalQNWtTLGABSDouQja6-OK3RLwkDYAHn6OUcS~ICTAG3oeCN-rTRnFJc06xlR~YgNZc1cJ3C~36DEsIigcBdmLGBr3PrIvdN~S9cugq2A~8xQpTLjlbzIzl9K6ovP0rOyqjzod5B5C1EW4F50fxhGkhKgde54HjJbQWYEpNglADeWc3eBgykDmcORmTsqJPw4DoBDWMOtfsnLNXVqJLqeXdycxEHZwN3lyEMyvUQb8oTW9BlcqwrBWWg0RGueBtV-AWDsqZ-CANRcw__" // Replace with actual image URL
    alt="AWS Illustration"
    className="object-contain md:w-[464px] md:h-[309.09px]"
  />

  {/* Text Content */}
  <div>
    <h2 className="md:text-2xl lg:text-3xl  text-xl text-blue-600">
      What is AWS?
    </h2>
    <ul className=" md:text-lg text-sm lg:text-lg mt-4 space-y-2">
      <li>➔ <span className="">AWS Meaning:</span> The Amazon Web Services (AWS) platform provides more than 200 fully featured services from data centers located all over the world, and is the world's most comprehensive cloud platform.</li>
      <li>➔ Amazon Web Service is an online platform that provides scalable and cost-effective cloud computing solutions.</li>
      <li>➔ AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.</li>
    </ul>
  </div>
</div>
<div>
    <img src={IMG}
    className='w-full md:h-[731px] h-44'
     />
</div>

   

</div>
<div className="px-4 md:px-8 lg:px-16 py-0 space-y-0 text-gray-800">

      {/* Section 1: Applications of AWS */}
      <div className="space-y-0 md:text-center text-justify ">
        <p className="text-sm md:text-lg leading-relaxed">
          The most common applications of AWS are storage and backup, websites, gaming, mobile, web, and social media applications. Some of the most crucial applications in detail are as follows:
        </p>
        
        {/* Application Icons and Titles */}
        <div className="grid grid-cols-1 text-start sm:grid-cols-3 lg:grid-cols-3 md:gap-6 space-y-5 p-2 text-blue-600 md:p-10">
          {/* Application Item */}
          <div className="flex flex-row md:space-x-3 space-x-2 items-center md:space-y-2">
            <LuDatabaseBackup className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Storage and Backup</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <FaLaptopCode className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Mobile, Web and Social Applications</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <PiNotificationFill className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Messages and Notifications</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <TbWorldWww className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Websites</span>
          </div>
          <div className="flex flex-row md:space-x-3  space-x-2 items-center space-y-2">
          <BsGraphUpArrow className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Big Data Management and Analytics</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <PiVirtualReality className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Augmented Reality and Virtual Reality</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <RiGamepadLine className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Game Development</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <AiOutlineSetting className="w-12 h-12" />
           <span className='md:text-xl text-sm'>Artificial Intelligence</span>
          </div>
          <div className="flex flex-row md:space-x-3 space-x-2 items-center space-y-2">
          <LuGamepad2 className="w-12 h-12" />
            <span className='md:text-xl text-sm'>Game Development</span>
          </div>
        </div>
      </div>

      {/* Section 2: Advantages of AWS */}
      

    </div>
    <div className=" bg-gradient-to-r from-[#38bdf8] to-blue-700 md:p-10 rounded">
  <div className="text-white  md:p-10 space-y-4 p-5">
    <h2 className="md:text-3xl  text-xl  decoration-white">Advantages of AWS</h2>
    <ul className="space-y-2  md:text-lg  text-sm pl-5">
      <li>➔ AWS provides a user-friendly programming model, architecture, database as well as an operating system that has been already known to employers.</li>
      <li>➔ AWS is a very cost-effective service. There is no such thing as long-term commitments for anything you would like to purchase.</li>
      <li>➔ It offers billing and management for the centralized sector, hybrid computing, and fast installation or removal of your application in any location with a few clicks.</li>
      <li>➔ There is no need to pay extra money on running data servers by AWS.</li>
      <li>➔ AWS offers a total ownership cost at very reasonable rates in comparison to other private cloud servers.</li>
    </ul>
  </div>
</div>
<CallToAction />
<Footer />
    </div>
  )
}

export default Aws