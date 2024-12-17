import nextImage1 from "../../assets/NextJs/Frame4.png";
import nextImage2 from "../../assets/NextJs/image6.png";
import bgimage from "../../assets/NextJs/bgimage.png"
import { FiArrowRight } from "react-icons/fi";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NextJs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-serif">
    {/* Header Image */}
    <div
    data-aos="zoom-in-up"
      className="w-full h-44 md:h-60 lg:h-96 bg-cover bg-center flex items-center pl-10 md:pl-20 lg:pl-40"
      style={{
        backgroundImage: `url(${nextImage1})`,
      backgroundPosition:'center',
      }}
    >
      {/* <svg
        className="w-24 md:w-32 lg:w-48"
        width="256"
        height="52"
        viewBox="0 0 256 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.196289V51.7203H8.844V11.2083L41.46 51.7403H96.848V43.5143H61.106V29.9123H89.846V21.6863H61.106V8.44429H96.846V0.212288H52.26V8.44429H52.264V51.3603L11.054 0.196289H0ZM170.18 0.216293V8.44629H188.24V51.7463H197.08V8.44629H214.774V0.214287H170.18V0.216293ZM107.536 0.238289L148.996 51.7663H160.602L139.872 26.0203L160.572 0.27829L148.992 0.298286L134.074 18.8203L119.114 0.240288H107.534L107.536 0.238289ZM247.852 29.4343C246.33 29.4343 244.962 29.6903 243.75 30.2223C242.545 30.749 241.594 31.4876 240.898 32.4383C240.198 33.3916 239.848 34.501 239.848 35.7663C239.845 37.305 240.365 38.5363 241.408 39.4603C242.444 40.3883 243.86 41.079 245.656 41.5323L248.136 42.1563C248.836 42.3258 249.522 42.5492 250.188 42.8243C250.705 43.028 251.172 43.3427 251.554 43.7463C251.886 44.1335 252.063 44.6302 252.05 45.1403C252.055 45.7254 251.855 46.2937 251.484 46.7463C251.082 47.232 250.557 47.6014 249.964 47.8163C249.24 48.0841 248.472 48.2144 247.7 48.2003C246.94 48.2124 246.184 48.0891 245.468 47.8363C244.844 47.6116 244.29 47.2276 243.86 46.7223C243.437 46.1902 243.191 45.5392 243.156 44.8603H239.274C239.327 46.283 239.705 47.491 240.406 48.4843C241.458 49.9743 242.078 50.2303 243.326 50.7443C244.566 51.2643 246.04 51.5243 247.73 51.5243C249.479 51.5216 250.968 51.255 252.196 50.7243C253.429 50.1843 254.372 49.439 255.024 48.4883C255.678 47.5303 256 46.4323 256 45.1723C255.999 44.239 255.821 43.4276 255.468 42.7383C255.12 42.051 254.629 41.4461 254.028 40.9643C253.404 40.4638 252.712 40.055 251.972 39.7503C251.203 39.4231 250.407 39.1654 249.592 38.9803L247.552 38.4803C247.101 38.3725 246.656 38.2423 246.218 38.0903C245.799 37.9481 245.398 37.7568 245.024 37.5203C244.676 37.3125 244.382 37.0262 244.164 36.6843C243.947 36.3372 243.837 35.9336 243.848 35.5243C243.848 35.0075 244.015 34.5046 244.324 34.0903C244.636 33.6703 245.094 33.3383 245.68 33.0903C246.354 32.8328 247.071 32.7078 247.792 32.7223C248.963 32.721 249.916 32.9763 250.652 33.4883C251.008 33.7278 251.305 34.0447 251.521 34.4153C251.736 34.786 251.865 35.2007 251.898 35.6283H255.698C255.695 34.477 255.336 33.3547 254.672 32.4143C254.005 31.481 253.087 30.7503 251.918 30.2223C250.751 29.6943 249.396 29.4316 247.852 29.4343ZM231.856 29.7223V44.8223C231.849 45.5783 231.732 46.2143 231.504 46.7303C231.298 47.2167 230.944 47.6256 230.492 47.8983C230.053 48.165 229.518 48.2983 228.886 48.2983C228.307 48.2983 227.793 48.1849 227.344 47.9583C226.91 47.7452 226.548 47.4111 226.3 46.9963C226.041 46.5391 225.906 46.0218 225.91 45.4963H221.984C221.981 46.819 222.279 47.923 222.878 48.8083C223.475 49.6961 224.316 50.3922 225.3 50.8123C226.386 51.2784 227.558 51.5102 228.74 51.4923C230.136 51.4923 231.359 51.2256 232.41 50.6923C233.439 50.1814 234.298 49.3832 234.882 48.3943C235.469 47.3983 235.767 46.207 235.778 44.8203V29.7223H231.856ZM125.192 29.8403L107.504 51.8043H119.114L130.988 37.0443L125.192 29.8403ZM216.762 46.8363C216.114 46.8363 215.561 47.0603 215.102 47.5083C214.88 47.7134 214.704 47.9633 214.585 48.2415C214.466 48.5197 214.408 48.8199 214.414 49.1223C214.406 49.4282 214.464 49.7322 214.582 50.0142C214.701 50.2963 214.878 50.5499 215.102 50.7583C215.561 51.2076 216.114 51.4316 216.762 51.4303C217.166 51.4337 217.563 51.3257 217.91 51.1183C218.261 50.9175 218.555 50.6313 218.766 50.2863C218.983 49.937 219.098 49.5337 219.098 49.1223C219.098 48.819 219.035 48.519 218.913 48.2413C218.791 47.9635 218.613 47.714 218.39 47.5083C218.177 47.293 217.924 47.1226 217.644 47.0072C217.365 46.8917 217.065 46.8336 216.762 46.8363Z"
          fill="white"
        />
      </svg> */}
    </div>

    {/* Main Content */}
    <div
      className=" bg-white py-5 lg:py-5 px-6 md:px-24 bg-cover bg-center "
     
    >
      <h1 
      data-aos="flip-up"
      className="text-lg md:text-3xl text-center lg:py-5 py-2 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
        Why Go NextJS
      </h1>
      <p
      data-aos="fade-down"
      className="text-sm md:text-base text-center lg:py-5 py-2">
        These solutions efficiently meet the complex business goals.
      </p>
      <div className="space-y-2 lg:py-5 py-2">
        <h2 
        data-aos="fade-right"
        className="text-lg md:text-xl  bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
          Optimize Your Performance with Next.js Sky High Efficiency:
        </h2>
        <p 
        data-aos="fade-right"
        className="text-sm md:text-base text-justify">
          Next.js is an open-source framework, freely available, that operates
          in a server environment. What sets it apart is its remarkable
          compatibility across diverse operating systems and platforms,
          including Windows, Linux, UNIX, and Mac OS. Elevate your performance
          with Next.js sky-high efficiency.
        </p>
      </div>
      <div className="space-y-2 lg:py-5 py-2">
        <h2 
        data-aos="fade-right"
        className="text-lg md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
          Unleash Scalability with Next.js:
        </h2>
        <p 
        data-aos="fade-right"
        className="text-sm md:text-base text-justify">
          One of the standout features of Next.js lies in its highly scalable
          nature. Operating as a runtime environment based on the V8
          JavaScript engine, Next.js seamlessly adapts for use in both
          frontend and backend development. Streamlining the entire process,
          Next.js makes building dynamic applications exceptionally
          straightforward, ensuring swift, scalable, and data-driven web
          application development.
        </p>
      </div>

      <div className="md:flex">
        <div className="space-y-3">
          <h2 
          data-aos="fade-right"
          className="text-lg md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
            Elevate Your Projects with Next.js:
          </h2>
          <ul className="space-y-2">
            <li 
            data-aos="fade-right"
            className="flex gap-1">
              <span>
                <FiArrowRight size={20} />
              </span>
              <p 
              className="text-sm md:text-base">
                Unlocking Potential with Next.js.
              </p>
            </li>
            <li 
             data-aos="fade-right"
            className="flex gap-1">
              <span>
                <FiArrowRight size={20} />
              </span>
              <p className="text-sm md:text-base">
                Next.js apps remove bottlenecks, seamlessly integrate
                services, enhance operations, and boost efficiency,
                contributing to improved productivity for clients.
              </p>
            </li>
            <li
             data-aos="fade-right"
            className="flex gap-1">
              <span>
                <FiArrowRight size={20} />
              </span>
              <p className="text-sm md:text-base">
                Next.js applications eliminate bottlenecks, seamlessly
                integrating services for clients, enhancing operations,
                improving efficiency, and boosting productivity.
              </p>
            </li>
          </ul>
        </div>
        <img
         data-aos="fade-up"
          src={nextImage2}
          alt="Next.js Benefits"
          className="w-60 max-md:mx-auto lg:w-72"
        />
      </div>
    </div>
    <CallToAction />
    <Footer />
  </div>
  );
};

export default NextJs;
