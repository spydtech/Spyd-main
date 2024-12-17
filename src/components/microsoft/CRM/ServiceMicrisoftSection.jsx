import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceMicrosoftSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-[170px] py-8 text-center lg:text-left">
      <h1 
      data-aos="fade-down"
      className="text-center py-10 text-2xl  text-[#00CEFF]">
        Microsoft CRM SpY D Technology
      </h1>
      <p 
      data-aos="fade-up"
      className=" text-[#141414] text-justify text-lg">
      provides Customer Relationship Management (CRM) solutions specially designed by our experts to 
      meet our clients' ever-demanding needs. We utilize our domain expertise to 
      implement SMBs and LMEs level solutions that meet all the business needs of our clients. 
      With our deep knowledge of CRM processes, 
      we are experts in building multichannel customer interactive systems and Microsoft CRM architecture
       that reduces the total cost involved in the actual development and enhances the overall services.
        </p>
    </div>
  );
}

export default ServiceMicrosoftSection;
