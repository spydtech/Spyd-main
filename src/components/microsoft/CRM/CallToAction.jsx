import React from 'react';

function CallToAction() {
  return (
    <div className="bg-gray-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">
          Let’s Ignite Conversations in the World of Innovative Technology!
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          Join us in a dialogue that transcends boundaries. At the heart of our passion lies innovation, where ideas meet execution, crafting a seamless and beautiful experience. Your thoughts matter—let's explore the future of technology together. Reach out via call or email, and let the conversation begin.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300"
          aria-label="Read more about our innovations"
        >
          Read More
        </button>
      </div>
      <p className="text-center text-sm sm:text-base text-blue-500 mt-8 px-4 sm:px-6 leading-relaxed">
        We make an impact, and we live by it in everything we do. Every project, interaction, and work we engage in must function seamlessly. We are obsessed with perfection.
      </p>
    </div>
  );
}

export default CallToAction;
