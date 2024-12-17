import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

const AspDevelopers = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Strong technology competency",
    },
    {
      icon: <FaCheckCircle />,
      title: "Dedicated ASP.NET development team",
    },
    {
      icon: <FaCheckCircle />,
      title: "No surprise or hidden charges",
    },
    {
      icon: <FaCheckCircle />,
      title: "Cost-effective ASP.NET solutions",
    },
    {
      icon: <FaCheckCircle />,
      title: "100% transparency throughout project development and deployment",
    },
    {
      icon: <FaCheckCircle />,
      title: "24*7 customer support",
    },
  ];
  return (
    <div className="px-5 md:px-16">
      <h1
      data-aos="fade-zoom-up"
      className="text-lg lg:text-xl text-[#00CEFF] text-center">
        Reasons to choose ASP.Net Developers from SpY D team
      </h1>
      <p 
      data-aos="fade-right"
      className="text-sm md:text-base my-4">
        Our ASP.NET programmers have expertise in ASP.NET Programming & website
        development. We provide 100% accurate solutions to any level of
        customized Web Application services as well as maintenance work in .NET.
        Our professional team has worked with XML, SQL Server, .NET Win Forms,
        web services. SpY D Technology has a remarkable portfolio of experience
        in the domain.
      </p>

      <ul className="max-md:space-y-1 md:grid grid-cols-2 gap-3 lg:grid-cols-3 my-5">
        {reasons.map((reason) => (
          <li
          data-aos="fade-right"
            key={reason.id}
            className="flex items-center gap-2 text-[#00CEFF] text-sm md:text-base"
          >
            <span>{reason.icon}</span>
            <p className="">{reason.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AspDevelopers;
