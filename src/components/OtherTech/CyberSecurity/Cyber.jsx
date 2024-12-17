import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import CarouselComponent from "./CarouselComponent";
import Footer from '../../Footer';




function Cyber() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      <div className="relative">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-blue-business-tech-business-card-background-image_239798.jpg"
          data-aos=""
          className="inset-0 h-[70vh] w-full lg:w-full xl:w-full sm:w-full "
          alt="Background 1"
        />
        <div className="absolute inset-0 h-[70vh] w-full lg:w-full lg:max-w-none sm:w-full bg-black bg-opacity-50 rounded-lg"></div>
        <div className='absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:w-[50%] lg:w-[50%] text-start text-white font-bold px-5'>
        <div className='ml-[50%] md:ml-[125%]'>
        <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        <div class="rounded-md h-44 w-44 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
        
          <h1 className='text-2xl md:text-4xl lg:text-4xl'>The <a  data-aos="fade-up-right"
          className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-white'>"SpY D Technology"</a> Cyber Security Solutions</h1>
          <p className='text-lg md:text-xl'>"At Spy D Technology, we understand the critical importance of safeguarding your digital assets against evolving cyber threats.  </p>
          
        </div>
      </div>
      
      <div
        className="text-center items-center bg-gradient-to-br from-blue-500 to-gray-900 text-white font-bold py-4 relative pt-10"
        data-aos="fade-up"
      >
        <p className='text-lg md:2xl text-center p-10'>" Our comprehensive cyber security solutions are designed to protect your business, your data,
            and your reputation in an increasingly complex online landscape.".</p>
        <h1 className="text-4xl">Cyber Security Solutions</h1>
        <div class="rounded-md text-center h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        <div class="rounded-md text-center h-24 w-24 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>

        <CarouselComponent />
      </div>

      <div>
        <div class="bg-gray-900 text-white py-12">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center"
              data-aos="fade-up"
            >
              <h2 class="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
                Get Started Today
              </h2>

              <h1 class="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
                Why Choose
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-white">
                  SpY D Technology?
                </span>
              </h1>
              <p class="mt-6 text-md text-white max-w-lg text-center">
                Don't wait until it's too late. Contact{" "}
                <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-white">
                  "SpY D Technology,,
                </a>{" "}
                today to learn more about how our cyber security solutions can
                help protect your business from cyber threats and
                vulnerabilities. Together, we can secure your digital future.
              </p>
            </div>
            <div
              class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
              data-aos="fade-up"
            >
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-white">
                    <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        ></path>
                      </svg>
                    </div>
                    Expertise:
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-white">
                    Our team consists of highly skilled cyber security
                    professionals with years of experience in protecting
                    organizations of all sizes across various industries.
                  </dd>
                </div>
                <div class="relative pl-16" data-aos="fade-up">
                  <dt class="text-base font-semibold leading-7 text-white">
                    <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    Proactive Approach:
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-white">
                    We believe in staying ahead of the curve by continuously
                    monitoring emerging threats and adapting our security
                    measures to mitigate risks effectively.
                  </dd>
                </div>
                <div class="relative pl-16" data-aos="fade-up">
                  <dt class="text-base font-semibold leading-7 text-white">
                    <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    Client-Centric Solutions:
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-white">
                    We understand that every organization has unique security
                    needs and priorities. That's why we tailor our solutions to
                    align with your specific requirements and objectives.
                  </dd>
                </div>
                <div class="relative pl-16" data-aos="fade-up">
                  <dt class="text-base font-semibold leading-7 text-white">
                    <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-6 w-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        ></path>
                      </svg>
                    </div>
                    24/7 Customer Support
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-white">
                    Your security is our top priority. Our dedicated support
                    team is available round-the-clock to address any concerns or
                    emergencies promptly.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-500 to-gray-900 text-white h-screen px-4">
          <div class="container mx-auto py-16 dark:text-white">
            <div class="text-center" data-aos="fade-up">
              <h1 className="text-gray-100 text-2xl "> WE ARE</h1>
              <h2 class=" text-xl md:text-4xl my-4">
                <a>SpY D Technology</a> Spend 30,000 Hours Per Year to Virus
                Threats
              </h2>
              <div class="max-w-xl md:max-w-4xl mx-auto dark:text-gray-300">
                <p>
                  "Fugiat nulla pariatur excepteur sint occaecat cupidatat non
                  proident, sunt in culpa rui officia deserunt mollit anim id
                  est laborum incidunt ut labore et dolore magnam.
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-2 mx-auto max-w-xl md:max-w-2xl gap-4 my-4"
              data-aos="fade-up"
            >
              <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl ">
                  150<span class="text-yellow-500">+</span>
                </div>
                <div class="text-300 text-uppercase">Features Analyzed</div>
              </div>
              <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl ">
                  60<span class="text-teal-500">+</span>
                </div>
                <div class="text-300 text-uppercase">Modules</div>
              </div>
              <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl ">
                  5<span class="text-pink-500">+</span>
                </div>
                <div class="text-300 text-uppercase">Functionalities</div>
              </div>
              <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl ">
                  4<span class="text-violet-500">+</span>
                </div>
                <div class="text-300 text-uppercase">
                  File Formats Supported
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

     
    </>
  );
}

export default Cyber;
