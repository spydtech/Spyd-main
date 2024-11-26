import React from "react";
import bgimage from "../../assets/backend/bgimage.png";
const BackendDevelopment = () => {
  const content = [
    {
      id: 1,
      text: "Within our backend development expertise, SPYD Tech's skilled team seamlessly integrates robust technologies to power web applications. Our extensive experience ensures the creation of high-performance backend systems that enhance the overall value of our clients' businesses.",
    },
    {
      id: 2,
      text: "Utilizing advanced backend technologies accelerates the deployment of our clients' products and services, providing a strategic advantage in the dynamic and competitive business environment.",
    },
    {
      id: 3,
      text: "The modular and adaptable components in our backend solutions facilitate swift integration across various applications, resulting in significant time and effort savings during the development process for our clients.",
    },
    {
      id: 4,
      text: "SPYD Tech is committed to delivering cost-effective backend solutions, optimizing development budgets, and ensuring efficient and economical outcomes for our clients' applications.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
      }}
      className="bg-[#0866e2] text-white p-6 sm:p-8 lg:p-12"
    >
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
        How SPY D Tech Empowers Clients through Backend Development
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {content.map((item) => (
          <div key={item.id} className=" p-4 sm:p-6 ">
            <div className="flex items-start">
              <span className="text-3xl mr-4">➡</span>
              <p className="text-sm sm:text-base lg:text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendDevelopment;
