import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Resolving Customer Queries and Technical Issues",
    desc:
      "Address customer inquiries and technical problems effectively, ensuring a quick resolution to enhance customer satisfaction. This involves utilizing troubleshooting skills and product knowledge to assist clients.",
  },
  {
    title: "Assisting with New Subscriptions and Service Upgrades",
    desc:
      "Guide customers through the process of subscribing to new services or upgrading existing ones, ensuring a seamless experience that meets their needs. This includes providing information on benefits and features.",
  },
  {
    title: "Providing Billing Support and Account Management",
    desc:
      "Manage customer accounts and assist with billing inquiries to ensure clarity and transparency in transactions. This includes addressing payment issues and providing statements when required.",
  },
  {
    title: "Maintaining High-Quality Service Standards and Compliance",
    desc:
      "Ensure adherence to industry standards and compliance regulations while providing services, which is critical for maintaining the company's reputation and integrity.",
  },
  {
    title: "Ensuring Customer Retention through Exceptional Service Delivery",
    desc:
      "Focus on delivering outstanding customer service to retain clients. By building strong relationships and trust, we can enhance customer loyalty.",
  },
  {
    title: "Successfully Handled High Call Volumes with Excellent Resolution Rate",
    desc:
      "Demonstrated the ability to manage a significant volume of customer calls while maintaining a high resolution rate, reflecting efficiency and effectiveness in service delivery.",
  },
  {
    title: "Improved Customer Retention and Satisfaction through Effective Support",
    desc:
      "Utilized proactive support strategies to boost customer satisfaction rates, which is crucial for reducing churn and encouraging long-term relationships.",
  },
  {
    title: "Maintained Industry-Standard SLAs and Compliance Regulations",
    desc:
      "Adhered to service level agreements (SLAs) and compliance standards, ensuring that all services provided meet the expected quality and regulatory benchmarks.",
  },
  {
    title: "Scaled Operations Efficiently to Meet Client Demands",
    desc:
      "Adapted operations to efficiently handle increasing client demands, demonstrating flexibility and responsiveness to market changes.",
  },
];

export default function Five({ startIndex = 0, onSlideChange = () => { } }) {
  const [current, setCurrent] = useState(startIndex);

  // sync when parent changes startIndex
  useEffect(() => {
    setCurrent(startIndex ?? 0);
  }, [startIndex]);

  // notify parent when local current changes
  useEffect(() => {
    onSlideChange(current);
  }, [current, onSlideChange]);

  const moveDistance = -window.innerHeight + 128;

  const movingLineVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 1,
      y: moveDistance,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const fixedTopLineVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.7 } },
    exit: { opacity: 0 },
  };

  const newBottomLineVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.7, duration: 0.5 } },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white font-ubuntu overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={`moving-line-${current}`}
          variants={movingLineVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: "2px",
            height: "1rem",
            backgroundColor: "#9ca3af",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
          className="sm:h-56 h-48"
        />
      </AnimatePresence>

      <AnimatePresence>
        {current > 0 && (
          <motion.div
            key={`fixed-top-line-${current}`}
            variants={fixedTopLineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "2px",
              height: "10rem",
              backgroundColor: "#9ca3af",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
            className="sm:h-56 h-48"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`new-bottom-line-${current}`}
          variants={newBottomLineVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: "2px",
            height: "10rem",
            backgroundColor: "#9ca3af",
            transform: "translateX(-50%)",
            zIndex: 15,
          }}
          className="sm:h-56 h-48"
        />
      </AnimatePresence>

      <div className="relative w-full max-w-4xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh]"
          >
            <h2 className="text-xl  sm:text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight mb-4 px-2 sm:px-6">
              {slides[current].title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light max-w-3xl leading-relaxed px-4 sm:px-8">
              {slides[current].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots/navigation inside Five */}
      <div className="absolute bottom-10 z-10 w-full flex justify-center mt-4">
        <div className="flex items-center space-x-2 bg-[#3b3939] bg-opacity-50 rounded-full px-5 py-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering parent click events
                if (idx !== current) {
                  setCurrent(idx);
                }
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full border-2 transition-colors duration-300 ease-in-out
          ${idx === current
                  ? "h-1 w-3 bg-white border-white"
                  : "w-1 h-1 bg-transparent border-[#b8afaf] hover:border-[#b8afaf]"
                }`}
              style={{ cursor: "pointer" }}
              type="button"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
