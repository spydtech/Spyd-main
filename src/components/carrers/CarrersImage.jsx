import React from "react";
import joinus from "../../assets/carrers/joinus.png";
const CarrersImage = () => {
  return (
    <div className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold">Are you open to joining us?</h1>
          <p className="text-2xl">
            Open to making connections on the moon and beyond? Check our top
            roles:
          </p>
        </div>

        <div className="flex justify-center">
          <img src={joinus} alt="Join Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CarrersImage;
