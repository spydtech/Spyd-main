// import React, { useEffect, useState } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import tab1 from "../assets/Home/home/tab1.png"
// import tab2 from "../assets/Home/home/tab2.png";
// import tab3 from "../assets/Home/home/tab3.png";
// import tab4 from "../assets/Home/home/tab4.png";
// import tab5 from "../assets/Home/home/tab5.png";
// import tab6 from "../assets/Home/home/tab6.png";


// function TabSection() {
//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState('Strategic Web Planning');

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);
//   // Content data for each tab
//   const tabContent = {
//     'Strategic Web Planning': {
//       title: 'Strategic Web Planning',
//       description:
//         'Strategic web planning encompasses the meticulous planning and execution of strategies to achieve goals on the web. It involves defining objectives, identifying the target audience, and devising strategies for gaining a competitive edge in the digital space.',
//       points: [
//         'Determine optimal brand positioning',
//         'Gather target audience data and create user personas',
//       ],
//       imageSrc: tab1,
//      },
//     'StartInfo Framework (SIF)': {
//       title: 'StartInfo Framework (SIF)',
//       description:
//         'Strategic information architecture is the art and science of organizing and labeling content on websites and web applications. It ensures that users can easily find and comprehend the information they seek.',
//       points: [
//         'Design site structure, navigation, and page hierarchy',
//         'DMap out the conversion funnel for each unique landing page',
//       ],
//       imageSrc: tab2,
//     },
//     'Designing Creatively Unleashed': {
//       title: 'Designing Creatively Unleashed',
//       description:
//         'Creative design involves the visual and aesthetic aspects of web development. It includes designing layouts, graphics, and other visual elements to create an engaging and user-friendly experience.',
//       points: ['Design your custom website', 
//         'Incorporate your unique branding elements'],
//       imageSrc:tab3, 
//       },
//     'Responsive Development': {
//       title: 'Responsive Development',
//       description:
//         'Responsive development focuses on creating websites and applications that adapt to different screen sizes and devices. It ensures a consistent and enjoyable user experience across desktops, tablets, and mobile devices.',
//       points: ['Write and finalize coding for your website', 'Bring your custom solution to life in a secure staging site'],
//       imageSrc: tab4,
//      },
//     'Quality Assurance (QA)': {
//       title: 'Quality Assurance (QA)',
//       description:
//         'Quality assurance is the process of ensuring that a website or application meets the specified requirements and standards. It involves meticulous testing, debugging, and identifying and rectifying any issues or bugs.',
//       points: ['Conduct rigorous testing across the frontend and backend', 'Ensure all features and functionalities work as intended'],
//       imageSrc: tab5,
//      },
//     'Launch & Optimization': {
//       title: 'Launch & Optimization',
//       description:
//         'Launch optimization involves the final steps before launching a website or application. It includes performance optimization, security checks, and ensuring all elements are in place for a successful launch.',
//       points: ['Perform final QA testing', 'Develop a comprehensive marketing plan for launch'],
//       imageSrc: tab6,
//      },
//   };

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-9">
//     {/* Tabs Section */}
//     <div className="flex overflow-x-auto space-x-3 bg-blue-600 text-white py-3 lg:px-14 md:px-10 rounded scrollbar-hide"
//      data-aos="fade-left"
//     >
//       {Object.keys(tabContent).map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setActiveTab(tab)}
//           className={` text-sm sm:text-base whitespace-nowrap ${
//             activeTab === tab
//               ? 'border-b-2 border-white'
//               : 'hover:border-b-2 hover:border-blue-300'
//           } px-3 py-2`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>

//     {/* Content Section */}
//     <div className="p-4 bg-white rounded-b-md  lg:ml-10  max-w-9xl mx-auto flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8"
//      data-aos="fade-right"
//     >
//       {/* Text Content */}
//       <div className="flex-1 lg:space-y-12 md:space-y-10">
//         <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
//           {tabContent[activeTab].title}
//         </h2>
//         <p className="text-[#141414] leading-relaxed text-sm sm:text-base mb-4">
//           {tabContent[activeTab].description}
//         </p>
//         <ul className="text-[#141414] list-disc text-sm sm:text-base ml-5 mb-6">
//           {tabContent[activeTab].points.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Image Content */}
//       <div className="w-full lg:w-[550px] h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden">
//         <img
//           src={tabContent[activeTab].imageSrc}
//           alt={tabContent[activeTab].title}
//           className="w-full h-full object-cover rounded"
//         />
//       </div>
//     </div>
//   </div>
//   );
// }

// export default TabSection;





