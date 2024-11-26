// import React from "react";
// import cmimage from "../../../assets/backend/php/php.png";
// function PhpImage() {
//   return (
//     <>
//       <div className="">
//         <img
//           className="object-cover w-full  h-44 lg:h-96"
//           src={cmimage}
//           alt="digitalMarket"
//         />
//       </div>
//     </>
//   );
// }

// export default PhpImage;
import React from "react";
import cmimage from "../../../assets/backend/php/php.png";

const PhpImage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-44 lg:h-96"
        style={{ backgroundImage: `url(${cmimage})` }}
      ></div>
    </>
  );
};

export default PhpImage;
