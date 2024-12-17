import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";
import cmimage from "../../../assets/backend/java/java.png";
function JavaImage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
      data-aos="zoom-in-up"
        className="bg-cover bg-center w-full h-44 lg:h-96"
        style={{ backgroundImage: `url(${cmimage})` }}
      ></div>
    </>
  );
}

export default JavaImage;
