import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
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
  const [formData, setFormData] = useState({
    requestedName: "",
    emailId: "",
    mobileNo: "",
    comments: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/contact/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message || "Something went wrong!"}`);
        return;
      }
  
      setStatus("Comments sent successfully!");
      setFormData({ requestedName: "", emailId: "", mobileNo: "", comments: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.message.includes("Failed to fetch")) {
        setStatus("Unable to connect to the server. Please ensure the backend is running.");
      } else {
        setStatus("An unexpected error occurred. Please try again.");
      }
    }
  };
  
  

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
          <div className="flex justify-center items-center" data-aos="fade-up">
            <img
              src={hero}
              alt="Support"
              className="lg:w-[427px] lg:h-[500px] md:w-96"
            />
          </div>
          {/* Right Contact Details */}
          <div className="text-[#0072FF] max-w-96" data-aos="fade-right">
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
              <IoMdCall className="mr-2" /> +91 8332843707
            </p>
          </div>
        </div>

        {/* Form and Quick Contacts */}
        <div className="flex flex-col mx-6 lg:flex-row gap-8 p-6">
          {/* Form */}
          <div className="lg:w-1/2 w-full">
            <h4
              data-aos="fade-left"
              className="text-lg lg:text-xl font-bold text-[#0072FF]"
            >
              We are here for you. How can we help you?
            </h4>
            <form className="mt-4 space-y-4 " data-aos="fade-left" onSubmit={handleSubmit}>
              <input
                type="text"
                name="requestedName"
                value={formData.requestedName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full placeholder-[#0072FF]  text-[#0072FF] p-3 bg-blue-100 border"
                required
              />
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full placeholder-[#0072FF] text-[#0072FF] p-3 bg-blue-100 border"
                required
              />
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full p-3 placeholder-[#0072FF] text-[#0072FF] bg-blue-100 border"
              />
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="comments"
                rows="4"
                className="w-full p-3 placeholder-[#0072FF] text-[#0072FF]  bg-blue-100 border"
                required
              />
              <button className="bg-[#0072FF] text-white px-6 py-3 font-bold hover:bg-blue-700 w-full md:w-auto">
                Send comments
              </button>
            </form>
            {status && <p className="mt-4 text-[#0072FF]">{status}</p>}
          </div>

          {/* Quick Contacts */}
          <div className="lg:w-1/2 w-full" data-aos="fade-left">
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
                <FaPhone className="text-blue-500 mr-2" /> +91 8332843707
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
            src={footer}
            alt="Location Icon"
            className="w-full sm:w-1/2 lg:w-full"
          />

          {/* Social Icons */}
          <div
            data-aos="fade-down"
            className="lg:h-[200px] sm:h-[100px] lg:-mt-2 flex flex-row sm:flex-col lg:space-y-6 sm:space-y-4 sm:space-x-0 space-x-4 justify-center items-center p-4 bg-white shadow-lg rounded-lg w-full sm:w-1/2"
          >
            <a
              href="https://www.facebook.com/people/SpY-D-Technology/100093011922221/"
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
              href="https://www.linkedin.com/company/spydtechnology/"
              className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
            >
              <FaLinkedinIn className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ContactUs;
