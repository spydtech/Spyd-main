import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../assets/company/services/testimonials/Men.png";
import image2 from "../../../assets/company/services/testimonials/Women.png";
import { Link } from "react-router-dom"

const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);

  const teamMembers = [
    {
      name: "Alice Brown",
      role: "UI/UX Designer",
      description:
        "Designing interfaces that inspire and create seamless user experiences is my passion.",
      imageUrl: image2,
    },
    {
      name: "Bob Johnson",
      role: "Backend Developer",
      description:
        "Building robust server-side solutions that handle complex tasks efficiently drives my dedication to coding.",
      imageUrl: image1,
    },
    {
      name: "Eve Clark",
      role: "Software Engineer",
      description:
        "Crafting elegant code for complex problems while ensuring scalability and performance is my expertise.",
      imageUrl: image2,
    },
    {
      name: "Grace Wilson",
      role: "Frontend Developer",
      description:
        "Bringing designs to life with code and making them interactive and engaging for users is what drives me forward.",
      imageUrl: image1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < teamMembers.length - itemsPerView ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <p 
      data-aos="fade-right"
      className="text-lg md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Our Testimonial
      </p>
      <h1 
      data-aos="fade-up"
      className="text-lg md:text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        What Our Customers Says!
      </h1>
      <p className="text-center text-sm mx-3"
      data-aos="fade-up"
      >
        Read more about the consistent success our clients enjoy by using the
        Staffing Future platform and technology to drive results.
      </p>

      <div className="mx-2 flex items-center md:gap-3">
        <button
          onClick={handlePrevious}
          className={`text-[#2196F3B2] ${
            currentIndex === 0 ? "invisible" : "visible"
          }`}
        >
          <RiArrowLeftSLine size={30} />
        </button>

        <ul className="flex gap-3" 
        data-aos="fade-right"
        >
          {teamMembers
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((member, index) => (
              <li
                key={index}
                className="flex gap-2 p-2 shadow-lg bg-white rounded-md h-36 md:w-80 lg:w-96"
              >
                <img
                  src={member.imageUrl}
                  alt="testimonial"
                  className="h-8 md:h-14 mt-2"
                />
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
                    <h1 className="text-base">{member.name}</h1>
                    <p className="text-sm">{member.role}</p>
                  </div>
                  <p className="text-xs">{member.description}</p>
                </div>
              </li>
            ))}
        </ul>

        <button
          onClick={handleNext}
          className={`text-[#2196F3B2] ${
            currentIndex >= teamMembers.length - itemsPerView
              ? "invisible"
              : "visible"
          }`}
        >
          <RiArrowRightSLine size={30} />
        </button>
      </div>
     <Link to="/tryademo">
      <button className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white py-2 px-6 rounded-lg shadow-md">
        Start for Free
      </button>
      </Link>
     
    </div>
  );
};

export default Testimonials;
