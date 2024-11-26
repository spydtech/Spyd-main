import React from "react";
import bgimage from "../../../assets/backend/java/bgimage.png";
const JavaOffers = () => {
  const capabilities = [
    "Streamlining web application development.",
    "Providing support for plug-in development.",
    "Integration with Java-based cloud platforms.",
    "Optimization, maintenance, and continuous support for Java engines.",
    "Crafting Enterprise Resource Planning (ERP) solutions using Java.",
    "Effortless manipulation of the Document Object Model (DOM).",
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
      }}
      className="bg-[#0866e2] text-white p-6 sm:p-8 lg:p-12  "
    >
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl  mb-8">
        THE CAPABILITIES OFFERED BY JAVA ENCOMPASS
      </h2>
      <div className="flex pl-10 flex-col gap-4">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="flex items-center text-sm sm:text-base lg:text-lg"
          >
            <span className="lg:text-3xl text-xl mr-4">➡</span>
            <p>{capability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavaOffers;
