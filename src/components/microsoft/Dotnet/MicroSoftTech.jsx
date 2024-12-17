import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

function MicroSoftTech() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const tech = [
    {
      icon: <FaCheckCircle />,
      description:
        "Web Services: OData, SOAP, JSON, REST, ASP.NET, WCF Data Services, Windows Forms, XAML Browser Applications",
    },
    {
      icon: <FaCheckCircle />,
      description:
        "Web Applications - ASP.NET, Dynamic Data, ASP.NET AJAX, ASP.NET MVC, ASP.NET",
    },
    {
      icon: <FaCheckCircle />,
      description:
        "Other Technologies: Silver Light, WPF, SharePoint Development, MVC3 / MVC4 Development, ASP.NET migration",
    },
    {
      icon: <FaCheckCircle />,
      description: "Security: HTTPS/SSL, NTLM, Encryption, Kerboros",
    },
    {
      icon: <FaCheckCircle />,
      description: "Database: MSSQL, SQL Server, Oracle, ODBC",
    },
  ];
  return (
    <div className="px-5 md:px-32 lg:px-32 lg:py-10">
      <h1 
      data-aos="zoom-in-up"
      className=" text-[#00ceff] text-center text-lg lg:text-2xl">
        Some of the Microsoft Technologies capabilities are
      </h1>
      <ul className="my-5 lg:space-y-10 space-y-3 lg:px-14 lg:w-[830px] lg:mt-10">
        {tech.map((each) => (
          <li 
          data-aos="fade-right"
          key={each.id} className="flex text-sm md:text-base gap-2">
            <span className="text-[#00ceff]">{each.icon}</span>
            <p>{each.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MicroSoftTech;
