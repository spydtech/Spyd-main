import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        className="relative bg-cover bg-center text-white h-96"
        style={{
          backgroundImage: `url(''https://s3-alpha-sig.figma.com/img/15b3/0e05/3d321ac02ae70ab552cf1bc6fc257e7e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFBTVx31zZh2FH8Hm5rDcuDZfDfH55eqiKJfmG9WX4QQ63lQ7F51u6YXkrHknmU8JPpnkCFX~HAGZMT38c8OnmjzD5poOo0FbWpABEAFjGbGWC5ugLr~SzgDfO~lVYlBjc7btM5RxBKR57r90~yWsPuM3Au5luPL43f7RBGZZKqK6MYfCZ9Nr2Q0049SmmDcfszMoFfgVgcHZS0Rh9dsDlN50sPspTExCUpF~bg6UKDWYhjcl3pE8mNMlhr-XRCj5eXCE4UrKkn12ms8T6IFwtZc~iOrdiEQt31tahMeJfwMDi5xbPTLT5~B0QULayP0LEYUIAOrV1Z0lDulnXIzcA__)`,
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Seamless API Integrations
          </h1>
          <p className="mt-4 text-base max-w-4xl sm:text-lg md:text-2xl lg:text-3xl">
          Unlock the power of connectivity by bridging the gap between software
          systems, enabling faster processes and enhanced productivity.
          </p>
        </div>
      </header>
     

      {/* Sub-header */}
      <section className=" text-center py-8 px-4">
        <h2 className="text-2xl md:text-4xl px-8 font-semibold text-[#0072FF]">
          Customized Solutions for All Your Integration Needs
        </h2>
        <p className="text-sm md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
          From consultation to implementation, we provide expert services to
          help your business leverage the potential of third-party integrations.
        </p>
      </section>

      {/* FAQs Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-8 border border-blue-400 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3  text-[#0072FF] font-semibold flex text-base md:text-2xl justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className=" text-base md:text-2xl">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">
                {faq.answer.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
