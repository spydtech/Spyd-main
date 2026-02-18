import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import { FaJoget } from "react-icons/fa";
import JobRequestStatus from "./JobRequestStatus";
import ApproachRequest from "./ApproachRequest";
import Invoice from "./Invoice/Invoice";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("jobRequestStatus"); // Default active tab

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change active tab
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isExpanded ? "w-56" : "w-12"
        } bg-[#0098F1] h-full relative transition-all duration-300`}
      >
        <div
          onClick={toggleSidebar}
          className="flex items-center justify-center h-12 cursor-pointer absolute top-2 left-3"
        >
          <FaGripLines className="text-xl text-gray-100 hover:text-black" />
        </div>

        <ul className="mt-14">
          {/* Job Request Status Tab */}
          <li
            onClick={() => handleTabChange("jobRequestStatus")}
            className={`flex items-center gap-2 h-8 px-3 mt-2 cursor-pointer text-gray-100 hover:text-[#000000] hover:bg-white transition-all duration-300 ${
              activeTab === "jobRequestStatus"
                ? "bg-white text-blue-600"
                : "hover:bg-white hover:text-black"
            }`}
          >
            <div className="">
              {/* <FaJoget className="text-xl" /> */}
            </div>
            <span
              className={`${
                isExpanded ? "opacity-100" : "opacity-0"
              } text-sm font-medium transition-opacity duration-300 `}
            >
              Job Request Status
            </span>
          </li>

          {/* Approach Request Tab */}
          <li
            onClick={() => handleTabChange("approachRequest")}
            className={`flex items-center gap-2 h-8 px-3 mt-2 cursor-pointer  hover:text-[#000000] hover:bg-white hover:text-black transition-all duration-300 ${
              activeTab === "approachRequest"
                ? "bg-white text-blue-600"
                : "hover:bg-white hover:text-black"
            }`}
          >
            <div className="">
              {/* <FaJoget className="text-xl" /> */}
            </div>
            <span
              className={`${
                isExpanded ? "opacity-100" : "opacity-0"
              } text-sm font-medium transition-opacity duration-300`}
            >
              Approach Request
            </span>
          </li>

          {/* Add more tabs as needed */}
           <li
            onClick={() => handleTabChange("invoiceManagement")}
            className={`flex items-center gap-2 h-8 px-3 mt-2 cursor-pointer  hover:text-[#000000] hover:bg-white hover:text-black transition-all duration-300 ${
              activeTab === "invoiceManagement"
                ? "bg-white text-blue-600"
                : "hover:bg-white hover:text-black"
            }`}
          >
            <div className="">
              {/* <FaJoget className="text-xl" /> */}
            </div>
            <span
              className={`${
                isExpanded ? "opacity-100" : "opacity-0"
              } text-sm font-medium transition-opacity duration-300`}
            >
              Invoice Management
            </span>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {activeTab === "jobRequestStatus" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Job Request Status</h1>
           <JobRequestStatus />
          </div>
        )}

        {activeTab === "approachRequest" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Approach Request</h1>
            <ApproachRequest />
          </div>
        )}
        {activeTab === "invoiceManagement" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Invoice Management</h1>
            <Invoice />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
