import angularImage1 from "../../assets/Angular/Frame2.png";
import angularImage2 from "../../assets/Angular/image4.png";
import bgimage from "../../assets/Angular/bgimage.png";
import { FiArrowRight } from "react-icons/fi";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Angular = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      {/* Image Section */}
      <img 
       data-aos="zoom-in-up"
        src={angularImage1} 
        alt="AngularJS Development" 
        className="w-full max-w-7xl h-44 sm:h-[500px] md:h-[400px] mb-6" 
      />
      {/* Text Content */}
      <div className="w-full max-w-4xl text-start lg:ml-32">
        <h1
         data-aos="flip-up"
        className="lg:text-3xl text-xl text-center bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-4">
          Leading AngularJS Development Company
        </h1>
        <p 
         data-aos="fade-right"
        className="mb-4 lg:px-0 px-2 mt-4 lg:text-base text-sm justify-center items-center text-justify line-clamp-3">
          AngularJS has come up as a boon to developers all over the world. AngularJS basically is
          an open-source framework that offers code already built that otherwise developers have to
          write from scratch. Thus eliminating the cumbersome processes of hard coding, saving
          time, and paving the way for rapid development.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-6 p-6">
          <div className="flex-1">
            <h2 
            data-aos="fade-right"
            className="lg:text-2xl text-base bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-2">
              THE SERVICES OFFERED BY ANGULAR JS ARE:
            </h2>
            <ul className="list-none">
              <li 
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                Web application development
              </li>
              <li 
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                Plug-in development
              </li>
              <li 
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                AngularJS cloud platform
              </li>
              <li 
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                AngularJS design optimization, maintenance & support
              </li>
              <li 
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                AngularJS Enterprise Resource Planning / Development
              </li>
              <li
              data-aos="fade-right"
              className="flex items-center mb-2">
                <FiArrowRight className="mr-2" />
                Easy manipulation of DOM
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
            data-aos="fade-up"
              src={angularImage2}
              alt="Angular Services"
              className="w-full"
            />
          </div>
        </div>

        </div>
        <div 
        style={{
          backgroundImage: `url(${bgimage})`,
        backgroundPosition:'center',
        }}
        className="flex-1 bg-cover bg-gradient-to-r from-pink-500  to-pink-500 p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
  <h2 
  data-aos="fade-down"
  className="text-lg sm:text-xl md:text-2xl text-center  mb-6 text-gray-800">
    The Immense Benefits of AngularJS:
  </h2>

  <ul className="list-none flex flex-col gap-4 text-justify text-sm sm:text-base md:text-lg">
    {[
      "AngularJS is a potentially potent framework that makes a web application accurate to the point of precision.",
      "The very design is based on MVC architecture, making it easily adaptable to the web application being built.",
      "Since little or no coding is required when AngularJS is implemented, it helps in improving efficiency by leaps and bounds, benefiting both developers and clients.",
      "AngularJS is backed by Google and a large community of coders and developers, with regular updates and new features that can be incorporated with minimal effort.",
      "It offers a rich, varied experience in making the web application far more responsive, thereby increasing user experience.",
      "AngularJS provides two-way data binding, allowing automatic synchronization of data between the model and the view, reducing the need for manual intervention and making development faster and more efficient.",
    ].map((benefit, index) => (
      <li 
      data-aos="fade-right"
      key={index} className="flex items-start gap-3 text-justify">
        <FiArrowRight className="text-lg sm:text-xl text-gray-800 font-bold flex-shrink-0" />
        <span className="text-gray-800">{benefit}</span>
      </li>
    ))}
  </ul>
</div>



     
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Angular;
