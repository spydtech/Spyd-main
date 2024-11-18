import React from 'react';

function Methodology() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Background grid lines */}
      <div className="grid-lines"></div>

      {/* Banner */}
      <div className="text-center max-w-4xl z-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
          We are a one-stop, full-service, and turnkey solutions provider for
          Web, Mobility and Digital Marketing Services.
        </h1>
      </div>

      {/* Image Section */}
      <div className="my-8 flex justify-center z-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/9ae2/53b2/7d9d582521ef6d7bf13b673ea6125fed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ysj93AgKQ-ATBEuSP7ZoRfAJOk~D7fPLgAyvBxkzZKRjgNweSIj8WW5kdm9x0eKdZXx6Rv08ppg5BZOr4FV9jIONDTDakk9J745y03gCmaPfEoGCvjJkTMxGHnPjGNB7kFaaEVUsfpCvPSvdBSgRB8LPBiOOAIPRkyBdLQhouEP0AJZKVb2~Jgg5S43MWPdlaTDDUoXUF6cJVL67x9xEF8yPe4UMoyLCusax78NENO44t1PpzxMqzoluN39BDvUrrnNo19fo3Rhe1NNgUNHHqAQaoa6a3-qgjSrdBVY8J2SigL8479NWJjlg2PwtaU4XDvzTdDJOa7bJDVQefQ0ehA__"
          alt="Responsive Web Design"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Methodology Section */}
      <div className="text-center max-w-3xl mt-8 z-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Our Methodology for Website Design
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Crafting a website that aligns with your distinct business objectives. Explore our meticulous design process,
          meticulously designed to deliver tailor-made and goal-centric digital solutions.
        </p>
        
      </div>

      {/* Inline CSS for diamond grid background */}
      <style jsx>{`
        .grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, #c4c4c4 1px, transparent 1px),
            linear-gradient(-45deg, #c4c4c4 1px, transparent 1px);
          background-size: 40px 40px; /* Size of the diamond grid */
          opacity: 0.5; /* Transparency of the lines */
          pointer-events: none; /* Allows clicks to pass through */
          z-index: 0; /* Keeps lines behind the content */
        }
      `}</style>
    </div>
  );
}

export default Methodology;
