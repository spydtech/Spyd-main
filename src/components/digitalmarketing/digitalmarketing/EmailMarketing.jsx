import React from "react";
import emailmarketing from "../../../assets/digitalmarketing/emailmarketing.png";
function EmailMarketing() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className=" flex justify-around items-center">
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Email marketing
            </p>
            <p className="">
              Boost your email campaign effectiveness with a user-friendly and
              adaptable tool from SPY D, a comprehensive email marketing firm,
              featuring a cutting-edge email editor. Allow SPY D, the dependable
              all-inclusive email marketing agency, to lead you in creating
              successful lead generation through meticulously designed email
              marketing campaigns.
            </p>
            <button className="text-white mt-4 px-6 p-2 rounded-md  w-auto bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-xl ">
              Read More
            </button>
          </div>
          <div className="">
            <img className="float-end w-96 h-96" src={emailmarketing} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailMarketing;