import React, { useRef, useState, useEffect } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const TabSection = () => {
  useEffect(() => {
    AOS.init();
  });
  const slideData = [
    {
      icons: <PiWebhooksLogoFill className="text-blue-800" />,
      name: "Strategic Web Planning",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/1_WEB_STRATEGY-2.png.webp",
      description:
        "Strategic web planning encompasses the meticulous planning and execution of strategies to achieve goals on the web. It involves defining objectives, identifying the target audience, and devising strategies for gaining a competitive edge in the digital space.",
      line1: "Determine optimal brand positioning",
      line2: "Gather target audience data and create user personas",
    },
    {
      icons: <RiPagesLine className="text-red-800" />,
      name: "StratInfo Framework (SIF)",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/2_PLANNING__INFORMATION_ARCHITECTURE-1.png.webp",
      description:
        "Strategic information architecture is the art and science of organizing and labeling content on websites and web applications. It ensures that users can easily find and comprehend the information they seek.",
      line1: "Design site structure, navigation, and page hierarchy",
      line2: "Map out the conversion funnel for each unique landing page",
    },
    {
      icons: <FaRegLightbulb className="text-yellow-800" />,
      name: "Designing Creatively Unleashed",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/3_CREATIVE_DESIGN-1.png.webp",
      description:
        "Creative design involves the visual and aesthetic aspects of web development. It includes designing layouts, graphics, and other visual elements to create an engaging and user-friendly experience.",
      line1: "Design your custom website",
      line2: "Incorporate your unique branding elements",
    },
    {
      icons: <FaCode className="text-cyan-900" />,
      name: "Responsive Development",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/4_RESPONSIVE_DEVELOPMENT-1.png.webp",
      description:
        "Responsive development focuses on creating websites and applications that adapt to different screen sizes and devices. It ensures a consistent and enjoyable user experience across desktops, tablets, and mobile devices.",
      line1: "Write and finalize coding for your website",
      line2: "Bring your custom solution to life in a secure staging site",
    },
    {
      icons: <FaRegThumbsUp className="text-green-900" />,
      name: "Quality Assurance (QA)",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/5_QUALITY_ASSURANCE-1.png.webp",
      description:
        "Quality assurance is the process of ensuring that a website or application meets the specified requirements and standards. It involves meticulous testing, debugging, and identifying and rectifying any issues or bugs.",
      line1: "Conduct rigorous testing across the frontend and backend",
      line2: "Ensure all features and functionalities work as intended",
    },
    {
      icons: <GrOptimize className="text-blue-800 " />,
      name: "Launch & Optimization",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2023/09/6_LAUNCH__OPTIMIZATION-1.png.webp",
      description:
        "Launch optimization involves the final steps before launching a website or application. It includes performance optimization, security checks, and ensuring all elements are in place for a successful launch.",
      line1: "Perform final QA testing",
      line2: "Develop a comprehensive marketing plan for launch",
    },
  ];

  const imageRefs = slideData.map(() => useRef(null));
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  const scrollToImage = (index) => {
    setVisibleImageIndex(index);
    imageRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <>
      <div className="text-center">
        <div className="py-6 flex justify-center items-center flex-col">
          {/* <div className="text-4xl font-semibold text-[#522D5B]">
            Our Methodology for Website Design
          </div>
          <div className="text-lg text-[#000] md:w-[600px] text-center">
            Crafting a website that aligns with your distinct business
            objectives.
            Explore our meticulous design process, meticulously designed to
            deliver
            tailor-made and goal-centric digital solutions.
          </div> */}
        </div>
        <div>
         
          {/* <p>
            Explore our meticulous design process, meticulously designed to
            deliver
          </p>
          <p>tailor-made and goal-centric digital solutions.</p> */}
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl w-full pt-16  lg:px-5">
        <div className="grid lg:grid-cols-6 gap-4 mb-12 md:grid-cols-3 grid-cols-1">
          {slideData.map((slide, index) => (
            <div
            data-aos="fade-down"
              key={index}
              className="flex flex-col items-center justify-center space-y-2 relative "
            >
              <button
                className={` flex p-8 rounded-full bg-gray-300 text-4xl hover:bg-blue-400 shadow-2xl`}
                onClick={() => scrollToImage(index)}
              >
                {slide.icons}
              </button>

              {index === visibleImageIndex && (
                <div className="active-indicator   absolute w-[80px] h-[80px] "></div>
              )}
              <div className="w-56 px-8">
                <p
                data-aos="fade-right"
                  className={`text-gray-700 text-center hover:text-blue-400 font-extrabold cursor-pointer ${
                    index === visibleImageIndex ? "active" : ""
                  }`}
                  onClick={() => scrollToImage(index)}
                >
                  {slide.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row  justify-center items-center swiper flex-col ">
          <div className="w-full lg:w-1/2 swiper-slide">
            {slideData.map((slide, index) => (
              <div
              data-aos="fade-right"
                key={index}
                className={`md:h-[350px] pl-4 description-wrapper mb-4 ${
                  index === visibleImageIndex ? "visible" : "hidden"
                }`}
              >
                <div className=" py-4">
                  <p className=" text-content text-3xl font-bold  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  ">
                    {slide.name}
                  </p>
                </div>
                <div className=" py-4">
                  <p className="text-gray-700 text-slide text-lg">
                    {slide.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <PiPaperPlaneRightFill className="text-blue-600 text-slide" />
                  </div>
                  <div>
                    <p className="text-slide">{slide.line1}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div>
                    <PiPaperPlaneRightFill className="text-blue-600 text-slide" />
                  </div>
                  <div>
                    <p className="text-slide">{slide.line2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 swiper-slide">
            {slideData.map((slide, index) => (
              <div
              data-aos="fade-right"
                key={index}
                ref={imageRefs[index]}
                className={`image-wrapper flex justify-center items-center  ${
                  index === visibleImageIndex ? "visible" : "hidden"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Image ${index + 1}`}
                  className=" h-auto image-slide drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
        .active-indicator {
          content: "";
          position: absolute;
       
          border-radius: 50%;
          box-shadow: 0 0 0 20px rgba(0, 206, 255, 1);
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          
        }
        .active-text {
        }

        /* Hide navigation buttons in large view */
     
        .image-slide{
          animation: slideFromBottom 0.5s ease forwards;

        }
        @keyframes slideFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px); /* Start from the bottom */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Slide to the top */
          }
        }
        .text-slide,.text-content{
         
          animation: slideFromRight 0.5s ease forwards;
          
        }
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px); /* Start from the right */
          }
          100% {
            opacity: 1;
            transform: translateX(0); /* Slide to the left */
          }
        }
      `}
        </style>
      </div>
    </>
  );
};

export default TabSection;
