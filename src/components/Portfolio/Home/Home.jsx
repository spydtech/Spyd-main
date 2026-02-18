import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/image.png";

const DiagramBox = ({ title, navigateTo }) => {
  const [showExplore, setShowExplore] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="flex flex-col items-start group">
      {/* Box + Line */}
      <div className="flex items-center relative">
        {/* Box */}
        <div
          className="w-[230px] h-[100px] rounded-xl shadow-lg flex items-center justify-center text-xl font-bold cursor-pointer 
        transition-all duration-500 bg-gradient-to-r from-white to-cyan-500 text-black
        group-hover:from-cyan-500 group-hover:to-cyan-700 group-hover:text-white transform hover:-translate-y-1"
          onClick={() => setShowExplore((prev) => !prev)}
        >
          {title}
        </div>

        {/* Connector Line */}
        <div
          className={`h-[2px] w-16 bg-gradient-to-r from-black to-cyan-500 transition-all duration-300 origin-left
        ${showExplore ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        ></div>

        {/* Vertical line (animated) */}
        <div
          className={`flex flex-col items-center transition-all duration-600 
        ${showExplore ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
        >
          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-cyan-500 md:mt-20 md:mr-5"></div>
        </div>
      </div>
 
      {/* Explore Button */}
      <div
        className={`ml-[230px] mt-0 transition-all duration-500 
      ${showExplore ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <button
          className="px-8 py-3 rounded-full shadow-lg font-semibold text-lg transition-all duration-500 
        bg-gradient-to-r from-white to-cyan-500 text-black 
        hover:from-cyan-500 hover:to-cyan-700 hover:text-white 
        transform hover:scale-105"
          onClick={handleExploreClick}
        >
          Explore
        </button>
      </div>
    </div>

  );
};

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-start justify-start bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/21/44/biF7Un.jpg')`,
        filter: "brightness(1)",

      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      {/* Floating Logo */}
      {/* <div className="absolute top-5 right-10">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto drop-shadow-lg animate-fade-in"
        />
      </div> */}

      {/* Content */}
      <div className="relative px-6 md:px-12 text-black w-full py-20 animate-fade-up">
        <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-md">
          SpY D Technology
        </h1>

        <p className="text-sm md:text-base mb-10 w-3/5 text-white md:mt-6 text-justify leading-relaxed">
          SpY D Technology Private Limited is India’s leading, one-stop,
          full-scale software and information technology company, thriving on
          cutting-edge technologies and delivering state-of-the-art solutions
          across web, mobile, and immersive digital experiences.
        </p>

        <p className="text-sm md:text-base mb-8 w-3/5 text-white md:mt-1 text-justify leading-relaxed">
          We offer a comprehensive range of services — Web Technologies,
          Mobility Applications, End-to-End Digital Transformation, AR/VR,
          AI/ML, and Digital Marketing — driving innovation and shaping the
          future of technology.
        </p>

        {/* Boxes */}
        <div className="flex flex-wrap gap-40 mt-16">
          <DiagramBox title="Overview" navigateTo="/first" />
          <DiagramBox title="Projects" navigateTo="/pcard" />
        </div>
      </div>
    </div>
  );
};

export default Home;
