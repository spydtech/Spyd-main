import React from 'react'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'

function AiandMl() {
  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
  className="relative bg-cover bg-center md:h-96 h-40 flex items-center justify-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5f65/012d/2493b120083a11dbe601ded81d9cb5f3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1dP5Z7XA0OKoHCPQgXzVPSWXZ6rLnP-rYDp58bKIrxTNZyaMnYITOub-8SZmG0PRYh-280m6JGGpG7ETqE-EBSHTOg9-6YIIDTGvlI3BB2vxRSLERfkSxsoPnCLKHA0BhODnECL9uDpmr2dg6y0mn8Hx5eCX7SoMlMh0MlcsIPRIiwkwaafeighv0Tcex5wpUtYi9p5iMFuA8CZ-twqWc7e0yVkDnAvvZiYIDRU1PXMFReYr0v4LVkaDw8bksr45G4WBs8B5mZR2FOhrydG2PAhrfN00F56EOh3SLdAZuM8Le93QEotr3SFiQTKASNPRJJu1-mQ9dy78ILszI2law__")`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-blue-500 opacity-70"></div>

  {/* Centered text content */}
  <div className='space-y-5'>
  <h1 className="relative md:text-4xl text-lg text-center text-white">
    AI & Machine Learning
  </h1>
  <p className="relative md:text-xl text-sm text-center text-white ">
  We're working hard to bring you something amazing.
  </p>
  <p className='relative md:text-xl  text-sm text-center text-white'> Stay tuned!</p>
  </div>
</div>



    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-10 mt-5 md:p-6 md:px-20 px-4  bg-white rounded-lg"
    >
      <div className="md:w-1/2 w-full md:space-y-10">
        <h2 className="md:text-2xl text-xl  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        About Ai...?
        </h2>
        <p className="text-gray-700 md:text-lg text-sm md:mb-4 text-justify">
        Artificial intelligence is the intelligence of machines or software, 
        as opposed to the intelligence of other living beings, primarily of humans.
         It is a field of study in computer science that develops and studies intelligent machines. 
         Such machines may be called AIs.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  md:mt-0 mt-2   text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
      <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/0ec0/9eb9/9e36000ee5ebc2027d420dca4e7b5cc0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTyo6YdlmXL7H8r40w7u2akYhLsPnbW4ew~1xsBHoAH366JmbGRnUBBfVBrQKvr6qU-UCtXV8LrWDddT4ZDo4rA2awjsKUtAiEBKShL~6NePCvfrckhZg~1zecIka3xZdPWXHnCYwggS-kPzqlu4hhqUyWNXAPsXln1brDX1F0o5Y~Ce3dREy~UtSGWs03S~4MTBzF7NHuOClLdw~3L-EETW~P7z5ykFbc-YLaAqYzY0U~DRPs131Vh0XRzmSAMiNiw2q1srhhm8~n8qYj9o9d7mgcc1M9-0g8JQh4WghZPWw6EBzUzjhdbZ2dco0j5bNfQ6EJ1aSgxVwHsI3czSyg__" // Replace with an AI/ML illustration URL
          alt="AI and ML"
          className="md:w-[455px] md:h-[349px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-10 mt-5 md:p-6 px-4 md:px-20 bg-white  rounded-lg">
      <div className="md:w-1/2 md:mt-6 mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/a832/a0a3/9630cbebe1f3b2dc02f3b54ad0ed97b0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTcYV-u1xcr3BXakswbsPH7MPCNBvVn-5YAB7I1dDgsGoM1kxs0X-HX6Le~wAy2M4rPNBE3DDsGBzC8kpvHcJmaT22BRvLcYSAKn9ofj8lTBEhGvRoT~qujavq5HCUINd1y~rf7ZcsHAPaDtIU~DPw44BjBE8Slxx1Lancv00UswA2W-lZHR9zWbeLO6df0gtMiwCF9iLmlsVVgyFQfqY4KQkJeWSTZOSU2Lw9ELhEIvnr0UjzWovAZx-zp6CvbvYvfIpScdOpYXyoItmkB3uKoNaRr5SFL1xJb3AgNo0JpxUjILh3KbePS8js1eFPwePtj7t0eFKwuZA~KylqKDOA__" // Replace with a Cloud Technologies illustration URL
          alt="Cloud Technologies"
          className="md:w-[421px] md:h-[430px] object-contain"
        />
      </div>
      <div className="md:w-1/2 md:space-y-10">
        <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        About Machine Learning...?
        </h2>
        <p className="text-gray-700 md:text-lg text-sm md:mb-4 text-justify">
        Machine Learning is a field of study in artificial 
        intelligence concerned with the development and study 
        of statistical algorithms that can learn from data and generalize to unseen data,
         and thus perform tasks without explicit instructions. 
         Recently, artificial neural networks have been able to surpass many previous approaches in performance.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 md:mt-0 mt-2  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
    <div
     
    >
      
    </div>
    <CallToAction />
    <Footer />
  </div>
  )
}

export default AiandMl