import React, { useState } from "react";
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
  const itemsPerView = 2;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < teamMembers.length - itemsPerView ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="my-8 flex flex-col items-center gap-5">
      <p className=" font-normal text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF]  text-transparent bg-clip-text">
        Our Testimonial
      </p>
      <h1 className=" font-normal text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF]  text-transparent bg-clip-text">
        What Our Customers Says!
      </h1>
      <p className="">
        Read more about the consistent success our clients enjoy by using the
        Staffing Future platform and technology to drive results.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <div className="w-12">
          {currentIndex > 0 && (
            <button onClick={handlePrevious} className="text-[#2196F3B2]">
              <RiArrowLeftSLine size={50} />
            </button>
          )}
        </div>

        <ul className="flex gap-5 w-[900px]">
          {teamMembers
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((member, index) => (
              <li
                key={index}
                className="flex gap-3 w-[450px] p-4 shadow-lg bg-white"
              >
                <img src={member.imageUrl} alt="image" className="h-14" />
                <div className="space-y-2">
                  <div>
                    <h1>{member.name}</h1>
                    <p>{member.role}</p>
                  </div>
                  <p>{member.description}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className="w-12">
          {currentIndex < teamMembers.length - itemsPerView && (
            <button onClick={handleNext} className="text-[#2196F3B2]">
              <RiArrowRightSLine size={50} />
            </button>
          )}
        </div>
      </div>

      <button
        type="button"
        className=" bg-gradient-to-r from-[#00CEFF] to-[#0072FF] px-7 py-3 text-xl text-white rounded-xl"
      >
        Start for Free
      </button>
    </div>
  );
};

export default Testimonials;
