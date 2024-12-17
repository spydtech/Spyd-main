import React, { useState, useEffect  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      {
        title: 'Threat Detection and Prevention:',
        description: 'Our advanced threat detection systems employ cutting-edge technologies such as machine learning and behavioral analysis to identify and neutralize potential threats in real-time.',
        image: 'https://cdni.iconscout.com/illustration/premium/thumb/account-hacking-4621728-3831039.png',
      },
      {
        title: 'Endpoint Security:',
        description: 'With the proliferation of remote work and mobile devices, securing endpoints is more critical than ever. Our endpoint security solutions ensure that all devices connected to your network are protected against malware, ransomware, and other malicious threats.',
        image: 'https://www.cisco.com/c/en_uk/products/security/endpoint-security/index/jcr:content/Grid/category_atl_9fba/layout-category-atl/blade_2524/bladeContents/tile_a769/image.img.png/1513931636658.png',
      },
      {
        title: 'Data Encryption:',
        description: 'Protecting your sensitive data is paramount. Our encryption solutions ensure that your data remains secure, whether its in transit or at rest, minimizing the risk of unauthorized access or data breaches.',
        image: 'https://cdn-icons-png.flaticon.com/512/6344/6344480.png',
      },
    ],
    [
      {
        title: 'Network Security:',
        description: 'Our network security solutions are designed to protect your network infrastructure from unauthorized access, intrusions, and other cyber threats. From firewalls to intrusion detection systems, we implement robust measures to keep your network secure.',
        image: 'https://www.pngall.com/wp-content/uploads/4/Cyber-Security-Logo.png',
      },
      {
        title: 'Security Awareness Training: ',
        description: 'We believe that human error is one of the most significant cybersecurity risks. Thats why we offer comprehensive security awareness training programs to educate your employees about best practices for avoiding phishing scams, social engineering attacks, and other common threats.',
        image: 'https://www.pngall.com/wp-content/uploads/4/Digital-Cyber-Security-PNG-Picture.png',
      },

      {
        title: 'Security Awareness Training: ',
        description: 'We believe that human error is one of the most significant cybersecurity risks. Thats why we offer comprehensive security awareness training programs to educate your employees about best practices for avoiding phishing scams, social engineering attacks, and other common threats.',
        image: 'https://www.pngall.com/wp-content/uploads/4/Digital-Cyber-Security-PNG-Picture.png',
      },
      
    ],
    // Add more slides as needed
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Clear the interval when the component is unmounted
    };
  }, [currentSlide]);

  return (
    <>
     <div className="relative  p-10 md:p-20">
        <div className="rounded-lg overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row shadow-md w-3/2 p-5 h-full md:h-auto   gap-20 md:mx-4 rounded-lg ${
                index === currentSlide ? 'md:rounded-lg' : 'hidden'
              }`}
              
            >
              {slide.map((card, cardIndex) => (
                <div key={cardIndex} className='w-3/2 border-2 ml-10  hover:border-blue-500 rounded-lg overflow-hidden md:w-1/4 shadow-2xl'
                data-aos="fade-up-right">
                  <img src={card.image} alt={card.title} className="w-3/2 p-5 h-full md:h-auto object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-lg md:text-xl font-bold mb-2 text-white">{card.title}</h2>
                    <p className="text-white font-normal">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md z-50 focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md z-50 focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <style>
        {`
        
        `}
      </style>
    </>
  );
}

export default CarouselComponent;
