import React from "react";
import backend from "../../assets/backend/backend.png";
function BackendImage() {
  return (
    <>
      <div className="">
        <img
          className="object-cover w-full h-44 lg:h-96"
          src={backend}
          alt="backend"
        />
      </div>
    </>
  );
}

export default BackendImage;
