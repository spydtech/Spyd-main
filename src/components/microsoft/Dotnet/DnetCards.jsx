import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimage from "../../../assets/dotnet/bgimage.png"; // Ensure this path is correct.

const cards = [
  {
    title: "Custom .NET Application Development:",
    description:
      "Transform your ideas into reality with Spyd's custom .NET application development services. Our experienced team of .NET developers specializes in building bespoke solutions tailored to your specific requirements, whether you need a web application, desktop software, or mobile app.",
  },
  {
    title: "Enterprise .NET Integration:",
    description:
      "Seamlessly integrate .NET applications with your existing systems and workflows with Spyd's enterprise integration services. Our experts ensure smooth data exchange and interoperability between different platforms and technologies, enabling you to streamline processes and maximize efficiency.  ",
  },
  {
    title: "ASP.NET Web Development:",
    description:
      "Build modern, responsive web applications with ASP.NET, powered by Spyd Technology. Our ASP.NET development services leverage the latest web technologies and best practices to create dynamic, user-friendly web experiences that engage customers and drive business growth.",
  },
  {
    title: ".NET Core Migration and Modernization:",
    description:
      "Future-proof your applications with .NET Core migration and modernization services from Spyd. Whether you're upgrading from legacy .NET frameworks or transitioning to cloud-native architectures, our experts guide you through the migration process and ensure a smooth transition with minimal disruption.",
  },
  {
    title: ".NET Consulting and Architecture Design:",
    description:
      "Leverage Spyd's .NET expertise to design scalable, robust architectures that lay the foundation for your digital initiatives. Our consultants work closely with you to understand your business goals, identify technical requirements, and develop a strategic roadmap for .NET implementation and optimization.",
  },
  {
    title: ".NET Support and Maintenance:",
    description:
      "Ensure the ongoing performance and reliability of your .NET applications with Spyd's support and maintenance services. Our dedicated support team provides timely assistance, troubleshooting, and proactive maintenance to keep your applications running smoothly and securely.",
  },
  {
    title: "Agile Development Methodology:",
    description:
      "Accelerate time-to-market and adapt to changing requirements with Spyd's agile development methodology. Our iterative approach to .NET development enables rapid prototyping, continuous feedback, and incremental improvements, ensuring that your solutions evolve in line with your business needs.",
  },
];

function DnetCards() {
  // Initialize AOS inside the functional component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className="bg-center bg-cover"
    >
      <p 
      data-aos="fade-down"
      className="p-5 md:px-14  bg-transparent lg:px-10 lg:w-[900px] lg:ml-[14%] text-sm md:text-base  lg:text-xl text-justify lg:py-10">
        "Spyd Technology,, where we leverage the power of .NET to drive digital
        transformation and innovation for businesses worldwide. Our .NET
        development solutions are designed to help you build scalable, secure,
        and high-performance applications that meet your unique needs and propel
        your organization forward. Explore how SpY D Technology can unleash the
        full potential of .NET for your business:
      </p>
      <ul className="p-5 md:px-20 lg:px-20 space-y-5 lg:space-y-0 md:grid grid-cols-3 gap-5">
        {cards.map((eachCard, index) => (
          <li
          data-aos="flip-up"
            key={index}
            className="bg-[#00CEFF] text-white p-3 rounded-lg"
          >
            <h1 className="text-lg lg:text-xl lg:px-6 text-center lg:mt-5">
              {eachCard.title}
            </h1>
            <p className="text-sm lg:text-sm py-3 text-justify">
              {eachCard.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DnetCards;
