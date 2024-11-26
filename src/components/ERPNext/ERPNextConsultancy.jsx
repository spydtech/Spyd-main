import React from "react";
import CallToAction from "../CallToAction";
import Footer from "../Footer";


const ERPNextConsultancy = () => {
  const cardData = [
    {
      id: 1,
      title: "Business Analysis",
      description:
        "Our Consultants gather the business information by talking to stakeholders, visiting them, and analyzing the process they have been following. Business Analysis is a key stage because it gives a better perspective for the improvements.",
      imgUrl: "https://s3-alpha-sig.figma.com/img/a8b4/1909/0a56ecbddba82324a640cf7db41c7ddb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hqURQ0-M~ZXjUAkSh62bOxQM6UpezPw-3zRFHzqjOA-E93kRAPE7meNj-aHpk1cYvJwaLcX3I5L40J0-WRqrAOLuL4bLtJXTteB2VYeJzjdjqv7i-PPS9LYw5azBUbcj5~MEJNGUwhDwBc-ppz752txeZVkgMFcheTP0cXvdgKz4T-l1b0pDojKK-z5Y8UgvqdUFDE7GqzNo2HycVJPAiQ5vetQElE9fQ8V5LeTGeSTkCvi~zsILFAnmy5lIdkyLrUZ7FR5pL6Aen~L~Qr5NnqgahdEBCS7JWvo2wzMI8LDT6N6JKBUhlxjGfHVcc~SQJJ6O2CsWT6Fwh3lsQS3CoQ__", // Replace with actual image URL
      bgColor: "bg-[#0072FF]",
    },
    {
      id: 2,
      title: "Implementation Road Map with ERPNext",
      description:
        "After the approval of stakeholders, Our Consultants will prepare and submit the Implementation roadmap to stakeholders.",
      imgUrl: "https://s3-alpha-sig.figma.com/img/aae2/030c/2ef623a8500896a592fd122b8561243d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPWtjLN0EeVqz8xt45QqpaIbErp~yM~1iq7pBg26UbeCNu-ODNW0mX6Jg5dg1PPDcGfgS5-LC3opPHUbwcyOtx6lS4R4iMfR8ai8so-gHYCgnCtOznF7kuqQdeOl-LE4p3B2ODuhVuQmggFdFukZ7Ybe0ht3VNWhD5qzEKtRWq8nPGg1aTndBV~9GquNxq~5kTPR5DYimXA~tBO0EhVxbtSiXSZMNj39xbbjRafNsDxY1~F9Rc6Z2VH~fQSTZYvsi3BPOgdXyz3uXF02KKz9Bwi216RniOKrjuTHKIDZhUrW1R5oFZDRINgukMvIpXWUOisoH9L36eLIgzN2TPr3xw__", // Replace with actual image URL
      bgColor: "bg-[#FF6F47]",
    },
    {
        id: 3,
        title: "Define Problem",
        description:
          "This culminates into brainstorming the conceptualized plan further to enhance the features. It’s time to document the entire process, formulating the roadmap implementation plan.",
        imgUrl: "https://s3-alpha-sig.figma.com/img/a5b0/1861/3d5872e3452ce392a766104b85f12fac?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBcNWDAjoeWx4hgA8rK89KmL2FlaSDg3EFnEp9-JrafzYP37U-qPT37FUCWpqM~J-1uew8QZd7fopPUCdw9RYIAeA6C6XBmdWGnNs4jh1gfm0mq9-4eyQxyLKvtkaTSnT-ujDna1jn4dnu-EGGzyDFRglto3scKxoxdFTqhcAXy8kuyJKwIW2FJHlUx5468Dg55XirLtyDalOAsF5jlanQd0dqsLbLLS9bvHfXP8Dg1UYRN9XeVNzNadjAL8WORf15JWUNhlCiemgSZ4q-Zr2ScR9G-AinQybzjmwaxWlI3FWJVJ8QeUSDn6cWuQEr89rjiQEKkJ3dx86oxwBnkExw__", // Replace with actual image URL
        bgColor: "bg-[#64C7FF]",
      },
    {
      id: 4,
      title: "Support during implementation",
      description:
        "Our Consultants will be there to support, help, guide, and assist stakeholders' intake decisions during the implementation stage and also consult them if process change is required.",
      imgUrl: "https://s3-alpha-sig.figma.com/img/c09e/8332/670cda9ca3aafb818055687199f3c968?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSNimX9uUwZADKSIqZW0kulNCFTTJmjUxWAAaoerkommL3MAsKAzLhxK2tXN9ZDug35l5vk3ZaPtP5Q5cJMmSIQem2su5gfE6JkoodGYsr35zVAPynGm-s9D1eZdVG~5ckn25NOF-dzkxRm3PYNPMYv3yNrHo3MXVtJarbwDdFSjzb1DtdWlMIZ4VS7FRiMHUciog4OGvK9~jn4A4heP6Y-EOYjfjYg7O8ULt2sGWDGS5-ZD3LN7tHw~MxtN412OefXm57BvpbGw1PQaL5Dg4hEcqoBEfNVnbPstY2eNgoRmV96fD30ThWNvY3-WHTRBrlp4wYrA-ngIoTnOJGGAmQ__", // Replace with actual image URL
      bgColor: "bg-[#B176FF]",
    },
    
    {
      id: 5,
      title: "Eradicate Problems with ERPNext",
      description:
        "Our Consultants demonstrate how stakeholders can eradicate problems with the help of ERPNext. Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.",
      imgUrl: "https://s3-alpha-sig.figma.com/img/98f1/18e1/09b581881e05d2ac182fd7467235f072?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9TaD6KK6y16osA-bxavZME-HC1o26vwvbkE3E5I2-d0FltflHFReNhMj1g8e2WO6dbHfAUsoMcm4QyohRzPJcWExE3LBAqEeIRnqkJ9mPr4e65FMylx8MVm9wNqrWNwRxSKKdgkL02LtAeSI2YyuE8ZrKgCMrZOlEIgxkXlHHQS2RXfBe2Zt24mvqzDDqAGPRPSG7LaFClcI5CkiVSLImSL7SQx8goA14rKC7Ak1ChMxg-vXbPERYcT6LMavEh4Db0PHN~jYabwdvHfh5cQ9EQw3ZxAIVswNRYKU2XQfOpd6vJQnpuwfkoQHMH4vimN1R7ziZSZl-DqzjRjcjesWw__", // Replace with actual image URL
      bgColor: "bg-[#FFB800]",
    },
    {
      id: 6,
      title: "User training",
      description:
        "Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.",
      imgUrl: "https://s3-alpha-sig.figma.com/img/f3e4/a2f6/2aee3de37ee5aeeae36260e60eb94575?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BiggaN0z9EXPKN3B4hk7fQ~l4vfWW~pwXYMRYJxEvxFKQxiJKlrgAjMoH3QL5Q91GbRFWbAnIN6F1YwFD-zwFMRsq~yeTbUv9PxYH12HXPHOWsjoe~6201Jj9P4My35fAtNYZPxJBOXmGMdANkBxKm8OE51VpnSDolh7IN7fdGJd5lp64jqHiH9EdwslkniIjyy0MMAav943tjz1lYfOsHWc-F3l1LfQ8Jp6n6xL5oUsquBdf2UHsf9BKiNHfzeSeKZqxUOCnyV7eNJ1RxPQwHNOxXWyz-bwuAziXWqZ9CtdipjmMWzNGBhR3i7GMHsiFNQz1Ld1Cy3O6oFtbq5F2w__", // Replace with actual image URL
      bgColor: "bg-[#FC5C7D]",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center text-white md:h-96 h-44"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/148c/8fdd/602740c348f078ff27f6329fcf9feafd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGA6HnS0tMkPJtEQ0R1YCmTKFQ3Es8kIaBGwhtM8vpyjDdDPH5yLGXygPkUAIuxE1OpeSvc3F4Im-4hjlDBr8wyN5ojhVHZtiZTaRe4K3vzuveowB9Ldf5KXLtl0g8G6JHAtNDtC66j6JDFDna9lxqhyNkZ2R~P4BS2w3DdkFuPfODm-WK6CqjvUi68GZKy3a8nLOdUpGA~YjB-HebtiVTDZzGin2zthE57NTHPW0RIuwyGbMAPYdqzzgNJHi6keDBRZgMKcdcXwBBDfNLgNYtig68qgPcSgv00m0SvpUIntzk9aQVIcTrVm-1M8LEsB3lI7WreVNrDMT1sJj-wBkQ__')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-xl  md:text-5xl ">
            ERPNext Consultancy
          </h1>
          <p className="mt-4  max-w-4xl text-sm md:text-2xl lg:text-3xl">
            Building Cost-Effective Digital Business Capabilities around
            ERPNext, focusing on the right balance of Digitization, Flexibility,
            and Process Mapping.
          </p>
        </div>
      </header>

      {/* Description Section */}
      <div className="text-center py-8 px-4">
        <h2 className="text-2xl md:text-4xl px-8 font-semibold text-[#0072FF]">
          Conceptualize, Design, and Deliver Exceptional Execution with Our
          ERPNext Consultancy
        </h2>
        <p className="text-sm md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
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
                className="w-20 h-20 rounded-full border-4 m-4 border-white "
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
