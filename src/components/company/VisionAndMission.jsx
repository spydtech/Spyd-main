import React, { useEffect } from "react";
import Footer from '../../components/Footer'
import image from "./../../assets/vision/hero.png";
import image1 from "./../../assets/vision/image-1.png";
import image2 from "./../../assets/vision/image-2.png"
import CallToAction from "../CallToAction";
import AOS from "aos";
import "aos/dist/aos.css";



const VisionAndMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="font-serif">
      <img src={image} alt="visionHeroImg" 
      data-aos="fade-in"
      className="h-44 lg:h-96 w-full" />

      <div className="m-5 md:flex  flex-col space-y-3 lg:px-24"
      
      >
        <div className="flex flex-col md:flex-row gap-4 lg:gap-0 md:items-center lg:px-4">
          <div className="space-y-2 lg:w-[600px] xl:w-[800px] max-md:order-1"
          data-aos="fade-left">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Mission
            </h1>
            <p className="text-sm lg:text-base text-justify">
              SPY D Tech's mission is singular and unequivocal — to establish
              ourselves as a company dedicated to cost optimization while
              maximizing profits for our clients. We firmly believe that the
              success of our clients is intrinsic to our own success, and this
              philosophy underlines every aspect of our mission.
            </p>
            <p className="text-sm lg:text-base text-justify">
            Our primary
              mission is to provide solutions that not only meet the
              technological needs of our clients but also contribute to their
              financial success. We understand the importance of
              cost-effectiveness in today's competitive landscape, and our
              mission is centered around delivering value that extends beyond
              the initial investment.
            </p>
          </div>
          <img
          data-aos="fade-right"
            src={image1}
            alt="image-1"
            className="lg:w-[450px] lg:h-[300px]  mx-auto md:h-60 "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-0  lg:px-4 ">
          <div className="space-y-2 lg:w-[600px] xl:w-[800px] md:order-2 max-md:order-1"
          data-aos="fade-left"
          >
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
            Vision
            </h1>
            <p className="text-sm lg:text-base text-justify">
              At SPY D Tech, our vision extends beyond conventional success
              metrics. We aspire not just to be an internationally reputed
              company, but to be a trailblazer in the realm of emerging
              technologies. We envision a future where SPY D Tech stands
              synonymous with innovation, consistently delivering quality
              solutions that go beyond meeting expectations to truly delight our
              clients.
            </p>
            <p className="text-sm lg:text-base text-justify">
            Our vision is rooted in a commitment to staying at the
              forefront of technological advancements. We understand that the
              landscape of technology is dynamic, and our vision is to not only
              adapt but to proactively shape the future. By embracing emerging
              technologies, we aim to set new standards, redefine user
              experiences, and contribute to the overall progress of the IT
              industry.
            </p>
          </div>
          <img
          data-aos="fade-right"
            src={image2}
            alt="image-2"
            className="lg:w-[450px] lg:h-[400px] mx-auto lg:-mt-5 "
          />
        </div>
      </div>
      <CallToAction />

      <Footer />
    </div>
  );
};

export default VisionAndMission;
