import React, { useEffect, useState } from "react";
import image1 from "../../../assets/staffingServices/features/integrations.png"
import image2 from "../../../assets/staffingServices/features/manager.png"
import image3 from "../../../assets/staffingServices/features/workflow.png";
import image4 from "../../../assets/staffingServices/features/alerts.png";
import image5 from "../../../assets/staffingServices/features/search.png";
import image6 from "../../../assets/staffingServices/features/reports.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Features = () => {
  const [rotatedIndex, setRotatedIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);

  const platform = [
    {
      color : "#9747FF",
      imgSrc : image1,
      title : "Integrations",
      description : "Explore our industry Integrations marketplace and partners"
    },
    {
      color : "#EA4B6C",
      imgSrc : image2,
      title : "Job Manager",
      description : "Manage your job listings through our Management system"
    },
    {
      color : "#FFB800",
      imgSrc : image3,
      title : "Apply Workflow",
      description : "Customize your Candidate application workflow to suite your business needs."
    },
    {
      color : "#EC21A2",
      imgSrc : image4,
      title : "Job Alerts",
      description : "Intelligent Job alerts that bring active job seekers back to your jobs"
    },
    {
      color : "#26AFC7",
      imgSrc : image5,
      title : "Job Search",
      description : "Powerful job search solutions embedded on your website"
    },
    {
      color : "#00CEFF",
      imgSrc : image6,
      title : "Reports & Analytics",
      description : "Traffic, Conversations, Source Tracking and more to ensure and measured ROI"
    }
  ]
  return (
    <div className="flex flex-col items-center lg:gap-3 my-3 lg:my-8 xl:mx-16">
      <p 
      data-aos="fade-down"
      className="text-lg bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Our Features
      </p>
      <h1 
      data-aos="fade-down"
      className=" text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Your Candidate Experience Platform
      </h1>

      <ul
      data-aos="fade-down"
      className="max-md:space-y-2 md:grid lg:grid-cols-3 gap-3 lg:gap-5 mx-5 md:mx-10 lg:mx-20 my-2">
        {platform.map((each, index) => (
          <li
            key={index}
            className="flex items-center px-4 p-2 gap-3 rounded-lg overflow-hidden"
            style={{ backgroundColor: `${each.color}` }}
            onMouseEnter={() => setRotatedIndex(index)}
            onMouseLeave={() => setRotatedIndex(null)}
          >
            <img
              src={each.imgSrc}
              alt={each.title}
              className={`h-14 w-16 transition-transform duration-500 ${
                rotatedIndex === index ? "rotate-360" : ""
              }`}
            />
            <div className="text-white space-y-2 mt-2 pb-10">
              <h1 className="text-base">{each.title}</h1>
              <p className="text-xs">{each.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <button 
      data-aos="fade-down"
      className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white py-2 px-6 rounded-lg shadow-md mt-2">
      See all Features
      </button>
      
    </div>
  );
};

export default Features;
