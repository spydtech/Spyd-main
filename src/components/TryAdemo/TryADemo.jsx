import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import ReadyToTest from './ReadyToTest';
import PowerfulFeatures from './PowerfulFeatures';
import Footer from '../Footer';
import CallToAction from '../CallToAction';



const TryADemo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      

      <div className=" mx-auto min-h-screen  h-screen ">
      <div
      data-aos="fade-in"
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5824/378d/d57d0939b555fc18de09970d85afd4a9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N9Sq1Lmaxemfv-pqssO6BjEPI18OYtqXbmwjbDoVzbaDeXlEQPg4QoEZwVr4kjitrkRcp6VY0dLs9mfYB-hzv9WsKHK-XwXWR0b06z-A3jj14PkBDMGVaQ0tMUia8Gyu0NA1JUFJ9Xmnfv~K~OzJ-CuVeLhQvRwhC4n0VRd~y0fey~NcGtF8UxoNzQjHNZiIHifLaBSiBXvjbTMV8RE92dYVvYumNTLoXxMTK2YzO~HoL7Taz907Eyls9msSXdOC4HNYjgUe1XuKIt5DJQx~vy-nvJPGpclXOSIHiXHYrcvBanwtPy2x4h0j1UY0HtqDoCnOL82JDS6ASsjAGtpKLA__")`,
  }}
>
    {/* Overlay for transparent blue color */}
  <div 
  className="absolute inset-0 bg-black opacity-50"></div>
          <div 
          data-aos="fade-right"
          className=" absolute px-4 ">
            <div className="text-white md:text-[10px] lg:text-[50px] text-xl font-bold text-center tracking-tighter  leading-none ">
              Experience a 10-minute Live Demo: <br />{" "}
              <span className="bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent ">
                Accelerate Your Digital Transformation
              </span>
            </div>
            <br />
            <p className="text-white text-center md:text-lg text-md">
              Discover the power of our cutting-edge IT solutions in this free,
              on-demand demo. Explore how our innovative technologies empower
              businesses to streamline operations and achieve unparalleled
              efficiency.
            </p>
          </div>
        </div>
        <ReadyToTest />
      <PowerfulFeatures />
      <CallToAction />
      <Footer />
      </div>

     
     
      
    </>
  );
};

export default TryADemo;
