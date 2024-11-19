import React from "react";
import seoImage from "../../../assets/digitalmarketing/smm.png";
function Ssm() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className=" flex justify-around items-center">
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Social Media Marketing (SMM)
            </p>
            <p className="">
              Social media marketing (also known as digital marketing and
              e-marketing) is the use of social media—the platforms on which
              users build social networks and share information—to build a
              company's brand, increase sales, and drive website traffic. In
              addition to providing companies with a way to engage with existing
              customers and reach new ones, SMM has purpose-built data analytics
              that allows marketers to track the success of their efforts and
              identify even more ways to engage In today's digital age, unique
              content is crucial for social media success. It helps you stand
              out from the crowd, captures audience attention, and sets you
              apart from competitors. Moreover, unique content encourages
              engagement, drives conversions, and improves your online presence.
            </p>
            <button className="text-white mt-4 px-6 p-2 rounded-md  w-auto bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-xl ">
              Read More
            </button>
          </div>
          <div className="">
            <img className="float-end w-96 h-96" src={seoImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ssm;
