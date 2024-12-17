import React,{useEffect} from 'react';
import headerImage from '../../assets/portfolio/headerImage.png'; // Ensure this path is correct
import CallToAction from '../CallToAction';
import Footer from '../Footer';

const PortfolioPage = () => {
  const portfolioData = [
    { id: 1, title: 'WEB DESIGN', image: 'https://img.freepik.com/free-vector/colorful-web-design-concept-with-flat-design_23-2147954999.jpg?ga=GA1.1.1910465638.1732617006&semt=ais_hybrid' },
    { id: 2, title: 'WEB DESIGN', image: 'https://img.freepik.com/free-vector/flat-design-data-driven-illustration_23-2149478850.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 3, title: 'WEB DESIGN', image: 'https://img.freepik.com/free-vector/abstract-creative-homepage-illustration_23-2149236243.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 4, title: 'MOBILE APPLICATION', image: 'https://img.freepik.com/free-vector/appointment-booking-design_23-2148557730.jpg?ga=GA1.1.1910465638.1732617006&semt=ais_hybrid' },
    { id: 5, title: 'MOBILE APPLICATION', image: 'https://img.freepik.com/premium-vector/isometric-social-media-notification-background-with-people-using-big-smartphone_98292-14142.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 6, title: 'MOBILE APPLICATION', image: 'https://img.freepik.com/free-vector/smartphone-with-icons_23-2147497533.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 7, title: 'WEB APPLICATION', image: 'https://img.freepik.com/free-vector/men-with-office-document-computer-website-strategy_24877-53529.jpg?ga=GA1.1.1910465638.1732617006&semt=ais_hybrid' },
    { id: 8, title: 'WEB APPLICATION', image: 'https://img.freepik.com/free-vector/app-development-mobile-template_23-2148681251.jpg' },
    { id: 9, title: 'WEB APPLICATION', image: 'https://img.freepik.com/free-vector/gradient-homepage-illustration_23-2149266856.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 10, title: 'DESKTOP APPLICATION', image: 'https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-style_23-2147935270.jpg?ga=GA1.1.1910465638.1732617006&semt=ais_hybrid' },
    { id: 11, title: 'DESKTOP APPLICATION', image: 'https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-style_23-2147936418.jpg?ga=GA1.1.1910465638.1732617006' },
    { id: 12, title: 'DESKTOP APPLICATION', image: 'https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-style_23-2147935271.jpg?ga=GA1.1.1910465638.1732617006' },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Header Image */}
      <div>
        <img
          src={headerImage}
          alt="Header"
          className="w-full h-[150px] sm:h-[300px] lg:h-[400px] object-cover mx-auto mb-4"
        />
      </div>
      
      <h1 className="text-xl sm:text-3xl text-center py-10 md:text-2xl font-bold mb-4 text-blue-700">
        PORTFOLIO
      </h1>

      {/* Portfolio Cards */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {portfolioData.map((category) => (
            <div
              key={category.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />

              {/* Overlay Text */}
              <div className="relative inset-x-0 bottom-0  py-6  bg-white  text-center">
                <h2 className="text-lg font-semibold text-gray-800">{category.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
