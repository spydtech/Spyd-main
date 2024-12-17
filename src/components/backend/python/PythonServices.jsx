import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const expertiseList = [
  "Highly Skilled Python Developers",

  "Certified Professionals",
  "Full-Stack Development",
  "Web Development",
  "Data Science And Analytics",
  "Machine Learning",
  "Django Expertise",
  "API Development",
  "Advanced Data Analytics",
  "Agile Development Practices",
  "Quality Assurance",
  "Continuous Learning",
  "Client-Centric Approach",
  "Post Implementation Support",
  "Adaptation",
];

const PythonServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-[#0866e2] text-white py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
        data-aos="flip-up"
        className="lg:text-3xl text-2xl  mb-4">
          Our Expertise in Python Development
        </h2>
        <p 
        data-aos="fade-right"
        className="lg:text-lg text-sm mb-8">
          Our team of experts specializes in a diverse range of industry
          verticals, serving the needs of various start-ups and small
          businesses.
        </p>
        <div className="grid grid-cols-1 px-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertiseList.map((item, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="bg-white text-[#0866e2] py-4 lg:px-6 rounded shadow-md font-medium text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonServices;
