import React from "react";
import cmimage from "../../../assets/backend/java/java.png";
function JavaImage() {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-44 lg:h-96"
        style={{ backgroundImage: `url(${cmimage})` }}
      ></div>
    </>
  );
}

export default JavaImage;
