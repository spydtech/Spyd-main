import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reach from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/reach.png";
import brand from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/brand.png";
import potential from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/potential.png";
import feedback from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/feedback.png";
import engagement from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/engagement.png";
import content from "../../../assets/digitalmarketing/socialmediamarketing/outcomes/content.png";

const SmmOutcomes = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const items = [
    { icon: reach, label: "Widespread reach" },
    { icon: brand, label: "Higher brand visibility" },
    { icon: engagement, label: "Higher Engagement" },
    { icon: potential, label: "Viral potential" },
    { icon: content, label: "Vernacular Content" },
    { icon: feedback, label: "Real-time feedback" },
  ];

  return (
    <>
      <div className="text-center my-10">
        <p
         data-aos="fade-right"
        className="lg:text-3xl pt-10 text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
          What you can expect from Social Media Marketing
        </p>
        <div className="flex justify-center  items-center flex-wrap  gap-12 lg:gap-10 py-6">
          {items.map((item, index) => (
            <div
             data-aos="fade-right"
              key={index}
              className="flex py-4 lg:py-10 flex-col items-center text-center "
            >
              <div className="flex  justify-center items-center w-20 h-20 rounded-full  border-4 border-transparent hover:border-blue-500 transition-all duration-300">
                <img 
                 data-aos="fade-down"
                className="p-1" src={item.icon} alt={item.label} />
              </div>
              <span
               data-aos="fade-right"
              className="mt-2 py-4 text-lg font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmmOutcomes;
