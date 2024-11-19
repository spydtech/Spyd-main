import React from "react";
import cm from "../../../assets/digitalmarketing/contentmarketing.png";
function ContentMarketing() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className=" flex justify-around items-center">
          <div className="">
            <img className="float-end w-96 h-96 object-cover" src={cm} />
          </div>
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Content Marketing
            </p>
            <p className="">
              As the world has witnessed a great shift of customer’s preference
              from a conventional advertising world to the digital sphere, the
              growing use of internet, technology & digital media has raised the
              dependency of people on the online market. Due to this, the brands
              are rooting their base in various digital platforms, since
              marketing is one of the most essential aspect of a business plan.
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

export default ContentMarketing;
