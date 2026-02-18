import { useEffect, useRef, useState } from "react";

export default function Second() {
  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const listData = [
    {
      num: "1",
      color: "#4287f5",
      title: "Company Name",
      text: "SPY D TECHNOLOGY PVT LTD is the name of our innovative organization, reflecting our commitment to excellence in the IT sector."
    },
    {
      num: "2",
      color: "#34a853",
      title: "About Us",
      text: "We are a leading IT solutions and services provider, offering a diverse range of technology-driven products and staffing solutions tailored to meet the needs of our clients."
    },
    {
      num: "3",
      color: "#fabd05",
      title: "Founded",
      text: "Established in May 2023, SPY D TECHNOLOGY PVT LTD is a young yet rapidly growing company dedicated to innovative and effective IT solutions."
    },
    {
      num: "4",
      color: "#eb4536",
      title: "Specializations",
      text: "Our expertise spans software development, IT consulting, cloud computing, DevOps automation, and digital transformation, ensuring comprehensive service offerings."
    },
    {
      num: "5",
      color: "#0c53c4",
      title: "Commitment to Innovation",
      text: "We are committed to fostering innovation and excellence in all our projects, continuously seeking new ways to provide value to our clients."
    },
    {
      num: "6",
      color: "#1c592c",
      title: "Clientele",
      text: "Catering to both domestic and international clients, we strive to deliver customized solutions that drive business success across various industries."
    }
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center relative px-3 sm:px-6 md:px-8">
      {/* White Overlay */}
      <div className="absolute inset-0 mt-5 md:mt-0 md:mx-20 p-3 sm:p-5 md:p-5 rounded-md shadow-lg overflow-auto font-ubuntu">
        
        {/* Header */}
        <div className="flex flex-col mt-8 items-center mb-5 sm:mb-8 text-center">
          <p className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-snug transition-all duration-700 opacity-100 translate-y-0">
            Company Profile Overview
          </p>
          <p className="font-light mt-2 text-gray-500 text-xs sm:text-sm md:text-base">
            An Insight into Our Operations and Values
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col mx-3 sm:mx-5 gap-4 sm:gap-6">
          {listData.map(({ num, color, title, text }, idx) => (
            <div
              key={num}
              ref={(el) => (itemsRef.current[idx] = el)}
              data-index={idx}
              className={`flex gap-3 sm:gap-4 items-start transition-all duration-700 ease-out
                ${visible.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <span
                className="text-white rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm"
                style={{
                  backgroundColor: color,
                  width: "1.5rem",
                  height: "1.5rem",
                  minWidth: "1.5rem",
                  minHeight: "1.5rem"
                }}
              >
                {num}
              </span>
              <div>
                <p className="font-semibold mb-1 text-sm sm:text-base">{title}</p>
                <p className="text-xs sm:text-sm text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
