
import { FiArrowRight } from "react-icons/fi";

const NextJs = () => {
  return (
    <div className="flex flex-col items-center p-4 font-semibold">
      
      <img src="https://s3-alpha-sig.figma.com/img/13af/c858/034a27671ac3cf9d6e876f84f9d51262?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pIAVYiE8sgrJY8~o5fhGy5AJ3OhnGrUoA9rPaKEBs6rM3~oZ85xHSXrNBHM9SasuKb9jRRN0AqY3SbnWH4b-D~-XUTxskrLlNishz9KAwf79tN3KCo5g8e-l-YrsCgxIvCUnUE-pdXkunn4~WGHbVmn0mv52rzXlEYRtGXwI72RsD4MOg~YTiueaLlj3WyGxkY-Ojbkcwobq~tNhxqNVhKh~fd8esvGnY0nBysonRBBILTm1Xc~TIHPEMqmlggOjXXDUals2I2oACk6ltmV~VWwJMyutbQiuCyaqJ7dvyOJQlQUuba~IATf3jCEhpEUu0Q2XbZW-1XYXLe1SewJi1Q__"
      alt="Next.js Development" className="w-full max-w-3xl mb-4" />

      
      <div className="max-w-3xl text-left">
        <h1 className="text-2xl text-center font-bold  bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-4">
          Why Go NextJS
        </h1>
        <p className="mb-4 text-md font-bold text-center">
          These solutions efficiently meet the complex business goals.
        </p>
        <h2 className="text-xl font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-2">
          Optimize Your Performance with Next.js Sky High Efficiency:
        </h2>
        <p className="mb-4">
          Next.js is an open-source framework, freely available, that operates in a server environment. What sets it apart is its remarkable compatibility across diverse operating systems and platforms, including Windows, Linux, UNIX, and Mac OS. Elevate your performance with Next.js sky-high efficiency.
        </p>
        <h2 className="text-xl font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-2">
          Unleash Scalability with Next.js:
        </h2>
        <p className="mb-4">
          One of the core features of Next.js lies in its highly scalable infrastructure. Operating as a runtime environment based on the V8 JavaScript engine, Next.js seamlessly adapts to use both frontend and backend development, providing remarkable flexibility in developing feature-rich, modern applications. Next.js simplifies the development of scalable, fast, and data-driven applications for optimal business outcomes.
        </p>
        <div className="flex flex-col lg:flex-row items-center p-4 font-semibold">
      {/* Text and List Section */}
      <div className="lg:w-1/2">
        <h2 className="text-xl font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text mb-2">
          Elevate Your Projects with Next.js:
        </h2>
        <ul className="pl-8 mb-4 space-y-2">
          <li className="flex items-start">
            <FiArrowRight className="mr-2" />
            Unlocking Potential with Next.js.
          </li>
          <li className="flex items-start">
            <FiArrowRight className="mr-2" />
            Next.js goes beyond benchmarks, seamlessly integrating services and applications that enhance efficiency, contribute to improved speed, and streamline business processes.
          </li>
          <li className="flex items-start">
            <FiArrowRight className="mr-2" />
            It eliminates redundant operations, improving efficiency, reducing time-to-market, and enabling innovation with minimal intervention.
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-8">
        <img 
          src="https://s3-alpha-sig.figma.com/img/3fd2/f93b/903dd74fef157b85a48a4f5723cb47ff?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PsJhWcwrwJ0GJVOex4y2KpcCb8RNrPtydMpU9Sot6ygJJE9tUbPMe3dn-iCQUUm1J3JNvVSCk~F5-yPYclQ3d1gyI1aNeU6Yl3Kbe~PyrCTFrQIzoNCjGZ09c4TFKc6Heloa3JL3WongMIWWLsIVfYh-53BNS818080vzqf48zUNU~02IFxOFprEwJyUOMfShIjDzcorEnEMYJBupJcG7WIrtDNrPttoXLopihCI9Er08FWDZjTWw-DZUYCrAdjCJrWgIE2r7NhqNnnSJyx-c5jsIyPC9m5S3oC6nhN215A5VDmG8vt4t6TjUo02wleGOZecHuOIayX0rzWhB0MdNg__"
          alt="Next.js Benefits" 
          className="w-full h-auto" 
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default NextJs;
