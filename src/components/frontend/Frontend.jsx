import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const Frontend = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-4 md:p-6 font-semibold">
      {/* Header Image Section */}
      <div className="relative mb-4 md:mb-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/e3f5/8eb4/e04ab093edb911e702ea5861ab4d63aa?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSLxe0Ytw2aSA99S~27HoPyhd6ytJLNtZq0oe9ECQpQ-xRGyMEvSAjcV13O40FRXYxFzG05xE1NJBdSR4rUS9tJpMma~6pmhAibv6n99J3UuJRxbRQopkB7seNi0YMDZ6BzHZxpkRSCSBJwQfb3riBkz0YId7avktpEBnBSvO-LWmbmIVJqc8VcAORvfGjUya~jncKnG0m~CbZf7wP7y5K3mMH1eWhZAmSpjkQXGA76MQ3t3pLg5uXm~qxjixxkBYtf9KPF8QUmjAqj0ePDb9-S8guIYFJIl-rXxV1o3Nw48EtrpwZRgVYCtLybY6hlPQnCF3umR6om52NB9~bMZcA__"
          alt="Header"
          className="w-full h-40 md:h-60 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-3xl font-bold text-white px-2 md:px-4 py-1 md:py-2">
            Frontend Development
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative min-h-screen mx-auto space-y-6">
        {/* AngularJS Development */}
        <div className="flex flex-col lg:flex-row items-center bg-white text-gray-800 space-y-2">
          <div className="lg:w-2/3 lg:order-1 mb-2">
            <h3 className="text-2xl font-semibold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              AngularJS Development
            </h3>
            <p className="mt-4">
            AngularJS is a powerful Javascript framework designed to
            build dynamic websites and rich internet applications (RIAs). 
            The framework emerged in 2009 and is currently managed by Google.
            It extends the functionalities of HTML markup language as it goes
            beyond static sites to create interactive web apps.One of the key 
            feature of Angular is that allows you to communicate with components,
            feed them data, and accept events from components; it makes
            components reusable and more isolated.The flexibility to develop the
            view separately as HTML, for example,allows different teams to work on 
            architecture and design.
            </p>
            <button
              onClick={() => handleNavigation("/angular")}
              className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
          <div className="lg:w-1/3 lg:order-2 lg:pl-8">
            <img
              src="https://s3-alpha-sig.figma.com/img/20a2/7581/cd74cacf776941c23ada8a460f7c192f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtKntjB0hDXvWmZoNe~pFuQWXkNTvE5aHkZpLQKHukz4T04g5wB1MD6sgI2ovFrTWVfOaWvk11iB~gWOC90G1fbakl6bm4S~oyCMA1gKG4LM1rlrxeb9mR6zdBxbh7lmCGd1cxhNjvbYwnEAwZkcf6pODILRAatBq2tYFNvfQ9pwgerOK~qtPOj1wZczOzMwC4rvY~4s2~0HvU~4tt0kTc0T7GgjlSEObekrDMNemAB64EIYpKTrkTu4Ois4eawgT5ez1kZfdD-3-RMP-hV-37x4IZTmNv-afM9105B~Cx8nzequmTNeM~-LxsjZKEBZC3iuNkIDrHAzGMxnYtzhjw__"
              alt="AngularJS Development"
              className="w-full h-68 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* ReactJS Development */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white text-gray-800 mb-2">
          <div className="lg:w-2/3 mb-2">
            <h3 className="text-2xl font-semibold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              ReactJS Development
            </h3>
            <p className="mt-4">
            ReactJS is a powerful JavaScript library developed by Facebook for
            building user interfaces with a focus on creating reusable and 
            modular components. Launched in 2013, React has gained widespread 
            adoption in the web development community due to its efficiency and
            declarative approach. One of its key features is the Virtual DOM, 
            a lightweight in-memory representation of the actual DOM, which 
            enables React to efficiently update only the necessary parts of a
            page when the data changes, resulting in improved performance.
            </p>
            <button
              onClick={() => handleNavigation("/reactjs")}
              className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
          <div className="lg:w-1/3 lg:pr-8">
            <img
              src="https://s3-alpha-sig.figma.com/img/6c50/ef1e/2464d3901439bb0f5b2d4105adae166e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPUzdSX6DLsQvhRRXjCisEwmQgqWGetdkut8KfvFcUMnVXeVZlTWM11G9XD9TrUTr6eMFGYUKeJv~n-W58LNr8BgEWBKhXomayf1V~czosmzubQayO~ZfTrChDu0pUvIYuunoWBCjFJfSj4vBNXN2Ee-xddpizwsJ2nqPEYOs8HhlMCQXOovbl8eZ5pdte0JsAOMiet2V4T3umyGBpIRqvP1LGBARMf29l6Qf3BAJ7WA~JOA~v2DBBR7jyZCxKcGsAk6MYFtEc7Pu2FlPU4cctagSabAVFnjLB-BYk3BQIqjwKL3ZJkkryoq7avScn3N21PMftr2KcLFRtX0SqyfeQ__"
              alt="ReactJS Development"
              className="w-full h-68 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* NextJS Development */}
        <div className="flex flex-col lg:flex-row items-center bg-white text-gray-800">
          <div className="lg:w-2/3 lg:order-1">
            <h3 className="text-xl font-semibold bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-transparent bg-clip-text">
              NextJS Development
            </h3>
            <p className="mt-4">
            Next.js is a popular and powerful React framework designed to
             simplify the development of web applications.Developed by 
             Vercel, Next.js builds upon React's capabilities by adding
             essential features for server-side rendering, automatic 
             code splitting, and simplified routing.One of its standout 
             features is the ability to enable server-side rendering (SSR)
            and static site generation (SSG) effortlessly, providing faster 
            page loads and improved SEO performance.
            </p>
            <button
              onClick={() => handleNavigation("/nextjs")}
              className="mt-4 bg-gradient-to-b from-[#00CEFF] to-[#0072FF] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
          <div className="lg:w-1/3 lg:order-2 lg:pl-8">
            <img
              src="https://s3-alpha-sig.figma.com/img/4020/e0db/e0794358c214320048357bab8b5f5e6e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBv78twgJo1cy7NT4kTafjrZ81xm7EKq2t56FG-I1PlR35N0KuJFs4mSX7xbvUeBs9-GQeCFMw-cz8r1BQ47cP9qnPYb2RT21MsDcWiEusznyIU9vgcrKXRIG~GhqBsJA~d5XJ7O6oZh86V3rEJfxOj-Qyf9GE2it84ry13EnWXZ-KRbJ5wFsrGr37GL60WVh8X4VrwiKw3X-VGDnKKoS4~63Wds8iEOg2syrvV9fg-FZVmtRuD19FzZixodoLNc9wXTkRtMXqwMJ~5fpT5YgQuRsDAhDylb5CwkNjosW95RqpRChho-3j9-rhe5D-QfwgsYevxXs3tfKnyHVf8WPQ__"
              alt="NextJS Development"
              className="w-full h-68 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* SPY D Tech Section */}
        <div className="bg-blue-500 p-4 md:p-6 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How SPY D Tech Enhances Frontend Security
          </h2>
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-start">
                <FaArrowRight className="text-white mr-2 mt-1" />
                <p className="text-sm md:text-base">
                In frontend development, our highly skilled team at SPYD Tech utilizes
                advanced security technologies to fortify web applications.
                With expertise in secure coding practices, we ensure robust protection 
                for our client's digital assets.
                </p>
              </div>
              <div className="flex items-start">
                <FaArrowRight className="text-white mr-2 mt-1" />
                <p className="text-sm md:text-base">
                The modular and adaptable components in our frontend solutions enable
                seamless integration with various applications. This flexibility ensures 
                swift implementation, enhancing the overall efficiency of our client's
                digital ecosystems.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
              <div className="flex items-start">
                <FaArrowRight className="text-white mr-2 mt-1" />
                <p className="text-sm md:text-base">
                Our implementation of cutting-edge security measures in frontend technologies safeguards 
                our client's data and user interactions. This approach not only meets industry standards
                but exceeds them, providing a secure foundation for online business activities.
                </p>
              </div>
              <div className="flex items-start">
                <FaArrowRight className="text-white mr-2 mt-1" />
                <p className="text-sm md:text-base">
                SPYD Tech is dedicated to delivering cost-effective solutions without compromising
                security. Our frontend development approach not only strengthens security protocols
                but also optimizes development budgets, providing our clients with secure and 
                economical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
