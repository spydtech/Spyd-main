import reactImage1 from "../../assets/ReactJs/Frame3.png"; 
import reactImage2 from "../../assets/ReactJs/image5.png"; 
import { FiArrowRight } from "react-icons/fi";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReactJs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
    {/* First Image */}
    <img 
    data-aos="zoom-in-up"
    src={reactImage1} alt="ReactJS Development" 
    className="w-full max-w-7xl h-44 sm:h-[500px] md:h-[400px] mb-6" />

    {/* Headings Section */}
    <div className="w-full text-center mb-8">
      <h2 
      data-aos="zoom-in-up"
      className="text-3xl md:text-3xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-6">
        Building Dynamic and Responsive Web Applications
      </h2>
      <h3 
      data-aos="fade-down"
      className="text-2xl md:text-2xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-4">
        Mastering ReactJS
      </h3>
    </div>

    <div className="justify-start gap-0 lg:px-20 flex flex-col md:flex-row items-start mb-6 p-4">
{/* Text Section */}
<div className="lg:w-1/2 w-full md:pr-4">
  <h1 
   data-aos="fade-right"
  className="text-2xl  bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-4">
    Leading ReactJS Development Company
  </h1>
  <p 
   data-aos="fade-right"
  className="text-base md:text-lg mb-2 text-justify">
    React encourages a component-based architecture, where UIs are composed of independent, self-contained components that can be easily reused across different parts of an application. This modular approach enhances code maintainability and scalability, making it easier for developers to manage complex projects. Additionally, React follows a unidirectional data flow, ensuring predictable and easily traceable state management through the use of properties and state.
  </p>
</div>

{/* Image Section */}
<div className="w-full md:w-1/3 lg:w-1/3 flex justify-center md:justify-end">
  <img 
   data-aos="fade-up"
    src={reactImage2} 
    alt="ReactJS Development" 
    className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px]" 
  />
</div>
</div>



    {/* Benefits Section */}
    <div className="flex-1 bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
  <h2 
   data-aos="flip-up"
  className="text-xl sm:text-2xl md:text-3xl  mb-6 text-black">
    The Immense Benefits of ReactJS:
  </h2>
  
  <ul className="list-none flex flex-col gap-4">
    {[
      {
        text: "ReactJS offers a robust library for precise web application development.",
        label: "Powerful",
      },
      {
        text: "With minimal coding requirements, ReactJS enhances productivity for both developers and designers.",
        label: "Efficient",
      },
      {
        text: "ReactJS can be used to build various types of applications, ranging from simple single-page apps (SPAs) to large-scale enterprise solutions.",
        label: "Versatile",
      },
      {
        text: "React's server-side rendering capabilities improve SEO, ensuring faster indexing and better performance.",
        label: "SEO-Friendly",
      },
      {
        text: "React optimizes the rendering process with its virtual DOM for faster, efficient user interactions.",
        label: "Fast",
      },
      {
        text: "React's component-based architecture makes it easy to adapt to evolving web development needs.",
        label: "Flexible",
      },
    ].map((item, index) => (
      <li 
       data-aos="fade-right"
      key={index} className="flex items-start">
        <FiArrowRight className="mr-3 text-lg text-black flex-shrink-0" />
        <p className="text-black text-sm sm:text-sm md:text-base leading-relaxed">
          <strong className="">{item.label}:</strong> {item.text}
        </p>
      </li>
    ))}
  </ul>
</div>
<CallToAction />
<Footer />

  </div>
  );
};

export default ReactJs;
