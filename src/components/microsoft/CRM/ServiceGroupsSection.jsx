import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimage from "../../../assets/Crm/dynamic/bgimage.png";
import image from "../../../assets/Crm/dynamic/image.png"

function ServiceGroupsSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
    className="relative  py-12 px-6 md:px-24 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "top left left cover",
    }}
  >
     <div className="absolute inset-0  bg-white opacity-60"></div>
      {/* Background */}
  

      {/* Content */}
      <div className=" relative lg:w-3/4 lg:ml-20 lg:text-justify">
      <p 
      data-aos="fade-right"
      className="text-[#141414] text-sm lg:text-xl mb-4 ">
            The future of customer relationship management with Microsoft
            Dynamics CRM, powered by "SpY D Technology". Our innovative
            solutions are designed to empower businesses of all sizes to build
            stronger customer connections, streamline processes, and drive
            growth.
          </p>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-24 space-y-8 lg:space-y-0">
        <div className="lg:max-w-[50%] text-justify">
         
         
          <ul className="list-disc list-inside space-y-3 text-[#141414] text-sm lg:text-base">
            <li
            data-aos="fade-right"
            >
            Building strong, meaningful relationships with customers 
            lies at the core of every successful enterprise. At SPY D Technology,
             we specialize in crafting comprehensive and scalable CRM 
            solutions designed to help businesses attract, engage, and retain their valued clientele.
            </li>
            <li
            data-aos="fade-right"
            >
            Our team comprises skilled technologists with 
            extensive experience across various cutting-edge platforms, 
            including Salesforce and Microsoft Technologies. Leveraging our expertise, 
            we develop and implement CRM platforms that offer a wide array of services, including sales, marketing, 
            customer service, social engagement, and analytics
            </li>
            <li
            data-aos="fade-right"
            >
            Our CRM services extend beyond mere development and deployment. 
            We provide comprehensive training, 
            manual documentation, and ongoing maintenance support to ensure seamless operations.
            </li>
            <li
            data-aos="fade-right"
            >
            What sets us apart at SPY D Technology is our commitment to holistic business integration. 
            In addition to building and deploying CRM applications, 
            we excel in seamlessly integrating these new solutions with existing systems, facilitating smooth and efficient operations.

            </li>
            
            <li
            data-aos="fade-right"
            >
            We pride ourselves on utilizing and implementing state-of-the-art technologies 
            that seamlessly integrate with existing infrastructures, 
            ensuring a streamlined integration process and optimal operational efficiency.
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%]">
          <img
          data-aos="fade-up"
           src={image}
           alt="CRM Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceGroupsSection;
