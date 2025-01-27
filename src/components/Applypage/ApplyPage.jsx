import React, { useState, useEffect } from 'react';
import poster from "./../../assets/apply/applyhero.png";
import poster2 from "./../../assets/apply/Apply.png";
import CallToAction from '../CallToAction';
import Footer from '../Footer';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    linkedIn: "",
    positionApplied: "",
    source: "",
    resume: null,
    coverLetter: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the formData state for all form values
    const form = new FormData();
    form.append('firstName', formData.firstName);
    form.append('lastName', formData.lastName);
    form.append('emailAddress', formData.emailAddress);
    form.append('phoneNumber', formData.phoneNumber);
    form.append('linkedIn', formData.linkedIn);
    form.append('coverLetter', formData.coverLetter);

    // Ensure values are sent as uppercase for enums (if needed)
    form.append('positionApplied', formData.positionApplied.toUpperCase());
    form.append('source', formData.source.toUpperCase());

    // If resume is selected, append it
    if (formData.resume) {
      form.append('resume', formData.resume);
    }

    try {
      const response = await fetch('http://15.206.94.23:8081/application/save1', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || 'Unknown error'}`);
      }

      const result = await response.json();
      console.log('Application submitted successfully', result);

      // Reset the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        linkedIn: "",
        positionApplied: "",
        source: "",
        resume: null,
        coverLetter: ""
      });

    } catch (error) {
      console.error('Submission Error:', error);
      alert('Error in submission: ' + error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="min-h-screen italic bg-gradient-to-t from-[#0072FF] to-[#00CEFF] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-auto lg:gap-6 p-2 lg:p-4">
          <div className="text-white p-12 place-items-end lg:text-left lg:w-1/3">
            <h1 className="text-3xl md:text-4xl text-nowrap mb-4 pr-10 sm:pr-2">Meet The Team</h1>
            <p className="text-sm sm:text-lg max-w-60 lg:text-xl break-words">
              A Meet The Team Page Is A Page Where Companies Can Introduce Their
              Employees To Site Visitors And Showcase The Highlights Of Their
              Organization's Personnel.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={poster}
              alt="Team Illustration"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col w-full text-center mb-6 lg:p-12 text-white">
          <h2 className="text-xl md:text-3xl">Job Application</h2>
          <p className="text-sm md:text-lg mt-2 text-black">
            Please complete the form below to apply for a position with us
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-12">
        <div className="flex justify-center items-center w-2/3">
          <form className="p-4 rounded-lg w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-black">First name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-black">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="block text-sm text-black">Email address</label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="ex: myname@gmail.com"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm text-black">Phone number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="linkedIn" className="block text-sm text-black">LinkedIn</label>
                <input
                  type="url"
                  id="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="LinkedIn profile link"
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="positionApplied" className="block text-sm text-black">Position Applied</label>
                <select
                  id="positionApplied"
                  value={formData.positionApplied}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-black rounded-md w-full"
                >
                  <option value="">Please select</option>
                  <option value="DEVELOPER">Developer</option>
                  <option value="DESIGNER">Designer</option>
                  <option value="JAVA">Java</option>
                </select>
              </div>
              <div>
                <label htmlFor="source" className="block text-sm text-black">
                  How did you hear about us
                </label>
                <select
                  id="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-black rounded-md w-full"
                >
                  <option value="">Please select</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Website</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm text-black">Resume</label>
                <input
                  type="file"
                  id="resume"
                  onChange={handleFileChange}
                  className="mt-1 p-2 border border-black rounded-md w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="coverLetter" className="block text-sm text-black">Cover Letter</label>
              <textarea
                id="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="3"
                placeholder="Write something...(optional)"
                className="mt-1 p-2 border border-black rounded-md w-full"
              ></textarea>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className="mt-4 w-40 h-12 sm:w-60 sm:h-16 bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white py-2 rounded-md shadow-md hover:to-[#00CEFF] hover:from-[#0072FF] lg:text-2xl"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-t from-[#0072FF] to-[#00CEFF] text-white p-6 shadow-md rounded-md lg:w-1/3 flex flex-col items-center justify-center">
          <img
            src={poster2}
            alt="Journey"
            className="mb-4 w-3/4"
          />
          <h2 className="text-lg lg:text-xl">Embark on a Journey with Us</h2>
          <p className="text-center text-[#141414] mt-2">
            Unleash the full potential of our platform by sharing a bit about yourself. Your journey begins here – let's make it extraordinary together!
          </p>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ApplyPage;
