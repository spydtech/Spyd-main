import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import main from "../../assets/mobile/iphone/main.png"

const IphoneApplication = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const methodology = [
    {
      description:
        "Creating a strategic plan after in-depth analysis of the current and future state.",
    },
    {
      description:
        "Combining Strategic product solutions, and user’s goal through wireframes and prototypes.",
    },
    {
      description:
        "Designing visual identity to strengthen brand through iconography color, type, imagery, and animation.",
    },
    {
      description:
        "Using agile methodologies, our professionals build final product with creativity and deliver product that perform well.",
    },
    {
      description:
        "Testing final product with all its features to check its performance and finally, handover to candidate for submission.",
    },
    {
      description:
        "Evaluating the product’s performance and target the success metrics that was established in planning",
    },
  ];

 

  return (
    <div>
      <div className="h-44 md:h-60 lg:h-96 w-full">
        <img
         src={main}
         alt="hero_img"
          className=" w-full h-full"
        />
      </div>

      <div className="font-serif px-3 md:px-5 lg:px-8">
        <div className="my-3 md:px-10">
          <h1
            data-aos="fade-right"
            className="text-center mb-3 text-lg lg:py-10 md:text-2xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text"
          >
            Empowering Your Ideas with iPhone App Development
          </h1>
          <p 
           data-aos="fade-right"
          className="text-sm md:text-base py-2">
            At SPY D Tech, we have cultivated a team of skilled professionals
            dedicated to crafting exceptional iPhone native mobile applications.
            From Hyderabad, India, to clients across the globe, our commitment
            to excellence shines through in every iOS app we develop.
          </p>
          <p 
           data-aos="fade-right"
          className="text-sm md:text-base py-2">
            We meticulously implement globally accepted best practices and
            methodologies, ensuring that our native iPhone apps boast impressive
            user interfaces, user-friendliness, and alignment with user
            requirements. From design to development, testing, and deployment,
            we adhere to time-tested processes to meet delivery schedules.
          </p>
          <p 
           data-aos="fade-right"
          className="text-sm md:text-base py-2">
            Our core iPhone app development team at SPY D Tech stays abreast of
            the latest tools and technologies. We continuously upgrade our
            expertise with emerging trends, guaranteeing that we deliver
            world-class iPhone mobile apps. This commitment creates a win-win
            situation for all stakeholders involved.
          </p>
        </div>

        <div data-aos="fade-right">
          <h1 className="text-center mb-3 text-lg md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
            We use the following technologies to build IOS based mobile
          </h1>

          <div 
          data-aos="fade-right"
          className="flex justify-center py-5">
            <svg
              className="w-[300px] h-[310px] max-md:-ml-20"
              viewBox="0 0 954 905"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2989_4506)">
                <rect width="954" height="905" fill="white" />
                <g filter="url(#filter0_dddd_2989_4506)">
                  <path
                    d="M411.718 841.783C465.786 841.828 519.333 831.224 569.302 810.575C619.272 789.927 664.685 759.638 702.948 721.438C741.212 683.239 771.577 637.877 792.31 587.943C813.043 538.008 823.737 484.479 823.783 430.411C823.828 376.344 813.224 322.797 792.575 272.827C771.926 222.858 741.637 177.445 703.438 139.181C665.239 100.918 619.877 70.5525 569.942 49.8197C520.008 29.0869 466.479 18.3925 412.411 18.347L412.065 430.065L411.718 841.783Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M408.648 779.777C408.443 793.721 419.594 805.279 433.52 804.546C523.84 799.791 609.734 762.502 675.028 699.1C746.381 629.816 787.288 535.024 788.75 435.579C790.212 336.133 752.11 240.18 682.826 168.827C619.424 103.533 534.663 63.7342 444.523 56.3257C430.624 55.1834 419.138 66.4091 418.933 80.3528C418.728 94.2965 429.885 105.664 443.771 106.952C520.507 114.069 592.527 148.325 646.596 204.007C706.55 265.751 739.521 348.783 738.255 434.836C736.99 520.89 701.592 602.916 639.848 662.87C584.166 716.939 511.169 749.062 434.257 753.92C420.34 754.799 408.853 765.834 408.648 779.777Z"
                  fill="url(#paint0_linear_2989_4506)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dddd_2989_4506"
                  x="404.719"
                  y="0.347656"
                  width="549.064"
                  height="904.436"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="6" dy="2" />
                  <feGaussianBlur stdDeviation="6.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2989_4506"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="23" dy="6" />
                  <feGaussianBlur stdDeviation="12" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.09 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2989_4506"
                    result="effect2_dropShadow_2989_4506"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="52" dy="14" />
                  <feGaussianBlur stdDeviation="16" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_2989_4506"
                    result="effect3_dropShadow_2989_4506"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="92" dy="25" />
                  <feGaussianBlur stdDeviation="19" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.01 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_2989_4506"
                    result="effect4_dropShadow_2989_4506"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect4_dropShadow_2989_4506"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2989_4506"
                  x1="419.304"
                  y1="55.1055"
                  x2="408.277"
                  y2="805.024"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9DC7FF" />
                  <stop offset="1" stopColor="#0663DE" />
                </linearGradient>
                <clipPath id="clip0_2989_4506">
                  <rect width="954" height="905" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <ul 
           
            className="space-y-2 text-sm ">
              <li
               data-aos="fade-down"
              className="-ml-24">Objective-C</li>
              <li   data-aos="fade-down "className="-ml-12">C</li>
              <li  data-aos="fade-down" className="-ml-8">Swift</li>
              <li  data-aos="fade-down" className="-ml-4">Invision</li>
              <li  data-aos="fade-down" className="">Balsamiq</li>
              <li  data-aos="fade-down" className="-ml-2">Mocks</li>
              <li  data-aos="fade-down" className="-ml-4">XC Test</li>
              <li  data-aos="fade-down" className="-ml-6">OCmock</li>
              <li  data-aos="fade-down" className="-ml-10">KIF</li>
              <li  data-aos="fade-down" className="-ml-16">Xcode</li>
              <li  data-aos="fade-down" className="-ml-32">Apple IDE</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center" data-aos="zoom-in">
          <h1 
           data-aos="fade-right"
          className="mb-3 text-lg md:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
            Our Capabilities
          </h1>

          <div className="relative mb-8">
            <svg
              className="w-[300px] md:w-[500px] md:my-10"
              width="1001"
              height="289"
              viewBox="0 0 1001 289"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2989_4510)">
                <rect width="1001" height="289" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M537.076 154.781V133.48H818.078C888.106 133.48 950.915 175.771 977.487 240.036C990.061 240.872 1000 251.336 1000 264.122C1000 277.454 989.194 288.262 975.861 288.262C962.529 288.262 951.721 277.454 951.721 264.122C951.721 257.982 954.017 252.38 957.783 248.125C934.479 191.826 879.44 154.781 818.078 154.781H537.076ZM975.861 272.642C980.567 272.642 984.381 268.828 984.381 264.122C984.381 259.416 980.567 255.602 975.861 255.602C971.156 255.602 967.341 259.416 967.341 264.122C967.341 268.828 971.156 272.642 975.861 272.642Z"
                  fill="#00A3FF"
                />
                <path
                  d="M775.263 144.63C775.263 165.413 758.415 182.261 737.632 182.261C716.85 182.261 700.002 165.413 700.002 144.63C700.002 123.848 716.85 107 737.632 107C758.415 107 775.263 123.848 775.263 144.63Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M738.008 178.602C757.046 178.602 772.479 163.169 772.479 144.131C772.479 125.093 757.046 109.659 738.008 109.659C718.97 109.659 703.536 125.093 703.536 144.131C703.536 163.169 718.97 178.602 738.008 178.602ZM738.008 187.441C761.927 187.441 781.318 168.051 781.318 144.131C781.318 120.211 761.927 100.82 738.008 100.82C714.088 100.82 694.697 120.211 694.697 144.131C694.697 168.051 714.088 187.441 738.008 187.441Z"
                  fill="#00A3FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M250.943 133.481V154.781H531.945C601.973 154.781 664.782 112.491 691.355 48.2261C703.929 47.3898 713.869 36.9256 713.869 24.1397C713.869 10.8074 703.061 -0.000564575 689.729 -0.000564575C676.396 -0.000564575 665.588 10.8074 665.588 24.1397C665.588 30.2794 667.884 35.882 671.65 40.1366C648.346 96.4355 593.307 133.481 531.945 133.481H250.943ZM689.729 15.6196C694.434 15.6196 698.249 19.4342 698.249 24.1397C698.249 28.8452 694.434 32.6598 689.729 32.6598C685.023 32.6598 681.208 28.8452 681.208 24.1397C681.208 19.4342 685.023 15.6196 689.729 15.6196Z"
                  fill="#00C2FF"
                />
                <path
                  d="M489.263 144.37C489.263 123.587 472.415 106.739 451.632 106.739C430.85 106.739 414.002 123.587 414.002 144.37C414.002 165.152 430.85 182 451.632 182C472.415 182 489.263 165.152 489.263 144.37Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M451.875 109.659C470.913 109.659 486.347 125.093 486.347 144.131C486.347 163.169 470.913 178.603 451.875 178.603C432.837 178.603 417.403 163.169 417.403 144.131C417.403 125.093 432.837 109.659 451.875 109.659ZM451.875 100.82C475.795 100.82 495.185 120.211 495.185 144.131C495.185 168.051 475.795 187.441 451.875 187.441C427.955 187.441 408.564 168.051 408.564 144.131C408.564 120.211 427.955 100.82 451.875 100.82Z"
                  fill="#00C2FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 154.781V133.48H266.096C332.41 133.48 391.886 175.771 417.05 240.036C428.957 240.872 438.37 251.336 438.37 264.122C438.37 277.454 428.135 288.262 415.51 288.262C402.885 288.262 392.65 277.454 392.65 264.122C392.65 257.982 394.824 252.38 398.39 248.125C376.322 191.826 324.203 154.781 266.096 154.781H0ZM415.51 272.642C419.966 272.642 423.578 268.828 423.578 264.122C423.578 259.416 419.966 255.602 415.51 255.602C411.054 255.602 407.442 259.416 407.442 264.122C407.442 268.828 411.054 272.642 415.51 272.642Z"
                  fill="#2583FF"
                />
                <path
                  d="M225.624 144.63C225.624 165.413 209.67 182.261 189.99 182.261C170.31 182.261 154.355 165.413 154.355 144.63C154.355 123.848 170.31 107 189.99 107C209.67 107 225.624 123.848 225.624 144.63Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M190.275 178.602C208.303 178.602 222.918 163.169 222.918 144.131C222.918 125.093 208.303 109.659 190.275 109.659C172.247 109.659 157.632 125.093 157.632 144.131C157.632 163.169 172.247 178.602 190.275 178.602ZM190.275 187.441C212.926 187.441 231.288 168.051 231.288 144.131C231.288 120.211 212.926 100.82 190.275 100.82C167.624 100.82 149.262 120.211 149.262 144.131C149.262 168.051 167.624 187.441 190.275 187.441Z"
                  fill="#2583FF"
                />
                <path
                  d="M178.153 134.131H171.051C170.423 134.131 169.821 134.394 169.377 134.863C168.933 135.332 168.684 135.968 168.684 136.631V141.631C168.684 142.294 168.933 142.93 169.377 143.399C169.821 143.867 170.423 144.131 171.051 144.131H175.786C176.414 144.131 177.016 144.394 177.46 144.863C177.904 145.332 178.153 145.968 178.153 146.631V151.631C178.153 152.294 177.904 152.93 177.46 153.399C177.016 153.867 176.414 154.131 175.786 154.131H168.684M201.827 134.131V154.131M211.297 134.131L204.194 144.131M204.194 144.131L211.297 154.131M204.194 144.131H201.827M185.255 134.131V154.131H189.99C191.246 154.131 192.45 153.604 193.338 152.666C194.226 151.729 194.725 150.457 194.725 149.131V139.131C194.725 137.805 194.226 136.533 193.338 135.595C192.45 134.658 191.246 134.131 189.99 134.131H185.255Z"
                  stroke="#0866E2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M436.911 134.822H429.809C429.181 134.822 428.579 135.086 428.135 135.554C427.691 136.023 427.441 136.659 427.441 137.322V142.322C427.441 142.985 427.691 143.621 428.135 144.09C428.579 144.559 429.181 144.822 429.809 144.822H434.544C435.171 144.822 435.774 145.086 436.218 145.554C436.662 146.023 436.911 146.659 436.911 147.322V152.322C436.911 152.985 436.662 153.621 436.218 154.09C435.774 154.559 435.171 154.822 434.544 154.822H427.441M460.585 134.822V154.822M470.054 134.822L462.952 144.822M462.952 144.822L470.054 154.822M462.952 144.822H460.585M444.013 134.822V154.822H448.748C450.004 154.822 451.208 154.295 452.096 153.358C452.984 152.42 453.483 151.148 453.483 149.822V139.822C453.483 138.496 452.984 137.224 452.096 136.287C451.208 135.349 450.004 134.822 448.748 134.822H444.013Z"
                  stroke="#00C2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M727.388 134.631H720.285C719.657 134.631 719.055 134.894 718.611 135.363C718.167 135.832 717.918 136.468 717.918 137.131V142.131C717.918 142.794 718.167 143.43 718.611 143.899C719.055 144.367 719.657 144.631 720.285 144.631H725.02C725.648 144.631 726.25 144.894 726.694 145.363C727.138 145.832 727.388 146.468 727.388 147.131V152.131C727.388 152.794 727.138 153.43 726.694 153.899C726.25 154.367 725.648 154.631 725.02 154.631H717.918M751.061 134.631V154.631M760.531 134.631L753.429 144.631M753.429 144.631L760.531 154.631M753.429 144.631H751.061M734.49 134.631V154.631H739.224C740.48 154.631 741.685 154.104 742.572 153.166C743.46 152.229 743.959 150.957 743.959 149.631V139.631C743.959 138.305 743.46 137.033 742.572 136.095C741.685 135.158 740.48 134.631 739.224 134.631H734.49Z"
                  stroke="#00A3FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2989_4510">
                  <rect width="1001" height="289" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className=" absolute top-1 mt-3 text-xs md:text-sm w-40 md:w-52 max-md:translate-x-36 translate-x-72">
              Using latest iPhone SDK to enhance app functionality and develop
              engaging games
            </h1>
            <h1 className=" absolute top-20 max-md:-mt-1 translate-x-40 md:translate-x-80 bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              IPhone SDK
            </h1>
            <h1 className=" absolute top-1/2 mt-10 md:mt-20 translate-x-20 md:translate-x-40 bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              IPhone SDK
            </h1>
            <h1 className=" absolute top-1/2 mt-12 ml-2 md:mt-20 translate-x-52 md:translate-x-[430px] bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              IPhone SDK
            </h1>
            <h1 className=" absolute top-3/4 -mt-2 md:mt-4 text-xs md:text-sm w-32 md:w-52 translate-x-12 md:translate-x-28 ">
              Using latest iPhone SDK to enhance app functionality and develop
              engaging games
            </h1>
            <h1 className=" absolute top-3/4 pl-1 md:mt-4 text-xs md:text-sm w-32 md:w-52 translate-x-44 md:translate-x-96 ">
              Using latest iPhone SDK to enhance app functionality and develop
              engaging games iPhone SDK
            </h1>
          </div>
        </div>

        <div className="my-3 md:px-10">
          <h1
            data-aos="zoom-in-down"
            className="text-center mb-3 text-lg lg:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text"
          >
            How We Develop Powerful iOS Apps to Increase Your Business
            Performance
          </h1>
          <p 
           data-aos="fade-right"
          className="text-sm md:text-base">
            Being one of the best iOS app development companies India, we
            develop iPhone and iPad apps with an intention to increase your
            business performance. Before developing an app, we conduct thorough
            research on your app objective, your competitors’ apps analysis.
            That’s why we are called as one of the best iOS application
            developers in Bangalore, India..
          </p>
        </div>

        <div className="my-3 md:px-10">
          <h1
            data-aos="zoom-in-up"
            className="text-center my-8 text-lg lg:text-xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text"
          >
            Our Proven Methodology
          </h1>
          <ul className="grid md:grid-cols-3 max-md:gap-4 md:gap-y-14 mx-5">
            {methodology.map((point) => (
              <li
                data-aos="flip-up"
                key={point.id}
                className="bg-[#000000] rounded-lg max-md:text-sm bg-center bg-cover text-white h-32 md:w-44  md:h-52 lg:h-60 lg:w-60 text-center bg-opacity-70 flex items-center px-5 mx-auto"
                style={{
                  backgroundImage: `url('src/assets/mobileServices/iPhone/card-img.png')`,
                }}
              >
                <p>{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default IphoneApplication;
