




import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
// import image from "./../assets/spydlogo/spyd_logo.png"
import slider1 from "../assets/Home/home/home_slider1.png";
import slider2 from "../assets/Home/home/home_slider2.png";
import slider3 from "../assets/Home/home/Home_slider3.png";
import slider4 from "../assets/Home/home/home_slider4.png";
import slider5 from "../assets/Home/home/home_slider5.png";


const CarouselComponent = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, 
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" md:w-full font-combo"
    
    >
      
      <div className="md:max-w-8xl mx-auto md:mt-10 mt-5"
      
      >
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          >
            <div className="flex gap-3 lg:justify-between flex-col lg:flex-row">
              <div className="md:w-2/3  "
              data-aos="fade-left"
              >
                <h2 className="text-xl md:text-3xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                  ENTERPRISE & CUSTOM APPLICATION DEVELOPMENT
                </h2>
                <p className="text-gray-600 lg:w-3/4 text-sm md:text-base mb-6">
                  ERPNext: SPY D TECHNOLOGY deep experience, expertise, and
                  exposure in designing and developing enterprise and custom web
                  applications catering to myriad industries.
                </p>
                <div className="flex justify-start md:justify-start md:gap-10 gap-5">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-lg px-5 py-1 md:px-14 md:py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                    EXPLORE
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 text-sm md:text-lg px-4 py-1 md:px-6 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 "
              data-aos="fade-right"
              >
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src={slider1}
                  alt="Enterprise Development"
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-4 sm:px-6 lg:px-8"
           data-aos="fade-up"
          >
            <div className="flex gap-10 flex-col-reverse lg:flex-row">
              <div className="lg:w-2/4"
              data-aos="fade-right"
              >
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                 src={slider2}
                  alt="Mobility Solutions"
                />
              </div>
              <div className="md:w-3/4"
              data-aos="fade-left"
              >
                <h2 className="text-lg md:text-3xl lg:w-4/5  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                  MOBILITY SOLUTIONS WITH CUTTING EDGE TECHNOLOGY
                </h2>
                <p className="text-gray-600 text-sm  lg:w-4/5 text-justify md:text-base mb-6">
                  Our Core Expertise is in ideating, conceptualizing, designing,
                  developing and deploying state-of-the-art mobile applications
                  for Android, IOS, and Hybrid Platforms.
                </p>
                <div className="flex justify-start md:justify-start md:gap-10 gap-5">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-lg px-5 py-1 md:px-14 md:py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                    EXPLORE
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 text-sm md:text-lg px-4 py-1 md:px-10 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          >
            <div className="flex gap-3 lg:justify-between flex-col lg:flex-row">
              <div className="md:w-2/3"
              data-aos="fade-left"
              >
                <h2 className="text-xl md:text-3xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                FULL SERVICES DIGITAL MARKETING
                </h2>
                <p className="text-gray-600 lg:w-3/4 text-sm text-justify md:text-base mb-6">
                We ideate, conceptualize, and leverage diversified tools and technologies to build flexible, 
                scalable, and optimized CMS based E-Commerce Platforms,
                 Web Portals, Web Applications and Websites that drives business growth for our clients.
                </p>
                <div className="flex justify-start md:justify-start md:gap-10 gap-5">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-lg px-5 py-1 md:px-14 md:py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                    EXPLORE
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 text-sm md:text-lg px-4 py-1 md:px-6 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2"
              data-aos="fade-right"
              >
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-72 lg:w-full lg:h-72"
                  src={slider3}
                  alt="Cloud Solutions"
                />
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          >
            <div className="flex gap-10 flex-col-reverse lg:flex-row"
            data-aos="fade-right"
            >
              <div className="lg:w-2/4">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-72"
                  src={slider4}
                  alt="Cybersecurity"
                />
              </div>
              <div className="md:w-2/3"
              data-aos="fade-left"
              >
                <h2 className="text-lg md:text-3xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                Empower Your Business with Cutting-Edge Microsoft Solutions
                </h2>
                <p className="text-gray-600 text-sm text-justify md:text-base mb-6 lg:w-4/5">
                Where innovation meets expertise in Microsoft technology solutions. With our comprehensive suite of services,
                 we empower businesses to unlock their full potential and thrive in today's digital landscape. Explore how SpY D Technology can transform your business with Microsoft technology
                </p>
                <div className="flex justify-start md:justify-start md:gap-10 gap-5">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-lg px-5 py-1 md:px-14 md:py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                    EXPLORE
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 text-sm md:text-lg px-4 py-1 md:px-10 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          >
            <div className="flex gap-3 lg:justify-between flex-col lg:flex-row">
              <div className="md:w-2/3"
              data-aos="fade-left"
              >
                <h2 className="text-xl md:text-3xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                Empower Your Business with Artificial Inteligency,cloud technologies and testing solutions
                </h2>
                <p className="text-gray-600 lg:w-4/5 text-sm md:text-base mb-6">
                Our SpY D technology expert in Artificial Inteligency and cloud technologies. 
                We give the soloutions for the software testing.
                </p>
                <div className="flex justify-start md:justify-start md:gap-10 gap-5">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-lg px-5 py-1 md:px-14 md:py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                    EXPLORE
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 text-sm md:text-lg px-4 py-1 md:px-6 md:py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2"
              data-aos="fade-right"
              >
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-72 lg:w-full lg:h-72"
                  src={slider5}
                  alt="Data Analytics"
                />
              </div>
            </div>
          </div>
        </Slider>

       
      </div>
    </div>
  );
};

export default CarouselComponent;

