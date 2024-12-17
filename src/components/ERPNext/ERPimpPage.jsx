import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "./../../assets/ERPNext/ERP22.png";
import imp1 from "./../../assets/ERPNext/imp1.png"
import imp2 from "./../../assets/ERPNext/imp2.png"
import imp3 from "./../../assets/ERPNext/imp3.png"
import con2 from "./../../assets/ERPNext/con1.png"
import con1 from "./../../assets/ERPNext/con2.png"
import con3 from "./../../assets/ERPNext/con3.png"
import con4 from "./../../assets/ERPNext/con4.png"
import con5 from "./../../assets/ERPNext/con5.png"
import con6 from "./../../assets/ERPNext/con6.png"
import con7 from "./../../assets/ERPNext/imp7.png"
import con8 from "./../../assets/ERPNext/imp8.png"
import CallToAction from "../CallToAction";
import Footer from "../Footer";

// import Card from "./Card";

const ImplementationPage = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Process Mapping with ERPNext",
      description:
        "Our Implementation team starts business process mapping with ERPNext, and during this stage, if required, they consult involved stakeholders to reengineer the process to maximize the results with the ERPNext.",
        imgUrl:con1, // Replace with actual image URL
        bgColor: "bg-[#FF6988]",
    },
    {
      title: "Reports and Intuitive Dashboards",
      description:
        "Once Implementation and Customization are done, we start building the required reports and intuitive dashboards to allow them to make business decisions data-oriented.",
        imgUrl: con2, // Replace with actual image URL
        bgColor: "bg-[#0072FF]",
    },
    {
      title: "Configuration of ERPNext",
      imgUrl:con3, // Replace with actual image URL
      description:
        "We configure ERPNext, Company, and basic settings as per the company and its business goals.",
      bgColor: " bg-[#F569C2]",
    },
    {
      title: "Live Setup and Data Migration",
      imgUrl: con4, // Replace with actual image URL
      description:
        "Our Consultants will be there to support, guide, and assist stakeholders' decisions during the implementation stage and consult them if process change is required.",
      bgColor: "bg-[#00CEFF]",
    },
    {
      title: "Implementation of Process into ERPNext",
      imgUrl: con5, // Replace with actual image URL
      description:
        "Our Team starts implementing the derived business processes into the ERPNext module by module, ensuring alignment with business expectations.",
      bgColor: "bg-[#FFB800]",
    },
    {
      title: "Testing",
      imgUrl: con6, // Replace with actual image URL
      description:
        "Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation.",
      bgColor: "bg-[#9747FF]",
    },
    {
      title: "Customization of ERPNext",
      imgUrl: con7, // Replace with actual image URL
      description:
        "Once the basic implementation is done, we start the customization of ERPNext to achieve the expected results.",
      bgColor: "bg-[#26AFC7]",
    },
    {
      title: "Go Live",
      imgUrl: con8, // Replace with actual image URL
      description:
        "Our consultant ensures stakeholders are fully equipped with the necessary knowledge for a successful ERPNext go-live.",
      bgColor: "bg-[#D75495]",
    },
  ];

  return (
    <div className="">
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
          data-aos="fade-down"
          className="text-xl sm:text-2xl md:text-4xl ">
            ERPNext Implementation
          </h1>
          <p 
          data-aos="fade-down"
          className="mt-4  max-w-4xl  text-sm sm:text-base md:text-lg lg:text-xl">
            Enhance Enterprise Productivity with Our ERPNext Implementation
            Services by ensuring a seamless and efficient implementation
            process.
          </p>
        </div>
      </header>

      {/* Description Section */}
      <div className="text-center py-8 px-4">
        <h2 
        data-aos="fade-down"
        className="text-xl sm:text-2xl md:text-4xl px-8 f text-[#0072FF]">
          Streamline Your Business Operations with Our ERPNext Implementation
          Services
        </h2>
        <p 
        data-aos="fade-right"
        className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 max-w-4xl mx-auto">
          Our ERPNext team provides cutting-edge solutions to help your
          organization embrace best practices in ERP implementation, addressing
          your unique business challenges and maximizing productivity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2  lg:mx-28 lg:px-12 pb-12 px-2 py-4">
        {cardData.map((card, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className={`flex flex-col justify-start items-start  ${
                index % 2 === 0 ? " mt-1 md:mt-12" : " mb-1 md:mb-12"
              }    ${card.bgColor} rounded-lg shadow-lg min-h-72  p-2 max-w-xl mx-auto text-white`}
          >
            <div 
            
            className="flex justify-start gap-2">
                <div className="">
              <img

                src={card.imgUrl}
                alt={`${card.title} Icon`}
                className="lg:w-25 lg:h-25 sm:w-20 sm:h-20 w-14 h-14  rounded-full border-4 lg:border-8 m-4 border-white "
              />
            </div>
            <h3 className="text-center max-w-72 text-xl mt-4 sm:mt-6 lg:mt-10">
              {card.title}
            </h3>
            </div>
            <p className="text-center  text-sm sm:text-base md:text-lg  ">{card.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center">
    {/* Cloud Implementation Card */}
    <div
    data-aos="fade-up"
    className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={imp1}
        alt="Cloud Implementation"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#0072FF] text-xl mb-2">Cloud Implementation</div>
        <p className="text-[#0072FF]  text-sm sm:text-base md:text-lg ">
          Seamlessly migrate your business operations to the cloud for improved scalability, security, and accessibility.
        </p>
      </div>
    </div>

    {/* ERP Implementation Card */}
    <div 
    data-aos="fade-up"
    className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={imp2}
        alt="ERP Implementation"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#0072FF] text-xl mb-2">ERP Implementation</div>
        <p className="text-[#0072FF]  text-sm sm:text-base md:text-lg ">
          Implement state-of-the-art Enterprise Resource Planning systems tailored to your business needs for improved efficiency.
        </p>
      </div>
    </div>

    {/* Software Integration Card */}
    <div 
    data-aos="fade-up"
    className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={imp3}
        alt="Software Integration"
      />
      <div className="px-6 py-4">
        <div className=" text-[#0072FF] text-lg md:text-xl mb-2">Software Integration</div>
        <p className="text-[#0072FF]  text-sm sm:text-base md:text-lg ">
          Streamline your business processes by integrating various software solutions to work seamlessly together.
        </p>
      </div>
    </div>
    </div>
    <CallToAction />
    <Footer />
    </div>
    )
};

export default ImplementationPage;
