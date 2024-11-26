import React from "react";
import audit from "../../../assets/digitalmarketing/socialmediamarketing/services/audit.png";
import analytics from "../../../assets/digitalmarketing/socialmediamarketing/services/analytics.png";
import accounts from "../../../assets/digitalmarketing/socialmediamarketing/services/account.png";
import community from "../../../assets/digitalmarketing/socialmediamarketing/services/community.png";
import content from "../../../assets/digitalmarketing/socialmediamarketing/services/content.png";
import strategy from "../../../assets/digitalmarketing/socialmediamarketing/services/strategy.png";
const SsmCards = () => {
  const services = [
    {
      title: "Social media audit",
      icon: audit,
      description:
        "Comprehensive assessment of your existing social media presence to pinpoint strengths, weaknesses, and areas needing enhancement, delivering valuable insights for a successful strategy.",
    },
    {
      title: "Social media strategy",
      icon: strategy,
      description:
        "We're not content with the status quo. We're constantly pushing the boundaries of what's possible, exploring new technologies and methodologies to deliver innovative AI solutions that drive real results.",
    },
    {
      title: "Business Account setup",
      icon: accounts,
      description:
        "Create and optimize social media accounts across relevant platforms, ensuring consistent branding, keyword optimization, and strategic integration of business information.",
    },
    {
      title: "Content creation",
      icon: content,
      description:
        "Create customized, high-quality content that connects with your specific audience, and efficiently share it on various social media platforms to boost visibility and interaction.",
    },
    {
      title: "Community Engagement",
      icon: community,
      description:
        "Cultivate a positive brand image by nurturing and interacting with your online community, fostering discussions, and addressing concerns and queries.",
    },
    {
      title: "Analytics and reporting",
      icon: analytics,
      description:
        "Use sophisticated analytics for monitoring important performance metrics, observing audience actions, and collecting useful information, allowing for data-informed decisions to enhance social media marketing campaigns.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-10">
        {services.map((service, index) => (
          <div key={index} className=" h-80  rounded-lg text-center ">
            {/* Icon container */}
            <div className="flex justify-center    mb-4 ">
              <div className="flex h-20 w-20 absolute items-center justify-center bg-gradient-to-r from-[#00ceff] to-[#0072ff] rounded-full border-2 border-black text-4xl text-white">
                <img className="p-1" src={service.icon} />
              </div>
            </div>

            {/* Card content */}
            <div className="lg:py-10 py-4 h-[350px] lg:h-[300px] px-4 pb-10 mt-10  shadow-lg border-black  rounded-lg   border-2 flex flex-col justify-between">
              <h3 className="text-2xl pt-5 font-semibold bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
                {service.title}
              </h3>
              <p className=" text-lg ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SsmCards;
