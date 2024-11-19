import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "SpY D Technology private limited is an innovative company. The entire team demonstrated exceptional cooperation and professionalism.",
      description:
        "Our esteemed clients are committed to promoting core values and principles, contributing to the betterment of our global community.",
    },
    {
      id: 2,
      quote:
        "Exceptional quality and support. SpY D Technology provided us with a seamless experience from start to finish.",
      description:
        "The team goes above and beyond to ensure that the client's vision is achieved with excellence.",
    },
    {
      id: 3,
      quote:
        "Outstanding service and commitment. We highly recommend SpY D Technology for any digital transformation needs.",
      description:
        "The dedication and expertise displayed by the team have left a lasting impact on our business.",
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
    <div className="bg-gradient-to-r from-blue-700 to-[#38bdf8] py-10 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Testimonials Section */}
        <div className="bg-white rounded-lg py-8 px-6 mx-4 sm:mx-0 shadow-lg">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-gray-700 mt-2">{testimonials[currentIndex].description}</p>
          <p className="text-gray-900 mt-4 font-semibold">
            {testimonials[currentIndex].quote}
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {/* Pagination dots */}
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full border-2 border-blue-700 cursor-pointer ${
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
