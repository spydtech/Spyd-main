import React from 'react';
import poster from "./../../assets/ERPNext/contact1.png"
import poster2 from "./../../assets/ERPNext/contact2.png"
import Footer from '../Footer';
const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="min-h-screen italic bg-gradient-to-t from-[#0072FF] to-[#00CEFF] flex flex-col items-center justify-center">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:gap-6 p-2 lg:p-4">
          {/* Left: Text Content */}
          <div className="text-white  p-12 place-items-end lg:text-left lg:w-1/3">
            <h1 className="text-xl sm:text-2xl lg:text-4xl text-nowrap mb-4">Meet The Team</h1>
            <p className="text-sm sm:text-lg max-w-60 lg:text-xl break-words">
              A Meet The Team Page Is A Page Where Companies Can Introduce Their
              Employees To Site Visitors And Showcase The Highlights Of Their
              Organization's Personnel.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={poster}
              alt="Team Illustration"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
        {/* Bottom Text */}
        <div className="flex w-full mb-6 lg:p-12 text-white">
          <div className=" w-1/2"></div>
          <div className="">
            <h2 className="text-xl md:text-3xl text-center ">Job Application</h2>
            <p className="text-sm md:text-lg mt-2 text-black">
              Please complete the form below to apply for a position with us
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-12">
        {/* Left: Form Section */}
        <div className="flex justify-center items-center w-2/3 ">
          <form className=" p-4 rounded-lg  w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 ">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm  text-black ">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name"
                  className="mt-1 p-2 border border-black rounded-md w-auto md:w-full"
                />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm  text-black">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  className="mt-1 p-2 border border-black rounded-md w-auto md:w-full"
                />
              </div>
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm  text-black">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ex:myname@gmail.com"
                  className="mt-1 p-2 border border-black rounded-md w-auto md:w-full"
                />
              </div>
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm  text-black">
                  Phone number
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                    alt="India Flag"
                    className="w-8 h-6 lg:visible border border-black rounded-md"
                  />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91"
                    className="flex-1 w-full p-2 border border-black rounded-md"
                  />
                </div>
              </div>
              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedin" className="block text-sm  text-black">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  placeholder="LinkedIn.profile"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              {/* Position Applied */}
              <div>
                <label htmlFor="position" className="block text-sm  text-black">
                  Position Applied
                </label>
                <select
                  id="position"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                >
                  <option value="">Please select</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              {/* How did you hear about us */}
              <div>
                <label htmlFor="referral" className="block text-sm  text-black">
                  How did you hear about us
                </label>
                <select
                  id="referral"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                >
                  <option value="">Please select</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Website</option>
                  <option value="friend">Friend</option>
                </select>
              </div>
              {/* Resume */}
              <div>
                <label htmlFor="resume" className="block text-sm  text-black">
                  Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
            </div>
            {/* Cover Letter */}
            <div className="mt-4">
              <label htmlFor="cover-letter" className="block text-sm  text-black">
                Cover Letter
              </label>
              <textarea
                id="cover-letter"
                rows="3"
                placeholder="Write something...(optional)"
                className="mt-1 p-2 border border-black rounded-md w-auto md:w-full"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="w-full text-center">
              <button
                type="submit"
                className="mt-4 w-40 h-12 sm:w-60 sm:h-16 text-center bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white py-2 rounded-md shadow-md hover:to-[#00CEFF] hover:from-[#0072FF] lg:text-2xl"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
        {/* Right: Image Section */}
        <div className="bg-gradient-to-t  from-[#0072FF] to-[#00CEFF] text-white p-6 shadow-md rounded-md lg:w-1/3 flex flex-col items-center justify-center">
          <img
            src={poster2}
            alt="Journey"
            className="mb-4 w-3/4"
          />
          <h2 className="text-lg lg:text-xl">Embark on a Journey with Us</h2>
          <p className="text-center text-gray-800 mt-2">
            Unleash the full potential of our platform by sharing a bit about yourself. Your journey begins here – let’s make it extraordinary together!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
