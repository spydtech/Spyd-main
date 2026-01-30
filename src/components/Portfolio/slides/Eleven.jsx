import React, { useState, useRef, useEffect } from "react";
import image1 from "../../../assets/images/target.jpg";
import image2 from "../../../assets/images/education.png";
import image3 from "../../../assets/images/hrms.png";
import image4 from "../../../assets/images/livyco.png";
import image5 from "../../../assets/images/arrow.jpg";
import image6 from "../../../assets/images/b2b.jpg";
import image7 from "../../../assets/images/blockchain.jpg";
import image8 from "../../../assets/images/next.jpg";
import image9 from "../../../assets/images/Betahealth.png"
export default function Eleven({ startIndex = 0, onSlideChange }) {
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef([]);
  const containerRef = useRef(null);

  // Add icons to each step
  const steps = [
    {
      id: 1,
      title: "Upcoming Innovations & Projects",
      description:
        "We are committed to implementing cutting-edge technologies such as Artificial Intelligence (AI) and Machine Learning (ML) into voice-supported systems to enhance user experience and operational efficiency.",
      icon: image1, // Example icon
    },
    {
      id: 2,
      title: "Expanding E-Learning & EdTech Solutions",
      description:
        "Our focus includes broadening our e-learning and educational technology offerings to facilitate remote access anywhere, meeting the needs of diverse learners.",
      icon: image2,
    },
    {
      id: 3,
      title: "Growing LIVYCO & Other App-Based Services",
      description:
        "The growth of LIVYCO and similar app-based services is a priority, ensuring that we cater to the evolving demands of consumers in mobile technology.",
      icon: image4,
    },
    {
      id: 4,
      title: "Building More HRMS & Enterprise Solutions",
      description:
        "We aim to develop more Human Resource Management Systems (HRMS) and enterprise solutions that streamline HR processes and improve organizational productivity.",
      icon: image3,
    },
    {
      id: 5,
      title: "Betahealth: Redefining Digital Healthcare",
      description:
        "Betahealth delivers innovative healthcare solutions that make access to medical services faster, smarter, and more secure for patients and providers alike.",
      icon: image9,
    },
    
    {
      id: 6,
      title: "Market Expansion Strategy",
      description:
        "We have devised a comprehensive market expansion strategy to penetrate new geographies, focusing initially on the USA and Europe to tap into larger markets.",
      icon: image5,
    },
    {
      id: 7,
      title: "Strengthening B2B Partnerships",
      description:
        "By strengthening our B2B partnerships, we aim to create synergies that will enhance our service offerings and increase our market presence.",
      icon: image6,
    },
    {
      id: 8,
      title: "Investing in Advanced Tech (AI, Blockchain)",
      description:
        "Investing in advanced technologies such as AI and Blockchain is crucial for ensuring that our solutions remain innovative and secure.",
      icon: image7,
    },
    {
      id: 9,
      title: "What's Next?",
      description:
        "As we move forward, we will continually assess our strategies and adapt to market changes to ensure sustainable growth and success.",
      icon: image8,
    },
  ];
  ;

  // Smooth scroll horizontally
  const smoothScrollTo = (element, target, duration = 1500) => {
    if (!element) return;
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      element.scrollLeft = start + change * easeInOutQuad;

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Scroll step into center
  const scrollStepIntoView = (index) => {
    const container = containerRef.current;
    const stepEl = stepRefs.current[index];
    if (container && stepEl) {
      const containerRect = container.getBoundingClientRect();
      const stepRect = stepEl.getBoundingClientRect();
      const offset =
        stepRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        stepRect.width / 2;

      smoothScrollTo(container, container.scrollLeft + offset, 1500);
    }
  };

  const handleClick = (id, index) => {
    setActiveStep(id);
    scrollStepIntoView(index);
    if (onSlideChange) onSlideChange(index);
  };

  // On mount or startIndex change
  useEffect(() => {
    if (steps[startIndex]) {
      setActiveStep(steps[startIndex].id);
      scrollStepIntoView(startIndex);
    }
  }, [startIndex]);

  // Notify parent when activeStep changes
  useEffect(() => {
    if (activeStep != null) {
      const idx = steps.findIndex((s) => s.id === activeStep);
      if (idx !== -1 && onSlideChange) onSlideChange(idx);
    }
  }, [activeStep]);

  const currentDotIndex = activeStep
    ? steps.findIndex((step) => step.id === activeStep)
    : 0;

  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center relative">
        {/* White Overlay */}
        <div className="absolute inset-0   rounded-md shadow-lg overflow-auto">
          <div className="w-full px-0 md:px-0 py-12 pb-24 font-ubuntu">
            {/* Title */}
            <div className="mb-6 px-6 md:px-16">
              <h2 className="text-2xl font-bold text-gray-800">
                Our key projects -& expansion plans
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Strategic Initiatives for Growth and Innovation
              </p>
            </div>

            {/* Steps row */}
            <div
              ref={containerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                paddingLeft: "calc(50vw - 175px)",
                paddingRight: "calc(50vw - 175px)",
              }}
            >
              <div
                className="grid grid-flow-col gap-4 min-w-max px-6 md:px-16"
                style={{
                  minWidth: steps.length * (220 + 16) + 350 - 220,
                }}
              >
                {steps.map((step, index) => {
                  const isActive = activeStep === step.id;
                  return (
                    <div
                      ref={(el) => (stepRefs.current[index] = el)}
                      key={step.id}
                      onClick={() => handleClick(step.id, index)}
                      className={`relative cursor-pointer rounded-lg transition-all duration-500 ease-in-out overflow-hidden md:mt-28
                        ${isActive
                          ? "bg-white border-2 border-gray-300 shadow-lg p-4"
                          : "bg-gray-100 border border-transparent p-3 opacity-40 hover:opacity-80"
                        }
                        ${isActive ? "w-[270px] md:w-[350px]" : "w-[220px]"}`}
                      style={{
                        minHeight: isActive ? "180px" : "96px",
                        height: isActive ? "auto" : "96px",
                        paddingBottom: isActive ? "1.5rem" : "0.75rem",
                      }}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        {/* Icon above title */}


                        <img
                          src={step.icon}
                          alt="Step Logo"
                          className={`${step.icon !== image2 ? "w-20 h-20" : ""
                            } transform transition-transform duration-1000 ease-in-out ${isActive ? "scale-100" : "scale-50"
                            }`}
                        />




                        <div className="flex items-start space-x-2">
                          <span
                            className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-sm font-novaBold
        ${isActive ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
                          >
                            {step.id}
                          </span>
                          <h3
                            className={`text-base  font-medium ${isActive ? "text-black" : "text-gray-500"
                              }`}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>


                      {/* Description only for active step */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-gray-500 text-xs text-justify leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fixed bottom-center dots */}
          <div className="fixed bottom-14 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-[#646060] px-4 py-2 rounded-full shadow-lg z-50">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(steps[index].id, index)}
                className={`rounded-full transition-all duration-300 ease-in-out
                  ${index === currentDotIndex
                    ? "h-1 w-3 bg-gray-800 border-gray-800"
                    : "w-1 h-1 bg-transparent border border-[#b8afaf] hover:border-gray-600"
                  }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
