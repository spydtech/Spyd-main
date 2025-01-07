import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "./../../../assets/powerbi/home_page.png";
import bgimage from "./../../../assets/powerbi/bg_image.png";
import image1 from "./../../../assets/powerbi/image1.png";
import image2 from "./../../../assets/powerbi/image2.png";
import image3 from "./../../../assets/powerbi/image3.png";
import CallToAction  from "../../CallToAction";
import Footer from "../../Footer";


const PowerBi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);
  const features = [
    {
      title: "Advanced Data Modeling:",
      description1:
        "Utilize advanced data modeling techniques such as creating calculated columns, measures, and calculated tables to derive new insights from SPYD data.",
      description2:
        " Implement complex DAX (Data Analysis Expressions) formulas to perform calculations, aggregations, and statistical analysis on SPYD data.",
      bgColor: "#00CEFF",
    },
    {
      title: "Advanced Visualizations:",
      description1:
        "Incorporate advanced visualizations such as custom visuals from the Power BI marketplace or develop custom visuals using tools like Power BI Visuals SDK to visualize SPYD data in unique and insightful ways.",
      description2:
        "Use advanced chart types like waterfall charts, bullet charts, and combination charts to present complex relationships and trends in SPYD data effectively.",
      bgColor: "#9747FF",
    },
    {
      title: "Predictive Analytics:",
      description1:
        "Implement predictive analytics models using techniques like regression analysis, time series forecasting, or machine learning algorithms to predict future trends or outcomes based on SPYD data.",
      description2:
        "Integrate R or Python scripts within Power BI to perform advanced analytics tasks such as clustering, sentiment analysis, or anomaly detection on SPYD data.",
      bgColor: "#D75495",
    },

    {
      title: "Advanced Data Analysis:",
      description1:
        "Conduct advanced data analysis using techniques like correlation analysis, regression analysis, and hypothesis testing to uncover relationships and patterns within SPYD data.",
      description2:
        " Utilize the powerful capabilities of Power BI's data exploration tools such as decomposition trees, key influencers analysis, and anomaly detection to gain deeper insights into SPYD data.",
      bgColor: "#0866E2",
    },
    {
      title: "Geospatial Analysis:",
      description1:
        "Perform geospatial analysis on SPYD data by visualizing it on maps and using features like heatmaps, clustering, and boundary layers to identify spatial patterns and trends.",
      description2:
        "Incorporate external geospatial datasets or APIs to enrich SPYD data with additional geographic information and perform spatial analysis.",
      bgColor: "#26AFC7",
    },
    {
      title: "Real-time Analytics:",
      description1:
        "Implement real-time analytics solutions using Power BI streaming datasets or Azure services like Azure Stream Analytics to analyze and visualize SPYD data in real-time.",
      description2:
        " Develop real-time dashboards and alerts to monitor SPYD data continuously and respond to critical events or changes promptly.",
      bgColor: "#EA4B6C",
    },
    {
      title: "Custom Reporting Solutions:",
      description1:
        "Create custom reporting solutions tailored to the specific needs of SPYD stakeholders, including executive dashboards, operational reports, and ad-hoc analysis tools.",
      description2:
        " Incorporate external geospatial datasets or APIs to enrich SPYD data with additional geographic information and perform spatial analysis.",
      bgColor: "#F569C2",
    },
    {
      title: "Integration with External Systems:",
      description1:
        "Integrate Power BI with external systems and data sources relevant to SPYD technology, such as CRM systems, IoT platforms, or financial databases, to consolidate and analyze data from multiple sources.",
      description2:
        " Leverage Power BI's connectivity options and APIs to automate data refreshes, data ingestion, and data transformation processes for SPYD data pipelines.",
      bgColor: "#80D0C7",
    },
  ];

  const cards = [
    {
      title: "Get started with Power BI",
      description:
        "Find insights within your data and share rich analytics reports.",
      imgSrc: image1,
    },
    {
      title: "Get Power BI Desktop",
      description:
        "Create rich, interactive reports with visual analytics at your fingertips..",
      imgSrc: image2,
    },
    {
      title: "Get the Mobile App",
      description:
        "Securely access and view live Power BI dashboards and reports on any device, with native mobile apps for Windows, iOS, and Android..",
      imgSrc: image3,
    },
  ];

  return (
    <div className="font-serif">
      {/* Hero Section */}
      <div
       data-aos="zoom-in-up"
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url(${home})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-blue-600 opacity-50"></div>

  {/* Centered text content */}
  <div className='  -mt-0'>
  <h1 
   data-aos="fade-up"
  className="relative md:text-4xl  text-combo text-xl text-center text-white p-5">
  Transforming Customer Relationships:
  </h1>
  <p 
   data-aos="fade-up"
  className="relative md:text-xl text-sm lg:w-4/6 lg:ml-24 text-center text-white ">
  Unleashing the Power of Microsoft PowerBi with SpY D Technology
  </p>
 
  </div>
</div>

      <div
        className="p-5 bg-cover bg-center md:px-20 lg:px-32"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover", // Zoomed-out effect
        backgroundPosition: "bottom",
        }}
      >
        <p 
         data-aos="fade-right"
        className="text-sm lg:text-xl bg-transparent lg:ml-[8%] lg:w-4/5 text-justify">
          Creating advanced Power BI content for SpY D technology involves
          leveraging more sophisticated techniques and functionalities to
          extract deeper insights and provide a more immersive analytics
          experience.
        </p>
        {/* Features Section */}
        <div className="py-2 md:pt-8 bg-transparent">
          <h1 
           data-aos="fade-up"
          className="text-lg lg:text-xl text-[#0072FF] text-center md:py-2">
            Here's how you can enhance your Power BI content for SpY D:
          </h1>
          <ul className="py-2 md:grid grid-cols-2 md:gap-4 lg:gap-4 lg:px-20 space-y-5 lg:space-y-0">
            {features.map((card, index) => (
              <li
               data-aos="fade-right"
                key={index}
                className="lg:w-[411px] p-5 rounded-lg text-white text-justify  "
                style={{ backgroundColor: card.bgColor }}
              >
                <h4 className="text-lg mb-2 text-center">{card.title}</h4>
                <div className="lg:space-y-10">
                <p className="text-sm lg:text-base my-2 md:my-4">
                  {card.description1}
                </p>
                <p className="text-sm lg:text-base my-2 md:my-4">
                  {card.description2}
                </p>
                </div>
              </li>
            ))}
          </ul>
          <div 
           data-aos="fade-up"
          className="text-center md:mt-4 ">
            <button className="bg-gradient-to-r from-[#00CEFF] to-[#0866E2] px-4 py-2 lg:px-6 lg:py-3 lg:text-base text-sm text-white rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#00CEFF] text-white p-3 lg:px-20">
        <h3 
         data-aos="fade-down"
        className="text-lg md:text-xl lg:text-2xl py-3 md:text-center lg:text-center lg:w-3/5  ml-0 lg:ml-[20%] ">
          Get Advanced Techniques and Functionalities into Your Power BI
        </h3>
        <p 
         data-aos="fade-right"
        className=" text-sm md:text-base py-3 lg:w-1/2 text-justify lg:ml-[22%] ml-0">
          you can provide SpY D Technology stakeholders with deeper insights,
          predictive capabilities, and a more interactive analytics experience
          tailored to their specific needs and requirements.
        </p>
        <div 
         data-aos="fade-right"
        className="flex justify-center gap-4 py-5">
          <button className="bg-white text-[#00CEFF] rounded p-2 lg:px-5  px-3 text-sm md:text-base">
            Get Latest Updates
          </button>
          <button className="bg-white text-[#00CEFF] rounded p-2 lg:px-12 px-6 text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>

      <div className=" p-5">
        <ul className="max-md:space-y-4 md:flex justify-center gap-2 lg:gap-5 md:p-5">
          {cards.map((feature, index) => (
            <li 
             data-aos="fade-up"
            key={index} className="rounded-lg md:w-56 lg:w-72 ">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="md:h-40 w-full"
              />
              <div className="bg-[#0866E2] text-white p-5 space-y-3 rounded-b-lg md:h-56">
                <h4 className="text-lg ">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-9xl sm:text-3xl font-bold text-blue-600 text-center">
          Let’s Ignite Conversations in the World of Innovative Technology!
        </h1>
        <p className="mt-4 text-2xl text-center max-w-8xl">
          Join us in a dialogue that transcends boundaries. At the heart of our
          passion lies innovation, where ideas meet execution, crafting a
          seamless and beautiful experience. Your thoughts matter—let’s explore
          the future of technology together. Reach out via call or email, and
          let the conversation begin.
        </p>
        <button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition-all">
          Read More
        </button>
      </div> */}
      {/* <div>
        <Footer/>
    </div> */}
    <CallToAction />
    <Footer />
    </div>
  );
};

export default PowerBi;
