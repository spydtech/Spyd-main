import React from "react";
import ppcimage from "../../../assets/digitalmarketing/ppc/adsppc.png";
function PpcAdvertising() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className=" flex justify-around items-center">
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              What is PPC?
            </p>
            <p className="">
              {" "}
              Pay per click advertising is a type of paid search strategy that
              is utilized to increase brand recognition, showcase brand
              products, and attract targeted audience members quickly. PPC
              advertisers are charged based on the number of clicks their ads
              receive, which is why it is called pay-per-click. Google PPC is
              typically the first thing that comes to mind when people mention
              pay per click advertising. However, pay-per-click extends past the
              Google search engine results pages (SERPs) and the Google Display
              Network. Social media platforms like YouTube, Facebook, Pinterest,
              and LinkedIn also incorporate the pay per click model.
            </p>
          </div>
          <div className="">
            <img className="float-end w-96 h-96" src={ppcimage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PpcAdvertising;
