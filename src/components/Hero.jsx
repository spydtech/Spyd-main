// components/Hero.js
const Hero = () => {
    return (
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">ENTERPRISE & CUSTOM APPLICATION DEVELOPMENT</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          ERPNext: SPY D TECHNOLOGY deep experience, expertise, and exposure in designing and developing enterprise and custom web applications catering to a myriad of industries.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800">EXPLORE</button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white">CONTACT US</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  