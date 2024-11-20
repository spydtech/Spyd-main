import React from 'react'
import Footer from '../Footer'
import CallToAction from '../CallToAction'

function AdvancedTech() {
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/b126/4e49/50d67f5c9d5d76d6488cdbd390a7ba87?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCaPOr-chRcYXlSyeTvM99h83BWW5QvfxYsYY2v33xZAA3Pcd6xIa~isGgJVRG2ixhMPHkgBuWnYwk9EAqnJ~YLgstJLTaNrtpkJOyZ43IpFSmD9ApjEjsWSQXrUCJKOjTKlyqHpIB5Pe1W2hY9AT~cj00ID4ySPOLKH~xkPWGDxXE0xhgRVpDWV7ggVzZXgKE8VeVPNQlhaArRzePxnEZRxeWJUCb4YcLbT3WX94n8EDLXptfBnpNusWTxWxbprOkWIHwfPC-d3ifTZyBnKS73G~GfG0WoyOamu6GVrS5onCxtMXCrRH-8FGLqsWE7tYkqzz3erjR7tPilREG9Sow__')", // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>

    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white rounded-lg">
      <div className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
          What is AI and ML?
        </h2>
        <p className="text-gray-700 text-xl mb-4 text-justify">
          Machine learning is a field of study in artificial intelligence
          concerned with the development and study of statistical algorithms
          that can learn from data and generalize to unseen data, and thus
          perform tasks without explicit programming.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/c8ca/617a/602e42a00b210eee122e33ad2b35d141?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTtG43rG1W0BFbWvpJE72VWPr3nBFQd0ltnXNIf0pLXiN2HGeTlEDsuucKG1YloL-2nvZNx3Mw8Z8AANaw1rHB0m85f7f8x~zV8-htbDhPIx-KMbbeGgzWunj3u6CRU~pIoWeAruB6cPvAVZJxHY7tvou~u5PnnkKoEOJdGM~aE7jSH8GpN~-Wa49yuqF08NxubCkabC8R5oCFqz8vgP78vOo18Fzu~cxL~dcNL1irKgOO21Vq6czVZhfMy1igR8N8jlOJz561bRDNwnQv8q4VwCtof4~XJXI-WP45aiEJVpBAFW-5ufyV76RBWINREQP8VVN52frpk4nXeeC8yaJg__" // Replace with an AI/ML illustration URL
          alt="AI and ML"
          className="w-[344px] h-[338px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 px-20 bg-white shadow-lg rounded-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/b546/6c4b/8a2b859c44b9b194d2e7d67e9b17a935?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsK4S0EK8vHKbqJPo3jSOn2wS5SnXkFADWUni4z3Akt18WZYzq3q~1qZuYPBTplhUOP3HTblI6XhQd3X6C0HLSTBcX4PEUFxZVfkDW2exxAUCUahHmK9qZnQ7ETmwb6OzjvJ5CsgIpCnE94icpHbGDPJUsGJMDeemcBT0ypuu28fNDmKyLdUx8LqvEVlbOVFhjqP9nmo6rKlFfoqrHSs2QqSyuZeVbN2wRH7Q1ps9AUu3nSkjXEWM1PjxNgEVILMVsRnHnzXZi~uC1cgEUSrHkMMeF9j8tQD4481mnFzBgGgJZtdgh5Wy~CAquk2CFoSpWYK5onU4PqHOEO9aizHkw__" // Replace with a Cloud Technologies illustration URL
          alt="Cloud Technologies"
          className="w-[464px] h-[379px] object-contain"
        />
      </div>
      <div className="md:w-1/2 space-y-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
          What is Cloud Technologies?
        </h2>
        <p className="text-gray-700 text-xl mb-4 text-justify">
          Cloud computing is the on-demand availability of computer system
          resources, especially data storage and computing power, without
          direct active management by the user. Large clouds often have
          functions distributed over multiple locations, each of which is a
          data center.
        </p>
        <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
    <div
      className="bg-cover bg-center min-h-screen "
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d081/1a7c/9a7bf3e611bc417e4a1bed61e8d6114f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipcFwCf9rKWpopyzFOtJQ9Ze~sXYkYn-bEzyLNvkp7X2ciHfLYDqVAqYboio0bvMqSrwCXPQJZQkujv9f96t8EcJx4Ngr22vcgCkwz9VTN7YLHN-8w-i1UCBbzBTIJZsdgESDlxoUwEn93c-G2~6KmCXh4zPRmYHz8CRVnE9UZ6BvoI3H6WUCpjjjdW-mSZ3Bbi9TSlLKv42yMHwz1shaFfdZ3wD8GSzShv866lWseMO8OhF0X-p8Vvqmh4Ie5Q1sfQQqjEsgHvKkIsBJy7NosCF-1Z0uEAgWJmPREczy1cvazUV1bwrbg7WtiHZB1AqBva8DBXi1pijn6E9axtntw__')", // Replace with the actual background image URL
      
    }}
    >
      <div className="max-w-9xl mx-auto px-20">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent  rounded-lg ">
          <div className="md:w-1/2  space-y-10" >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
              Software Testing:
            </h2>
            <p className="text-gray-700  text-xl mb-4 text-justify">
              Software testing is the act of examining the artifacts and the
              behavior of the software under test by verification and validation.
              Software testing can also provide an objective, independent view
              of the software to allow the business to appreciate and understand
              the risks of software implementation.
            </p>
            <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/603f/7bd9/501dbd5a854984585b58cd0368068d05?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y8BONAoqW27ZURipxpi3ACiMThWIIp0~RJH5dnIhLvrmZvK8iXBQ2mr2FYnzodgb7DlxIDO3b78GdJUkxk9C2uSNv3LaD3zhKPa4fWhHQ4DosvuowoGUN43v01fNHdIe282uhkSKB9W3mGuRBu~K~crJ~uDHEYFuTJAAD5cvwz7qL8a0oiEFn9jhNDMxXmWP~FINA9a4MQvKpJgVRAvQK7Drz1fj74tJvJpNOZizzfyMYJmDQVZhzYE3X7cwbLuNa8MzSgrNDH23rUBz3SKbF8bm1JQTDotIl4~cxhqgqV2~L13ge77HI70I~sAvrLPTJeZeas3Bxa0H6iCrnUakNw__" // Replace with an illustration URL for Software Testing
              alt="Software Testing"
              className="w-[408px] h-[438px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between  px-20  bg-white bg-opacity-95 bg-transparent  rounded-lg">
          <div className="md:w-1/2 space-y-10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
              What is Cyber Security:
            </h2>
            <p className="text-gray-700 text-xl  mb-4 text-justify">
              Cyber security is the practice of defending computers, servers,
              mobile devices, electronic systems, networks, and data from
              malicious attacks. It’s also known as information technology
              security or electronic information security. The term applies in a
              variety of contexts, from business to mobile computing.
            </p>
            <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6a65/a80a/230ce9e5088aefae6a9d7b3bd7760425?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-KIf2sB9pbjA8L~ZtvMB033DggYTVSZHg1aSzR7jMRqr9DOB7FwgVi29naUJCojLS0VxqsrGCCMkwQwah8MOyeTIo8qv1FLQ4naoRDR~N749Uts2kppitslLO2eZeVU~u4uTpf77fWPOyaIDikW7otaV4DzWd6tW3eVnv16v6fXu1Wsg7euv29~-4S0okcOmgITUfj44bsRDaVewFM-IwP~ieuGkYIuKPBrSXtQ3~poH~bCNDgmywkY5EuJHraSe~Qso~izXk4bLyes6fdcF-3jVoPKa61ub0WTAF3SoDQIc2MpAHMkvpMM0kQHO2~oaK61VoMQLgv1BcjerYIMsg__" // Replace with an illustration URL for Cyber Security
              alt="Cyber Security"
              className="w-[464px] h-[379px] object-contain"
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

export default AdvancedTech