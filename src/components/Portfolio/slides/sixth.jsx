import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaLightbulb, FaChartLine, FaCertificate } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const cardData = [
  {
    icon: <FaUsers className="text-white text-[50px] sm:text-[60px]" />,
    bg: "#4285F4",
    title: "Proven Expertise",
    text: "SPY D TECHNOLOGY delivers top-tier IT and support services with a proven history of quality and reliability.",
  },
  {
    icon: <FaMagnifyingGlass className="text-white text-[50px] sm:text-[60px]" />,
    bg: "#34A853",
    title: "Dedicated Team",
    text: "Our experts have deep domain knowledge, enabling them to craft solutions tailored to your business.",
  },
  {
    icon: <FaLightbulb className="text-white text-[50px] sm:text-[60px]" />,
    bg: "#FBBC05",
    title: "Innovation & Satisfaction",
    text: "We blend innovation with customer satisfaction, adapting quickly to new technologies.",
  },
  {
    icon: <FaChartLine className="text-white text-[50px] sm:text-[60px]" />,
    bg: "#EA4335",
    title: "Scalable Solutions",
    text: "Our scalable solutions grow with your business, keeping you ready for future challenges.",
  },
  {
    icon: <FaCertificate className="text-white text-[50px] sm:text-[60px]" />,
    bg: "#4285F4",
    title: "Quality Standards",
    text: "We follow global quality standards to ensure exceptional service every time.",
  },
];

const Sixth = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="bg-white   flex items-center justify-center relative">
      <div className="w-full font-ubuntu px-4 sm:px-6 lg:px-12 mt-10 md:mt-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-gray-900 leading-snug">
            Why Choose SPY D TECHNOLOGY?
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-500 mt-1 max-w-3xl mx-auto">
            Discover the advantages of partnering with us for your IT journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col items-center gap-4">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  max-w-[1100px] w-full">
            {cardData.slice(0, 3).map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="rounded-xl shadow-md text-white pt-4  space-y-2 flex flex-col items-center text-center min-h-[200px]"
                style={{ backgroundColor: card.bg }}
              >
                {card.icon}
                <h3 data-aos="fade-up"
                data-aos-delay={(index + 3) * 200}
                 className=" text-lg sm:text-xl font-semibold">{card.title}</h3>
                <p
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 250}
                 className="text-xs sm:text-sm font-light leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  max-w-[720px] w-full">
            {cardData.slice(3).map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 150}
                className="rounded-xl shadow-md text-white p-4  space-y-2 flex flex-col items-center text-center min-h-[200px]"
                style={{ backgroundColor: card.bg }}
              >
                {card.icon}
                <h3 data-aos="fade-up"
                data-aos-delay={(index + 3) * 200}
                 className=" text-lg sm:text-xl font-semibold">{card.title}</h3>
                <p
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 250}
                 className="text-xs sm:text-sm font-light leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
