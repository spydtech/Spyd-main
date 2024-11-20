import React from "react";
import cmimage from "../../../assets/digitalmarketing/contentmarketing/contentmarketing.png";
function CmImage() {
  return (
    <>
      <div className="">
        <img
          className="object-cover w-full"
          src={cmimage}
          alt="digitalMarket"
        />
      </div>
    </>
  );
}

export default CmImage;
