import React from "react";

const Features = () => {
  const platform = [
    {
      color : "#9747FF",
      imgSrc : "src/assets/company/staffingServices/features/integrations.png",
      title : "Integrations",
      description : "Explore our industry Integrations marketplace and partners"
    },
    {
      color : "#EA4B6C",
      imgSrc : "src/assets/company/staffingServices/features/manager.png",
      title : "Job Manager",
      description : "Manage your job listings through our Management system"
    },
    {
      color : "#FFB800",
      imgSrc : "src/assets/company/staffingServices/features/workflow.png",
      title : "Apply Workflow",
      description : "Customize your Candidate application workflow to suite your business needs."
    },
    {
      color : "#EC21A2",
      imgSrc : "src/assets/company/staffingServices/features/alerts.png",
      title : "Job Alerts",
      description : "Intelligent Job alerts that bring active job seekers back to your jobs"
    },
    {
      color : "#26AFC7",
      imgSrc : "src/assets/company/staffingServices/features/search.png",
      title : "Job Search",
      description : "Powerful job search solutions embedded on your website"
    },
    {
      color : "#00CEFF",
      imgSrc : "src/assets/company/staffingServices/features/reports.png",
      title : "Reports & Analytics",
      description : "Traffic, Conversations, Source Tracking and more to ensure and measured ROI"
    }
  ]
  return (
    <div className="flex flex-col items-center lg:gap-3 my-3 lg:my-8 xl:mx-16">
      <p className=" font-normal text-lg bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Our Features
      </p>
      <h1 className=" font-normal md:text-xl lg:text-2xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Your Candidate Experience Platform
      </h1>

      <ul className="max-md:space-y-2 md:grid grid-cols-3 gap-3 lg:gap-5 mx-5 md:mx-10 lg:mx-20 my-2">
        {platform.map((each) => (
          <li className="flex items-center p-2 gap-3" style={{backgroundColor : `${each.color}`}}>
            <img src={each.imgSrc} alt={each.title} className="h-10" />
            <div className="text-white space-y-1">
              <h1 className="text-base">{each.title}</h1>
              <p className="text-xs">{each.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white font-medium py-2 px-6 rounded-lg shadow-md mt-2">
      See all Features
      </button>
      
    </div>
  );
};

export default Features;
