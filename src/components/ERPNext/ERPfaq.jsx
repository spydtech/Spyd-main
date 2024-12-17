import React, {useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import heroImg from "./../../assets/ERPNext/ERP22.png"
import CallToAction from "../CallToAction";
import Footer from "../Footer";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is Third-Party Integration?",
      answer: `
        - Third-party integration allows businesses to connect their systems with external applications seamlessly.
        - This approach enhances functionality, automates processes, and improves productivity.
        - APIs (Application Programming Interfaces) play a crucial role in linking systems and enabling smooth communication.
        - It ensures cost-effective and scalable solutions for modern digital transformation.`,
    },
    {
      question: "Benefits of Third-Party Integration With ERP Systems",
      answer: `
        - Streamlined operations and reduced manual work.
        - Enhanced data accuracy and real-time reporting.
        - Integration allows businesses to utilize best-in-class tools without reinventing the wheel.
        - Facilitates scalability as businesses grow.`,
    },
    {
      question: "How ERPNext Supports API Integration",
      answer: `
        - ERPNext offers robust API support to seamlessly integrate third-party tools.
        - It provides businesses with a customizable platform for digital optimization.
        - Easy to scale and adapt as business requirements evolve.`,
    },
    {
      question: "Why Choose Our Integration Services?",
      answer: `
        - Expertise in handling complex integrations across various industries.
        - End-to-end consultation and implementation services.
        - Commitment to delivering scalable and future-ready solutions.`,
    },
    {
      question: "Our Excellencies APIs (Third-Party & Custom) Integration Projects",
      answer: `
        - We specialize in developing tailor-made APIs for your business needs.
        - Our third-party integrations include services like payment gateways, CRMs, and eCommerce platforms.
        - Custom APIs ensure that your systems are aligned with specific business goals and workflows.
        - Extensive expertise in bridging gaps between ERPNext and other software solutions for seamless connectivity.`,
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <header
       data-aos="fade-zoom-in"
        className="relative bg-cover bg-center text-white h-44 md:h-96"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1
           data-aos="fade-up"
          className="text-xl sm:text-2xl md:text-4xl ">
          Seamless API Integrations
          </h1>
          <p 
           data-aos="fade-up"
          className="mt-4 max-w-4xl  text-sm sm:text-base md:text-lg lg:text-xl">
          Unlock the power of connectivity by bridging the gap between software
          systems, enabling faster processes and enhanced productivity.
          </p>
        </div>
      </header>
     

      {/* Sub-header */}
      <section className=" text-center py-8 px-4">
        <h2 
         data-aos="fade-down"
        className="text-xl sm:text-2xl md:text-4xl px-8  text-[#0072FF]">
          Customized Solutions for All Your Integration Needs
        </h2>
        <p 
         data-aos="fade-down"
        className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 max-w-4xl mx-auto">
          From consultation to implementation, we provide expert services to
          help your business leverage the potential of third-party integrations.
        </p>
      </section>

      {/* FAQs Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {faqs.map((faq, index) => (
          <div
           data-aos="fade-right"
            key={index}
            className="mb-8 border border-blue-400 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3  text-[#0072FF] flex  text-sm sm:text-base md:text-lg lg:text-xl justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className=" text-sm sm:text-base md:text-lg lg:text-xl">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {activeIndex === index && (
              <div 
               data-aos="fade-down"
              className="px-4 py-3 bg-white text-gray-700">
                {faq.answer.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FAQPage;
