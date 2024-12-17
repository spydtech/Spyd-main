import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io"; // Correct IoMdCall Import
import bgcolor from "./../../assets/contactus/bgcolor.png";
import hero from "./../../assets/contactus/contactUsHero.png";
import footer from "./../../assets/contactus/careerfooter.png";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
    data-aos="fade-in"
      className="text-white h-[100%] flex flex-col items-center bg-cover"
      style={{ backgroundImage: `url(${bgcolor})` }}
    >
      {/* Main Container */}
      <div className="bg-white w-11/12 lg:w-4/5 mx-auto my-20 rounded shadow-lg">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          {/* Left Image */}
          <div className="flex justify-center items-center"
          data-aos="fade-up">
            <img
              src={hero}
              alt="Support"
              className="lg:w-[427px] lg:h-[500px] md:w-96"
            />
          </div>
          {/* Right Contact Details */}
          <div className="text-[#0072FF] max-w-96"
          data-aos="fade-right">
            <h2 className="text-2xl md:text-2xl lg:mt-16 font-semibold pb-4">
              Get In Touch
            </h2>
            <h3 className="mt-2 lg:text-xl text-sm md:text-2xl pb-4 font-semibold">
              SpY D Tech Private Limited Headquarters
            </h3>
            <p className="mt-2 flex items-center">
              <FaMapMarkerAlt className="text-lg mr-2" /> Madhapur Hyderabad,
              Telangana - 500081
            </p>
            <p className="flex items-center pb-2">
              Meera Complex Plot, No-852, 2nd Floor
            </p>
            <p className="mt-4 flex items-center">
              <FaEnvelope className="mr-2" /> info@spydtech.com
            </p>
            <p className="flex items-center mt-2">
              <IoMdCall className="mr-2" /> +91
            </p>
          </div>
        </div>

        {/* Form and Quick Contacts */}
        <div className="flex flex-col mx-6 lg:flex-row gap-8 p-6">
          {/* Form */}
          <div className="lg:w-1/2 w-full">
            <h4 
            data-aos="fade-left"
            className="text-lg lg:text-xl font-bold text-[#0072FF]">
              We are here for you. How can we help you?
            </h4>
            <form className="mt-4 space-y-4"
            data-aos="fade-left"
            >
              
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full placeholder-[#0072FF] p-3 bg-blue-100 border"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full placeholder-[#0072FF] p-3 bg-blue-100 border"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-3 placeholder-[#0072FF] bg-blue-100 border"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 placeholder-[#0072FF] bg-blue-100 border"
              />
              <button className="bg-[#0072FF] text-white px-6 py-3 font-bold hover:bg-blue-700 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contacts */}
          <div className="lg:w-1/2 w-full" 
          data-aos="fade-left"
          >
            <h4 className="text-[#0072FF] text-xl font-bold">Quick Contacts</h4>
            <div className="bg-blue-100 p-4 mt-4 h-52">
              <p className="text-[#0072FF] text-lg font-medium pb-4">
                General Enquiries
              </p>
              <p className="text-[#0072FF] flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" /> info@spydtech.com
              </p>
              <p className="text-[#0072FF] mt-2 flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" /> careers@spydtech.com
              </p>
              <p className="text-[#0072FF] mt-2 flex items-center">
                <FaPhone className="text-blue-500 mr-2" /> +91
              </p>
            </div>
            <div className="bg-blue-100 p-4 mt-4">
              <h4 className="text-[#0072FF] text-lg font-medium pb-4">Careers</h4>
              <p className="text-[#0072FF] flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" /> careers@spydtech.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
  {/* Footer Image */}
  <img 
  data-aos="fade-up"
  src={footer} alt="Location Icon" className="w-full sm:w-1/2 lg:w-full" />

  {/* Social Icons */}
  <div 
  data-aos="fade-down"
  className="lg:h-[200px] sm:h-[100px] lg:-mt-2 flex flex-row sm:flex-col lg:space-y-6 sm:space-y-4 sm:space-x-0 space-x-4 justify-center items-center p-4 bg-white shadow-lg rounded-lg w-full sm:w-1/2">
    <a
      href="#"
      className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
    >
      <FaFacebookF className="text-white text-2xl" />
    </a>
    <a
      href="#"
      className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
    >
      <FaTwitter className="text-white text-2xl" />
    </a>
    <a
      href="#"
      className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
    >
      <FaLinkedinIn className="text-white text-2xl" />
    </a>
  </div>
</div>

      </div>

      {/* Footer with Social Icons */}
    

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ContactUs;
