import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const CarouselComponent = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-white w-full ">
      <div className="max-w-8xl mx-auto mt-[-5%]">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div class="sm:mt-6 lg:mt-5 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
                ENTERPRISE & CUSTOM APPLICATION DEVELOPMENT
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                ERPNext: SPY D TECHNOLOGY deep experience, expertise, and
                exposure in designing and developing enterprise and custom web
                applications catering to myriad industries.
              </p>
              <div className="flex justify-center md:justify-start gap-10">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-14 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                  EXPLORE
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  CONTACT US
                </button>
              </div>
              </div>
    {/* <!--   Image Section     --> */}
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
        src="https://s3-alpha-sig.figma.com/img/5424/c0b8/aa550aa276edb11670260a7b35670f71?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSK9meQCS3lXwijIdmTzOhjedlDkEqnEWOag8K2v5MbrX3IIIS2H2fIgX1tYehqDy2fZXv2GRjm9ID0cUU3xPoITLtOEQn-UDmaiLpttXxaOS~n3~LrQeHwPYJaSnF1-yHKBDAzIgSXpP0mzoPCRAP9zYLPEWrKgvEZqWCEBU7oe5WaC9Gvr8Utm48TuJcwDL5tOSAJmi0NBOZ5sYDqZQVX85lnv6HUx8u6JhN9nRb-oAqlXxP7xBlvBO8gsvf1b-m2DKove3vv4o-h8tLYsscANipNph8fIWM-M9KQ9kfJotGX2ozmESnmA1D1anNBv~JThsr8c5-jCVTO1W1Drtg__" 
        alt=""/>
    
    </div>
    {/* <!--   End of Image Section     --> */}
</div>

</div>
        

          {/* Slide 2 */}
          <div class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col-reverse lg:flex-row">
    <div class="lg:inset-y-0 lg:right-0 lg:w-2/4 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
        src="https://s3-alpha-sig.figma.com/img/5cd2/8a40/77d8e6165da2eb7281a65b97759563f0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nieujkBzNn2wLdVnDjUSeQEIkHaAgRIjzHx6Y2uF~TnxMUsmn8FSMF3DDEpj~UrO30Sl9ZajAr~rm2V7GcJG2n~ftpYd1dWjPkutvpM7ATmz4m21tuZhy4AGYmWk3ps~hoQQt1f6F7c0bLJUPIN4VWrfu46ycW-x866~eiHlUv~shP6u2TXp0fQzNsMuqqYL1LztucjlGAyzp5vQKKAYAZ1huefB0DIWLn1tkIxLi0FoQ7RO5oddGb-d-tUPyyK0iNW6fUrh5Nyot-K3MWCKuzsX76pwzV~h9q~4gZ0ws5n0cg7MUTup~lflDLqAVbPazZ3wWnW-aMsXx9twd938Gg__" 
        alt=""/>
    
    </div>
    <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
              MOBILITY SOLUTIONS WITH CUTTING EDGE TECHNOLOGY
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 md:w-[500px]">
              Our Core Expertise is in ideating,
               conceptualizing, designing, 
               developing and deploying state-of-the-art mobile applications for Android, 
               IOS and Hybrid Platforms.
              </p>
              <div className="flex justify-center md:justify-start gap-10">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-14 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                  EXPLORE
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-10 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  CONTACT US
                </button>
              </div>
              </div>
    {/* <!--   Image Section     --> */}
    
    {/* <!--   End of Image Section     --> */}
</div>

</div>


