import React, { useEffect } from "react";
import { FaDesktop, FaLaptopCode, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ten() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center font-ubuntu justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Technologies & Tools Used
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            An Overview of Essential Technologies and Tools
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Communication Tools */}
          <div
            className="p-6 rounded-xl shadow-xl hover:shadow-2xl  transition-shadow duration-300 bg-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaDesktop className="text-black text-5xl md:text-6xl flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Communication Tools
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Utilizing advanced communication tools such as VoIP and cloud
              telephony enhances collaboration and connectivity among team
              members. VoIP (Voice over Internet Protocol) allows for voice
              communication over the internet, reducing costs while cloud
              telephony provides reliable, scalable solutions accessible from
              anywhere.
            </p>
          </div>

          {/* Development Technologies */}
          <div
            className="p-6 rounded-xl shadow-xl hover:shadow-2xl  transition-shadow duration-300 bg-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode className="text-black text-5xl md:text-6xl flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Development Technologies
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Development technologies like React, Firebase, and MySQL enable
              developers to create robust applications. React is a popular
              JavaScript library for building interactive UIs. Firebase offers
              tools such as cloud storage and real-time databases, while MySQL
              efficiently manages data and user interactions.
            </p>
          </div>

          {/* Security & Compliance */}
          <div
            className="p-6 rounded-xl shadow-xl hover:shadow-2xl  transition-shadow duration-300 bg-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaShieldAlt className="text-black text-5xl md:text-6xl flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Security & Compliance Standards
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Adhering to strict security and compliance standards is vital for
              protecting sensitive data. Encryption safeguards information,
              while compliance with GDPR and HIPAA ensures trust and reliability
              for organizations handling sensitive information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
