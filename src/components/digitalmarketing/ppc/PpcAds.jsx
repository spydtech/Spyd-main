import { useState } from "react";
import ads from "../../../assets/digitalmarketing/ppc/ads.png"; // Background image
import amazon from "../../../assets/digitalmarketing/ppc/adsTypes/amazon.png";
import display from "../../../assets/digitalmarketing/ppc/adsTypes/display.png";
import google from "../../../assets/digitalmarketing/ppc/adsTypes/google.png";
import local from "../../../assets/digitalmarketing/ppc/adsTypes/local.png";
import remarketing from "../../../assets/digitalmarketing/ppc/adsTypes/remarketing.png";
import search from "../../../assets/digitalmarketing/ppc/adsTypes/search.png";
import social from "../../../assets/digitalmarketing/ppc/adsTypes/social.png";
import streams from "../../../assets/digitalmarketing/ppc/adsTypes/streams.png";

function PpcAds() {
  const [selectedOption, setSelectedOption] = useState("search"); // Default to 'search'

  const content = {
    search: {
      heading: "Search Ads",
      description:
        "Search ads are the most common type of paid search marketing. Search advertisements are displayed to potential customers who are actively seeking your industry or brand products/services online. Our PPC advertising company suggests search advertising for businesses aiming to acquire strong, high-quality leads from new customers.",
      image: search,
    },
    display: {
      heading: "Display Ads",
      description:
        "Display advertising is known for its effectiveness in reaching more than 90 percent of online users. Display Ads are shown on websites that are affiliated with Google, targeting individuals who have visited sites related to a specific industry. Display advertising maximizes photos and texts to capture the online users’ attention and convince them to take action.",
      image: display,
    },
    social: {
      heading: "Social Ads",
      description:
        "Paid advertising on social media is rapidly growing. Social media platforms like Facebook, LinkedIn, and Twitter display social ads. They connect with potential customers based on their interests, social circles, and hobbies, working well for brands with a strong social media following.",
      image: social,
    },
    remarketing: {
      heading: "Remarketing Ads",
      description:
        "Remarketing targets high-converting customers by serving ads to people who previously visited your site, encouraging them to return and complete a purchase. It's cost-effective with focused customer segments.",
      image: remarketing,
    },
    google: {
      heading: "Google Shopping Ads",
      description:
        "Google Shopping ads appear as carousels above search results, showing products and prices. E-commerce businesses benefit from targeting customers ready to buy.",
      image: google,
    },
    streams: {
      heading: "In-stream Ads",
      description:
        "In-stream ads, often seen on YouTube, showcase your brand within videos and search results. They offer a unique and engaging way to connect with customers.",
      image: streams,
    },
    local: {
      heading: "Local Service Ads",
      description:
        "Local service ads operate on a pay-per-lead basis, targeting specific markets like HVAC, electricians, and plumbers. They enhance visibility among desired customer bases.",
      image: local,
    },
    amazon: {
      heading: "Amazon PPC",
      description:
        "Amazon PPC ads help sellers boost brand recognition, sales, and attract customers to their store via strategically placed sponsored ads.",
      image: amazon,
    },
  };

  const handleToggle = (option) => {
    setSelectedOption(option); // Update selected option
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ads})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "auto", // Full height
      }}
    >
      <div className="flex flex-col lg:flex-row lg:mx-10 lg:p-6 mx-2 p-2 my-10">
        {/* Left Side: Buttons */}
        <div className="w-1/4 space-y-2 pb-20 lg:pb-0">
          {Object.keys(content).map((key) => (
            <button
              key={key}
              className={`block p-4 text-xl rounded-md w-60 ${
                selectedOption === key
                  ? "bg-black border-none text-white"
                  : "border-l-8 border-black text-black"
              }`}
              onClick={() => handleToggle(key)}
            >
              {content[key].heading}
            </button>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="w-3/4 ml-8 flex flex-col">
          <div className="flex">
            <img
              src={content[selectedOption].image}
              alt={content[selectedOption].heading}
              className="w-[80px] h-[80px] mr-6"
            />
            <h2 className="text-3xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text pt-6 font-bold">
              {content[selectedOption].heading}
            </h2>
          </div>

          <div className="">
            <p className="mt-4 text-xl">
              {content[selectedOption].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PpcAds;
