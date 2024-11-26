


import React from "react";

// import Footer from "../CRM/Footer";
const PowerBi = () => {
  return (
    <div >
      {/* Hero Section */}
      <div className="w-full min-h-full p-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/046c/deab/de2f4f6b142c665b536ebb033336fad0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGuVHDpEfmipN3jfbYfD-pLUmWIXQjYsSfJfOTNIEDPbzOSGxmvUbtzXWib4WiMLapFfrTJvrhLazS~BSHIEmEPsrEsqYXsTqLfnP38cq3roOAA07OAx83BrFqaQPdqLazDHzPhPPqk8dPwJCp~o-EhOk-s6sg8wUs6DiiuOBPek8HfCchyqKRDwp6Gw0yoOjdkk6D1c9PGgraLBE6d5AwNKbMDrMGsnLgb1Kog-NlykDAa5tHRvBiJhuDPl0Bt18Q7g8nSbu5tDcXiFJqrntBcOve8p9A9zodAoNkUuO04YjIlZgrBi06B-atIwM0CqcwBerDOG25jinHaFgY2fTw__"
          alt="Homepage"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="text-[25px] px-4">
        <p>
          Creating advanced Power BI content for SpY D technology involves
          leveraging more sophisticated techniques and functionalities to
          extract deeper insights and provide a more immersive analytics
          experience.
        </p>
      </div>
      <div>
        <h1 className="text-[#00CEFF] text-center text-[25px]">
          Here's how you can enhance your Power BI content for SpY D:
        </h1>
      </div>

      {/* Features Section */}
      <section className="min-h-screen  flex justify-center items-center bg-white py-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
          {/* Cards */}
          {[
            {
              title: "Advanced Data Modeling",
              description:
                "Utilize advanced data modeling techniques such as creating calculated columns, measures, and calculated tables to derive new insights from SPYD data. Implement complex DAX (Data Analysis Expressions) formulas to perform calculations, aggregations, and statistical analysis on SPYD data.",
              bgColor: "#00CEFF",
            },
            {
              title: "Advanced Visualizations",
              description:
                "Incorporate advanced visualizations such as custom visuals from the Power BI marketplace or develop custom visuals using tools like Power BI Visuals SDK to visualize SPYD data in unique and insightful ways. Use advanced chart types like waterfall charts, bullet charts, and combination charts to present complex relationships and trends in SPYD data effectively.",
              bgColor: "#9747FF",
            },
            {
              title: "Predictive Analytics",
              description:
                "Implement predictive analytics models using techniques like regression analysis, time series forecasting, or machine learning algorithms to predict future trends or outcomes based on SPYD data. Integrate R or Python scripts within Power BI to perform advanced analytics tasks such as clustering, sentiment analysis, or anomaly detection on SPYD data.",
              bgColor: "#D75495",
            },
            {
              title: "Advanced Data Analysis",
              description:
                "Implement predictive analytics models using techniques like regression analysis, time series forecasting, or machine learning algorithms to predict future trends or outcomes based on SPYD data. Integrate R or Python scripts within Power BI to perform advanced analytics tasks such as clustering, sentiment analysis, or anomaly detection on SPYD data.",
              bgColor: "#0866E2",
            },
            {
              title: "Geospatial Analysis",
              description:
                "Conduct advanced data analysis using techniques like correlation analysis, regression analysis, and hypothesis testing to uncover relationships and patterns within SPYD data. Utilize the powerful capabilities of Power BI's data exploration tools such as decomposition trees, key influencers analysis, and anomaly detection to gain deeper insights into SPYD data.",
              bgColor: "#26AFC7",
            },
            {
              title: "Real-Time Analytics",
              description:
                "Implement real-time analytics solutions using Power BI streaming datasets or Azure services like Azure Stream Analytics to analyze and visualize SPYD data in real-time. Develop real-time dashboards and alerts to monitor SPYD data continuously and respond to critical events or changes promptly.",
              bgColor: "#EA4B6C",
            },
            {
              title: "Custom Reporting Solutions:",
              description:
                "Create custom reporting solutions tailored to the specific needs of SPYD stakeholders, including executive dashboards, operational reports, and ad-hoc analysis tools. Incorporate external geospatial datasets or APIs to enrich SPYD data with additional geographic information and perform spatial analysis.",
              bgColor: "#F569C2",
            },
            {
              title: "Integration with External Systems :",
              description:
                "Integrate Power BI with external systems and data sources relevant to SPYD technology, such as CRM systems, IoT platforms, or financial databases, to consolidate and analyze data from multiple sources. Leverage Power BI's connectivity options and APIs to automate data refreshes, data ingestion, and data transformation processes for SPYD data pipelines.",
              bgColor: "#80D0C7",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg text-white flex flex-col justify-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <h4 className="text-lg font-bold mb-2">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#00CEFF] min-h-[400px] text-white py-16 px-8 text-center">
        <h3 className="text-4xl  mb-4">
          Get Advanced Techniques and Functionalities into Your Power BI
        </h3>
        <p className="mb-6 text-2xl">
        you can provide SpY D Technology stakeholders with deeper insights, predictive capabilities, and a more interactive analytics experience tailored to their specific needs and requirements.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-[#00CEFF] px-6 py-4 rounded">
            Get Latest Updates
          </button>
          <button className="bg-white text-[#00CEFF] px-6 py-4 rounded">
            Learn More
          </button>
        </div>
      </section>
      <section className="py-16 px-8 bg-white">
        <h3 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Explore Power BI Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Get started with Power BI",
              description: "Find insights within your data and share rich analytics reports.",
              imgSrc: "https://s3-alpha-sig.figma.com/img/07d3/95ac/b9e38ba187547d5760cb17907460597a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MWTfN6KsaT3cqCbERKb6DkCk-jkXzY9uzmrNLtQ7YTWAnwW~ZnG6eqm5x0VpUELPtBtvhLz8mo6YLZu7143JYAOMbUZg0ZiKc3QIZyHhTuCWO2jo6viQJ1elJJonEpdQbXOVejofeHPAWxTwfIgeYzWbzf3cqhCdJsjsDZmlabkTOI21Ouw8dsYkE8oTdOSseT8nw1IzFYkhUKlwSwOxTahtchqqOOK93e39dRCpl1MPrVVWeD~Z-eGNu0A7VOn2ZtDxPg5BwwQTo-mAB8w5f8au2ekfF9QGKdChvNlSijRAWZMQCa4x6nFtd5GmQXDDrUqhYNxskhSvTdZzmRTygA__",
            },
            {
              title: "Get Power BI Desktop",
              description:
                "Create rich, interactive reports with visual analytics at your fingertips..",
              imgSrc: "https://s3-alpha-sig.figma.com/img/2134/b150/617ef95e5a0644a44b0fdf14e8cf9759?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cohXKtz9x3lLMo8z~tZRHJwXchSfJ-Z3wkV3csaPauPWqbvejg5DXCBfoIUBYkvVsORRSqiLIrpmFV6U7zq30KL6KP4rMaL0MP69jA4BJaMNrgLhHwweNQM0kgy5goz9nSGWI3lfrsoXEFtnvJ77wHOirQmVUeZpuRx6fO-yfCxRDPwdof1oJfm5slEdBurUn633na8ycC6sjkerNKNotSKyVC-3NakAEQ1-pmEt4KV-DxPrde7jpcCnQTk6up5X8jYqdFaOYjpyOz0O1wpfiBKjZjw4ppk1cWgHjmUroFfVQAgkCObtlQY6dcfwZHi3rRMX4J6BTFyRXDORoTEY7A__",
            },
            {
              title: "Get the Mobile App",
              description:
                "Securely access and view live Power BI dashboards and reports on any device, with native mobile apps for Windows, iOS, and Android..",
              imgSrc: "https://s3-alpha-sig.figma.com/img/278c/ab8f/5eaa00c9e8b6975452e37a25b0fca6a5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnyYN-vgPpLipJbKdDxKyN4Q4RInQSu1LZlZ~uWMSA9-GRphc0tQuy38qGvwKrbvcyrHjKTVGGrFIKhp9QHubd8WNkXcTq~8WS4Y2bBHvWrXjrLIbL9VveuyY3i4OjToWF0smL~0eDtpqGKDfcLPDyLM72pTHopXO3LLpB9XKlxP93TtTg40CtUISQiKIEIwdmbprvxVNBLc6Dhr5Tdfryh3GrfW1sEpAkN~95hCPmrULc5QHInlo5h9qn2OavMJXmKY7ykdd9ouXS4XWxuRcz4RWvFczsIMyg95Zxe0gShnBFONSx70YD5qsQ6XOdZ2t0oI750nRnywa9nXuDDmIw__",
            },
          ].map((feature, index) => (
            <div key={index} className=" p-4 bg-[#0866E2]  py-8 rounded-lg shadow-lg">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-9xl sm:text-3xl font-bold text-blue-600 text-center">
        Let’s Ignite Conversations in the World of Innovative Technology!
      </h1>
      <p className="mt-4 text-2xl text-center max-w-8xl">
        Join us in a dialogue that transcends boundaries. At the heart of our passion lies innovation, where ideas meet execution, crafting a seamless and beautiful experience. Your thoughts matter—let’s explore the future of technology together. Reach out via call or email, and let the conversation begin.
      </p>
      <button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition-all">
        Read More
      </button>
    </div>
    <div>
        {/* <Footer/> */}
    </div>

    </div>
  );
};

export default PowerBi;
