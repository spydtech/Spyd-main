import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      quote:
        "SpY D Technology private limited is an innovative company. the entire team demonstrated exceptional cooperation and professionalism ",
      description:
        "Our esteemed clients are committed to promoting core values and principles, contributing to the betterment of our global community.",
    },
    {
      id: 2,
      quote:
        "SpY D Technology private limited is renowned for its commitment to innovation. The team’s high level of cooperation and professionalism is commendable",
      description:
        "TOur Valued clients are dedicated to promoting values and principles, making a positive impact on the world.",
    },
    {
      id: 3,
      quote:
        "SpY D Technology private limited is a company that believes in innovation. The entire team was so cooperative and polite.",
      description:
        "Our works are for clients who are spreading values and principles to the world to become a better place",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle dot click to change testimonial
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gradient-to-t font-combo from-blue-700 to-[#38bdf8] py-10 mt-10">
      <div className="max-w-5xl mx-auto text-center"
      data-aos="fade-left"
      >
        {/* Testimonials Section */}
        <div className="bg-white rounded-lg py-8 px-6 mx-4 sm:mx-0 shadow-lg">
          <h2 className=" lg:text-3xl text-xl font-Combo bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">What Our Clients Say's</h2>
          <p className="text-blue-500 text-sm mt-2">{testimonials[currentIndex].description}</p>
          <p className="text-blue-500 mt-4">
            {testimonials[currentIndex].quote}
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {/* Pagination dots */}
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[0.7rem] h-[0.7rem] rounded-full border-2 border-blue-500 cursor-pointer ${
                  index === currentIndex ? "bg-blue-500" : "bg-blue-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
