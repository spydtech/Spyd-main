import React from "react";

const cardData = [
  { id: 1, icon: "⚙️", title: "Development Skills" },
  { id: 2, icon: "📄", title: "Development Skills" },
  { id: 3, icon: "🖥️", title: "Development Skills" },
];

const PythonCards = () => {
  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
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
