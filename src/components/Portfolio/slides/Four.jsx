import React from "react";

export const Four = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center relative">
      <div className="relative w-full min-h-screen space-y-5 font-ubuntu px-4 md:px-10 lg:px-20">
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-center mt-16 gap-2 text-center">
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-2xl sm:text-3xl md:text-5xl font-bold"
          >
            International Voice Process:
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl block mt-2">
              Shaw Communications Inc.
            </span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-500 text-sm sm:text-base md:text-lg"
          >
            Enhancing Telecommunications Support Through Effective Processes
          </p>
        </div>

        {/* Grid Section */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Client Background",
                content:
                  "Shaw Communications Inc. is a leading telecommunications company based in Canada, known for its innovative internet, home phone, and TV services.",
              },
              {
                title: "Successful Partnership",
                content:
                  "SPYD TECHNOLOGY PVT LTD successfully managed an international inbound voice process, establishing a strong partnership with Shaw Communications Inc. to enhance customer support.",
              },
              {
                title: "Customer Support Services",
                content:
                  "The services provided included inbound customer support specifically tailored for internet services, home phone connections, and TV subscriptions, ensuring comprehensive assistance.",
              },
              {
                title: "Operational Model",
                content:
                  "The operations model utilized was an International Call Center, which facilitated efficient handling of customer inquiries across various global time zones.",
              },
              {
                title: "Team Size and Expertise",
                content:
                  "A dedicated team of 40 employees was assembled, each trained to deliver top-notch customer service and maintain high satisfaction levels.",
              },
              {
                title: "Customer Satisfaction Focus",
                content:
                  "The primary goal was to ensure high customer satisfaction by providing seamless support, which was achieved through rigorous training and effective communication strategies.",
              },
            ].map(({ title, content }, index) => (
              <div
                key={title}
                className="bg-white p-3 rounded border shadow-md flex flex-col hover:shadow-lg transition"
              >
                {/* Title */}
                <div className="min-h-[3rem] flex items-center justify-center text-center">
                  <h3
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                    className="text-lg font-bold"
                  >
                    {title}
                  </h3>
                </div>

                {/* Content */}
                <p
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 150}
                  className="text-sm sm:text-base text-gray-500 mt-2 text-justify sm:text-center"
                >
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
