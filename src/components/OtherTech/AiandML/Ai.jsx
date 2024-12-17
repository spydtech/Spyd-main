import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from '../../CallToAction';
import Footer from '../../Footer';
import main from "../../../assets/othertech/ai/main.png";
import main1 from "../../../assets/othertech/ai/main-1.png";
import image from "../../../assets/othertech/ai/image.png";
import image1 from "../../../assets/othertech/ai/image1.png";
import image2 from "../../../assets/othertech/ai/image2.png";
import image3 from "../../../assets/othertech/ai/image3.png";
import bgimage from "../../../assets/othertech/ai/bgimage.png";
import bgimage1 from "../../../assets/othertech/ai/bgimage1.png";
import card1 from "../../../assets/othertech/ai/card1.png";
import card2 from "../../../assets/othertech/ai/card2.png";
import card3 from "../../../assets/othertech/ai/card3.png";
import card4 from "../../../assets/othertech/ai/card4.png";
import card5 from "../../../assets/othertech/ai/card5.png";


function Ai() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const products = [
        {
          id: 1,
          title: "Machine Learning",
          description:
            "Our machine learning algorithms analyze vast amounts of data to uncover valuable insights and patterns, enabling you to make data-driven...",
          imageUrl: card1, // Replace with actual image path
        },
        {
          id: 2,
          title: "Natural Language Processing (NLP)",
          description:
            "With our NLP solutions, you can unlock the full potential of unstructured data, from sentiment analysis and text summarization to language translation and chatbot development...",
          imageUrl: card2, // Replace with actual image path
        },
        {
          id: 3,
          title: "Predictive Analytics",
          description:
            "Anticipate trends, forecast outcomes, and stay ahead of the competition with our predictive analytics solutions. Whether you're optimizing...",
          imageUrl: card3, // Replace with actual image path
        },
        {
          id: 4,
          title: "Computer Vision",
          description:
            "From image recognition and object detection to facial recognition and autonomous vehicles, our computer vision solutions open up a world of...",
          imageUrl: card4, // Replace with actual image path
        },
        {
          id: 5,
          title: "Automation and Optimization",
          description:
            "Streamline your operations, reduce costs, and boost productivity with our AI-powered automation and optimization solutions. Whether...",
          imageUrl: card5, // Replace with actual image path
        },
      ];


      const features = [
        {
          id: 1,
          title: "Expertise",
          description:
            "Our team of AI experts brings years of experience and expertise to the table, ensuring that you receive best-in-class solutions tailored to your unique requirements.",
        },
        {
          id: 2,
          title: "Innovation",
          description:
            "We're not content with the status quo. We're constantly pushing the boundaries of what's possible, exploring new technologies and methodologies to deliver innovative AI solutions that drive real results.",
        },
        {
          id: 3,
          title: "Customer-Centric Approach",
          description:
            "Our success is our success. That’s why we take a customer-centric approach to everything we do, working closely with you to understand your goals, address your challenges, and deliver solutions that exceed your expectations.",
        },
        {
          id: 4,
          title: "Scalability",
          description:
            "Whether you're a small startup or a large enterprise, our AI solutions are designed to scale with your business, ensuring that you can continue to grow and succeed in the long term.",
        },
      ];


    
  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
    data-aos="fade-zoom-in"
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url(${main})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-black opacity-0"></div>

  {/* Centered text content */}
  <div 
  data-aos="fade-right"
  className='space-y-5 md:ml-[50%] ml-0 md:-mt-20 -mt-0'>
  <h1 className="relative md:text-4xl text-lg text-center text-white p-5">
  Unlock the Power of Artificial Intelligence with 
  </h1>
  <p className="relative md:text-4xl text-xl text-center text-white ">
 SpY D Technology
  </p>
 
  </div>
</div>

