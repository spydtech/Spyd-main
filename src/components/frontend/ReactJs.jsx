
import { FiArrowRight } from "react-icons/fi";

const ReactJs = () => {
  return (
    <div className="flex flex-col items-center p-4 font-semibold">
      {/* First Image */}
      <img src="https://s3-alpha-sig.figma.com/img/faab/1420/de823c40280f43f48dfce717a840bd38?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3zcPrFonizVKH4krvb2T5pSnWLGrtTC6lu2-LeGkp9TNVJ-PspY~-kmBcKwDH5gVKAGcSstvy9r0HQb9rbd-KIRyHpH0T6J6yTxCd4q2FNNzglB4quQFM1Ru0DtzeutZ5cR9SZndBDfiftXEYBFfdfsNLRFK-~fSChm-hViTbgtQEP8GmdTJT0~--L9F94h4YzZf86doIEVf1ABsmpzGWxbQAYZBrCSrXQziJ9lRsLkOa~cn5eELka~847Ruu8~6-LOKRb6ND6nO~-yvUmWZvpr7qEUAP-cJ3Ojf72zK49G2lESLfapgsv9VZOykAvh7m97IXSwVkjHX1xRsWWAfQ__"
       alt="ReactJS Development" className="w-full max-w-3xl mb-4" />

      {/* Two New Headings Below the Header Image */}
      <div className="w-full text-center mb-6">
        <h2 className="text-2xl mb-6 font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text overflow-hidden mb-2">
          Building Dynamic and Responsive Web Applications
        </h2>
        <h3 className="text-xl font-semibold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text overflow-hidden">
          Mastering ReactJS
        </h3>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex-1">
          <h1 className="text-2xl font-bold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text overflow-hidden mb-4">
            Leading ReactJS Development Company
          </h1>
          <p className="mb-6">
            React encourages a component-based architecture, where UIs are composed of independent, self-contained components that can be easily reused across different parts of an application. This modular approach reduces code maintainability and scalability, making it easier for developers to manage growing projects efficiently. React simplifies state management through the use of properties and state.
          </p>
        </div>
        <div className="lg:w-1/2 mb-2">
          <img 
            src="https://s3-alpha-sig.figma.com/img/8df7/3fe5/00c7e219b469dcaadfb24e18ac8133bd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsFD2eA5OwkMJDWEmuR481CilXoVs~AlezMR3psoUQDkGud7B5C4JoxKa0ASxbLO2T1odLwzKteRnAMRBRKQ6SD7tsas02ljOnDd3JyPbhuWuOusTlVf8C4gakJEs8-X6pdC3S~VoNRBjQKarJc43jL2lOwAMef7IMm-XQjGIQcNcbDpvh7DGmY1betRXnHAqS1zFrgR~R4rNL1exxeJ8S9fGl7Ua8a6JdEGbuLTDCDS1SaXRWKPd~dC8j0UdvZPI9zS~2TmGOs4xWLIJEU8qHOA1ehaxTUZJiCF6DiAHXb5c8Rp0OQL3OAZYreORfu2hvTDeJX8V4WFl2CxIkVYrg__"
            alt="ReactJS Development" 
            className="w-full " 
          />
        </div>
      </div>

      {/* Benefits Section with Gradient Background */}
      <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-6 rounded-lg shadow-md mt-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">
          The Immense Benefits of ReactJS:
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="flex items-start mb-2">
            <FiArrowRight className="mr-2" />
            <strong>Powerful:</strong> ReactJS offers a robust library for precise web application development.
          </li>
          <li className="flex items-start mb-2">
            <FiArrowRight className="mr-2" />
            <strong>Efficient:</strong> With minimal coding requirements, ReactJS enhances productivity for both developers and designers.
          </li>
          <li className="flex items-start mb-2">
            <FiArrowRight className="mr-2" />
            <strong>Versatile:</strong> ReactJS can be used to build various types of applications, ranging from simple single-page apps (SPAs) to large-scale enterprise solutions.
          </li>
          <li className="flex items-start mb-2">
            <FiArrowRight className="mr-2" />
            <strong>SEO-Friendly:</strong> React's server-side rendering capabilities improve SEO, ensuring faster indexing and better performance.
          </li>
          <li className="flex items-start mb-2">
            <FiArrowRight className="mr-2" />
            <strong>Fast:</strong> React optimizes the rendering process with its virtual DOM for faster, efficient user interactions.
          </li>
          <li className="flex items-start mb-4">
            <FiArrowRight className="mr-2" />
            <strong>Flexible:</strong> React's component-based architecture makes it easy to adapt to evolving web development needs.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReactJs;
