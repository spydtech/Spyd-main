import React from 'react'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'

function CloudTech() {
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/1873/db09/ce0c79275d90f69fa33f6b31ce427992?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CL4zR4Kiw3n9SujoEfOoNb0XVgnCpUwr~gOGxt-3PDvLZlmvXVrNJPB5IRQDzECUBA~0Quj4PbEze~5zHHZ6ku39VKX1HPZuN1DMLWm5v-jaO8ra5fhjndULAi0696T~iM6MiugImev8Sr6MzMCcWYwAOz3LLlGLeofdJ2D0EDIU1ZvvFPKmO-W9vb3y5KBRul4sJwFJvaXIEGKfpSft27852tvups3BlGIlKHwUDHPgvFlgjjfcKntX2o8sv8zxNyx6yUFjelwuS1eEoeD6b6PdkIl16h98djAFyStw8Tttey2EQ9jGMjCpiD3vLQHYXVJT1axrM-UaElz0ELKG7Q__')", // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
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
      <div className="max-w-9xl mx-auto px-20">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent  rounded-lg ">
          <div className="md:w-1/2  space-y-10" >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            Google Cloud
            </h2>
            <p className="text-gray-700  text-xl mb-4 text-justify">
            Google Cloud Platform, offered by Google, 
            is a suite of cloud computing services that provides a 
            series of modular cloud services including computing, 
            data storage, data analytics, and machine learning, 
            alongside a set of management tools.
            </p>
            <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/fe12/9ca6/aa2df3ef326c6ee4f4cbd55001a07b8e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVko5JTyhdaRKnAX4mzwJA3aneF0fstbM80DcyPvUK-8RO5AQQAFsWQ9IyqRVf2Newt62acjcr4VpODbFSGosjkNtVDslaoghPBNRgQqRgOFijj5Eq26~O0yi9ndwgQScAu~PbGGNsCNW~7i3H0E3MqALH86Sc7OZq20JAWCmSMb1atE8nvYPp69yZS8jAcO5MkXgWIJeEOJg~mAElVaf2n7DOwecnKdtd2ahtzy2F9U-SOUtjSxUFxbZ7PH4iuFzdvOUvu0tyWTzrax2mKbHde~GOTNF2g4owgCirr63I4Y9j~GdGPwNgKAq7Rvry8W26SVN2WZq~35AQYa7sAeTQ__" // Replace with an illustration URL for Software Testing
              alt="Software Testing"
              className="w-[332px] h-[285px] object-contain"
            />
          </div>
        </div>

       
      </div>
    </div>
    <CallToAction />
    <Footer />
  </div>
  )
}

export default CloudTech