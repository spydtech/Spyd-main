
import { FiArrowRight } from "react-icons/fi";
const Angular = () => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Image Section */}
      <img src="https://s3-alpha-sig.figma.com/img/2daf/311d/1eb0e926de08ff2f853252ba0bc72a56?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~a9s4XoCQFowCeyQb~cAXkbMAagchfgfUf~ciWVxeLxcFy6WKV9Lhjw0y0mSO-wUWRLLMhZsSbllNVlQ9DLkVeowIs5FQVMqi0xpqlm2TJxOAR35AEDHNKza6gQ1HnsWHBcR51SWPYBer1O3Iazi98zhLFRe2TmzZazYs6YT1zIC7hVbOJj8Zre8V442V0HMnToFLbYqrFw6HZ22t3Gb3tVxPo8PwvFY1O7g6zhi888Pztr5QvGuLqmfeI576azbCvAWSNBRTA6Wcv9OpqF9B0oYZQLNoyuCB5BhqAFcrwnYxRi0OtBRYf4h04KrMbJi5wiWuyr0cMwdIeTjd4ANQ__" 
      alt="AngularJS Development" 
      className="w-full max-w-3xl mb-4" />

      {/* Text Content */}
      <div className="max-w-3xl text-left font-semibold">
        <h1 className="text-2xl text-center bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-4">
          Leading AngularJS Development Company
        </h1>
        <p className="mb-4">
          AngularJS has come up as a boon to developers all over the world. AngularJS basically is
          an open-source framework that offers code already built that otherwise developers have to
          write from the stretch. Thus eliminating the cumbersome processes of hard coding, saving
          time, and paving way for rapid development.
        </p>

          <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-2">
              THE SERVICES OFFERED BY ANGULAR JS ARE:
            </h2>
            <ul className="list-none">
      <li className="flex items-center">
        <FiArrowRight className="mr-2" />
        Web application development
      </li>
      <li className="flex items-center">
        <FiArrowRight className="mr-2" />
        Plug-in development
      </li>
      <li className="flex items-center">
        <FiArrowRight className="mr-2" />
        AngularJS cloud platform
      </li>
      <li className="flex items-center">
        <FiArrowRight className="mr-2" />
        AngularJS design optimization, maintenance & support
      </li>
      <li className="flex items-center">
        <FiArrowRight className=" mr-2" />
        AngularJS Enterprise Resource Planning / Development
      </li>
      <li className="flex items-center">
        <FiArrowRight className=" mr-2" />
        Easy manipulation of DOM
      </li>
    </ul>
        </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/3066/3d13/220b50038d173b65c5ce22262d485020?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVqu3ftp6dru20R4mAjkq~7x3TE4QRWlYGGdc5cgo4jonEqXFCHLWJj8u9oT7wwZEdvU~npcLParnjEjQY9vPXPV3q1HcPaLZPKnSadqk26gfKOlsVGAqyOu9wiU8ePDEJM7A6Lwv6WAuILp3S3OIQ2VQYMq1SxyvJ5-wAOUZy9m0G8HrOlRtmK~to5yt8NNwh9UGFuJuZjhE1L9-BDHhV-C5PxpzpDlcNNwQNkM1my8HilrQXNHX-1M4JHmdkAR8sF5isyyzopTK1zHYizWWtGRbodvAq7yH9Djn7PIU1dDt-RTeS8ezsy8s7trvZnz~F0dB18jGz2oSNHtpF9hLg__"
              alt="Angular Services"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-pink-200 via-white to-pink-300 p-6 rounded-lg shadow-md">
      <h2 className="text-xl text-center font-bold mb-4">
        The Immense Benefits of AngularJS:
      </h2>
      <ul className="list-none">
        <li className="flex items-start mb-2">
          <FiArrowRight className="mr-2" />
          AngularJS is a potentially potent framework that makes a web application accurate to the point of precision.
        </li>
        <li className="flex items-start mb-2">
          <FiArrowRight className="mr-2" />
          The very design is based on MVC architecture, making it easily adaptable to the web application being built.
        </li>
        <li className="flex items-start mb-2">
          <FiArrowRight className="mr-2" />
          Data-binding to a degree is required when AngularJS is implemented. It helps eliminate writing unnecessary boilerplate code.
        </li>
        <li className="flex items-start mb-2">
          <FiArrowRight className="mr-2" />
          AngularJS is best at meeting the requirements of modern developers who regularly update their apps to enhance their functionality. With AngularJS, developers can update apps without disrupting users.
        </li>
        <li className="flex items-start mb-2">
          <FiArrowRight className="mr-2" />
          Testability is the strong suit of AngularJS, which allows automatic synchronization between the components and eliminates the redundancy of hand-coding, thus making development faster and easier.
        </li>
      </ul>
    </div>

      </div>
    </div>
  );
};

export default Angular;
