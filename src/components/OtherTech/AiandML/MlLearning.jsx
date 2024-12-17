import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from '../../CallToAction';
import Footer from '../../Footer';
import main from "../../../assets/othertech/ml/main.png";
import image from "../../../assets/othertech/ml/image.png";
import image1 from "../../../assets/othertech/ml/image1.png";

function MlLearning() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const languages = [
        {
          id: 1,
          title: "Python Programming Language",
          description:
            "Python has a crucial role in machine learning because Python provides libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and Keras. These libraries offer tools and functions essential for data manipulation, analysis, and building machine learning models.",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Replace with actual image URLs
        },
        {
          id: 2,
          title: "Java and JavaScript",
          description:
            "Java and JavaScript is another general-purpose coding language that can be used for all types of software development. For Machine Learning, Java is mostly used to create algorithms, and neural networks.",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", // Replace with actual image URLs
        },
        {
          id: 3,
          title: "R Programming Language",
          description:
            "R is one of the major languages for data science. It provides excellent visualization features, which is essential to explore the data before submitting it to any automated learning, as well as assessing the results of the learning algorithm.",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", // Replace with actual image URLs
        },
        {
          id: 4,
          title: "Julia",
          description:
            "Julia is a general purpose programming language well suited for numerical analysis and computational science. Some consider it the future of machine learning and the most natural replacement for Python in this field.",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg", // Replace with actual image URLs
        },
      ];
  return (
    <div className="relative">
      {/* Background Header Section */}
      <div
       data-aos="fade-zoom-in"
        className="relative bg-cover bg-center h-40 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${main})`,
        }}
      >
        <div 
         data-aos="fade-right"
        className="space-y-3 text-center">
          <h1 className="md:text-lg sm:text-2xl text-white">SpY D Technology</h1>
          <p className="text-2xl md:text-5xl text-white font-bold">MACHINE LEARNING</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-8 px-4 sm:px-8 md:px-24">
        <h2 
         data-aos="fade-up"
        className="text-justify text-lg sm:text-xl md:text-2xl text-gray-900 mb-4 sm:mb-6">
          "At SpY D Technology, we are committed to revolutionizing the world of machine learning. Our cutting-edge technology is designed to empower businesses of all sizes to harness the power of data and make informed decisions that drive success."
        </h2>
        <h3
         data-aos="fade-up" className="text-center text-lg sm:text-xl md:text-2xl text-blue-600 mb-8">
          Programming Languages Used in Machine Learning
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language) => (
            <div 
             data-aos="fade-up"
            key={language.id} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                <img src={language.iconUrl} alt={language.title} className="w-8 sm:w-10" />
              </div>
              <h4 className="text-md sm:text-lg font-semibold mb-2">{language.title}</h4>
              <p className="text-sm text-justify">{language.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-10 px-4 md:px-24 sm:px-8 flex flex-col sm:flex-row items-center justify-center">
        <div 
         data-aos="fade-right"
        className="sm:w-1/2 sm:mr-6 text-start">
          <h2 className="text-xl sm:text-2xl text-blue-600 mb-4">Our Mission</h2>
          <p className="text-[#141414] text-sm sm:text-base">
            Our mission is simple: to democratize machine learning. We believe that every business should have access to the tools and resources they need to thrive in today's data-driven world. That's why we've developed a range of innovative solutions that are accessible, affordable, and easy to implement.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 mt-6 transition">
            Read More
          </button>
        </div>
        <div className="sm:w-1/2   mt-6 sm:mt-0 flex justify-center">
          <img 
           data-aos="fade-up"
         src={image}
         alt="AI Illustration" className="w-full sm:w-80" />
        </div>
      </div>

      {/* Educational Areas Section */}
      <div className="bg-white md:px-10 px-5 py-8 sm:px-12 text-start max-w-6xl mx-auto">
        <h2 
         data-aos="fade-up"
        className="text-xl sm:text-2xl text-blue-600 mb-4">The four areas of machine learning education</h2>
        <p 
         data-aos="fade-up"
        className="text-[#141414] text-sm sm:text-base mb-6">
          When beginning your educational path, it's important to first understand how to learn ML. We've broken the learning process into four areas of knowledge, each providing a foundational piece of the ML puzzle. Our guided curriculums and resource library will help you build essential skills.
        </p>
        <div className="space-y-6">
          {['Coding skills', 'Math and stats', 'ML theory', 'Build your own projects'].map((area, index) => (
            <div 
             data-aos="fade-up"
            key={index}>
              <h3 className="text-lg sm:text-xl text-blue-500">{area}:</h3>
              <p className="text-[#141414] text-sm sm:text-base mt-1">
                {`Description for ${area}.`}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white py-12 px-6">
      {/* Title and Subtitle */}
      <h2 
       data-aos="fade-up"
      className="text-2xl md:text-3xl text-blue-600 mb-4 text-center">
        Our Services
      </h2>
      <p 
       data-aos="fade-right"
      className="max-w-6xl mx-auto text-sm md:text-lg text-[#141414] mb-6 text-start px-4">
        Explore the latest features that enhance your learning experience and make it even more exciting.
      </p>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 px-4 md:px-4">
          {/* Predictive Analytics */}
          <div>
            <h3 
             data-aos="fade-right"
            className="text-lg md:text-xl text-blue-500">Predictive Analytics</h3>
            <p 
             data-aos="fade-right"
            className="text-[#141414] text-sm md:text-lg">
              Anticipate future trends and make proactive decisions based on predictive analytics.
            </p>
          </div>

          {/* Anomaly Detection */}
          <div>
            <h3 
             data-aos="fade-right"
            className="text-lg md:text-xl text-blue-500">Anomaly Detection</h3>
            <p 
             data-aos="fade-right"
            className="text-[#141414] text-sm md:text-lg">
              Identify unusual patterns or behaviors in your data to detect potential threats or opportunities.
            </p>
          </div>

          {/* Recommendation Systems */}
          <div>
            <h3 
             data-aos="fade-right"
            className="text-lg md:text-xl text-blue-500">Recommendation Systems</h3>
            <p 
             data-aos="fade-right"
            className="text-[#141414] text-sm md:text-lg">
              Deliver personalized recommendations to your customers, increasing engagement and conversion rates.
            </p>
          </div>

          {/* Natural Language Processing */}
          <div>
            <h3
             data-aos="fade-right"
            className="text-lg md:text-xl text-blue-500">Natural Language Processing</h3>
            <p 
             data-aos="fade-right"
            className="text-[#141414] text-sm md:text-lg">
              Analyze and interpret human language to extract valuable insights from text data.
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:mt-0 mt-10">
          <img
           data-aos="fade-up"
            src={image1}
            alt="Services Illustration"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>

    <CallToAction />
    <Footer />

    </div>
  )
}

export default MlLearning