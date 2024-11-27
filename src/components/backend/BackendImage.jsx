import React from "react";
import backend from "../../assets/backend/backend.png";

function BackendImage() {
  return (
    <>
      <div className="relative w-full h-44 lg:h-96">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backend})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0866e2] opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-xl lg:text-6xl">Backend</h1>
          <h1 className="text-xl lg:text-6xl">Development</h1>
        </div>
      </div>
    </>
  );
}

export default BackendImage;
