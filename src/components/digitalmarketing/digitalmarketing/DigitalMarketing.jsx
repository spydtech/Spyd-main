import React from "react";

import digitalmarketingimage from "../../../assets/digitalmarketing/digitalmarketing.png";

function digitalmarketing() {
  return (
    <>
      <div className="">
        <img
          className="object-cover "
          src={digitalmarketingimage}
          alt="digitalMarket"
        />
      </div>
      <div>
        <p className="lg:text-xl text-sm mx-4 text-center mt-6">
          "Introducing <span className="text-[#0866e2] ">SpY D Technology</span>
          , the cutting-edge solution revolutionizing surveillance in the
          digital age. Say goodbye to outdated methods and hello to
          unprecedented security and intelligence with our state-of-the-art
          technology".
        </p>
      </div>
    </>
  );
}

export default digitalmarketing;
