import React from 'react'
import IMG from '../../../assets/Aws image.png'
import { LuDatabaseBackup } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { PiNotificationFill } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiVirtualReality } from "react-icons/pi";
import { RiGamepadLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { LuGamepad2 } from "react-icons/lu";

function Aws() {
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/1873/db09/ce0c79275d90f69fa33f6b31ce427992?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CL4zR4Kiw3n9SujoEfOoNb0XVgnCpUwr~gOGxt-3PDvLZlmvXVrNJPB5IRQDzECUBA~0Quj4PbEze~5zHHZ6ku39VKX1HPZuN1DMLWm5v-jaO8ra5fhjndULAi0696T~iM6MiugImev8Sr6MzMCcWYwAOz3LLlGLeofdJ2D0EDIU1ZvvFPKmO-W9vb3y5KBRul4sJwFJvaXIEGKfpSft27852tvups3BlGIlKHwUDHPgvFlgjjfcKntX2o8sv8zxNyx6yUFjelwuS1eEoeD6b6PdkIl16h98djAFyStw8Tttey2EQ9jGMjCpiD3vLQHYXVJT1axrM-UaElz0ELKG7Q__')", // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>
        <div className="flex flex-col items-center justify-center space-y-16 px-4 md:px-8 lg:px-16 py-10 text-gray-800">

{/* Section 1: What is Cloud Computing */}
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
  {/* Image or Icon */}
  <img
    src="https://example.com/cloud-computing-icon.png" // Replace with actual image URL
    alt="Cloud Computing Illustration"
    className="w-40 md:w-48 lg:w-56"
  />

  {/* Text Content */}
  <div>
    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">
      What is Cloud Computing?
    </h2>
    <p className="text-base lg:text-lg mt-4 leading-relaxed">
      Cloud computing is the delivery of online services (such as servers, databases, software) to users. With the help of cloud computing, storing data on local machines is not required. It helps you access data from a remote server. Moreover, it is also used to store and access data from anywhere across the world.
    </p>
  </div>
</div>

{/* Section 2: What is AWS */}
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
  {/* Image or Icon */}
  <img
    src="https://example.com/aws-icon.png" // Replace with actual image URL
    alt="AWS Illustration"
    className="w-40 md:w-48 lg:w-56"
  />

  {/* Text Content */}
  <div>
    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">
      What is AWS?
    </h2>
    <ul className="text-base lg:text-lg mt-4 space-y-2">
      <li>➡️ <span className="font-semibold">AWS Meaning:</span> The Amazon Web Services (AWS) platform provides more than 200 fully featured services from data centers located all over the world, and is the world's most comprehensive cloud platform.</li>
      <li>➡️ Amazon Web Service is an online platform that provides scalable and cost-effective cloud computing solutions.</li>
      <li>➡️ AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.</li>
    </ul>
  </div>
</div>
<div>
    <img src={IMG}
     />
</div>
<div className="px-4 md:px-8 lg:px-16 py-10 space-y-16 text-gray-800">

      {/* Section 1: Applications of AWS */}
      <div className="space-y-4 text-center">
        <p className="text-lg md:text-xl leading-relaxed">
          The most common applications of AWS are storage and backup, websites, gaming, mobile, web, and social media applications. Some of the most crucial applications in detail are as follows:
        </p>
        
        {/* Application Icons and Titles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-blue-600">
          {/* Application Item */}
          <div className="flex flex-row space-x-3 items-center space-y-2">
            <LuDatabaseBackup className="w-12 h-12" />
            <span className='text-xl'>Storage and Backup</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <FaLaptopCode className="w-12 h-12" />
           <span>Mobile, Web and Social Applications</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <PiNotificationFill className="w-12 h-12" />
           <span>Messages and Notifications</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <TbWorldWww className="w-12 h-12" />
           <span>Websites</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <BsGraphUpArrow className="w-12 h-12" />
            <span>Big Data Management and Analytics</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <PiVirtualReality className="w-12 h-12" />
           <span>Augmented Reality and Virtual Reality</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <RiGamepadLine className="w-12 h-12" />
            <span>Game Development</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <AiOutlineSetting className="w-12 h-12" />
           <span>Artificial Intelligence</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
          <LuGamepad2 className="w-12 h-12" />
            <span>Game Development</span>
          </div>
        </div>
      </div>

      {/* Section 2: Advantages of AWS */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold">Advantages of AWS</h2>
        <ul className="space-y-2 text-base md:text-lg">
          <li>➡️ AWS provides a user-friendly programming model, architecture, database as well as operating system that has been already known to employers.</li>
          <li>➡️ AWS is a very cost-effective service. There is no such thing as long-term commitments for anything you would like to purchase.</li>
          <li>➡️ It offers billing and management for the centralized sector, hybrid computing, and fast installation or removal of your application in any location with few clicks.</li>
          <li>➡️ There is no need to pay extra money on running data servers by AWS.</li>
          <li>➡️ AWS offers a total ownership cost at very reasonable rates in comparison to other private cloud servers.</li>
        </ul>
      </div>
    </div>

</div>
    </div>
  )
}

export default Aws