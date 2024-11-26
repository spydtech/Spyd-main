import React from "react";
import ppcimage from "../../../assets/digitalmarketing/ppc/ppc.png";
function PpcImage() {
  return (
    <>
      <div className="">
        <img
          className="object-cover w-full"
          src={ppcimage}
          alt="digitalMarket"
        />
      </div>
    </>
  );
}

export default PpcImage;
