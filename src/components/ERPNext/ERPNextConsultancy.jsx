import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "./../../assets/ERPNext/ERP11.png";
import con1 from "./../../assets/ERPNext/con1.png"
import con2 from "./../../assets/ERPNext/con2.png"
import con3 from "./../../assets/ERPNext/con3.png"
import con4 from "./../../assets/ERPNext/con4.png"
import con5 from "./../../assets/ERPNext/con5.png"
import con6 from "./../../assets/ERPNext/con6.png"
import CallToAction from "../CallToAction";
import Footer from "../Footer";
const ERPNextConsultancy = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      id: 1,
      title: "Business Analysis",
      description:
        "Our Consultants gather the business information by talking to stakeholders, visiting them, and analyzing the process they have been following. Business Analysis is a key stage because it gives a better perspective for the improvements.",
      imgUrl: con1, // Replace with actual image URL
      bgColor: "bg-[#0072FF]",
    },
    {
      id: 2,
      title: "Implementation Road Map with ERPNext",
      description:
        "After the approval of stakeholders, Our Consultants will prepare and submit the Implementation roadmap to stakeholders.",
      imgUrl: con2, // Replace with actual image URL
      bgColor: "bg-[#FF6F47]",
    },
    {
        id: 3,
        title: "Define Problem",
        description:
          "This culminates into brainstorming the conceptualized plan further to enhance the features. It’s time to document the entire process, formulating the roadmap implementation plan.",
        imgUrl: con3, // Replace with actual image URL
        bgColor: "bg-[#64C7FF]",
      },
    {
      id: 4,
      title: "Support during implementation",
      description:
        "Our Consultants will be there to support, help, guide, and assist stakeholders' intake decisions during the implementation stage and also consult them if process change is required.",
      imgUrl: con4, // Replace with actual image URL
      bgColor: "bg-[#B176FF]",
    },
    
    {
      id: 5,
      title: "Eradicate Problems with ERPNext",
      description:
        "Our Consultants demonstrate how stakeholders can eradicate problems with the help of ERPNext. Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.",
      imgUrl: con5, // Replace with actual image URL
      bgColor: "bg-[#FFB800]",
    },
    {
      id: 6,
      title: "User training",
      description:
        "Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.",
      imgUrl:con6, // Replace with actual image URL
      bgColor: "bg-[#FC5C7D]",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <header
      data-aos="fade-zoom-in"
        className="relative bg-cover bg-center text-white h-44 md:h-96"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 
          data-aos="fade-up"
          className="text-xl sm:text-2xl md:text-4xl ">
            ERPNext Consultancy
          </h1>
          <p 
           data-aos="fade-up"
          className="mt-4  max-w-4xl  text-sm sm:text-base md:text-lg lg:text-xl">
            Building Cost-Effective Digital Business Capabilities around
            ERPNext, focusing on the right balance of Digitization, Flexibility,
            and Process Mapping.
          </p>
        </div>
      </header>

      {/* Description Section */}
      <div className="text-center py-8 px-4">
        <h2 
         data-aos="fade-down"
        className="text-2xl md:text-4xl px-8  text-[#0072FF]">
          Conceptualize, Design, and Deliver Exceptional Execution with Our
          ERPNext Consultancy
        </h2>
        <p 
         data-aos="fade-right"
        className=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 max-w-4xl mx-auto">
          Our ERPNext team provides state-of-the-art, standards & best
          practices, for Consultation, Implementation, and development, and,
          those are aimed at addressing all our client's business challenges and
          business goals.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2 lg:mx-28 lg:px-12 pb-12 px-2 py-4">
        {cardData.map((card, index) => (
          <div
           data-aos="fade-up"
            key={index}
            className={`flex flex-col justify-start items-start  ${
                index % 2 === 0 ? " mt-1 md:mt-12" : " mb-1 md:mb-12"
              }    ${card.bgColor} rounded-lg shadow-lg min-h-72 p-2 max-w-xl mx-auto text-white`}
          >
            <div className="flex justify-start gap-2">
                <div className="">
              <img
                src={card.imgUrl}
                alt={`${card.title} Icon`}
                className="lg:w-25 lg:h-25 sm:w-20 sm:h-20 w-14 h-14 rounded-full border-4 m-4 border-white "
              />
            </div>
            <h3 className="text-center max-w-72 text-xl md:text-2xl mt-4 sm:mt-6 lg:mt-10">
              {card.title}
            </h3>
            </div>
            <p className="text-center  text-sm sm:text-base md:text-lg lg:text-xl ">{card.description}</p>
          </div>
        ))}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ERPNextConsultancy;





// import React from "react";
// import heroImg from "./../../assets/ERPNext/ERPCON.png";

// const ERPNextConsultancy = () => {
//   const cardData = [
//     {
//       id: 1,
//       title: "Business Analysis",
//       description:
//         "Our Consultants gather the business information by talking to stakeholders, visiting them, and analyzing the process they have been following. Business Analysis is a key stage because it gives a better perspective for the improvements.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-blue-500",
//     },
//     {
//       id: 2,
//       title: "Implementation Road Map with ERPNext",
//       description:
//         "After the approval of stakeholders, Our Consultants will prepare and submit the Implementation roadmap to stakeholders.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-orange-400",
//     },
//     {
//       id: 3,
//       title: "Support during implementation",
//       description:
//         "Our Consultants will be there to support, help, guide, and assist stakeholders' intake decisions during the implementation stage and also consult them if process change is required.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-purple-400",
//     },
//     {
//       id: 4,
//       title: "Define Problem",
//       description:
//         "This culminates into brainstorming the conceptualized plan further to enhance the features. It’s time to document the entire process, formulating the roadmap implementation plan.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-sky-400",
//     },
//     {
//       id: 5,
//       title: "Eradicate Problems with ERPNext",
//       description:
//         "Our Consultants demonstrate how stakeholders can eradicate problems with the help of ERPNext. Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-yellow-400",
//     },
//     {
//       id: 6,
//       title: "User training",
//       description:
//         "Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.",
//       imgUrl: "https://via.placeholder.com/80", // Replace with actual image URL
//       bgColor: "bg-red-400",
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* Header Section */}
//       <header
//         className="relative bg-cover bg-center text-white h-96"
//         style={{
//           backgroundImage: `url(${heroImg})`,
//         }}
//       >
//         <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//             ERPNext Consultancy
//           </h1>
//           <p className="mt-4 text-base max-w-4xl sm:text-lg md:text-2xl lg:text-3xl">
//             Building Cost-Effective Digital Business Capabilities around
//             ERPNext, focusing on the right balance of Digitization, Flexibility,
//             and Process Mapping.
//           </p>
//         </div>
//       </header>

//       {/* Description Section */}
//       <div className="text-center py-8 px-4">
//         <h2 className="text-2xl md:text-4xl px-8 font-semibold text-blue-600">
//           Conceptualize, Design, and Deliver Exceptional Execution with Our
//           ERPNext Consultancy
//         </h2>
//         <p className="text-sm md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
//           Our ERPNext team provides state-of-the-art, standards & best
//           practices, for Consultation, Implementation, and development, and,
//           those are aimed at addressing all our client's business challenges and
//           business goals.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-12 pb-12 px-2">
//         {cardData.map((card) => (
//           <div
//             key={card.id}
//             className={`grid  justify-center items-center ${card.bgColor} rounded-lg shadow-lg p-6 max-w-xl mx-auto text-white`}
//           >
//             <div className="flex justify-start gap-4">
//                 <div className="">
//               <img
//                 src={card.imgUrl}
//                 alt={`${card.title} Icon`}
//                 className="w-16 h-16  rounded-full border-4 border-white "
//               />
//             </div>
//             <h3 className="text-center text-2xl font-semibold mt-4">
//               {card.title}
//             </h3>
//             </div>
//             <p className="text-center text-xl mt-2">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ERPNextConsultancy;
