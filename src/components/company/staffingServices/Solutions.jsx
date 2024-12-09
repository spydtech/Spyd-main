import React from "react";

const Solutions = () => {
  return (
    <div className="my-8 flex flex-col items-center gap-5">
      <h1 className=" font-normal text-3xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Solutions That Funnel Results
      </h1>
      <p className="text-center">
        Driving results depend on a number of factors over and above organic or
        paid traffic. Effective lead capture <br />
        techniques, data nurturing & intelligent alert technology all drive
        higher percentages of conversion and results.
      </p>
      <div className="flex justify-center gap-5 my-3">
        <div className="w-80 space-y-1 rounded-xl">
          <div className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-5 space-y-2 text-white rounded-t-xl">
            <h1 className=" text-5xl font-sans">150+</h1>
            <p className="ml-2">Features Analysed</p>
          </div>
          <div className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-5 space-y-2 text-white rounded-b-xl">
            <h1 className=" text-5xl font-sans">5+</h1>
            <p className="ml-2">Functionalities</p>
          </div>
        </div>
        <div className="w-80 space-y-1 rounded-xl">
          <div className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-5 space-y-2 text-white rounded-t-xl">
            <h1 className=" text-5xl font-sans">60K+</h1>
            <p className="ml-2">Modules</p>
          </div>
          <div className="bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-5 space-y-2 text-white rounded-b-xl">
            <h1 className=" text-5xl font-sans">4+</h1>
            <p className="ml-2">File Formats Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
