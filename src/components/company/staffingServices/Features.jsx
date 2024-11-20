import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-5 my-8">
      <p className=" font-normal text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF]  text-transparent bg-clip-text">
        Our Features
      </p>
      <h1 className=" font-normal text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF]  text-transparent bg-clip-text">
        Your Candidate Experience Platform
      </h1>
      <div className="grid grid-cols-3 gap-x-3 gap-y-5 mx-40">
        <div className="bg-[#9747FF] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/integrations.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Integrations</h1>
            <p className="text-sm">
              Explore our industry Integrations marketplace and partners
            </p>
          </div>
        </div>
        <div className="bg-[#EA4B6C] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/job-manager.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Job Manager</h1>
            <p className="text-sm">
              Manage your job listings through our Management system
            </p>
          </div>
        </div>
        <div className="bg-[#FFB800] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/workflow.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Apply workflow</h1>
            <p className="text-sm">
              Customize your Candidate application workflow to suite your
              business needs.
            </p>
          </div>
        </div>
        <div className="bg-[#EC21A2] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/alert.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Job Alerts</h1>
            <p className="text-sm">
              Intelligent Job alerts that bring active job seekers back to your
              jobs
            </p>
          </div>
        </div>
        <div className="bg-[#26AFC7] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/search.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Job Search</h1>
            <p className="text-sm">
              Powerful job search solutions embedded on your website
            </p>
          </div>
        </div>
        <div className="bg-[#00CEFF] flex items-center gap-4 p-5">
          <img
            src="src/assets/company/services/features/report.png"
            alt=""
            className="h-12"
          />
          <div className="text-white space-y-2">
            <h1 className="text-xl">Reports & Analytics</h1>
            <p className="text-sm">
              Traffic, Conversations, Source Tracking and more to ensure and
              measured ROI
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" bg-gradient-to-r from-[#00CEFF] to-[#0072FF] px-7 py-3 text-xl text-white rounded-xl"
      >
        See all Features
      </button>
    </div>
  );
};

export default Features;
