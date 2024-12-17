import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimage from "../../../assets/mobile/hybrid/bgimage.jpg"

function HybridAppCards() {

  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);

  const Data = [
    {
      title: "Plan",
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state",
    },
    {
      title: "Craft",
      description:
        "Combining Strategic product solutions, and user’s goal through wireframes and prototypes.",
    },
    {
      title: "Design",
      description:
        "Designing visual identity to strengthen brand through iconography color, type, imagery, and animation.",
    },
    {
      title: "Develop",
      description:
        "Using agile methodologies, our professionals build final product with creativity and deliver product that perform well.",
    },
    {
      title: "Test",
      description:
        "Testing final product with all its features to check its performance and finally, handover to candidate for submission.",
    },
    {
      title: "Measure",
      description:
        "Evaluating the product’s performance and target the success metrics that was established in planning",
    },
  ];

  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <h1 
          data-aos="fade-down"
          className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-3xl text-center mb-10">
            Our Proven Methodology
          </h1>
        </div>
        <div className="main gap-y-20 flex justify-center">
          <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
            {Data.map((item, index) => (
              <div
              data-aos="fade-up"
              key={index} className="flex flex-col items-center">
                {/* Card with image and description */}
                <div className="relative w-[300px] h-[400px] shadow-lg rounded-lg overflow-hidden">
                  {/* Background Image */}
                  <div
                    style={{
                      backgroundImage: `url(${bgimage})`,
                    }}
                    className="absolute inset-0 bg-cover bg-center"
                  ></div>

                  <div className="absolute inset-0 bg-[#0866e2] bg-opacity-90"></div>

                  <div className="relative flex justify-center items-center text-xl p-6 text-white h-full">
                    <p className="text-start">{item.description}</p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h1 
                  data-aos="fade-right"
                  className="text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HybridAppCards;
