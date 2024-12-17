import { Link } from "react-router-dom";
import headerImage from "../../assets/frontend/main.png";
import angularImage from "../../assets/frontend/image.png";
import reactImage from "../../assets/frontend/image1.png";
import nextImage from "../../assets/frontend/image2.png";
import { HiArrowSmRight } from "react-icons/hi";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Frontend = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <>
      {/* Header Image Section */}
      <div className="relative ">
        <img 
        data-aos="zoom-in-up"
        src={headerImage} alt="Header-img" className="h-44 md:h-60  w-full lg:h-96  md:w-full  " />
        <div className="absolute inset-0 bg-[#167BFF] h-44 md:h-60 lg:h-96  w-full opacity-35"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 text-center space-y-2">
       
          <h1 
          data-aos="fade-up"
          className="text-lg lg:text-3xl font-bold ">
            Frontend Development
          </h1>
        </div>
        
      </div>
      

      {/* Content Sections */}
      <div className="p-5 bg-center relative mt-20">

  {/* AngularJS Section */}
  <div className="relative">
    <div className="absolute inset-0 transform -skew-y-6 bg-blue-300 -rotate-12 h-32 md:h-40 lg:h-72 -z-10"></div>
    <div className="md:flex flex-row-reverse items-center lg:gap-5 md:px-8 lg:px-44 lg:pt-10 pt-5 relative z-10">
      <img
        data-aos="fade-up"
        src={angularImage}
        alt="AngularJS Development"
        className="w-60 max-md:mx-auto lg:w-72"
      />
      <div data-aos="fade-left" className="space-y-3">
        <h3 className="text-lg lg:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
          AngularJS Development
        </h3>
        <p className="text-sm md:text-base text-justify">
  AngularJS is a powerful JavaScript framework designed to build dynamic websites and rich internet applications (RIAs). The framework emerged in 2009 and is currently managed by Google. It extends the functionalities of HTML markup language as it goes beyond static sites to create interactive web apps. One of the key features of Angular is that it allows you to communicate with components, feed them data, and accept events from components; it makes components reusable and more isolated. The flexibility to develop the view separately as HTML, for example, allows different teams to work on architecture and design.
</p>

        <Link to="/services/angularjs">
          <button className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* ReactJS Section */}
  <div className="relative">
    <div className="absolute inset-0 transform -skew-y-6 bg-blue-300 -rotate-12 h-32 md:h-40 lg:h-72 -z-10"></div>
    <div className="md:flex items-center lg:gap-5 md:px-8 lg:px-44 lg:pt-10 pt-5 relative z-10">
      <img
        data-aos="fade-up"
        src={reactImage}
        alt="ReactJS Development"
        className="w-60 max-md:mx-auto lg:w-72"
      />
      <div data-aos="fade-right" className="space-y-3">
        <h3 className="text-lg lg:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
          ReactJS Development
        </h3>
        <p className="text-sm md:text-base text-justify">
  ReactJS is a powerful JavaScript library developed by Facebook for building user interfaces with a focus on creating reusable and modular components. Launched in 2013, React has gained widespread adoption in the web development community due to its efficiency and declarative approach. One of its key features is the Virtual DOM, a lightweight in-memory representation of the actual DOM, which enables React to efficiently update only the necessary parts of a page when the data changes, resulting in improved performance.
</p>

        <Link to="/services/reactjs">
          <button className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Next.js Section */}
  <div className="relative">
    <div className="absolute inset-0 transform -skew-y-6 bg-blue-300 -rotate-12 h-32 md:h-40 lg:h-72 -z-10"></div>
    <div className="md:flex flex-row-reverse items-center lg:gap-5 md:px-8 lg:px-44 lg:pt-10 pt-5 relative z-10">
      <img
        data-aos="fade-up"
        src={nextImage}
        alt="Next.js Development"
        className="w-60 max-md:mx-auto lg:w-72"
      />
      <div data-aos="fade-left" className="space-y-3">
        <h3 className="text-lg lg:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
          Next.js Development
        </h3>
        <p className="text-sm md:text-base text-justify">
  Next.js is a popular and powerful React framework designed to simplify the development of web applications. Developed by Vercel, Next.js builds upon React's capabilities by adding essential features for server-side rendering, automatic code splitting, and simplified routing. One of its standout features is the ability to enable server-side rendering (SSR) and static site generation (SSG) effortlessly, providing faster page loads and improved SEO performance.
</p>

        <Link to="/services/nextjs">
          <button className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>

</div>


      {/* SPY D Tech Section */}
      <div className="bg-blue-500 p-4 text-white max-md:space-y-4">
        <h1
         data-aos="flip-up"
        className=" text-lg md:text-xl text-center">
          How SPY D Tech Enhances Frontend Security
        </h1>
        <div className="grid md:grid-cols-2 md:px-10 gap-5 my-5">
          <div
           data-aos="fade-right"
          className="flex gap-1">
            <span>
              <HiArrowSmRight size={20} className="" />
            </span>
            <p className="text-sm md:text-base text-justify">
              In frontend development, our highly skilled team at SPYD Tech
              utilizes advanced security technologies to fortify web
              applications. With expertise in secure coding practices, we ensure
              robust protection for our client's digital assets.
            </p>
          </div>
          <div 
          data-aos="fade-right"
          className="flex gap-1">
            <span>
              <HiArrowSmRight size={20} className="" />
            </span>
            <p className="text-sm md:text-base text-justify">
              The modular and adaptable components in our frontend solutions
              enable seamless integration with various applications. This
              flexibility ensures swift implementation, enhancing the overall
              efficiency of our client's digital ecosystems.
            </p>
          </div>
          <div 
          data-aos="fade-left"
          className="flex gap-1">
            <span>
              <HiArrowSmRight size={20} className="" />
            </span>
            <p className="text-sm md:text-base text-justify">
              Our implementation of cutting-edge security measures in frontend
              technologies safeguards our client's data and user interactions.
              This approach not only meets industry standards but exceeds them,
              providing a secure foundation for online business activities.
            </p>
          </div>
          <div 
          data-aos="fade-left"
          className="flex gap-1">
            <span>
              <HiArrowSmRight size={20} className="" />
            </span>
            <p className="text-sm md:text-base text-justify">
              SPYD Tech is dedicated to delivering cost-effective solutions
              without compromising security. Our frontend development approach
              not only strengthens security protocols but also optimizes
              development budgets, providing our clients with secure and
              economical solutions.
            </p>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Frontend;
