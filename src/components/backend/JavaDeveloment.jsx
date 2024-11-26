import React from "react";
import javaImage from "../../assets/backend/javadevelopment.png";
import { Link } from "react-router-dom";
function JavaDeveloment() {
  return (
    <>
      <div className="lg:mx-4 mt-6">
        <div className=" flex lg:flex-row flex-col-reverse justify-around items-center">
          <div className="lg:w-1/2 w-full p-2 h-auto">
            <p className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Java Development
            </p>
            <p className="">
              Java has emerged as a valuable asset for developers globally.
              Java, being an open-source programming language, provides
              pre-built code, relieving developers from the need to write
              everything from scratch. This eliminates the laborious process of
              manual coding, saving time, and facilitating swift development.
            </p>

            <Link to="/backend/javadevelopment">
              <button className=" mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg ">
                Read More
              </button>
            </Link>
          </div>
          <div className="">
            <img className="float-end w-96 h-96" src={javaImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaDeveloment;
