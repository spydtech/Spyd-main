import React from 'react'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'

function AiandMl() {
  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
  className="relative bg-cover bg-center h-96 flex items-center justify-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5f65/012d/2493b120083a11dbe601ded81d9cb5f3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1dP5Z7XA0OKoHCPQgXzVPSWXZ6rLnP-rYDp58bKIrxTNZyaMnYITOub-8SZmG0PRYh-280m6JGGpG7ETqE-EBSHTOg9-6YIIDTGvlI3BB2vxRSLERfkSxsoPnCLKHA0BhODnECL9uDpmr2dg6y0mn8Hx5eCX7SoMlMh0MlcsIPRIiwkwaafeighv0Tcex5wpUtYi9p5iMFuA8CZ-twqWc7e0yVkDnAvvZiYIDRU1PXMFReYr0v4LVkaDw8bksr45G4WBs8B5mZR2FOhrydG2PAhrfN00F56EOh3SLdAZuM8Le93QEotr3SFiQTKASNPRJJu1-mQ9dy78ILszI2law__")`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-blue-500 opacity-70"></div>

  {/* Centered text content */}
  <div className='space-y-5'>
  <h1 className="relative text-4xl text-center text-white">
    AI & Machine Learning
  </h1>
  <p className="relative text-xl text-center text-white ">
  We're working hard to bring you something amazing.
  </p>
  <p className='relative text-xl text-center text-white'> Stay tuned!</p>
  </div>
</div>



    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white rounded-lg"
    >
      <div className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Amazon Cloud
        </h2>
        <p className="text-gray-700 text-xl mb-4 text-justify">
        Amazon Web Services, Inc.
         is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals,
          companies, and governments, on a metered, pay-as-you-go basis. 
          Clients will often use this in combination with autoscaling.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/b9f0/b5ce/4c8a7baa65fda0a8e392045ae3b63a03?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFzFDCqwkpTGjB4EYSNTyvoZIIMAherrXnWyVhs0O8r1suUKsoJUwvQVapcDrWKOsTAB0X~7EmBl7T7aAsG6P1wc4EauEv5s1s4ySS4RHddQNEL5FK8ulWq4ys~Py3L5NAn7v7-OJm2QDW1GuHm57T7a6YfquDuKI7Gp7N5FlxcGVcOPxSH9NxAUwCWm90UZ2UC1lzkjFYc8~b1XqbYYEDT~0foPfkpN4AsIzkh3A4JvitjsTZiZc1Gb7JIkSdHjlwqClMSMtXknciBxIudMcUvaNfjRjKuzvflNkNCl1L4ysBnJUeoD-HVygpPsWaOHCzGHfmA1nKLwkgfWaewBFQ__" // Replace with an AI/ML illustration URL
          alt="AI and ML"
          className="w-[348px] h-[310px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white  rounded-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/cf50/fdbc/9a9538e8c0258400e577adec4cd2eae0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjLkC~QpZvbQ0jOVYD6~4DH7y4zXi8bY5T9~f0c0I-NjFN-u~hA~Q1pj1eOt1eVw1SM5-vVpbNvkJdH9OumpZCHQ4lEkn3CYcoQYT7~LU~Un2AB86PcwdYVDwh2Mk5jKHzRTWl6oJaV16nXbWTzLwVV7D65te~z8i7Zing9eFAWe5FS5aQB4uLuGB~YLYqaEZcUG7bnbD50d~ovgscHe0m07a42Y72k88y-a2bOtf931A8VgI-wdDrXlcXO0RCi-6~iGreTw9WRVPlg5Mas1Y4OIIu3SZ5oyVAQS-d8XER7qCUM2YhppPDqLAQmpHmqfBITu4rr3FSPpmL1vwjMG6Q__" // Replace with a Cloud Technologies illustration URL
          alt="Cloud Technologies"
          className="w-[320px] h-[320px] object-contain"
        />
      </div>
      <div className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Microsoft Azure Cloud
        </h2>
        <p className="text-gray-700 text-xl mb-4 text-justify">
        Microsoft Azure, often referred to as Azure, 
        is a cloud computing platform run by Microsoft. 
        It offers access, management, 
        and the development of applications and services through global data centers.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
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