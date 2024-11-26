import React from "react";
import data from "../../../assets/digitalmarketing/emailmarketing/cards/data.png";
import automation from "../../../assets/digitalmarketing/emailmarketing/cards/automation.png";
import coding from "../../../assets/digitalmarketing/emailmarketing/cards/coding.png";
import devices from "../../../assets/digitalmarketing/emailmarketing/cards/devices.png";
import email from "../../../assets/digitalmarketing/emailmarketing/cards/email.png";
import planning from "../../../assets/digitalmarketing/emailmarketing/cards/planning.png";
import sms from "../../../assets/digitalmarketing/emailmarketing/cards/sms.png";
import strategies from "../../../assets/digitalmarketing/emailmarketing/cards/strategies.png";
const services = [
  {
    title: "Strategies Development",
    description:
      "Through a comprehensive email marketing plan, you can cultivate relationships with potential, existing, and past customers and witness a rise in conversion rates, incremental revenue, and value added to your marketing campaigns.",
    image: strategies,
  },
  {
    title: "Email list growth services",
    description:
      "Creating your email marketing databases is crucial for establishing a robust, secure, and active customer community. Allow our comprehensive email marketing agency to create a plan that will bring valuable, top-notch subscribers to your expanding pool of potential clients.",
    image: email,
  },
  {
    title: "Planning and executing a campaign",
    description:
      "Brand recognition growth depends on consistent advertising strategies. Your committed email marketing advisors will create, organize, and carry out campaigns that resonate with your brand, written in your voice, and tailored to your visual identity.",
    image: planning,
  },
  {
    title: "Behaviorally-Triggered Automation",
    description:
      "Our email automation services are created to send messages based on the behavior of your audience at different stages of their sales funnel. They will focus on increasing your conversion rates and creating a durable email database.",
    image: automation,
  },
  {
    title: "Designing for multiple devices",
    description:
      "Most email readers usually access content through their mobile devices. To optimize your email marketing services, ensure that all your messages are tailored for mobile display. Every one of our email marketing initiatives",
    image: devices,
  },
  {
    title: "Designing and coding for emails",
    description:
      "Our skilled email marketing specialists will concentrate on email formatting and programming, in addition to delivery success, to guarantee that your messages avoid spam blockers and reach the recipients they are meant for.",
    image: coding,
  },
  {
    title: "Sophisticated Data Analysis",
    description:
      "Being a results-oriented agency, we utilize data to guide our choices and monitor metrics such as opens, clicks, bounces, conversions, and other indicators.",
    image: data,
  },
  {
    title: "Strategy for SMS Marketing",
    description:
      "We possess a comprehensive knowledge of SMS marketing. We will collaborate with your company to transmit text messages to cell phones in a cost-efficient manner, enabling your brand to interact with mobile consumers through valuable content and advertisements.",
    image: sms,
  },
];

const EmCards = () => {
  return (
    <div className="mb-10">
      <div className=" text-center py-4 pb-10">
        {" "}
        <p className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
          What we Do!!
        </p>
      </div>
      <div className=" mx-auto flex justify-center ">
        <div className="grid grid-cols-1 mx-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] lg:w-[340px] w-[300px] text-white  rounded-md shadow-lg "
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-contain w-full "
              />
              <div className="mx-auto p-4">
                {" "}
                <h3 className="text-2xl  mb-4">{service.title}</h3>
                <p className="text-md font-normal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EmCards;
