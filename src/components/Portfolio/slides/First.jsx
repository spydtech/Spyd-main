import banner from "../../../assets/images/f.jpg"

export default function First() {
  return (
    <div className="bg-[#171717] min-h-screen flex items-center justify-center relative">
      {/* Single color fade */}
      <div className="relativew-full min-h-screen">

        {/* Background Gradient */}
        <div className="absolute text-white flex flex-col font-ubuntu justify-center 
                w-full md:w-2/3 inset-0 
                bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.9),rgba(0,0,0,0.2),rgba(0,0,0,0))] z-10">

          <div className="flex  w-full flex-col space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-4 md:px-8">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="w-full  flex"
            >
              <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
                Innovative IT Solutions from Tomorrow
              </p>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg font-light "
            >
              SPY D TECHNOLOGY PVT LTD, launched in May 2023, excels in software <br />
              development, cloud computing, and digital transformation.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-sm font-light sm:text-base md:text-xl "
            >
              <span className="font-bold">-</span> SpY D Technology
            </p>
          </div>
        </div>

        {/* Image fills container */}
       <div className="absolute inset-0 flex justify-end">
  <img
    src={banner}
    alt="Demystifying IT Staffing"
    className="h-full object-cover  z-0"
    style={{
      filter: "brightness(1.2)",
    }}
  />
</div>

      </div>
    </div>
  );
}
