import React from 'react'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'
import IMG from "../../../assets/spyd logo/spyd_logo.png"

function CloudAzure() {
  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
  className="relative bg-cover bg-center md:h-96  h-40 flex items-center justify-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/bf0a/ef2c/f5fa1025d8d804d2b87d5c46a88f2efa?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CI3XKq4VSxaiRuTAdGMuNUO3s0qV1DZMDuCyoKzuZ8k-z22NvSr56JJxVRjoWkXkOQpwBYcbd3IO9voGYEunW-vxRcdzV7-yLba5XdRCB7MjYe82JNDLOnQ5DheKXa8OyN2mAViLaREgSMPuNocFWqsilQrysBk4BkLFFKWJkpiXBFwiCp15LpSi274~DY4GwzTRWtZR5Dr056Z4idGMompbxSCmHAfpe72olLPwiueZ12AZDplwDhU0kV8e7xjXT87vfn9g1KKArcTb9H6zdfbuT2aMkyOhIot8yCDl714LKZ7jD6RxlQzK4617Kes-om-1h6Qvmc5dAVBjoYzJig__")`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-black opacity-10"></div>

  {/* Centered text content */}
  <div className='md:space-y-5'>
  <h1 className="relative md:text-4xl text-center text-white">
  Unlock the Power of Azure cloud with
  
  </h1>
  <p className="relative md:text-4xl text-center text-white ">
  "SpY D Technology"
  </p>
 
  </div>
  
</div>

<div className="bg-white text-gray-800 text-start py-10 ">
      {/* Main Title */}
      
      <h1 className="text-xl md:text-4xl text-center  text-blue-600" >
        About SpY D Technology
      </h1>

     
    

      {/* Description List */}
      <div className='flex flex-col md:flex-row md:space-x-8  justify-center md:px-12'>
      <div className=" justify-start md:mt-8 p-3 md:space-y-10 space-y-2 md:w-[500px] ">
      <h2 className="text-xl md:text-2xl   text-blue-500 md:mt-6 mt-2">
        Empowering Businesses with Cutting-edge Technology
      </h2>
        <ul className="space-y-4  md:text-lg text-sm">
          <li className=" items-start">
            <span className="text-blue-600  mr-2">➤</span>
            Brief overview of SPYD, its purpose, and how it addresses modern challenges.
          </li>
          <li className=" items-start">
            <span className="text-blue-600 mr-2">➤</span>
            Explanation of its core functionalities and how it stands out in the market.
          </li>
        </ul>
      </div>
      <div className=" ">
        <img
          src="https://s3-alpha-sig.figma.com/img/8807/00fe/ddc9eba876f463f1a08581ff60a8b984?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e7UaT156VS-yuykUOt2BoNwm9swcSYNAg0sHSSruSS9E1TIH-OlT3waS6N8etsdup7HcYxuOVmCB7CoIcM8j3nXJx3FZRvXVM0xpiG8Z6nOL2h3UtW2QKg~DrbN30LaHqrYMBfV~eeOz~23qpDSvWQRLYx3M6lYMkSmZTH22rmyyJVoQj7UUB0~GSTcjth77yithwkaS9xHygXkBEBqRG7oUWVQOlO22~Rwj65BVMiR05wtrFyRpJNECeA~OwSEfYZLwl-SUtZjnRQzTXjslIm6sUZhzEnGOAtkUS1LoePhhVkWvDHA4bffDcZG~oVysJVpre4D-rw0E0fIn6qid8A__"
          alt="Technology Illustration"
          className="mx-auto md:w-[331px] md:h-[280px] "
        />
      </div>
      </div>
      </div>
      {/* Azure Section */}
      <h2 className="text-lg text-center md:text-2xl  text-blue-500 px-3 ">
        Develop your skills with the next app on Azure
      </h2>
      <h1 className="text-2xl text-center md:text-3xl  text-blue-600 mt-4">
        Welcome to SpY D Technology's on Azure Cloud
      </h1>

      {/* Catchy Intro */}
      <p className="md:text-lg text-sm text-gray-700 mt-6 mb-6 px-3 max-w-4xl text-center mx-auto">
        Catchy introduction explaining the essence of SPYD and its significance in today's digital
        landscape. Highlight key features and benefits.
      </p>


      <div
  className="relative flex flex-col md:flex-row  md:max-w-5xl mx-auto text-white md:py-10 py-5 bg-cover bg-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/7f2a/fa0e/bda83c596db899052e4f822c4f621038?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kv21yM3i5dRCkm3zGNOIlOxRSDp8XmA4wYo~YeEjCSm14DfBioo2rG6M3vzelZ2N~~aYaTYWxZCJeZoYKTeK17ipGiO69axrt1MVWIRlHPvTPYT5VNTMt~INxs238oBOeab-e9mPtxP~FVysglQ9wxuBke8QPH290sdBNtyzicY3ERdNt8IgBygt0f1vMcUSrTgHUTCygoEaj1IobpF50-wmLbSByhYDKsVHzj2Sz0518WlPc1QRiouJPgyktXJ2oYI-Pkx0LlMhJTdIc90szdxFiGjHqJ0qsBrebpqt1ihYf9z-ynwaNpduoeoJqpQ9GJ0axxSA1EW4~8FCH7pu5A__")`,
  }}
