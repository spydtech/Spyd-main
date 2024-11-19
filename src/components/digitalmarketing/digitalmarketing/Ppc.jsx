import React from "react";
import ppc from "../../../assets/digitalmarketing/ppc.png";
function Ppc() {
  return (
    <>
      <div className="mx-4 ">
        <div className=" flex justify-around items-center">
          <div className="">
            <img className="float-end w-96 h-96" src={ppc} />
          </div>
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Pay Per Click (PPC) Marketing
            </p>
            <p className="">
              Paid search marketing, also known as PPC, offers a fast and
              controllable way to ensure your website appears at the top of
              search results for relevant searches. We apply our deep expertise
              in PPC best practices to find creative strategies that can assist
              in the growth of your business.
            </p>
            <button className="text-white mt-4 px-6 p-2 rounded-md  w-auto bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-xl ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ppc;
