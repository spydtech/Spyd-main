import React from "react";
import Footer from '../../components/Footer'


const VisionAndMission = () => {
  return (
    <div className="font-serif">
      <img src="src/assets/company/vision/hero.png" alt="visionHeroImg" className="h-44 lg:h-96 w-full" />

      <div className="m-5 md:flex flex-col items-center space-y-3">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 lg:w-[600px] xl:w-[800px] max-md:order-1">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Mission
            </h1>
            <p className="text-sm lg:text-base">
              SPY D Tech's mission is singular and unequivocal — to establish
              ourselves as a company dedicated to cost optimization while
              maximizing profits for our clients. We firmly believe that the
              success of our clients is intrinsic to our own success, and this
              philosophy underlines every aspect of our mission. Our primary
              mission is to provide solutions that not only meet the
              technological needs of our clients but also contribute to their
              financial success. We understand the importance of
              cost-effectiveness in today's competitive landscape, and our
              mission is centered around delivering value that extends beyond
              the initial investment.
            </p>
          </div>
          <img
            src="src/assets/company/vision/image-1.png"
            alt="image-1"
            className="w-60 mx-auto md:h-60 "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 lg:w-[600px] xl:w-[800px] md:order-2 max-md:order-1">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
            Vision
            </h1>
            <p className="text-sm lg:text-base">
              At SPY D Tech, our vision extends beyond conventional success
              metrics. We aspire not just to be an internationally reputed
              company, but to be a trailblazer in the realm of emerging
              technologies. We envision a future where SPY D Tech stands
              synonymous with innovation, consistently delivering quality
              solutions that go beyond meeting expectations to truly delight our
              clients. Our vision is rooted in a commitment to staying at the
              forefront of technological advancements. We understand that the
              landscape of technology is dynamic, and our vision is to not only
              adapt but to proactively shape the future. By embracing emerging
              technologies, we aim to set new standards, redefine user
              experiences, and contribute to the overall progress of the IT
              industry.
            </p>
          </div>
          <img
            src="src/assets/company/vision/image-2.png"
            alt="image-2"
            className="w-60 mx-auto md:h-60"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisionAndMission;
