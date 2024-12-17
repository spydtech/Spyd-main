import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "./../../../assets/microsoft/image1.png";  
import image2 from "./../../../assets/microsoft/image2.png";
import image3 from "./../../../assets/microsoft/image3.png";
import image4 from "./../../../assets/microsoft/image4.png";
import image5 from "./../../../assets/microsoft/image5.png";
import image6 from "./../../../assets/microsoft/image6.png";
import image7 from "./../../../assets/microsoft/image7.png";
import image8 from "./../../../assets/Crm/image8.png";

function ServicesCards() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);

  const services = [
    {
      image: image1,
      title: "Microsoft Azure Integration and Migration",
      description:
        "Harness the power of the cloud with Microsoft Azure. Our experts specialize in seamless integration and migration, enabling you to scale your infrastructure.",
    },
    
    {
      image: image2,
      title: "Microsoft Dynamics 365 CRM and ERP Solutions",
      description:
        "Transform customer relationships and streamline business processes with Microsoft Dynamics 365. Our tailored CRM and ERP solutions empower you to deliver exceptional customer experiences.",
    },
    {
      image: image3,
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: image4,
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: image5,
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: image6,
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
    {
      image: image7,
      title: "Custom Development and Integration Services",
      description:
        "Tailor Microsoft solutions to your unique needs with Spyd's custom development and integration services. Our experienced developers build bespoke solutions.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
     
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className="bg-[#00CEFF] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl  font-serif text-white">{service.title}</h3>
              <p className="mt-2 font-serif text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;