{/* slide 3 */}
<div class="sm:mt-6 lg:mt-5 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
              FULL SERVICES DIGITAL MARKETING
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
              We ideate, conceptualize, 
              and leverage diversified tools and technologies to build flexible, 
              scalable, and optimized CMS based E-Commerce Platforms, 
              Web Portals, Web Applications and Websites that drives business growth for our clients.
              </p>
              <div className="flex justify-center md:justify-start gap-10">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-14 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                  EXPLORE
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  CONTACT US
                </button>
              </div>
              </div>
    {/* <!--   Image Section     --> */}
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
        src="https://s3-alpha-sig.figma.com/img/9a7a/f474/0ea21653bf6c340df2281af544c18357?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WT9EPrTn6zYHDKqezM1pbtTE3WaXhuNG9DqqfV5vnpgqrgcFmqfN1~9ix-fijcN43fZmZGb9fp7GcBZuQYTdSmWXZw51Q-ttkcQy7C01~TeBCUNKwdSlrpU2U8jgL9AxddrmpUzNXHx9E8Zz1rm3sy2gdLbRRBDec2Dl3zdXT-WyQGYsND42e1dfrqlMXtn8CgBnm7MTcsEm~p1d4AsO8inh34pcUhiRSirl8mwNRnrsCBVPPH5SJXeGQAEKRFe62OlbAFnMdcWb5Svuhvs2K8yF8rCuZwvlpAqGcYvJ9cdOLSEFZ09remuDlgvCm~WnOuqTflG10drws3gVkDoQeQ__" 
        alt=""/>
    
    </div>
    {/* <!--   End of Image Section     --> */}
</div>

</div>

{/* slide 4 */}
<div class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col-reverse lg:flex-row">
    <div class="lg:inset-y-0 lg:right-0 lg:w-[548px]  h-[350px] my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
        src="https://s3-alpha-sig.figma.com/img/ac15/4035/efbc747a8026ad8996b9592da2b4de0c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EajTCzg-bGEbcYXtuiDB8CVNaRRm6qy1fZd3vFdqcVkjUh1TmymuuiorJkjWR~6nyuD6UF~W-VPOGFL7RY-XBIA~L6p1UYqu76dtGtbVWXeCdx-VWAW56hvYaujNhJtpmDrCnjQ3VGMpOQFja1DXX~TNTnQdBJhwaYSLJH~UtPmvC6qiaKOx9Nw-KpvVTrDXkOqO~9J3bdAD9Hv1TqZ~jQlBEV2pKwKjwGLvTrn81suDDkTMCF~UOfAtaenwX1qwFNRF9w9fxLxmemaeA9EcFSEWGnJyYmp3~8ArxvdTdb5vzUcSnznpiPyqXMRnrVGAOru~45xI~vcEKoXshGxCSQ__" 
        alt=""/>
    
    </div>
    <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
              Empower Your Business with Cutting-Edge Microsoft Solutions
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
              Where innovation meets expertise in Microsoft technology solutions. 
              With our comprehensive suite of services, 
              we empower businesses to unlock their full potential and thrive in today's digital landscape.
               Explore how SpY D Technology can transform your business with Microsoft technology
              </p>
              <div className="flex justify-center md:justify-start gap-10">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-14 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                  EXPLORE
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-10 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  CONTACT US
                </button>
              </div>
              </div>
    {/* <!--   Image Section     --> */}
    
    {/* <!--   End of Image Section     --> */}
</div>

</div>

{/* slide 5 */}

<div class="sm:mt-6 lg:mt-5 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent mb-4">
              Empower Your Business with Artificial Inteligency,cloud technologies and testing solutions
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
              Our SpY D technology expert in Artificial Inteligency and cloud technologies. 
              We give the soloutions for the software testing.
              </p>
              <div className="flex justify-center md:justify-start gap-10">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-14 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
                  EXPLORE
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  CONTACT US
                </button>
              </div>
              </div>
    {/* <!--   Image Section     --> */}
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
        src="https://s3-alpha-sig.figma.com/img/1989/929c/7f2293b8e3d6f7ecd5bbae314bae2092?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTX9lvqn-mAT0loPT6Q8mp30d9LPZOWwRNJA03zWp8s26zkEF8wrNLcjRWe2cnlUw4zjO3xQQ1kvTP-AigtKKMlfU7~gVg-O4KZZJ-NGO2qaBgtQTruNm7iMy~nOm9hckQ2en6ChHW72Md9OnKfZ2BXHe0WlIK1872h1el-S1reBosP-8EWuIeALuKU6ZdBbj3ddhd8IAYidQmZ~Xk50NbFgoEB5CLl2UKEXxNommdxJpd~srjoP--GrEQfT-D-xRXHXeQBWAgYMsAWTjmsTDO0GdVWiJCbnNm0ATd4-WhfqGa4D9Li0lELcHkP~6Let5UkI8oQYSD4NZrYsWTdhng__" 
        alt=""/>
    
    </div>
    {/* <!--   End of Image Section     --> */}
</div>

</div>
        

        
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
