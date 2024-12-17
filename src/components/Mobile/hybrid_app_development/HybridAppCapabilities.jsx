import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function HybridAppCapabilities() {

  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);

  const capabilitiesData1 = [
    {
      title: "React Native Development",
      description:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    },
    {
      title: "PhoneGap Development",
      description:
        "Simpalm highly recommends PhoneGap development to develop amazing mobile apps using the simplest web technology. PhoneGap is the best cross-platform framework to quickly transfer HTML, CSS, and JavaScript written web applications into awesome mobile apps.",
    },
  ];

  const capabilitiesData2 = [
    {
      title: "Ionic Development",
      description:
        "Ionic is an HTML5 mobile app development platform used for the development of cross-platform mobile applications. These cross-platform applications have many features like platform support, fast development, and third-party API integrations.",
    },
  ];

  return (
    <div className="my-6 px-4 sm:px-8">
      <div className="text-center mb-10">
        <h1 
        data-aos="fade-down"
        className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-xl lg:text-3xl">
          Our Capabilities
        </h1>
      </div>
      <div className="main flex flex-col gap-y-16">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-8 gap-y-8">
          {capabilitiesData1.map((item, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="lg:w-[400px] w-[320px] h-[340px] mx-auto  p-6 shadow-2xl rounded-lg bg-white"
            >
              <div className="text-center py-2 mb-4">
                <h2 className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-2xl">
                  {item.title}
                </h2>
              </div>
              <p className="text-justify text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 justify-center">
          {capabilitiesData2.map((item, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="lg:w-[400px] w-[320px] h-[340px] mx-auto  p-6 shadow-2xl rounded-lg bg-white"
            >
              <div className="text-center py-2 mb-4">
                <h2 className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-2xl">
                  {item.title}
                </h2>
              </div>
              <p className="text-justify text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HybridAppCapabilities;
