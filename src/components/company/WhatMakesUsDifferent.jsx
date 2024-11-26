import React from "react";
import Footer from '../../components/Footer'


const WhatMakesUsDifferent = () => {
  return (
    <div className="font-serif">
      <img
        src="src/assets/company/whatMakesUsDifferent/hero.png"
        alt="visionHeroImg"
        className="w-full h-44 lg:h-96"
      />

      <div className="m-5 md:flex flex-col items-center space-y-5">
        <h1 className="text-lg lg:text-2xl text-center bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
          What makes us different from other software companies
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px] md:order-2">
            <h1 className="text-xl  bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Trust
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                Our clients trust is paramount to us, we know this is earned not
                assumed and work accordingly.
              </li>
              <li className=" list-disc">
                We view our clients as partners, we're here to help optimize
                your business and work tirelessly to ensure your success.
              </li>
            </ul>
          </div>
          <img
            src="src/assets/company/whatMakesUsDifferent/image-1.png"
            alt="image-2"
            className="w-40 mx-auto md:w-52"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px]">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Transparency
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                We adopt an approach that ensures our customers receive absolute
                clarity about the services we offer, and take pride in
                delivering exactly what is promised - delivered on time and
                within budget. You can be assured there will be no unwelcome
                surprises!
              </li>
            </ul>
          </div>
          <img
            src="src/assets/company/whatMakesUsDifferent/image-2.png"
            alt="image-1"
            className="w-40 mx-auto md:w-52 "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px] md:order-2">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Reliability
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                We adopt an approach that ensures our customers receive absolute
                clarity about the services we offer, and take pride in
                delivering exactly what is promised - delivered on time and
                within budget. You can be assured there will be no unwelcome
                surprises!
              </li>
            </ul>
          </div>
          <img
            src="src/assets/company/whatMakesUsDifferent/image-3.png"
            alt="image-2"
            className="w-40 mx-auto md:w-52"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 md:items-center">
          <div className="space-y-2 md:w-[400px] lg:w-[500px] xl:w-[800px]">
            <h1 className="text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent">
              Honesty
            </h1>
            <ul className="mx-5 space-y-2 text-sm md:text-base">
              <li className=" list-disc">
                Our approach is based on honesty and part of that is
                acknowledging that while we deliver 99+% of our work accurately
                and on schedule we can sometimes make errors. To ensure valuable
                long term relationships, both for our clients, and our business,
                in the unlikely event we do get something wrong we'll take
                responsibility and work with you to resolve them quickly,
                efficiently and with utmost integrity.
              </li>
            </ul>
          </div>
          <img
            src="src/assets/company/whatMakesUsDifferent/image-4.png"
            alt="image-1"
            className="w-40 mx-auto md:w-52"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatMakesUsDifferent;
