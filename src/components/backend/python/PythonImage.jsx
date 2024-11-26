import React from "react";
import cmimage from "../../../assets/backend/python/python.png";
function PythonImage() {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-44 lg:h-96"
        style={{ backgroundImage: `url(${cmimage})` }}
      ></div>
    </>
  );
}

export default PythonImage;
