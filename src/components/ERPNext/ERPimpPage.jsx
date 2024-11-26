import React from "react";

// import Card from "./Card";

const ImplementationPage = () => {
  const cardData = [
    {
      title: "Process Mapping with ERPNext",
      description:
        "Our Implementation team starts business process mapping with ERPNext, and during this stage, if required, they consult involved stakeholders to reengineer the process to maximize the results with the ERPNext.",
        imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
        bgColor: "bg-[#FF6988]",
    },
    {
      title: "Reports and Intuitive Dashboards",
      description:
        "Once Implementation and Customization are done, we start building the required reports and intuitive dashboards to allow them to make business decisions data-oriented.",
        imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
        bgColor: "bg-[#0072FF]",
    },
    {
      title: "Configuration of ERPNext",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "We configure ERPNext, Company, and basic settings as per the company and its business goals.",
      bgColor: " bg-[#F569C2]",
    },
    {
      title: "Live Setup and Data Migration",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "Our Consultants will be there to support, guide, and assist stakeholders' decisions during the implementation stage and consult them if process change is required.",
      bgColor: "bg-[#00CEFF]",
    },
    {
      title: "Implementation of Process into ERPNext",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "Our Team starts implementing the derived business processes into the ERPNext module by module, ensuring alignment with business expectations.",
      bgColor: "bg-[#FFB800]",
    },
    {
      title: "Testing",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation.",
      bgColor: "bg-[#9747FF]",
    },
    {
      title: "Customization of ERPNext",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "Once the basic implementation is done, we start the customization of ERPNext to achieve the expected results.",
      bgColor: "bg-[#26AFC7]",
    },
    {
      title: "Go Live",
      imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
      description:
        "Our consultant ensures stakeholders are fully equipped with the necessary knowledge for a successful ERPNext go-live.",
      bgColor: "bg-[#D75495]",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center text-white h-96"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4265/8e8d/47ebc086f693c56a3a54196acdf3dbed?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Thf64ZYDSYO2RjuNR7P51om~MhmpNpE2vXaJ~9ub0QtFrC9cKRcmQ~fKqIgZKTXmlq8wqPrj4k8FUt3youFsroL8tBuPOA6ldMT5gVboT7xgwEDrjKY8PzDIlMlNVIKcgNIV9JCtKouKncWgqR2LByQsfU5RxEY3l4UUYvWJEguy9SHp4uw2X2xOIpOPo5Gv6pLwIde4nUlsfCinFKoEh6NBAvbTRu8GNhnLl5heMyUfJe2I5eei3xhlkTq~H~ssNHjqx5R8joFCs0c8aCJ6AtU4XgQsyiDnCa7tvyZEZGoVkMQxXZfIc1QgWg8XCM28AIOse-QvsJOmWoDpvL52vA__')`,
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ERPNext Implementation
          </h1>
          <p className="mt-4 text-base max-w-4xl sm:text-lg md:text-2xl lg:text-3xl">
            Enhance Enterprise Productivity with Our ERPNext Implementation
            Services by ensuring a seamless and efficient implementation
            process.
          </p>
        </div>
      </header>

      {/* Description Section */}
      <div className="text-center py-8 px-4">
        <h2 className="text-2xl md:text-4xl px-8 font-semibold text-[#0072FF]">
          Streamline Your Business Operations with Our ERPNext Implementation
          Services
        </h2>
        <p className="text-sm md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
          Our ERPNext team provides cutting-edge solutions to help your
          organization embrace best practices in ERP implementation, addressing
          your unique business challenges and maximizing productivity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2  lg:mx-28 lg:px-12 pb-12 px-2 py-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start  ${
                index % 2 === 0 ? " mt-1 md:mt-12" : " mb-1 md:mb-12"
              }    ${card.bgColor} rounded-lg shadow-lg min-h-80 p-2 max-w-xl mx-auto text-white`}
          >
            <div className="flex justify-start gap-2">
                <div className="">
              <img
                src={card.imgUrl}
                alt={`${card.title} Icon`}
                className="w-25 h-25  rounded-full border-8 m-4 border-white "
              />
            </div>
            <h3 className="text-center max-w-72 text-2xl font-semibold mt-10">
              {card.title}
            </h3>
            </div>
            <p className="text-center text-xl ">{card.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center">
    {/* Cloud Implementation Card */}
    <div className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src="https://s3-alpha-sig.figma.com/img/8c68/e058/1955e365e65bf2280961f0684d57052a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NIygmwex7DqKjcmYPfeGg1BGLh6~wuuYNDTRYTRHjdNGgwNUnXhQaCSuaourc7lTjLSHtQNnpn8AplIWs~vfKbPKg-2gHeggJFZgmso1S7LmS9BrzX8I3zMmamWKWY6JmXVd7ZiyXGd59pMNUjBXvaHiPI0qx~V9d6I-UYDuH7zTM8cqdn4IR3pdJLphyt4nqiweLS-2OQPxaMblqZcNuy2YBdqQyS-5wGEe-mgApW2qPX7t3oNjrBFHKBzVgadmxQWge~cf4OkvuOaFCRqQi5yZVyOQ9pXtcLp-dqIq820MrUVSZIkm5sHkuElTMoB5q3n2h~Gg32XgE11Q0y4aWA__"
        alt="Cloud Implementation"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#0072FF] text-xl mb-2">Cloud Implementation</div>
        <p className="text-[#0072FF] text-base">
          Seamlessly migrate your business operations to the cloud for improved scalability, security, and accessibility.
        </p>
      </div>
    </div>

    {/* ERP Implementation Card */}
    <div className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src="https://s3-alpha-sig.figma.com/img/a663/28e1/554ec276043cdfdd94bd7d47e15fc910?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzV1ZuIlS5xNyeyunkGREBYeu5EDVm9Mwt4ZgVMmWqquAvQUgp3xJARQzVrsLNKp-v0IEVmXcJ-2lbNMXMay381DiAy4w6r6DJGODguiwYfl4n0F5vt-8vBJ~fHHSo8VuV3~t3HU1gRT5ZR4StuiBQngEj6lAaWsoZvvPaFNSBTZnzhqA~o3-P70ztzvzJ0bFrjMcs-DHyDU3b1jNgdlXtz2Td87pBjihGyWKHlOdePJ2EMgD-aoCjj12QQS2SZH579BBUw8EJQPOkKyhEpRzMZHK7g0u5CWDGLdS9V113921PzOKJQZp3kd~Z9SP9QJy9zY4mUF~cT1PLPvqW0XrA__"
        alt="ERP Implementation"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#0072FF] text-xl mb-2">ERP Implementation</div>
        <p className="text-[#0072FF] text-base">
          Implement state-of-the-art Enterprise Resource Planning systems tailored to your business needs for improved efficiency.
        </p>
      </div>
    </div>

    {/* Software Integration Card */}
    <div className="max-w-sm text-center rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src="https://s3-alpha-sig.figma.com/img/df0a/c581/6f5e666c694a0068c4a106f6df7ea328?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVuwJM9EjQcqbn3qNwJFbR0zm28~wRRONljARmhPAXq7w2paxImZrTagYc8SZzBYhUp5cPoW8SkLsJiIgNeMgWl2j5yxBiFHGLGZmm0KQEHLjdrYwZPCTi9vuSjsC0luOD38lIsgLtRpZwBfDRosw-5KUrQHnLJ4gBmZpBoYC3p-kYadlKUoxauHn24aGLV6NmC7uW5dLdKC1Im6OHVLV9uOZdx4PEQKADVK4kHzGSfINLvcO7n6qrVwDABtbxchTEETbCFKz4nFEyldeCYL~RO7DRF7C7ZeqAIjXpv-eLxL7xChzApRb6MAVX2bh13YuBa60OKrjqG0GVVM~nXElQ__"
        alt="Software Integration"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#0072FF] text-xl mb-2">Software Integration</div>
        <p className="text-[#0072FF] text-base">
          Streamline your business processes by integrating various software solutions to work seamlessly together.
        </p>
      </div>
    </div>
    </div>
    </div>
    )
};

export default ImplementationPage;
