import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../../../assets/images/download4.jpg";
import image2 from "../../../assets/images/cloud.jpg";
import image3 from "../../../assets/images/staff.jpg";
import image4 from "../../../assets/images/images.jpg";
import image5 from "../../../assets/images/download.jpg";
import image6 from "../../../assets/images/download1.jpg";
import image7 from "../../../assets/images/download2.jpg";
import image8 from "../../../assets/images/download3.jpg";

const Third = forwardRef(({ startIndex, onSlideChange }, ref) => {
  const slides = [
    { img: image1, title: "IT Product Development", desc: "We specialize in creating innovative IT products tailored to meet market demands, leveraging cutting-edge technologies and methodologies to ensure high-quality deliverables" },
    { img: image2, title: "DevOps and Cloud Solutions", desc: "Our DevOps strategies and cloud solutions enhance operational efficiency and promote seamless integration and deployment across various platforms, ensuring business agility." },
    { img: image3, title: "HRMS and Staffing Solutions", desc: "We provide comprehensive HR Management Systems and staffing solutions that streamline recruitment processes and improve employee management, fostering a productive workplace." },
    { img: image4, title: "E-Education Platforms", desc: "Our expertise in e-education platforms enables institutions to deliver engaging and effective online learning experiences, utilizing interactive tools and resources." },
    { img: image5, title: "Vehicle Tracking and Fleet Management Systems", desc: "We offer advanced vehicle tracking and fleet management systems that optimize logistics operations, enhance route planning, and ensure real-time monitoring of assets." },
    { img: image6, title: "Healthcare and Insurance Solutions", desc: "Our solutions for healthcare and insurance sectors improve patient care and streamline claims processes, ensuring compliance and efficiency in operations." },
    { img: image7, title: "Banking and Financial Services", desc: "We deliver tailored solutions for banking and financial services that enhance customer engagement, security, and operational efficiency.driving business growth." },
    { img: image8, title: "International Voice Support Services", desc: "Our international voice support services provide comprehensive customer service solutions, enabling businesses to connect with clients worldwide seamlessly." },
  ];

  const animationDuration = 700;
  const baseWidth = 650;
  const baseHeight = 500;
  const offsetX = 60;
  const scaleStep = 0.1;

  const [zoomedOut, setZoomedOut] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [startIndex]);

  useImperativeHandle(ref, () => ({
    getCurrentIndex: () => startIndex,
  }));

  const goNextSlide = () => {
    if (zoomedOut) return;
    if (startIndex < slides.length - 1) {
      setZoomedOut(true);
      setTimeout(() => {
        onSlideChange(startIndex + 1);
        setZoomedOut(false);
      }, animationDuration);
    }
  };

  const goPrevSlide = () => {
    if (zoomedOut) return;
    if (startIndex > 0) {
      setZoomedOut(true);
      setTimeout(() => {
        onSlideChange(startIndex - 1);
        setZoomedOut(false);
      }, animationDuration);
    }
  };

  const visibleCount = zoomedOut ? 4 : 3;
  const visibleSlides = slides.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 md:mx-20 rounded-md overflow-auto">
        <div
          onClick={goNextSlide}
          className="flex w-full flex-col-reverse md:flex-row mt-14 md:mt-24 font-ubuntu items-center justify-center bg-gray-100 px-4 md:px-8 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goNextSlide();
          }}
          aria-label="Next Slide"
        >
          {/* Description Section */}
          <div
            key={startIndex}
            data-aos="fade-in"
            className="w-full md:w-1/3 flex flex-col justify-center items-start px-4 md:px-0 mt-4 md:mt-0"
          >
            <span
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-blue-600 text-white flex justify-center items-center mb-2 text-sm w-6 h-6 rounded-full">
              {startIndex + 1}
            </span>
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-2xl md:text-5xl font-bold mb-4">
              {visibleSlides[0]?.title}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-sm md:text-base text-gray-700 font-light">
              {visibleSlides[0]?.desc}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/3 relative h-[clamp(160px,60vw,500px)] flex items-center justify-center overflow-visible">
            {visibleSlides.map((slide, i) => {
              const key = startIndex + i;
              let opacity = 1;
              let transform = "";
              let zIndex = 10 - i;

              if (zoomedOut) {
                if (i === 0) {
                  opacity = 0;
                  transform = `scale(1.3) translateX(-${offsetX}px)`;
                  zIndex = 10;
                } else if (i === 1) {
                  opacity = 1;
                  transform = `translateX(0) scale(1)`;
                  zIndex = 9;
                } else if (i === 2) {
                  opacity = 0.9;
                  transform = `translateX(${offsetX}px) scale(${1 - scaleStep})`;
                  zIndex = 8;
                } else if (i === 3) {
                  opacity = 0.7;
                  transform = `translateX(${offsetX * 2}px) scale(${1 - scaleStep * 2})`;
                  zIndex = 7;
                }
              } else {
                opacity = i === 2 ? 0.9 : 1;
                transform = `translateX(${i * offsetX}px) scale(${1 - i * scaleStep})`;
                zIndex = 10 - i;
              }

              return (
                <img
                  key={key}
                  src={slide.img}
                  alt={slide.title}
                  title={slide.title}
                  className="absolute rounded-lg shadow-lg border-[3.5px] border-black object-cover"
                  style={{
                    width: `clamp(250px, 90vw, ${baseWidth}px)`,
                    height: `clamp(160px, 60vw, ${baseHeight}px)`,
                    opacity,
                    transform,
                    zIndex,
                    boxShadow: "none",
                    transition: `opacity ${animationDuration}ms ease-in-out, transform ${animationDuration}ms ease-out`,
                    willChange: "opacity, transform",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-64 md:bottom-10 z-10 w-full flex justify-center mt-4">
          <div className="flex items-center space-x-2 bg-[#3b3939] bg-opacity-50 rounded-full px-5 py-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  if (idx !== startIndex && !zoomedOut) {
                    onSlideChange(idx);
                  }
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full  border-2 transition-colors duration-300 ease-in-out ${idx === startIndex
                  ? "h-1 w-3 bg-white border-white"
                  : "w-1 h-1 bg-transparent border-[#b8afaf] hover:border-[#b8afaf]"
                  }`}
                style={{ cursor: zoomedOut ? "not-allowed" : "pointer" }}
                disabled={zoomedOut}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Third;
