import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Testimonials = () => {
  const teamMembers = [
    {
      name: "Alice Brown",
      role: "UI/UX Designer",
      description:
        "Designing interfaces that inspire and create seamless user experiences is my passion.",
      imageUrl: "src/assets/company/services/testimonials/Women.png",
    },
    {
      name: "Bob Johnson",
      role: "Backend Developer",
      description:
        "Building robust server-side solutions that handle complex tasks efficiently drives my dedication to coding.",
      imageUrl: "src/assets/company/services/testimonials/Men.png",
    },
    {
      name: "Eve Clark",
      role: "Software Engineer",
      description:
        "Crafting elegant code for complex problems while ensuring scalability and performance is my expertise.",
      imageUrl: "src/assets/company/services/testimonials/Women.png",
    },
    {
      name: "Grace Wilson",
      role: "Frontend Developer",
      description:
        "Bringing designs to life with code and making them interactive and engaging for users is what drives me forward.",
      imageUrl: "src/assets/company/services/testimonials/Men.png",
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
      <p className="font-normal md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Our Testimonial
      </p>
      <h1 className="font-normal md:text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        What Our Customers Says!
      </h1>
      <p className="text-center text-sm mx-3">
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

        <ul className="flex gap-3">
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

      <button className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white font-medium py-2 px-6 rounded-lg shadow-md">
        Start for Free
      </button>
     
    </div>
  );
};

export default Testimonials;
