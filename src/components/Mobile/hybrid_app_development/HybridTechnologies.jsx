import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HybridTechnologies = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for other animations if needed
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10 text-black">
      <div className="text-center  ">
        
        <h1 
         data-aos="fade-down"
        className="text-xl lg:text-3xl py-4  bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text mb-8">
          The technologies we use to build Hybrid Mobile Apps
        </h1>
      </div>

      <div className="flex justify-center">
        <div 
         data-aos="fade-right"
        className="relative    p-4">
          <svg
            className="lg:w-[300px] w-[200px] h-[200px] lg:h-[300px]"
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
          <div className="absolute top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2">
            <ul className="text-black font-medium mt-6">
              <li 
               data-aos="fade-down"
              className="mb-10 mr-28 text-center">PhoneGap</li>
              <li 
               data-aos="fade-down"
              className="mb-10 mr-2 text-nowrap ml-4 text-center">
                Sencha Touch 2
              </li>
              <li 
               data-aos="fade-down"
              className="text-nowrap ml-8 mb-10 text-center">
                jQuery Mobile
              </li>
              <li 
               data-aos="fade-down"
              className="mb-10 mr-2 text-center">Adobe AIR</li>
              <li 
               data-aos="fade-down"
              className="mb-10 mr-28 text-center">Kendo UI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridTechnologies;
