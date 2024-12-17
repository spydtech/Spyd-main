import React, { useEffect } from "react";
import CallToAction from '../../CallToAction'
import Footer from '../../Footer';
import main from "../../../assets/othertech/testing/main.png";
import image from "../../../assets/othertech/testing/image.png";
import image1 from "../../../assets/othertech/testing/image1.png";
import image2 from "../../../assets/othertech/testing/image2.png";
import image3 from "../../../assets/othertech/testing/image3.png";
import AOS from "aos";
import "aos/dist/aos.css";


function Testing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center md:h-96  h-44 flex items-center justify-center"
      style={{
        backgroundImage:`url(${main})`
          
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>

    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-10 p-6 md:px-20 bg-white rounded-lg">
      <div 
      data-aos="fade-left"
      className="md:w-1/2 md:space-y-10">
        <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        ETL Testing
        </h2>
        <p className="text-[#141414] md:text-base text-sm mb-4 text-justify">
        ETL in testing means an extract, 
        transform and load process that reads data from multiple source systems, 
        transports it to a data transformation layer 
        for further processing which includes cleaning, 
        consolidating, integrating, and then loading into a target database or file.
        </p>
        {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button> */}
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
        data-aos="fade-up"
         src={image}
         alt="AI and ML"
          className="md:w-[363px] md:h-[278px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 md:px-20 bg-white  rounded-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
        data-aos="fade-up"
          src={image1}
          alt="Cloud Technologies"
          className="md:w-[382px] md:h-[266px] object-contain"
        />
      </div>
      <div 
      data-aos="fade-right"
      className="md:w-1/2 md:space-y-10 space-y-5 mt-5 md:mt-0">
        <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Selenium Testing
        </h2>
        <p className="text-[#141414] md:text-base text-sm mb-4 text-justify">
        Selenium is a free (open-source) automated testing 
        framework used to validate web applications a
        cross different browsers and platforms. 
        You can use multiple programming languages like Java, C#, Python, 
        etc to create Selenium Test Scripts. 
        Testing done using the Selenium testing tool is usually referred to as Selenium Testing.
        </p>
        {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button> */}
      </div>
    </div>
    <div
      className="bg-cover bg-center min-h-screen "
    //   style={{
    //     backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d081/1a7c/9a7bf3e611bc417e4a1bed61e8d6114f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipcFwCf9rKWpopyzFOtJQ9Ze~sXYkYn-bEzyLNvkp7X2ciHfLYDqVAqYboio0bvMqSrwCXPQJZQkujv9f96t8EcJx4Ngr22vcgCkwz9VTN7YLHN-8w-i1UCBbzBTIJZsdgESDlxoUwEn93c-G2~6KmCXh4zPRmYHz8CRVnE9UZ6BvoI3H6WUCpjjjdW-mSZ3Bbi9TSlLKv42yMHwz1shaFfdZ3wD8GSzShv866lWseMO8OhF0X-p8Vvqmh4Ie5Q1sfQQqjEsgHvKkIsBJy7NosCF-1Z0uEAgWJmPREczy1cvazUV1bwrbg7WtiHZB1AqBva8DBXi1pijn6E9axtntw__')", // Replace with the actual background image URL
      
    // }}
    >
      <div className="max-w-9xl mx-auto md:px-20 px-6">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent  rounded-lg ">
          <div 
          data-aos="fade-left"
          className="md:w-1/2  md:space-y-10" >
            <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            QA Testing
            </h2>
            <p className="text-[#141414]  md:text-base text-sm mb-4 text-justify">
            Quality assurance testing, or QA testing, 
            is a vital step in the software development cycle. 
            Effective QA testing reveals errors and inconsistencies 
            that can affect the real-world use of the software being developed.
             When done correctly, QA testing ensures product longevity while saving companies time and money.
            </p>
            {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button> */}
          </div>
          <div className="md:w-1/2 md:mt-6 md:mt-0 flex justify-center">
            <img
            data-aos="fade-up"
              src={image2}
              alt="Software Testing"
              className="w-[466px] h-[326px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between  md:px-20  bg-white bg-opacity-95 bg-transparent  rounded-lg">
          <div className="md:w-1/2 md:space-y-10">
            <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            Manual Testing
            </h2>
            <p className="text-[#141414] md:text-base text-sm  mb-4 text-justify">
            Manual testing is the process of manually testing software for defects.
             It requires a tester to play the role of an end user where by 
             they use most of the application's features to ensure correct behavior.

            </p>
            {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button> */}
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src={image3}
              alt="Cyber Security"
              className="md:w-[395px] md:h-[248px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <CallToAction />
    <Footer />
  </div>
  )
}

export default Testing