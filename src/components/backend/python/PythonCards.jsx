import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  { id: 1, icon: "🔗", title: "API Development" },
  { id: 2, icon: "📊", title: "Data Visualization" },
  { id: 3, icon: "🤖", title: "AI Integration" },
];

const PythonCards = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="py-10 flex justify-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
          data-aos="fade-right"
            key={card.id}
            className="flex w-[300px] h-[340px] flex-col items-center justify-center bg-blue-600 text-white rounded-lg shadow-md p-6"
          >
            <div className="text-6xl mb-4">{card.icon}</div>
            <h3 className="text-2xl ">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonCards;