<div className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col md:flex-row">
      {/* Section Title and Description */}
      <div 
      data-aos="fade-right"
      className="text-start mb-12">
        <h1 className="text-xl md:text-4xl text-blue-600">
          SpY D Technology Discover's Best AI Products
        </h1>
        <p className="md:text-lg text-sm text-[#141414] mt-4 md:w-1/2">
          In addition to our AI solutions, we also offer a range of AI products designed to meet
          your specific business needs. Our AI products include:
        </p>
        <button className="mt-6 bg-blue-500 text-white  py-4 px-8 rounded shadow-lg hover:bg-blue-600 transition">
          Explore more Now
        </button>
      </div>
      <img
      data-aos="fade-up"
          src={main1}
          alt="Smart Recommendation Engine"
            className=" md:w-[334px] md:h-[307px] mb-4"
          />
      </div>

      {/* Product Cards */}
      <div
      className="relative  py-12 px-6 md:px-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      
     
      {/* Product Cards */}
      <div className="transparent py-12 px-4 md:px-8 lg:px-16">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {/* Cards */}
    {[
      {
        id: 1,
        title: "Smart Recommendation Engine",
        description:
          "Increase sales and customer satisfaction with personalized product recommendations powered by AI.",
        imgSrc: image,
         
      },
      {
        id: 2,
        title: "Fraud Detection System",
        description:
          "Protect your business from fraudulent activities with our advanced AI-driven fraud detection system.",
        imgSrc:
        image1,
      },
      {
        id: 3,
        title: "Customer Segmentation Tool",
        description:
          "Understand your customers better and target them more effectively with our AI-based customer segmentation tool.",
        imgSrc:
         image2,
            },
      {
        id: 4,
        title: "Automated Content Generation",
        description:
          "Increase sales and customer satisfaction with personalized product recommendations powered by AI.",
        imgSrc:
         image3,
      },
    ].map((card) => (
      <div
      data-aos="fade-up"
        key={card.id}
        className="bg-white rounded-lg border-2 shadow-md p-6 text-justify flex flex-col items-start"
      >
        {/* Card Image */}
        <img
          src={card.imgSrc}
          alt={card.title}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        {/* Card Title */}
        <h2 className="text-lg md:text-xl  text-blue-600 mb-2">
          {card.title}
        </h2>
        {/* Card Description */}
        <p className="text-sm md:text-base text-[#141414] mb-4">
          {card.description}
        </p>
        {/* Explore Button */}
        <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition">
          Explore
        </button>
      </div>
    ))}
  </div>
</div>


    </div>


    <div
    data-aos="fade-up"
    >
        <h1 className='md:text-3xl text-2xl text-center mb-2 text-blue-500'>Our Ai Soulutions</h1>
        <p className='text-justify items-center md:w-1/2 md:ml-[25%] md:text-lg text-sm px-4 md:px-0'>At SpYD Technology, we understand that every business is unique, 
            with its own set of challenges and opportunities. 
            That's why we offer a wide range of customizable AI solutions tailored to your specific needs:</p>
    </div>

    <div
      className="bg-white py-12 px-4 md:px-12 lg:px-24 "
      style={{
        backgroundImage: `url(${bgimage1})`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 items-center">
        {products.map((product) => (
          <div
          data-aos="fade-up"
            key={product.id}
            className="relative md:w-[349px] rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-[#38bdf8] to-blue-600"
          >
            <div className="relative md:w-full md:h-48 h-32">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-justify flex flex-col items-center text-white ">
              <h2 className="text-lg font-semibold  mb-2">
                {product.title}
              </h2>
              <p className=" text-sm  mb-6">{product.description}</p>
              <button className="bg-white text-blue-500  py-2 px-6 rounded transition hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    <h1  
    data-aos="fade-down"
    className='text-3xl text-blue-500 text-center py-10'>Why choose SpY D Technology</h1>
    <div className="bg-white py-12 px-4 md:px-12 lg:px-32 items-center">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-16 md:gap-x-12 lg:gap-x-20">
    {features.map((feature) => (
      <div
      data-aos="fade-up"
        key={feature.id}
        className="relative p-6 bg-gradient-to-r from-[#38bdf8] to-blue-600 text-white rounded-lg shadow-lg flex flex-col items-center text-center"
      >
        {/* Circle Icon */}
        <div className="absolute -top-12 bg-white border-4 border-blue-600 rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-md">
          <span className="text-blue-600 text-lg md:text-xl lg:text-2xl font-bold">
            {feature.id}
          </span>
        </div>

        {/* Title and Description */}
        <div className="mt-16 md:mt-10 lg:mt-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 mb-4">
            {feature.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 text-justify">
            {feature.description}
          </p>

          {/* Follow Button */}
          <button className="bg-white text-blue-600 hover:bg-blue-800 hover:text-white py-2 px-6 rounded transition duration-300">
            Follow
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



    <div className="bg-gradient-to-r from-[#38bdf8] to-blue-600 h-[350px] space-y-10 rounded-xl text-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 text-center">
  <blockquote 
  data-aos="fade-up"
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-5/6 md:w-4/6 mx-auto mb-4">
    “Landwind is just awesome. It contains tons of predesigned components
    and pages starting from login screen to complex dashboard, perfect
    choice for your next SaaS application.”
  </blockquote>
  <p 
  data-aos="fade-right"
  className="text-lg sm:text-base md:text-lg lg:text-xl">Michael Gough | CEO at Google</p>
</div>



    <CallToAction />
    <Footer />
   

    </div>
  )
}

export default Ai