import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DriveEfficiency = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);


  return (
    <div className="my-5 flex flex-col items-center gap-3">
      <p 
      data-aos="fade-down"
      className=" text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Drive Efficiency
      </p>
      <h1 
      data-aos="fade-down"
      className=" text-center md:text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Seamless Integrations & Automated Workflows
      </h1>
      <p 
      data-aos="fade-down"
      className="mx-5 text-center text-xs md:text-base">
        Our technology drives efficiency through seamless integrations and
        automated data workflows
      </p>

      <div className="flex flex-col md:flex-row gap-5 lg:mx-10">
        <img
        data-aos="fade-left"
          src="src/assets/company/services/drive-efficiency/jobs.png"
          alt="image-jobs"
          className="md:h-72"
        />
        <div className="flex flex-col items-center space-y-5"
        data-aos="fade-down"
        >
          <div
            className="flex items-center  rounded-lg shadow-lg p-4 bg-cover bg-center h-28 bg-[#0866E2] w-3/4"
            style={{
              backgroundImage: `url("src/assets/company/services/drive-efficiency/background.png")`,
            }}
          >
            <div 
            data-aos="fade-right"
            className=" border-2 p-1 border-[#0866E2] flex-shrink-0 w-10 h-10 -ml-9 bg-white rounded-full flex items-center justify-center text-blue-600">
              <img
                src="src/assets/company/services/drive-efficiency/out.png"
                alt=""
              />
            </div>
            <div 
            data-aos="fade-down"
            className=" text-center text-white">
              <h3 className="text-lg ">Jobs Out</h3>
              <p className="text-sm ">
              Customizing data for filters and search as well as job distribution.
              </p>
            </div>
          </div>

          <div
          data-aos="fade-down"
            className="flex items-center  rounded-lg shadow-lg p-4 bg-cover bg-center h-28 bg-[#0866E2] w-3/4"
            style={{
              backgroundImage: `url("src/assets/company/services/drive-efficiency/background.png")`,
            }}
          >
            <div 
            data-aos="fade-right"
            className=" border-2 p-1 border-[#0866E2] flex-shrink-0 w-10 h-10 -ml-9 bg-white rounded-full flex items-center justify-center text-blue-600">
              <img
                src="src/assets/company/services/drive-efficiency/in.png"
                alt=""
              />
            </div>
            <div 
            data-aos="fade-down"
            className=" text-center text-white">
              <h3 className="text-lg ">Candidates In</h3>
              <p className="text-sm flex flex-wrap">
              Source tracking, custom data capture, candidate pipelining and notes to track performance.
              </p>
            </div>
          </div>

          <button 
          data-aos="fade-down"
          className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white py-2 px-6 rounded-lg shadow-md">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriveEfficiency;
