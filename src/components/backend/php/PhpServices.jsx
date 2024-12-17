// import React from "react";

// const services = [
//   "PHP Support & Maintenance Services",
//   "PHP Support & Maintenance Services",
//   "PHP Support & Maintenance Services",
//   "PHP Support & Maintenance Services",
//   "PHP Support & Maintenance Services",
//   "PHP Support & Maintenance Services",
// ];

// const PhpServices = () => {
//   return (
//     <section className="bg-blue-500 py-10 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl  text-white">
//           The following are some of the PHP-based projects development
//         </h2>
//         <p className="text-white text-xl mt-2">support we offer</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white flex items-end h-[350px] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="">
//                 <p className="text-[#0866e2]  text-xl font-medium text-center">
//                   {service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PhpServices;
import React, {useEffect, useState } from "react";
import { TbCircleCheckFilled } from "react-icons/tb";

import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";


const PhpServices = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [activeTab, setActiveTab] = useState("services");

  const content = {
    services: {
      title: "Our PHP Services",
      text: "PHP is our core competence. We have 40+ qualified and skilled PHP developers who develop unique, dynamic, and highly functional web applications based on PHP to meet your business requirements. Custom PHP solutions offered by Source Soft Solutions cater to diversified needs of organizations.",
      data: [
        "Custom PHP Application Development",
        "PHP CMS Development",
        "PHP and Flash/Flex Integration",
        "Custom PHP Programming",
        "PHP and Active Directory Integration",
        "Custom PHP Shopping Cart",
        "PHP and Python/Django Integration",
        "CakePHP/Yii/Laravel Development",
        "API Integration and Development",
        "Existing App Porting & Migration",
      ],
    },
    expertise: {
      title: "Technical Expertise",
      text: "Whether you need business applications, eCommerce shopping cart, or discussion forum, we are your perfect choice as a PHP development partner. We have a team of programmers, coders, and developers who ensure unmatched capabilities and features for your PHP solutions.",
      data: [
        "PHP Versions – 4.X, 5.X, and 7.X",
        "Front-end – CSS3, HTML5 & JavaScript",
        "Frameworks – CakePHP, Zend & Symfony",
        "Web Services – XML, AJAX & JSON",
        "Frameworks – CodeIgniter, Yii & Laravel",
        "JS Libraries – JQuery & Prototype JS",
        "Database – MySQL 5.X and MongoDB",
        "Cloud Scalability and Big Data Support",
        "CMS – Drupal, Magento & WordPress",
        "Technical Support & Monitoring",
      ],
    },
    edge: {
      title: "Our Competitive Edge",
      text: "Source Soft Solutions has vast expertise in diverse business segments which allow us to utilize best practices and proven methodologies. Our customized PHP development solutions go beyond your expectations and help your business stand out.",
      data: [
        "Competent PHP Developers & Coders",
        "10+ Years of Experience in PHP",
        "Advanced Infrastructure & Best Practices",
        "Proven Strategies & Methodologies",
        "Transparent and Professional Approach",
        "Full Confidentiality & Privacy",
        "Clean Coding and Programming",
        "Front-end and Back-end Support",
        "Cost-Effective, Result-Oriented Solutions",
        "Ownership Totally to Clients",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-2 md:p-6">
      <h2 
      data-aos="flip-up"
      className="text-2xl text-center sm:text-3xl  text-[#00ceff] mb-10">
        Why choose us as your PHP application development partner?
      </h2>
      {/* Tab Buttons */}
      <div 
      data-aos="fade-right"
      className="flex space-x-4 ">
        <button
          onClick={() => setActiveTab("services")}
          style={{
            clipPath:
              "polygon(14% 0, 100% 0, 100% 75%, 100% 100%, 0 100%, 0 35%)",
          }}
          className={`py-2 px-4   transition-all ${
            activeTab === "services"
              ? "bg-[#0866e2] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Our PHP Services
        </button>
        <button
          style={{
            clipPath:
              "polygon(14% 0, 100% 0, 100% 75%, 100% 100%, 0 100%, 0 35%)",
          }}
          onClick={() => setActiveTab("expertise")}
          className={`py-2 px-4  transition-all ${
            activeTab === "expertise"
              ? "bg-[#0866e2] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Technical Expertise
        </button>
        <button
          style={{
            clipPath:
              "polygon(14% 0, 100% 0, 100% 75%, 100% 100%, 0 100%, 0 35%)",
          }}
          onClick={() => setActiveTab("edge")}
          className={`py-2 px-4 transition-all ${
            activeTab === "edge"
              ? "bg-[#0866e2] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Our Competitive Edge
        </button>
      </div>

      {/* Content Section */}
      <div 
       
      className="relative border-2  border-gray-300 overflow-hidden">
        <div
        
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${
              activeTab === "services"
                ? "0%"
                : activeTab === "expertise"
                ? "-100%"
                : "-200%"
            })`,
          }}
        >
          {/* Services */}
          <div 
          
          data-aos="fade-right"className="min-w-full p-4">
            <h2 className="text-2xl text-[#0866e2]   mb-4">
              {content.services.title}
            </h2>
            <p className="text-black mb-4">{content.services.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.services.data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-black"
                >
                  <TbCircleCheckFilled className="text-[#0866e2] mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div
          data-aos="fade-right"
          className="min-w-full p-4">
            <h2 className="text-2xl text-[#0866e2]  mb-4">
              {content.expertise.title}
            </h2>
            <p className="text-black mb-4">{content.expertise.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.expertise.data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-black"
                >
                  <TbCircleCheckFilled className="text-[#0866e2] mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Edge */}
          <div 
          data-aos="fade-right"
          className="min-w-full p-4">
            <h2 className="text-2xl text-[#0866e2]  mb-4">
              {content.edge.title}
            </h2>
            <p className="text-black mb-4">{content.edge.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.edge.data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-black"
                >
                  <TbCircleCheckFilled className="text-[#0866e2] mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhpServices;
