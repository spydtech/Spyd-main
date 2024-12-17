
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReadyToTest = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return (
        <>
            <div className=' pb-24'>

                <div
                data-aos="fade-down"
                className='md:p-24 '>
                    <p className='md:text-6xl text-center text-4xl pl-4 font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent'>Ready to test drive Close?
                    </p>
                </div>
                <div 
              
                className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                    <div 
                    data-aos="fade-left"
                    className='pt-5 md:w-[550px] md:h-[400px] h-[400px] bg-gradient-to-t from-blue-700 to-[#38bdf8] rounded-xl border-2 shadow-lg text-white md:p-16 '>
                        <div className='leading-7 flex flex-col items-center md:items-start' >
                            <div>
                            <svg width="52" height="54" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.8063 28.6113C50.7622 30.4258 51.3511 32.4109 51.5394 34.4531C51.7277 36.4953 51.5117 38.5546 50.9037 40.5133C50.2958 42.472 49.3078 44.2917 47.9962 45.8683C46.6847 47.445 45.0753 48.7478 43.26 49.7021L38.2465 52.3437L37.0137 52.9921C35.8811 53.5881 34.6266 53.9158 33.3473 53.9501C32.0679 53.9843 30.7977 53.7241 29.6348 53.1895L10.0555 44.8247L11.8992 39.3548L23.5433 41.6041L17.5131 30.1455L7.80493 11.6989L12.5343 9.21082L22.2425 27.6628L24.5786 26.4341L20.2988 18.296L25.0255 15.8093L29.3052 23.9474L31.6413 22.7187L28.3366 16.4377L33.0661 13.9495L36.3708 20.2305L38.7081 18.9912L36.44 14.6686L41.1681 12.1873L43.4361 16.5097L49.805 28.6153L49.8063 28.6113ZM4.58579 14.1884C3.60331 13.205 2.93418 11.9527 2.66284 10.5894C2.39151 9.22608 2.53014 7.81296 3.06124 6.52839C3.59234 5.24381 4.4921 4.14537 5.64694 3.37172C6.80178 2.59806 8.15993 2.18388 9.54996 2.18145C10.6764 2.18271 11.7861 2.45415 12.7859 2.97298C13.7858 3.49181 14.6466 4.24291 15.2961 5.16322C15.9456 6.08354 16.3649 7.14623 16.5188 8.2621C16.6727 9.37798 16.5566 10.5145 16.1804 11.5763L17.4212 13.9215C18.2512 12.5302 18.6979 10.9438 18.716 9.32384C18.7341 7.70384 18.3228 6.10794 17.5241 4.6984C16.7254 3.28887 15.5677 2.11596 14.1687 1.29894C12.7697 0.481923 11.1793 0.0499265 9.55922 0.046875C7.18517 0.0472088 4.9038 0.968463 3.19523 2.61677C1.48665 4.26508 0.484095 6.5119 0.398539 8.88441C0.312983 11.2569 1.1511 13.5701 2.73651 15.3372C4.32193 17.1043 6.531 18.1875 8.89887 18.3588L7.65141 15.9867C6.49177 15.6612 5.43582 15.0417 4.58579 14.1884Z" fill="white"/>
</svg>

                            </div>
                            <div className='text-3xl font-semibold py-4'>Start your trial</div>
                            <div className='text-xl py-4 text-center md:text-left'>Unlock the power of Close with a 14-day free trial of a Business plan. No credit card required.</div>
                            <div className='bg-white py-2 px-16 text-blue-600 rounded text-lg hover:bg-white hover:text-black'>
                                <button >Try Close &#8594; </button>
                            </div>
                        </div>

                    </div>
                    <div 
                    data-aos="fade-right"
                    className='pt-5 md:w-[550px] md:h-[400px] h-[400px] bg-gray-100 rounded-xl border-2 border-blue-500 text-black md:p-16 '>
                        <div className='leading-7 flex flex-col items-center md:items-start' >
                            <div > 
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 20C27.6522 20 30.1957 18.9464 32.0711 17.0711C33.9464 15.1957 35 12.6522 35 10C35 7.34784 33.9464 4.8043 32.0711 2.92893C30.1957 1.05357 27.6522 0 25 0C22.3478 0 19.8043 1.05357 17.9289 2.92893C16.0536 4.8043 15 7.34784 15 10C15 12.6522 16.0536 15.1957 17.9289 17.0711C19.8043 18.9464 22.3478 20 25 20ZM8.75 27.5C10.4076 27.5 11.9973 26.8415 13.1694 25.6694C14.3415 24.4973 15 22.9076 15 21.25C15 19.5924 14.3415 18.0027 13.1694 16.8306C11.9973 15.6585 10.4076 15 8.75 15C7.0924 15 5.50269 15.6585 4.33058 16.8306C3.15848 18.0027 2.5 19.5924 2.5 21.25C2.5 22.9076 3.15848 24.4973 4.33058 25.6694C5.50269 26.8415 7.0924 27.5 8.75 27.5ZM47.5 21.25C47.5 22.9076 46.8415 24.4973 45.6694 25.6694C44.4973 26.8415 42.9076 27.5 41.25 27.5C39.5924 27.5 38.0027 26.8415 36.8306 25.6694C35.6585 24.4973 35 22.9076 35 21.25C35 19.5924 35.6585 18.0027 36.8306 16.8306C38.0027 15.6585 39.5924 15 41.25 15C42.9076 15 44.4973 15.6585 45.6694 16.8306C46.8415 18.0027 47.5 19.5924 47.5 21.25ZM25 22.5C28.3152 22.5 31.4946 23.817 33.8388 26.1612C36.183 28.5054 37.5 31.6848 37.5 35V50H12.5V35C12.5 31.6848 13.817 28.5054 16.1612 26.1612C18.5054 23.817 21.6848 22.5 25 22.5ZM7.5 35C7.5 33.2675 7.75 31.595 8.22 30.015L7.795 30.05C5.6522 30.2853 3.67166 31.3033 2.23316 32.9088C0.794654 34.5143 -0.000559397 36.5943 2.95244e-07 38.75V50H7.5V35ZM50 50V38.75C50.0003 36.5209 49.1498 34.3758 47.6222 32.7524C46.0946 31.1291 44.005 30.15 41.78 30.015C42.2475 31.595 42.5 33.2675 42.5 35V50H50Z" fill="url(#paint0_linear_1889_5418)"/>
<defs>
<linearGradient id="paint0_linear_1889_5418" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
<stop stop-color="#00CEFF"/>
<stop offset="1" stop-color="#0072FF"/>

</linearGradient>
</defs>
</svg>
</div>
                            <div className='text-3xl font-semibold py-4 bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent'>Talk to a human</div>
                            <div className='text-xl py-4 text-center md:text-left'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</div>
                            <div className='bg-gradient-to-r from-[#38bdf8] to-blue-700  py-2 px-16 rounded text-lg text-white hover:bg-white hover:text-black hover:border border-black'>
                                <button>Book a Call &#8594; </button>
                            </div>
                        </div>

                    </div>
                    {/* <div className='bg-gray-100 md:w-[600px] md:h-[450px] h-[400px] rounded-2xl text-black md:p-24 '>
                        <div className='leading-7' >
                            <img src={People} />
                            <p className='text-3xl font-semibold py-4'>Talk to a human</p>
                            <p className='text-xl py-4'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</p>
                            <div className='bg-black p-6 w-[170px] rounded-xl text-lg'>
                                <button className='text-white'>Book a Call &#8594; </button>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </>
    )
}

export default ReadyToTest