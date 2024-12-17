import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "./../../assets/ERPNext/ERP1.png";
import erp2 from "./../../assets/ERPNext/ERP2.png";
import erp3 from "./../../assets/ERPNext/ERP3.png";
import erp4 from "./../../assets/ERPNext/ERP4.png";
import erp5 from "./../../assets/ERPNext/ERP5.png";
import erp6 from "./../../assets/ERPNext/ERP6.png";
import erp7 from "./../../assets/ERPNext/ERP7.png";
import erp8 from "./../../assets/ERPNext/ERP8.png";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "ERPNext Consulting",
      description:
        "Our Consultants gather all the necessary details about your company, its business processes, business challenges, expected end goals, and more. It is a very crucial stage as it lays a strong foundation. At Akhilam, you are assured that you are working with an experienced, dedicated team of Consultants.",
      imgSrc: erp2,
      link: "/services/erp/consulting",
    },
    {
      title: "ERPNext Implementation",
      description:
        "We focus on organizing the overall structure and behavior of all the doctypes, required reports, and required dashboards. From a customization and custom development aspect our technology team ensures technical functionalities are defined, and all pieces fit together perfectly; creating a larger picture of how items relate with each other within the system.",
      imgSrc: erp3,
      link: "/services/erp/implementation",
    },
    {
      title: "ERPNext Development",
      description:
        "For the out of box requirement, Our technical team prepares prototypes for clients, and clients have approved them, we now go ahead and do the coding. We use the best coding tactics to ensure quality results. And, our standard process allows clients to scale ERPNext solutions with the latest and future versions.",
      imgSrc: erp4,
      // link: "",
    },
    {
      title: "Website with ERPNext",
      description:
        "We help small businesses and NGOs to start their digital transformation journey and a presence in the digital world with a dynamic, easy-to-update, interacting website at a minimal cost. Also, it allows customizing the website's appearance and layout for any screen size with Bootstrap’s cutting-edge technology",
      imgSrc: erp5,
      // link: "",
    },
    {
      title: "Ecommerce with ERPNext",
      description:
       "We help in the seamless integration of the eCommerce store with a modern, cloud-based ERPNext solution. Together, they extend the company’s breadth and depth, connecting processes and procedures for a cohesive, future-proofed operation. And, it helps to centralize data on a single, unified data hub rather than silos.",
      imgSrc: erp6,
      // link: "",
    },
    {
      title: "Third-Party Integrations",
      description:
        "We are experts in any kind of third-party integration with ERPNext, and third-party integrations allow you to quickly add features and tools to business processes that might take many months to develop own. By utilizing third-party integrations, We incorporate superior features to your ERPNext",
      imgSrc: erp7,
      link: "/services/erp/integrations",
    },
    {
      title: "Data Analysis with BI Tools",
      description:
        "DATA is NEW OIL. And, Having real-time insights from each decision point, improves productivity and empowers informed decision-making. We have been helping MSMEs to connect their ERPNext systems with powerful tools like PowerBI, Tableau, and Metabase.",
      imgSrc: erp8,
      // link: "",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header
       data-aos="fade-zoom-in"
        className="relative bg-cover bg-center text-white h-44 md:h-96"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 
           data-aos="fade-up"
          className="text-xl sm:text-2xl md:text-4xl">
            Our Services
          </h1>
          <p 
           data-aos="fade-up"
          className="mt-4  max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl">
            Building Cost-Effective Digital Business Capabilities around
            ERPNext, focusing on the right balance of Digitization, Flexibility,
            and Process Mapping.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto my-8 px-4 mt-8 py-10">
        <h2 
         data-aos="fade-down"
        className="text-xl sm:text-2xl md:text-4xl px-8  text-[#0072FF] text-center">
          A Unique Team of ERPNext
        </h2>
        <p 
         data-aos="fade-right"
        className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 max-w-4xl mx-auto text-center">
          Our ERPNext team provides state-of-the-art, standards, and best
          practices for consultation, implementation, and development aimed at
          addressing all our clients' business challenges and goals.
        </p>

        {/* Cards */}
        <div className="space-y-16 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex bg-white flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8`}
            >
              <img
               data-aos="fade-up"
                src={service.imgSrc}
                alt={service.title}
                className="w-full lg:w-1/2 rounded-lg  shadow-md"
              />
              <div className="lg:w-1/2">
                <h3 
                 data-aos="fade-right"
                className="text-lg sm:text-xl md:text-2xl  py-4 text-[#0072FF]">
                  {service.title}
                </h3>
                <p 
                 data-aos="fade-right"
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-4">
                  {service.description}
                </p>
                <button 
                 data-aos="fade-right"
                className="mt-12 px-6 py-3  bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white text-sm sm:text-base md:text-lg rounded-md hover:opacity-90">
                 <Link to={service.link} className="block w-full h-full">
    Learn More
  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Services;

