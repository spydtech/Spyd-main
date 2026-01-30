import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../assets/images/Betahealth.png";
import image2 from "../../../assets/images/education.png";
import image3 from "../../../assets/images/hrms.png";
import image4 from "../../../assets/images/livyco.png";
import image5 from "../../../assets/images/arrow.jpg";
import image6 from "../../../assets/images/b2b.jpg";
import image7 from "../../../assets/images/blockchain.jpg";

const cards = [
  {
    img: image4,
    title: "Livyco",
    desc: "Growing LIVYCO and similar app-based services is a priority to meet evolving mobile consumer demands.",
    linkto: "https://www.livyco.com/user/login",
    external: true,
  },
  {
    img: image2,
    title: "E-Education",
    desc: "Revolutionizing learning through technology.",
    linkto: "https://e-education.in/",
    external: true,
  },
  {
    img: image5,
    title: "Marketing Expansion",
    desc: "We plan to expand into new geographies, starting with the USA and Europe to access larger markets.",
    linkto: "_",
  },
  {
    img: image1,
    title: "BetaHealth",
    desc: "Betahealth provides smart, secure solutions for faster access to healthcare.",
    linkto: "_",
  },
  {
    img: image6,
    title: "B2B Solutions",
    desc: "We strengthen B2B partnerships to enhance services and expand market presence.",
    linkto: "_",
  },
  {
    img: image7,
    title: "Blockchain",
    desc: "We invest in AI and Blockchain to keep our solutions innovative and secure.",
    linkto: "_",
  },
  {
    img: image3,
    title: "HRMS",
    desc: "We develop HRMS and enterprise solutions to streamline HR and boost productivity.",
    linkto: "_",
  },
];

export default function Projectcard() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const handleCardClick = (card, idx) => {
    setOpenIndex(idx);

    if (card.external) {
      setTimeout(() => {
        window.open(card.linkto, "_blank");
      }, 600); // wait for animation
    }
  };

  const renderCard = (card, idx) => (
    <div
      key={idx}
      data-aos="fade-up"
      data-aos-delay={150 * idx}
      onClick={() => handleCardClick(card, idx)}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Logo */}
      <div className="w-full h-28 sm:h-36 md:h-40 overflow-hidden flex justify-center items-center">
        <img
          src={card.img}
          alt={card.title}
          className={`
            w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40
            ${openIndex === idx
              ? card.title === "E-Education"
                ? "md:w-[115px] md:h-[115px]"
                : idx >= 2 && idx <= 4
                  ? "md:w-[90px] md:h-[90px]"
                  : "md:w-[100px] md:h-[100px]"
              : ""
            }
            object-contain transition-all duration-700
            ${openIndex === idx
              ? idx >= 2 && idx <= 4
                ? "-translate-x-[120px]"
                : "-translate-x-[100px] sm:-translate-x-42 md:-translate-x-48"
              : ""
            }
            ${card.title === "HRMS" ? "rounded-full" : ""}
          `}
        />
      </div>

      {/* Slide overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 text-white p-5 flex flex-col justify-center items-end transition-transform duration-700 ease-in-out
        ${openIndex === idx ? "translate-y-0" : "-translate-y-full"}`}
        style={{
          clipPath: "polygon(18% 0%, 100% 0, 100% 100%, 35% 100%)",
        }}
      >
        <div className="max-w-[65%]">
          <span className="text-sm md:text-xl font-bold">{card.title}</span>
          <p className="text-xs md:text-sm mt-2">{card.desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 font-ubuntu p-3 min-h-screen flex flex-col justify-center items-center">
      <p className="text-xl md:text-4xl font-medium mt-1">Project Overview</p>

      <div className="flex flex-col gap-6 w-full max-w-5xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, 2).map(renderCard)}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {cards.slice(2, 5).map((card, i) => (
            <div key={i} className="flex-1">
              {renderCard(card, i + 2)}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(5, 7).map((card, i) => renderCard(card, i + 5))}
        </div>
      </div>
    </div>
  );
}
