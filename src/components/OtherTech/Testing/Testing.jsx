import React from 'react'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'

function Testing() {
  return (
    <div className="">
    {/* Background Header Section */}
    <div
      className="bg-cover bg-center md:h-96  h-44 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/0910/63bc/30f3001a6c90bce9084b0eddd9d6eff1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FEZhZn1jLmA9uI8pxGLv7KGgDr93K30HSK8c2ruAL9wi856e~anFR049-ZHQ3L6gNfjCukcpFRGC3VEQrROrtBOxBp4ukVKB8Nv00Cm1p~6gL2gwKfjawi1e8qeT94g3jfBvxtSTWuuzmyM~lbg2dVT8WMvEIQVt53-8a7a7GmgMWQ9aVgWeX6BqkvOk2HKCVtzRCNBNcmfzp5rbK1D0oszpvEGwqu14ACP4dy7SgqLxgotoY3jE9SRhZ8XlN~XPVS8tjU91GCmyZpfMniOwDIixiGaZbd7O9BjfURSWye8NVKIuy55OgpZ9SLY7C~B4mQwdE8zPrmz4R2nwrFfUZw__')", // Replace with the actual image URL
      }}
    >
      {/* <h1 className="text-4xl font-bold text-white">Learn About AI & Cloud Technologies</h1> */}
    </div>

    {/* AI and ML Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-10 p-6 md:px-20 bg-white rounded-lg">
      <div className="md:w-1/2 md:space-y-10">
        <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        ETL Testing
        </h2>
        <p className="text-gray-700 md:text-xl text-sm mb-4 text-justify">
        ETL in testing means an extract, 
        transform and load process that reads data from multiple source systems, 
        transports it to a data transformation layer 
        for further processing which includes cleaning, 
        consolidating, integrating, and then loading into a target database or file.
        </p>
        {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold  text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button> */}
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/1f17/d9e9/aa3ca70281343398b1f3e8fe39b2a500?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAKEf8KLin698MDTmOhhs8TkImEa4qqX31uZJ-oToFn-J8jITCzwFVQJD7Z0maSuoezT2W8sIBxX2tiZ~6fZ6ermeY2pjtjU8PayMBdZZMgO8pSW~hARYxy3MTx~-mqCxgSvAHcn4JClPn4nCDCZrzmu-4-HISRlcAmo3wGS1dpdc4NNkzR1Xpv0F0B1b3k7MwhaG1tX4dEYvU~draSRW6l0EO0ec7ALXNepgkx6nReGB56zO-JukIhNV3IZE~Gy1vFrXj~jOJa4eQmwlT3dHb3TXSH1spLan117m3w94yjHu2aeg2mU0w3J6s5hIld3vJMefzXVkRqHoEciu97cBQ__" // Replace with an AI/ML illustration URL
          alt="AI and ML"
          className="md:w-[363px] md:h-[278px] object-contain"
        />
      </div>
    </div>

    {/* Cloud Technologies Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 p-6 md:px-20 bg-white  rounded-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/9206/1f12/1fecb3aba98e4967f3833a9efc813e19?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A8ByY0D~qW3WHRi83dUB24TqiVY6VZX5M2oJoZG4ijWkAwfAkFM~tIH~cy1ojThdqLoEDVoODlBDv1GWpkZdS9FiUmzCgr3MameyjuEgCUSqB8VLeW~wTwyZDlQCcdsA9HHQEtZIrqwNFdcGhbun0s20cBi2ubhkeOS796gDWf2-gpvM4-Ir1icGQfOgmXBeeHd3Erfpi3xAS1lDtu55mvJj6qiwPtTtTJMXoJQgdHbMPanrHr3t-ov5SAEwGDkoW8Y9aWyO0cO18eApewfYu8WQ06Gnz3503bNZCbqyTaeKFl9AnK4-NvCvlwbImX9PnJXwFDWFsHWXgTVwufYBhw__" // Replace with a Cloud Technologies illustration URL
          alt="Cloud Technologies"
          className="md:w-[382px] md:h-[266px] object-contain"
        />
      </div>
      <div className="md:w-1/2 md:space-y-10 space-y-5 mt-5 md:mt-0">
        <h2 className="md:text-2xl text-lg  bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
        Selenium Testing
        </h2>
        <p className="text-gray-700 md:text-xl text-sm mb-4 text-justify">
        Selenium is a free (open-source) automated testing 
        framework used to validate web applications a
        cross different browsers and platforms. 
        You can use multiple programming languages like Java, C#, Python, 
        etc to create Selenium Test Scripts. 
        Testing done using the Selenium testing tool is usually referred to as Selenium Testing.
        </p>
        {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700  font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
          Read More
        </button> */}
      </div>
    </div>
    <div
      className="bg-cover bg-center min-h-screen "
    //   style={{
    //     backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d081/1a7c/9a7bf3e611bc417e4a1bed61e8d6114f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipcFwCf9rKWpopyzFOtJQ9Ze~sXYkYn-bEzyLNvkp7X2ciHfLYDqVAqYboio0bvMqSrwCXPQJZQkujv9f96t8EcJx4Ngr22vcgCkwz9VTN7YLHN-8w-i1UCBbzBTIJZsdgESDlxoUwEn93c-G2~6KmCXh4zPRmYHz8CRVnE9UZ6BvoI3H6WUCpjjjdW-mSZ3Bbi9TSlLKv42yMHwz1shaFfdZ3wD8GSzShv866lWseMO8OhF0X-p8Vvqmh4Ie5Q1sfQQqjEsgHvKkIsBJy7NosCF-1Z0uEAgWJmPREczy1cvazUV1bwrbg7WtiHZB1AqBva8DBXi1pijn6E9axtntw__')", // Replace with the actual background image URL
      
    // }}
    >
      <div className="max-w-9xl mx-auto md:px-20 px-6">
        {/* Software Testing Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  bg-white bg-opacity-95 bg-transparent  rounded-lg ">
          <div className="md:w-1/2  md:space-y-10" >
            <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            QA Testing
            </h2>
            <p className="text-gray-700  md:text-xl text-sm mb-4 text-justify">
            Quality assurance testing, or QA testing, 
            is a vital step in the software development cycle. 
            Effective QA testing reveals errors and inconsistencies 
            that can affect the real-world use of the software being developed.
             When done correctly, QA testing ensures product longevity while saving companies time and money.
            </p>
            {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button> */}
          </div>
          <div className="md:w-1/2 md:mt-6 md:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/ad50/b971/1afb4d20619865efa10b4b8fd2f6216d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=goCdQER2j0wgu78cocGxk7Yn~pVHbkTeMjISuUAapf1lqfTAfqd3kQFKqdiwFfGKtQqQ9uI-ocu9qayMIny6EzBMEjOcUdibTv3GRJnK7fFbVq7m5MF6CFDcDgpRn5QNddrSdUJ56WuzERUyc5GCnKETBtAss10ci1bnRGQoHkyh1NGIqkYc6-AhVY-f8AV0rpOS6lhhQ9KND0wXKy4~yXZ0S25oSTFHrLt07QDc~56B7Pgd9s3BYB5Kg1ljZeKOZ3Gxdr8K3sD5zxxhWjWFEfezOxlXnssKOhT6TSPoSGJNkyFbDJdwbj-YVwT2cg7ipYvyNw~4knjnTD72ajnQoA__" // Replace with an illustration URL for Software Testing
              alt="Software Testing"
              className="w-[466px] h-[326px] object-contain"
            />
          </div>
        </div>

        {/* Cyber Security Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between  md:px-20  bg-white bg-opacity-95 bg-transparent  rounded-lg">
          <div className="md:w-1/2 md:space-y-10">
            <h2 className="md:text-2xl text-lg bg-gradient-to-r from-[#38bdf8] to-blue-700 bg-clip-text text-transparent  mb-4">
            Manual Testing
            </h2>
            <p className="text-gray-700 md:text-xl text-sm  mb-4 text-justify">
            Manual testing is the process of manually testing software for defects.
             It requires a tester to play the role of an end user where by 
             they use most of the application's features to ensure correct behavior.

            </p>
            {/* <button className="bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button> */}
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/ba1a/b9f2/b18b39637c33b1ba048f225780f174d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JhKI779N0zao7X7YHgytZNQi6R3oMMC0Ku2nwSIcwYO8ygmD-mcym9FRtf15vtumW2H7Y~ChWSj4-pl9SzMYv8RXQt8ET2VsbMdfExDkJEkmLsy51ZnIpBJhcfBUThVO0FOvZAHMzQeh9dCxlW5TIqXx3dpJbQSGdN2J0qDNG-x~PiOMh-ATe65FvR4hZ5n6fstJPTDuy4stmNNbNy4lW9SmR0BOGB8ALxeSuA-KVsP9tbRZIngEu1elfzbcBYFluFpyi5QvLP0p8AiwTDYS8ie4GDMd4ih-93BslWueOPXIk8gxPHInc9~NEE0f3In1voi8u1Q91OI-wHJGgW49rw__" // Replace with an illustration URL for Cyber Security
              alt="Cyber Security"
              className="md:w-[395px] md:h-[248px] object-contain"
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

export default Testing