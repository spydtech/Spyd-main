import React from "react";

const services = [
  "PHP Support & Maintenance Services",
  "PHP Support & Maintenance Services",
  "PHP Support & Maintenance Services",
  "PHP Support & Maintenance Services",
  "PHP Support & Maintenance Services",
  "PHP Support & Maintenance Services",
];

const PhpServices = () => {
  return (
    <section className="bg-blue-500 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl  text-white">
          The following are some of the PHP-based projects development
        </h2>
        <p className="text-white text-xl mt-2">support we offer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex items-end h-[350px] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="">
                <p className="text-[#0866e2]  text-xl font-medium text-center">
                  {service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhpServices;
