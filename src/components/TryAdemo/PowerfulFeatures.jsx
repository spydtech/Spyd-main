import React, { useEffect } from "react";
import { MdDialpad, MdOutlineEmail, MdDonutLarge, MdOutlineSignalCellularAlt } from "react-icons/md";
import { LuMessageCircle, LuPhoneCall, LuFileSearch } from "react-icons/lu";
import { FiVideo } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPlugsBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const PowerfulFeatures = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return (
        <div className="bg- pt-24 pb-28 px-4 md:px-8 lg:px-16">
            {/* Header Section */}
            <div className="text-center md:text-left">
                <p 
                data-aos="fade-down"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-snug">
                    Ready to explore further? <br className="hidden md:block" />
                    <span 
                    data-aos="fade-up"
                    className="bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent">Discover the depth of our powerful features.</span>
                </p>
            </div>

            {/* Features Grid */}
            <div 
            data-aos="fade-up"
            className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 mt-12">
                {/* Single Feature Card */}
                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <a href="tel:+91-6305207832">
                        <MdDialpad className="text-4xl text-white mx-auto" />
                        <p className="text-white text-xl mt-4">Calling</p>
                    </a>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <a href="mailto:ashwinikumari@email.com">
                        <MdOutlineEmail className="text-4xl text-white mx-auto" />
                        <p className="text-white text-xl mt-4">Emailing</p>
                    </a>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <a
                        href="sms:123456789"
                        onClick={(e) => {
                            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                                e.preventDefault();
                                alert("Please use a mobile device to send an SMS on this number 123456789.");
                            }
                        }}
                    >
                        <LuMessageCircle className="text-4xl text-white mx-auto" />
                        <p className="text-white text-xl mt-4">SMS</p>
                    </a>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <FiVideo className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Video</p>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <MdDonutLarge className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Reporting</p>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <a href="tel:+91-123456789">
                        <LuPhoneCall className="text-4xl text-white mx-auto" />
                        <p className="text-white text-xl mt-4">Call Coaching</p>
                    </a>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <HiOutlineMailOpen className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Workflows</p>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <LuFileSearch className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Smart Views</p>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <MdOutlineSignalCellularAlt className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Pipeline</p>
                </div>

                <div className="bg-[#1F1F1F] hover:bg-gradient-to-r from-blue-700 to-[#38bdf8] transition-colors duration-300 rounded-2xl p-6 text-center">
                    <PiPlugsBold className="text-4xl text-white mx-auto" />
                    <p className="text-white text-xl mt-4">Integrations</p>
                </div>
            </div>
        </div>
    );
};

export default PowerfulFeatures;
