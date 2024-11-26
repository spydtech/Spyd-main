import React from "react";


const Services = () => {
  const services = [
    {
      title: "ERPNext Consulting",
      description:
        "Our Consultants gather all the necessary details about your company, its business processes, business challenges, expected end goals, and more. It is a very crucial stage as it lays a strong foundation. At Akhilam, you are assured that you are working with an experienced, dedicated team of Consultants.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/4037/1112/a5371d0a98f974c85e7bb8c6f467d4cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WK0xFYvZeOeBSIYH6adxC48kIQap5ODXDs1cv6JiiWiO73POtN~mDivZsjHDbe9FRI1~mMD2-9QpTlUleHs6m3iVRW6F5A9Akox62iV9Hc3X3E2u5mf16mxwKKtzBL588AfOyRouXHe2aaJJVfe6N02-0YW2AOoQzowC0n3X0ouQozG7ZBHGUZ4eEyvLh4vIQXyJLqyFgjoC5oyvAH1PKFU5H2XdAfE0cSkpaQomtgHCNotK9lfqKbN7TQ~W0ltyveOfLBeaI365z3sTX36-hpJxv4b-~OWPbwmxHJ04KO~knJBXLkItkEDbtmv~YSSyRYQ-F6ZyNzW2sN6Qir5Bew__",
    },
    {
      title: "ERPNext Implementation",
      description:
        "We focus on organizing the overall structure and behavior of all the doctypes, required reports, and required dashboards. From a customization and custom development aspect our technology team ensures technical functionalities are defined, and all pieces fit together perfectly; creating a larger picture of how items relate with each other within the system.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/b5df/3a0c/c43905c46dbd6ae019237410bf2cfc74?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jbUaQM7JWqPyz5t7pwI6oRD-l6VZ~yceJ0NRXxl~xD8IzT0cRfAVwxn9y36aP6~XcIxZhzlS4H107GAu9zB-3z8cwGaunl9sHfPIfpj~0ky1K06-4ltIPguLHPu5N7sXx8sIwAm0IYe7We7A1BbSlqDk4mjcwBU9AP2nXA4nQcANSyQUphz7fkZyBvV2JcA4V7NV3TLiVHg1B3O-5UDsSmz-QnxNwb9vHVfm-chBWfccaCpc4bHQDSVP6D3gfqAmBjGgUBUagadS2tsZ~BRcLNgUWAAIn-IsmG4QXOHX-AsPn-a849KMIYILgaiv1V4sl4pXx2CmSomqrQ7M6-~l4g__",
    },
    {
      title: "ERPNext Development",
      description:
        "For the out of box requirement, Our technical team prepares prototypes for clients, and clients have approved them, we now go ahead and do the coding. We use the best coding tactics to ensure quality results. And, our standard process allows clients to scale ERPNext solutions with the latest and future versions.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/f20d/23c7/d124dbb296dbfa2421665029f29db99f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kwpLUKftpsvcKB2urFsx8hBeqEkil5yZmB7jIOCS6ZpQpg5bGStyFvQdAS3QzwQX6luWKNb3g3NqMT1KxbGAQvsavSdI5FBp06wiBYfzjPzcjoHy0URJm04pmaZ4XyCSnWmfTfZeLsHvvcn3ZqQwTaVc6qz1Qgbgg5ffN1fe6Pncvj6HkP9oS-fv-YVY2XgynVeRFx~6wfkvZcXNhKjRKvaRlme~mDUbDuW0HJxy2WInSbVGBHhrQmn3yVscqRUixWkR5XtZpgW-4B6JwOLHCs5PC7v5f2cIi6Q7kD0D1kYYOFJ3-Kz0C8tBcgM1tokPCDl5LQBmIcFemKpQtGMRJg__",
    },
    {
      title: "Website with ERPNext",
      description:
        "We help small businesses and NGOs to start their digital transformation journey and a presence in the digital world with a dynamic, easy-to-update, interacting website at a minimal cost. Also, it allows customizing the website's appearance and layout for any screen size with Bootstrap’s cutting-edge technology",
      imgSrc: "https://s3-alpha-sig.figma.com/img/d3d3/693d/cefd0f4449b01d9d7903a7ff19ce351f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6JORKB-Kppf~~3ruqucX~J6JuFlhSu~xrB9LI-3g7tTCLurZV4R54g8BTGo7R5FBqMTV6XKytYiI6DbijngkKKDZJvDrJkow0YwaMUEzTe~YvywlDjYkjVw33CiwVdlmV8nWax8QA23uZ-gHyxJ-O03VIkugm9Mqe3C-ycfuYoj6gXiysO9HJ1aVlyb046uymvm2A~Wtg0ADs4Y9B87F3GBOXF6vpStdPrRVlx3rpu3aE19rfHpkd8fOWgVrPYHK-lVZp5~-O~WQT-DYBSWKwD-Aj6x6eNNOB4EfcCEhpD3yb3aA0TmD2cMe07gsrdbQOl3-Br-0lD2UP9aWpcPsw__",
    },
    {
      title: "Ecommerce with ERPNext",
      description:
       "We help in the seamless integration of the eCommerce store with a modern, cloud-based ERPNext solution. Together, they extend the company’s breadth and depth, connecting processes and procedures for a cohesive, future-proofed operation. And, it helps to centralize data on a single, unified data hub rather than silos.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/27a0/0560/dc6aa0c90451d11ce45ac77a3cb3cb99?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFM1bSsqSAl1B5Z6hN22l3mK41i1nRJYBU3KqUk8AOF-3WHZ-XYmmAX1gJdMPwGy17dvlDf5j8LqLUfaWzoW5tRKZTo4dE6t5oWD5xkJMeKqTMzB76EweXbTTu6vtJAgtDkEf4Ij5Qj9rI1olqPQf2-~jD8SJwGvf~XD0BBqUs3NQH18zrfib-xnd6jSlWxLPhKF85fw-xcWWGUFaO4hWkRqFnbKBUWqgShtaCnvk9ivnljZSw4WdY9j9LZ6yAAX~0BmGqasSbLrh90i3Dst2QOeZhiBa6diZnCA2ohtycCfq5giLfdPz~7ZdYEzdgEQnvLbwLX9WKCfRbvn7hAFAg__",
    },
    {
      title: "Third-Party Integrations",
      description:
        "We are experts in any kind of third-party integration with ERPNext, and third-party integrations allow you to quickly add features and tools to business processes that might take many months to develop own. By utilizing third-party integrations, We incorporate superior features to your ERPNext",
      imgSrc: "https://s3-alpha-sig.figma.com/img/9ac9/1cc1/f2c44b0f5270f9ce260871aa32831be1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfgGZHoNcb8mq4m9h7wjA7utyi4KRDLNK5xqL-Hz-Q~gUA38b9BvnSIk9UxgW7Vrjeyh5QRDjxp8sFUQfVAqkZfF-kW9Qzpb3xO-0iUEXFppXDRf92ooiyTudXZOwhsNBjCYf1DG7ChCehZGtkBKXWXUfR9t~MLHEZlN5FBNHgyF9n7hKq-7eGkeZ48FUufwsGqqXdiu6HqJBGb0jDIq4XOew8Ln4Z~1A9Q3IXj5NA3RKUyJ8MGT0kcf8Tg0idi7Y5r0w4ZyyMPTsf5Sfuh1t7znEX7WVf1nYUYJWZNL5afWSpiVR6poE-J0YDnlz4jXlLLH4VKnOKz1QSKAkuSMNg__",
    },
    {
      title: "Data Analysis with BI Tools",
      description:
        "DATA is NEW OIL. And, Having real-time insights from each decision point, improves productivity and empowers informed decision-making. We have been helping MSMEs to connect their ERPNext systems with powerful tools like PowerBI, Tableau, and Metabase.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/e50c/1b5f/be06ed3ebe9e431c636a8bbb7a501f1a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eV1V9WKE9kVGj9N6ow8nm8s-0PePl4zw9CZSP7ucH81pM1iBgiZd-LBLe7E4oX86ox6nqdqHL~H4LUwlbcpNGsJXMkJHX2CG8amNbWES9a475p8C9HSf3tuxjXmbOIryLJnzp8asPLviNvNEJPWvrfrS7iJj6snp1a0HoqDPb5tZh7F8HvzsJ9nGxPXjc48ruwREwNuiMnfm8c6w7z9-Mvw1lRrrinwbFwRpEErhyc3fL9kQHoUH4P~J6uhNZLZrv~UhF-L74xagFbhRTpoTybJ~QO7sMTi88e~ZlF1DPmCEuQtfpb6yz8oLaSXGaTGvHWbJqrBNlo0GJYeIx-ljGA__",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center text-white h-96"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/aac4/8940/257b3b20caa03793769ae329b2799394?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVTA5I67dTBPMy5auLEcv~TPA7Xnz-M~nF8YuDoYx6kFjJ8v0dw4rHd595o8r1YyWqwXr1mAxxbgFiUR90GY4Xx2BB3fAgHmF62O421QKhp2hKQcCdKU-g5WMJyIWW3KG1-5szK54xIegpQ549WQ10IFEHXclVU4R6RiKQXdKEcRpF4yFFbibn1cKMuirEYrSzPcw00sJ7UhqXgpN3UG~9XXwc-t0RVJpiJSTuqc53bY~7CGZnaS7wa5Gi56tRk-L0CPL9aiUEiVELu4JBEVKMGTFjTQtcBv8Wf2Yg0lCrTwKuQBKUUV8IRR4QRU3Q~rJh7ppRlOVtKnecqUXDc4tw__')`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Services
          </h1>
          <p className="mt-4 text-base max-w-4xl sm:text-lg md:text-2xl lg:text-3xl">
            Building Cost-Effective Digital Business Capabilities around
            ERPNext, focusing on the right balance of Digitization, Flexibility,
            and Process Mapping.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto my-8 px-4 mt-8 py-10">
        <h2 className="text-2xl md:text-4xl px-8 font-semibold text-[#0072FF] text-center">
          A Unique Team of ERPNext
        </h2>
        <p className="text-sm md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto text-center">
          Our ERPNext team provides state-of-the-art, standards, and best
          practices for consultation, implementation, and development aimed at
          addressing all our clients' business challenges and goals.
        </p>

        {/* Cards */}
        <div className="space-y-16 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex bg-white flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8`}
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full lg:w-1/2 rounded-lg  shadow-md"
              />
              <div className="lg:w-1/2">
                <h3 className="text-xl sm:text-xl md:text-2xl font-bold py-4 text-[#0072FF]">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-4">
                  {service.description}
                </p>
                <button className="mt-12 px-6 py-3  bg-gradient-to-r from-[#00CEFF] to-[#0072FF] text-white text-sm sm:text-base md:text-lg rounded-md hover:opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

