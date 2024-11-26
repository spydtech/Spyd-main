import React from "react";
import emailmarketing from "../../../assets/digitalmarketing/emailmarketing.png";
import { Link } from "react-router-dom";
function EmailMarketing() {
  return (
    <>
      <div className="lg:mx-4 mt-4">
        <div className=" flex lg:flex-row flex-col-reverse justify-around items-center">
          <div className="lg:w-1/2 w-full p-2 h-auto">
            <p className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
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

            <Link to="/digitalmarketing/em">
              <button className=" mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg ">
                Read More
              </button>
            </Link>
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
