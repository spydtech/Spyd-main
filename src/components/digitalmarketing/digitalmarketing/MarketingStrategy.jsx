import React from "react";
import AvailabilityImage from "../../../assets/digitalmarketing/24-7.png";
function MarketingStrategy() {
  const data = [
    {
      heading: "Proven ROI from Digital Marketing",
      description:
        "With the help of SPY D, a full-service digital marketing agency that has assisted small-to-midsized businesses in generating 2x revenue using tactics like SEO, PPC, web design, and more, you can increase leads, sales, and revenue for your company.\n\n\nWith SPY D, calculating your ROI from digital marketing isn't a guessing game. With our client-only marketing automation platform, Marketing CloudFX, you can monitor your performance, determine your return on investment, and make strategic decisions.",
      image: "",
    },
    {
      heading: "All in one Marketing solutions",
      description:
        "With our digital marketing services, you'll receive a full marketing team. You'll have the abilities required to improve your website and increase online cash streams, from SEO experts to web developers.\n\n\nYou receive an all-in-one solution that goes above and beyond with our revenue-focused programs. In addition to personalized tactics, frequent reporting, and a dedicated account manager, you'll also get machine learning insights, ROI analysis, competitor information, and more.",
      image: "",
    },
    {
      heading: (
        <>
          24/7 <br /> Support
        </>
      ),
      description:
        "Do you want to boost your output even further? Not an issue. SPY D Technology allows you to handle all of your digital marketing campaigns from a single location by providing successful tactics like web design, PPC, and content marketing.\n\n\nWith SPY D, your digital marketing strategy is driven by facts rather than intuition. To inform your strategy, we bring together billions of data points and decades of experience.",
      image: AvailabilityImage,
    },
  ];

  return (
    <>
      <div className="lg:mt-6 my-4 mx-2">
        <div className="text-center">
          <p className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            Get a revenue generating digital marketing strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-4 mt-6">
          {data.map((item, index) => (
            <div
              id={`card-${index}`}
              key={index}
              className="w-[340px] hover:text-white hover:bg-gradient-to-r hover:to-[#00ceff] hover:from-[#0072ff] rounded-sm bg-gradient-to-t to-[#00ceff] from-[#0866e2] mx-auto p-4 h-auto"
            >
              <p className="title text-center text-2xl font-medium">
                {item.heading}
              </p>
              <br></br>
              <p className="description mt-2 whitespace-pre-line">
                {item.description.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              {item.image && (
                <div className="flex my-2 justify-center items-center">
                  <img src={item.image} className="image  object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MarketingStrategy;
