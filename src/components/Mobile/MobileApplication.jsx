import React, { useEffect } from "react";
import CallToAction from '../CallToAction'
import Footer from '../Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/mobile/mobileapplication/main.png"
import image1 from "../../assets/mobile/mobileapplication/image.png"

function MobileApplication() {

  useEffect(() => {
    AOS.init({
      duration: 1000,

    });
     // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  return (
    <div className="relative">
     
      <div className="relative h-44 md:h-60 lg:h-96">
        <img
        data-aos="fade-zoom-in"
          src={image}
           alt="hero_img"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#167BFF] opacity-35"></div>
      </div>

      <div className="font-serif px-3 md:px-5 lg:px-8">
        <div className="my-5">
          <h1 
          data-aos="fade-down"
          className="text-center lg:py-10 text-lg md:text-2xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
            Mobile App Development
          </h1>
          <div className="max-md:space-y-3 mt-2 lg:mt-5 md:flex justify-center items-center lg:space-x-10 xl:gap-8">
            <img
            data-aos="fade-up"
              src={image1}
               alt="7-steps_Img"
              className="lg:h-[250px] lg:w-[500px] md:w-[300px]"
            />
            <p 
            data-aos="fade-right"
            className="text-sm md:text-base lg:w-[450px] xl:w-[600px]">
              Mobile app development spans diverse technologies and platforms.
              From hybrid apps, blending web and native features for
              cross-platform compatibility, to Android and iPhone apps tailored
              for their respective operating systems, developers use varied
              approaches. Android apps are built using Java or Kotlin and
              distributed via the Google Play Store, while iPhone apps, crafted
              with Swift, are distributed through the Apple App Store, ensuring
              quality control.
            </p>
          </div>
        </div>

       
      </div>
      <div
      data-aos="fade-down"
      className="py-10">
          <h1 className="text-center text-lg md:text-2xl bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
            Enhancing Mobile App Security at SPY D Tech
          </h1>
        
        </div>
   
     

      






<div className='flex flex-col lg:flex-row lg:pt-20 justify-center lg:px-20 md:px-32'>
<div className="bg-white">
      <div className="container mx-auto px-4  py-20">
      

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {/* First Block */}
          <div className='flex lg:space-x-14 space-x-5 md:space-x-14'>
          <div className="relative ">
            <p 
            data-aos="fade-down"
            className="text-black lg:text-base text-sm lg:mt-0 -mt-5">
              SPY D Tech's expert team uses advanced security technologies and secure coding practices to safeguard mobile apps, ensuring robust protection for clients' digital assets.
            </p>
            <svg 
            className='w-[130px] md:w-[214px]'
            width="214" height="74" viewBox="0 0 214 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.363281" width="212.804" height="73.5735" fill="#FC5C7D"/>
<path d="M0 73.9367V52.5265C13.9288 48.2444 56.4116 38.7461 114.913 35.009C173.413 31.2719 204.289 10.3547 212.801 0.363281L213.575 73.9367H0Z" fill="#EA4B6C"/>
</svg>

          </div>

          {/* Second Block */}
          <div className="relative ">
            <p 
            data-aos="fade-down"
            className="text-black lg:text-base text-sm lg:-mt-20 -mt-14 pb-10">
              We implement cutting-edge security measures in mobile apps, exceeding industry standards to protect clients' data and user interactions, ensuring a secure foundation for mobile business activities.
            </p>
            <svg 
            data-aos="fade-up"
            className='lg:-mt-5 w-[130px] md:w-[214px] -mt-14'
            width="214" height="75" viewBox="0 0 214 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.0234375" y="0.791016" width="212.804" height="73.5735" fill="#D7669E"/>
<path d="M0.0234375 74.3645V52.9542C13.9522 48.6722 56.435 39.1738 114.936 35.4367C173.437 31.6997 204.312 10.7825 212.824 0.791016L213.598 74.3645H0.0234375Z" fill="#D75495"/>
</svg>

          </div>
          <svg
          data-aos="fade-up"
      className='absolute lg:mt-36 md:mt-[13%] md:w-72  mt-44 w-56 lg:w-auto'
      width="362" height="153" viewBox="0 0 362 153" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M361.588 7.10617C350.39 43.5446 329.378 76.1627 300.874 101.354C272.371 126.546 237.488 143.329 200.081 149.85C162.673 156.37 124.2 152.372 88.9132 138.299C53.6267 124.226 22.9019 100.626 0.135876 70.1078L17.1559 57.298C37.57 84.6635 65.1205 105.826 96.7616 118.445C128.403 131.064 162.902 134.648 196.444 128.802C229.987 122.955 261.267 107.905 286.825 85.3164C312.384 62.7274 331.225 33.4791 341.267 0.805084L361.588 7.10617Z" fill="url(#paint0_linear_350_4049)"/>
<defs>
<linearGradient id="paint0_linear_350_4049" x1="370.747" y1="-10.129" x2="-13.4442" y2="90.4859" gradientUnits="userSpaceOnUse">
<stop stop-color="#D75495"/>
<stop offset="1" stop-color="#EA4B6C"/>
</linearGradient>
</defs>
</svg>

          </div>

          {/* Third Block */}
       
        </div>
      </div>
    </div>

    <div className="bg-white lg:-mt-24 md:mb-[30%] md:mt-20">
      <div className="container mx-auto px-4  lg:py-20">
      

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {/* First Block */}
          <div className='flex lg:space-x-14 space-x-5 md:space-x-14'>
          <div className="relative ">
            <p 
            data-aos="fade-down"
            className="text-black lg:text-base text-sm -lg:mt-0 -mt-5 lg:pb-5">
            Our modular and adaptable mobile app components ensure seamless platform integration,
             enabling swift implementation and enhancing the efficiency of clients' digital ecosystems.    </p>
            <svg 
            data-aos="fade-up"
            className='w-[130px] md:w-[214px]'
            width="214" height="75" viewBox="0 0 214 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.046875" y="0.833984" width="212.804" height="73.5735" fill="#9C75D0"/>
            <path d="M0.046875 74.4074V52.9972C13.9757 48.7151 56.4585 39.2168 114.959 35.4797C173.46 31.7426 204.336 10.8254 212.848 0.833984L213.622 74.4074H0.046875Z" fill="#8B5ACB"/>
            </svg>

          </div>

          {/* Second Block */}
          <div className="relative ">
            <p 
            data-aos="fade-down"
            className="text-black lg:text-base text-sm lg:-mt-20 -mt-6 lg:pb-10">
            SPY D Tech delivers secure, cost-effective mobile app solutions 
            by strengthening security protocols while optimizing development budgets.
            </p>
            <svg 
            data-aos="fade-up"
            className='lg:-mt-5 w-[130px] md:w-[214px] -mt-0'
            width="214" height="74" viewBox="0 0 214 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0698242" y="0.259766" width="212.804" height="73.5735" fill="#6F81F7"/>
            <path d="M0.0698242 73.8332V52.423C13.9986 48.1409 56.4814 38.6425 114.982 34.9055C173.483 31.1684 204.359 10.2512 212.871 0.259766L213.645 73.8332H0.0698242Z" fill="#5C6EEA"/>
            </svg>

          </div>
          <svg
          data-aos="fade-up"
      className='absolute lg:mt-36 mt-44 md:mt-[13%] md:w-72 w-56 lg:w-auto'
      wwidth="362" height="153" viewBox="0 0 362 153" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M361.733 6.77219C350.535 43.2106 329.523 75.8287 301.019 101.02C272.516 126.212 237.633 142.995 200.226 149.516C162.818 156.036 124.345 152.038 89.0582 137.965C53.7717 123.892 23.047 100.292 0.280895 69.7738L17.3009 56.964C37.715 84.3296 65.2656 105.492 96.9066 118.111C128.548 130.73 163.047 134.314 196.589 128.468C230.132 122.621 261.412 107.571 286.97 84.9825C312.529 62.3935 331.37 33.1451 341.412 0.4711L361.733 6.77219Z" fill="url(#paint0_linear_350_4051)"/>
      <defs>
      <linearGradient id="paint0_linear_350_4051" x1="370.892" y1="-10.463" x2="-13.2992" y2="90.1519" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5C6EEA"/>
      <stop offset="1" stop-color="#8B5ACB"/>
      </linearGradient>
      </defs>
      </svg>

          </div>

          {/* Third Block */}
       
        </div>
      </div>
    </div>
    </div>





    {/* <div className="flex">
   
   <div>
   <svg 
    className="w-[300px] h-[600px]"
    width="954" height="905" viewBox="0 0 954 905" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2989_4506)">
<rect width="954" height="905" fill="white"/>
<g filter="url(#filter0_dddd_2989_4506)">
<path d="M411.718 841.783C465.786 841.828 519.333 831.224 569.302 810.575C619.272 789.927 664.685 759.638 702.948 721.438C741.212 683.239 771.577 637.877 792.31 587.943C813.043 538.008 823.737 484.479 823.783 430.411C823.828 376.344 813.224 322.797 792.575 272.827C771.926 222.858 741.637 177.445 703.438 139.181C665.239 100.918 619.877 70.5525 569.942 49.8197C520.008 29.0869 466.479 18.3925 412.411 18.347L412.065 430.065L411.718 841.783Z" fill="white"/>
</g>
<path d="M408.648 779.777C408.443 793.721 419.594 805.279 433.52 804.546C523.84 799.791 609.734 762.502 675.028 699.1C746.381 629.816 787.288 535.024 788.75 435.579C790.212 336.133 752.11 240.18 682.826 168.827C619.424 103.533 534.663 63.7342 444.523 56.3257C430.624 55.1834 419.138 66.4091 418.933 80.3528C418.728 94.2965 429.885 105.664 443.771 106.952C520.507 114.069 592.527 148.325 646.596 204.007C706.55 265.751 739.521 348.783 738.255 434.836C736.99 520.89 701.592 602.916 639.848 662.87C584.166 716.939 511.169 749.062 434.257 753.92C420.34 754.799 408.853 765.834 408.648 779.777Z" fill="url(#paint0_linear_2989_4506)"/>
</g>
<defs>
<filter id="filter0_dddd_2989_4506" x="404.719" y="0.347656" width="549.064" height="904.436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="2"/>
<feGaussianBlur stdDeviation="6.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2989_4506"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="23" dy="6"/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.09 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_2989_4506" result="effect2_dropShadow_2989_4506"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="52" dy="14"/>
<feGaussianBlur stdDeviation="16"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_2989_4506" result="effect3_dropShadow_2989_4506"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="92" dy="25"/>
<feGaussianBlur stdDeviation="19"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.360784 0 0 0 0 0.796078 0 0 0 0.01 0"/>
<feBlend mode="normal" in2="effect3_dropShadow_2989_4506" result="effect4_dropShadow_2989_4506"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_2989_4506" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2989_4506" x1="419.304" y1="55.1055" x2="408.277" y2="805.024" gradientUnits="userSpaceOnUse">
<stop stop-color="#9DC7FF"/>
<stop offset="1" stop-color="#0663DE"/>
</linearGradient>
<clipPath id="clip0_2989_4506">
<rect width="954" height="905" fill="white"/>
</clipPath>
</defs>
</svg>
   </div>
   <div className="items-center mt-44 space-y-10">
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
   </div>
   


  

    </div> */}
<CallToAction />
<Footer />

    </div>
  )
}

export default MobileApplication