>
<div className="absolute inset-0 bg-[#38bdf8] opacity-70"></div>
  {/* Section Container */}
  
  <div className=" relative text-start md:px-12 px-4 space-y-5 ">
    
    {/* Main Heading */}
    <h1 className="text-xl md:text-4xl font ">
      Why Choose SpY D on Azure Cloud?
    </h1>

    {/* Subtitle */}
    <h2 className="text-lg md:text-xl mt-4">
      Unleash the Full Potential of SPYD with Azure Cloud
    </h2>

    {/* Description */}
    <p className="text-sm md:text-base mt-6 leading-relaxed">
      How SPYD seamlessly integrates with Azure services for enhanced
      performance, scalability, and security.
    </p>
    <p className="text-sm md:text-base">
      Testimonials or case studies showcasing successful implementations of
      SPYD on Azure Cloud.
    </p>

    {/* Button */}
    <div className="mt-6">
      <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg hover:bg-gray-200 transition">
        Get Started
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className=" relative flex justify-center items-center md:w-1/2">
    <img
      src={IMG}
      alt="SPYD Logo"
      className="md:w-96 md:h-96 rounded-full bg-transparent p-4 md:-mt-20 "
    />
  </div>
</div>


      {/* Quote Section */}
      <div className="mt-8 max-w-6xl mx-auto text-start p-4">
        <p className="text-sm text-black italic">
          "Creating content for a website about a technology like SpY D on the
          Azure Cloud platform would involve explaining what SpY D Technology
          is, its features, benefits, and possibly how it integrates or
          utilizes Azure services. Here's a sample outline for the content:"
        </p>

        {/* Author */}
        <p className="text-pink-500  mt-4 text-end">
          Sathish Chiliveru, CEO of SpY D
        </p>
      </div>
    
      <div className="bg-white py-10 px-6">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl  text-blue-500">
          Features
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl  text-blue-400 mt-4">
          Discover the Power of SpY D Technology
        </h2>

        {/* Description List */}
        <ul className="mt-6 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>
              Detailed breakdown of SPYD's features, including advanced data
              analytics.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>Advanced data analytics</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>Real-time monitoring and alerting</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>Scalable infrastructure</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>Integration with third-party tools</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>Security features</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">➤</span>
            <p>
              Visual aids like infographics or diagrams to illustrate key
              concepts.
            </p>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-8 md:text-lg text-sm">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-medium shadow-md hover:bg-blue-600 transition">
            Learn more about our company →
          </button>
        </div>
      </div>

      {/* Call-to-action Section */}
      <div className="bg-white py-10 md:px-6 mt-10 ">
        <h3 className="text-xl md:text-3xl  text-blue-500 text-center">
          Embark on Your "SpY D Tech" Journey Today
        </h3>
        <p className="text-gray-700 mt-4 text-sm md:text-lg text-center md:w-3/6 md:ml-[25%] gap-5">
        Call-to-action prompting visitors to explore further or contact for more information. 
        Links to resources like documentation, pricing, and contact forms.
        </p>
      </div>
    </div>
    <CallToAction />
    <Footer />

    </div>
  )
}

export default CloudAzure