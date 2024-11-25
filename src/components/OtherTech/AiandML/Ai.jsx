import React from 'react'
import CallToAction from '../../CallToAction';
import Footer from '../../Footer';

function Ai() {

    const products = [
        {
          id: 1,
          title: "Machine Learning",
          description:
            "Our machine learning algorithms analyze vast amounts of data to uncover valuable insights and patterns, enabling you to make data-driven...",
          imageUrl: "https://s3-alpha-sig.figma.com/img/18ee/7f87/18b9d6e8c6bfa5138af0ac79601fb0d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6LGMBzIpopR0aRLpDCF5kSbLO1l8vx5e~sm1RHvF0k-X64ZX39tOXTFT0bNVXG-PlY5TB-RY9DfyUqPd~PtKmO1rdTyC5VgW9oAQzOUj3gq~w5z3LwuRWTTFw--ZP49~WQ8MlV36YScjY-BAWTqAP3NIwZvFS-pIhR1B4zzsMlLa~eK8SJ-Il1jNICVF6K8z-orFQWvWlAgSVlALBz2dnyCJTy9gDyKuv9KpCZj83QU~yIIklU~isVhxPgvgTB1Gj7S9964vOaTKRG0Bf0TyroIXPZ~bbGEobOyhEykZDSia1CpE1r3AQMFE9sdusdVNFBHzR3nl3tXj1FlxTNSwQ__", // Replace with actual image path
        },
        {
          id: 2,
          title: "Natural Language Processing (NLP)",
          description:
            "With our NLP solutions, you can unlock the full potential of unstructured data, from sentiment analysis and text summarization to language translation and chatbot development...",
          imageUrl: "https://s3-alpha-sig.figma.com/img/1f0a/0c62/f5fd0cdd346c7ca248b8f8e48a75f9fc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvjdS~zwiUSDNmUzPx0vy2zyhPsslt1BFCO-tWj~wWdwQYT1gXI-j17rxD0PXgqmUDMi2wVsW-wA3WxTZP0iCQs18X4G5C8uDN0zdZafB8RpT1JHIp9eQxHN3fF0bF~ds-QkXIfkorlzjVwLLCv~9o0FHvBA-9hF8P4sTgRgko7qcMGQuBLUQWhMQmquspK2b~ZrflouoVJX2XtVv33SEV-dcqinUf2jUuitdekECN92kw7O1yn6GbVFxjuC7LZc4-KP~5LftsSrzHFMVpGPq50a3PCanL4ZgzIf72d31NxKyLoXdyzNzTCbtHWJNXeMxt0GRIa~LVJmWSUNVSaCfA__", // Replace with actual image path
        },
        {
          id: 3,
          title: "Predictive Analytics",
          description:
            "Anticipate trends, forecast outcomes, and stay ahead of the competition with our predictive analytics solutions. Whether you're optimizing...",
          imageUrl: "https://s3-alpha-sig.figma.com/img/f9cb/c734/24fe61fb5876b7809f3e28e3a47d6025?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mU8C-IuLM28pkqqfMtSztcvsplhWEYkZc1ln-RAr9WkEnkY6r-NtL~1qT2hbhFh5l-f0er6hM3zh4kRhnz9WywFnTX6ajqN7rel0aFU8OjF7fBi4ZMbu~YdUPhVEb7gALV49c-GZvcMZoiECHPVhm~-Z4L5ccXgtoWX54rFjthOBjRvKsT1UsaIVz6XFuuIhvxlaJt0EgGeMMFc6tyEO61ZWFTfS9Fc9WlNnud~C7tK1Nc7eYK6gguXb9jJM-Iz4GHYBvQNCtwfKfmzw55z~rMQ-xDn7LosDuqIuH2lgJhVnwyPnBZPVFx~0ffJbYClNCx2YETatN9JJ8COeCghwWw__", // Replace with actual image path
        },
        {
          id: 4,
          title: "Computer Vision",
          description:
            "From image recognition and object detection to facial recognition and autonomous vehicles, our computer vision solutions open up a world of...",
          imageUrl: "https://s3-alpha-sig.figma.com/img/011a/c5ea/24ed680515a2e1e00c921c2a81da1fa7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2u2jvbcZNIDTXzufvaLgIDOB~g8TvdZLw5CTDLVybDTYwdzycwFnmKGVRtOGdY82egpJO-7A3yprAfoRxINOLw7mG5QLLwLvAVZrEgMg2TI4evfDucL45piFHfLSjCdb6xScUp3zTLux1PQ1IM-Se8V6HpQzLNyjz6habxuQ5mYFskfapsG8XoTquRLQcdW0rk~G3snzblvb572HJZ5OxFGApPlS84vFhn274CMvn1DomYltZxFit9xPqfCpnJdRTM4iWuUGFjPpIs65YW0~7wr8EH9iO8BU8bb77PDm9ZYrotfU97W~j3kLz21QiChozffC-7a425S-AUE1nDX3A__", // Replace with actual image path
        },
        {
          id: 5,
          title: "Automation and Optimization",
          description:
            "Streamline your operations, reduce costs, and boost productivity with our AI-powered automation and optimization solutions. Whether...",
          imageUrl: "https://s3-alpha-sig.figma.com/img/555a/2ef4/453193fe89096da71274eba0792b99ef?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J37FxDzW2jtnKaLo0O2IGrr-n9-ITJv4SWWdnANDwm5wE7lgX2UZqIE70fgvLtfbzgKJy3IFExRsKlAXHwcZiwznQ3lfVc8YggmGBCyPzySCch9npvLD5hKOoW0zlrFdPhNoDizltodfhCXoJxigPM-muDMyu0c9oH930-TPZXf8~cpaDff0UYhRWVZK5stqwIDiuN3ahac~opu1pDnxJbmZKEiCiOyAkd~Ci84YJnalM1zR2CH5P9NrvqBEDZG46otpaHTJtqjtG4IaDvHg7BfTDfMtudWMLadc9rlD3fl57IaAKO3LQwoNYQcndZ0SsnrSnxtEBVZ7mxE2otRrjA__", // Replace with actual image path
        },
      ];


      const features = [
        {
          id: 1,
          title: "Expertise",
          description:
            "Our team of AI experts brings years of experience and expertise to the table, ensuring that you receive best-in-class solutions tailored to your unique requirements.",
        },
        {
          id: 2,
          title: "Innovation",
          description:
            "We're not content with the status quo. We're constantly pushing the boundaries of what's possible, exploring new technologies and methodologies to deliver innovative AI solutions that drive real results.",
        },
        {
          id: 3,
          title: "Customer-Centric Approach",
          description:
            "Our success is our success. That’s why we take a customer-centric approach to everything we do, working closely with you to understand your goals, address your challenges, and deliver solutions that exceed your expectations.",
        },
        {
          id: 4,
          title: "Scalability",
          description:
            "Whether you're a small startup or a large enterprise, our AI solutions are designed to scale with your business, ensuring that you can continue to grow and succeed in the long term.",
        },
      ];


    
  return (
    <div className="relative">
    {/* Background Header Section */}
    <div
  className="relative bg-cover bg-center md:h-96   flex items-center justify-center"
  style={{
    backgroundImage: `url("https://s3-alpha-sig.figma.com/img/85dd/2970/90670e9c58b7d050589848229074fce4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7S7TSnuthUsbpU2iGbvKuFiDNNWtz5KBR1LS7DrMiiSQgLEgwp665OtS01KuSAYkZxjQ0UVDNz9Nkf4IA7MqD8TLXSjZtvp2V69jAuHepedrYR4o2C1SJQD-bsnW9zohv2BewzWxxGFNENg0cXQIi9eOhKe3HjYeMvAzWO~4C57zVnIbwuBBRi4G~VY6SDVYy~SmuV~U~ywpi9-mn0TuTHv7ERVQIotdiMiV7JBvg6oeTq9qcTurjHIlYnrF7aPUTOkgbdO3ixK93eFEGwOJ70NQnys5j6K0nJtaMWZf9Awqv3U4hVPncEoQ3EPCgefN~aKD7RO3aGWY~ijAQHqXQ__")`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-black opacity-0"></div>

  {/* Centered text content */}
  <div className='space-y-5 md:ml-[50%] ml-0 md:-mt-20 -mt-0'>
  <h1 className="relative md:text-4xl text-lg text-center text-white p-5">
  Unlock the Power of Artificial Intelligence with 
  </h1>
  <p className="relative md:text-4xl text-xl text-center text-white ">
 SpY D Technology
  </p>
 
  </div>
</div>

<div className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col md:flex-row">
      {/* Section Title and Description */}
      <div className="text-start mb-12">
        <h1 className="text-xl md:text-4xl text-blue-600">
          SpY D Technology Discover's Best AI Products
        </h1>
        <p className="md:text-lg text-sm text-gray-700 mt-4 md:w-1/2">
          In addition to our AI solutions, we also offer a range of AI products designed to meet
          your specific business needs. Our AI products include:
        </p>
        <button className="mt-6 bg-blue-500 text-white  py-4 px-8 rounded shadow-lg hover:bg-blue-600 transition">
          Explore more Now
        </button>
      </div>
      <img
            src="https://s3-alpha-sig.figma.com/img/3262/2a65/2aa5dbcb9cf16fec4f50202fed633638?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OA2Xowc8n~LoYHiA6K0s51OAu0JeOPGacKWQer4kF6JzVXYmldsnZlI9ezmW6nUG1H68UuDQHDFyQ1GQ7m1dh3UvyjPeWNmGrDwZyuhGyifobVudwj2n2W8oTpOtAhFGB4f8-LM1vvp2d7SQDpv95WMLHxGAZpFh0bhXMibcXfwjXXddhpsl6i1HnDasxBjOfjkxQ2WxXHP4OJoQX9aElQFBW1lKgR0vwEB7Em-N-istM90hKWCz~G7NCh540667UUvUAzFR1c46v8a0QJG8y7lMKD1~IZ9g1bI6nYC20Cf04l-2oyFp7v1yJ6dGR21srHIUuELSgGmMvg~bZb4bBw__"
            alt="Smart Recommendation Engine"
            className=" w-[334px] h-[307px] mb-4"
          />
      </div>

      {/* Product Cards */}
      <div
      className="relative bg-gray-50 py-12 px-6 md:px-24 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5587/ec51/c3200f7387ba17185422f53aa3739c5f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V4yftpVx0kxfxIr6gH4sj9lI25slD9AoS0VEpcEbJJqo48v~zfINGmw2YzwZb~HfkOU6sNNc~1T0261h8iHwTn2PAVcRGaW6WfzlzkPIAS5YC2ZPM6bb15lcQ2gO27f-DgE09dVhzSf3J1lyA7zTr5UNKbTL73k9vqCWkbA3F53yPjkbQo7zNkz4qjtxzXWtJduewPk-1f~sPfizjKElgQTOwD8ubqLSqYrI8Y2AqGRJsiXWuNIAOZmYRm0aY0bztcJyXjumu8MqmoCvBjovHxwGIEpy1UbfB8u1mKP0c~jPrSyZKV1FxDRfFJBsb~-HYw9wHJXY2decH7QIfMDWLg__")`,
      }}
    >
      
     
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Smart Recommendation Engine Card */}
        <div className="bg-white rounded-lg border-2 p-5 text-justify">
          <img
            src="https://s3-alpha-sig.figma.com/img/3d2e/ea19/1e33d692e5a6beffa09ce049b0e061d4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3Bw~X4rZQg53jayOCu4ckFU2l1-Wrgd81huXItkID2utlreywpiNisPsYSrK9kdjV91ABwa4j7KdNyLTQL23HGdw9j2srNTrZfV1AM36rzjjlPk7REO-Hndf8kcKRiItAMsZNEVPOQHY9pZyKzU7Hyyu1YEsBr2GeSaMmsfgwlp48eshl38l158-yfGdziLxmRuWCOHiqTUc7pn46Asmzr2XbMkIw4GuivP0aSF9KIXn32XOzfRZE~fXlq2wtpKFlOljcrRZQ00FCg9xKsdktjZxRdCcR8B9IsZsroQaMSZgVQFyySi2ARBZ0skHPymbfN69vOxe7luySvLI1iSwA__"
            alt="Smart Recommendation Engine"
            className=" md:w-[348px] md:h-[258px] md:mb-4 h-28 w-full "
          />
          <h2 className="md:text-xl text-lg text-blue-600">Smart Recommendation Engine</h2>
          <p className="text-gray-700 md:text-lg text-sm md:mt-4">
            Increase sales and customer satisfaction with personalized product recommendations powered by AI.
          </p>
          <button className="mt-6 bg-blue-500 text-white  py-2 px-6 rounded  hover:bg-blue-600 transition">
            Explore
          </button>
        </div>

        {/* Fraud Detection System Card */}
        <div className="bg-white rounded-lg border-2 p-5 text-justify">
          <img
            src="https://s3-alpha-sig.figma.com/img/05aa/b138/ff606e49cd0311d84c1a8a5afb69fc0b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilwgc2dkYTocASbooi2kkCnV1rr~IT6arSZ4zI3fo~zhatS4zbEqCJFiFzDEUtwbOEyKygyIS4tOSvOW8hOPSbB7hfVuAnlWImx83gtaXi6RuccVMRMGVHJNjtGil7zFnnBuJQXCM1QUpBJI-DMwsqUhZ5EbZCTG66JFsmt~sL9Q28E-eSm~-jQfP7eGQcbuL4I4uLRkKAro2wRyUZxTENJ7uFGVS0Fh0LceyfPL0Ftdangj0poo6oau1CkY1jQHTnhNT95YBqoSDU5X5h57JDIkpIXvP72Es0gUo-LNcsZj8B9PDyjyErAShyB2T3iCmsEagPN2Rw9nTyW7qaNhSg__"
            alt="Fraud Detection System"
            className=" md:w-[346px] md:h-[258px] md:mb-4 h-28 w-full"
          
          />
          <h2 className="md:text-xl text-lg text-blue-600">Fraud Detection System</h2>
          <p className="text-gray-700 text-sm md:text-lg md:mt-4">
            Protect your business from fraudulent activities with our advanced AI-driven fraud detection system.
          </p>
          <button className="mt-6 bg-blue-500 text-white  py-2 px-6 rounded  hover:bg-blue-600 transition">
            Explore
          </button>
        </div>

        {/* Customer Segmentation Tool Card */}
        <div className="bg-white rounded-lg border-2 p-6 text-justify">
          <img
            src="https://s3-alpha-sig.figma.com/img/c2f8/a5f8/7074167172e1b4bbf4d55071031d18ab?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxpGuZH1TYNrAPJHog3ToL0qD-EW4Dh8Y5KlGbCt72GR5SYj4AIxL7cvNNzb-n0A-kW0U6ERQYFtbfbdaSpPQtsNBY0zCNKXUdbbFwxcjA2ajrdV2fVI72L22LV7PgMx2tED1DLbMGMute3KusVSzL68g5NTEvyEZrGnX1ffaws1YMRFhd950pZ~Xp2hiESngRwqD8zT0eNPLHKRUvoFSeO9KzxHMOWccMO-ki~F4utZrRHmwJ2JjG-MCMaJjKD39t3lGnIOjMWbaBlA6OGpHZ11W7SKgsHOP7WYEVB5RxtUDO9iDcnKlW2GS6ypPewWq1P9mcMrweMYdXHWTXE52w__"
            alt="Customer Segmentation Tool"
            className=" md:w-[346px] md:h-[258px] md:mb-4 h-28 w-full"
          />
          <h2 className="md:text-xl text-lg text-blue-600">Customer Segmentation Tool</h2>
          <p className="text-gray-700 md:text-lg text-sm md:mt-4">
            Understand your customers better and target them more effectively with our AI-based customer segmentation tool.
          </p>
          <button className="mt-6 bg-blue-500 text-white  py-2 px-6 rounded  hover:bg-blue-600 transition">
            Explore
          </button>


          
        </div>


        <div className="bg-white rounded-lg border-2  text-justify p-6 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/0779/dc74/2647cd0bed398052ea53302d73a65659?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCjOPKLdyMn8~BM9Jqwi9eVF4bmKBsE4qz0Gxvuc-atc2aoQVTVoTtPhn3u~vdeceh51hlP9jEm8mPm28vTdBAOPAHwfbdCiNARcXsw62awiCPz1dMztnmI7IaUr29QE8L06gbh8DkGhyQ3orKIsDPqy1xhRTyx8XQbrBnqJqNwsOqNL~GXPMCDMa6lfdgY4TNWdut7qgz4PqHKWkOSolwqZF-lsJmrR-7t1hN62p9DK9A5U0qHfSCRNMuY~dOxJ~JoLV9oStaLyAKKhHUfBzF5ffFy9ywNkp2i88V-QFV1Ppe3Dovv4-8y8XNtuLtwYaNtvwPZAlZ7N~rCinyyTpw__"
            alt="Customer Segmentation Tool"
            className=" md:w-[346px] md:h-[258px] md:mb-4 h-28 w-full"
          />
          <h2 className="md:text-xl text-lg text-blue-600">Customer Segmentation Tool</h2>
          <p className="text-gray-700 md:text-lg text-sm md:mt-4">
            Understand your customers better and target them more effectively with our AI-based customer segmentation tool.
          </p>
          <button className="mt-6 bg-blue-500 text-white  py-2 px-6 rounded  hover:bg-blue-600 transition">
            Explore
          </button>


          
        </div>
      </div>
    </div>


    <div>
        <h1 className='md:text-3xl text-2xl text-center mb-2 text-blue-500'>Our Ai Soulutions</h1>
        <p className='text-justify items-center md:w-1/2 md:ml-[25%] md:text-lg text-sm px-4 md:px-0'>At SpYD Technology, we understand that every business is unique, 
            with its own set of challenges and opportunities. 
            That's why we offer a wide range of customizable AI solutions tailored to your specific needs:</p>
    </div>

    <div
      className="bg-white py-12 px-4 md:px-12 lg:px-24 "
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5a49/042d/96218870e8c9d459d4135a66296c1710?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsgJx4YA5RF~e3EGQwgS6247GYUGnxQPnRAuaXp4vNLz8hJn0hqMkVWd7uAu4lApNNlMIj5-P7T9XK92HbA86l67Ey0zQm7bDcNhX1TJvykVK6kA876EYkF3GlCsDSLIw7AGUvXPztcEqW79ZhOwEfcyKpxCXdUp9HC~CUf78DQn1Cn4LoEIn~PrXB~ytlQl0k3k101KEIRLqVDKjgNOxqU7dAXjNIv90BHdgI3LDo3mXrRJ~U1q-ntd2m2r-gp~9juFSr9Sbi4clVUxSiyea-Ypkt5OBxyH91Re34LEfVKrF4r3CWIroDCS2rtVt2vLZRZ~DVr5aoLSzbo97YNF7g__')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative md:w-[349px] rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-[#38bdf8] to-blue-600"
          >
            <div className="relative md:w-full md:h-48 h-32">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-justify flex flex-col items-center text-white ">
              <h2 className="text-lg font-semibold  mb-2">
                {product.title}
              </h2>
              <p className=" text-sm  mb-6">{product.description}</p>
              <button className="bg-white text-blue-500  py-2 px-6 rounded transition hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    <h1  className='text-3xl text-blue-500 text-center py-10'>Why choose SpY D Technology</h1>
    <div className="bg-white py-12 px-4 md:px-12 lg:px-32">
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative p-4 md:w-[511px] md:h-[302px] bg-gradient-to-r from-[#38bdf8] to-blue-600 text-white rounded-lg shadow-lg  flex flex-col items-center text-center"
          >
            {/* Circle Icon */}
            <div className="absolute -top-14 bg-white border-2  rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shadow-lg">
              <span className="text-blue-600 text-2xl ">
                {feature.id}
              </span>
            </div>
            {/* Title and Description */}
            <div className='md:mt-10'>
            <h2 className="md:text-xl  mt-6 mb-4">{feature.title}</h2>
            <p className="text-sm mb-4 text-justify  ">{feature.description}</p>
            {/* Follow Button */}
            <button className="bg-white hover:bg-blue-800 text-blue-500  py-3 px-6 rounded">
              Follow
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-gradient-to-r from-[#38bdf8] to-blue-600 h-[350px] space-y-10 rounded-xl text-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 text-center">
  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-5/6 md:w-4/6 mx-auto mb-4">
    “Landwind is just awesome. It contains tons of predesigned components
    and pages starting from login screen to complex dashboard, perfect
    choice for your next SaaS application.”
  </blockquote>
  <p className="text-lg sm:text-base md:text-lg lg:text-xl">Michael Gough | CEO at Google</p>
</div>



    <CallToAction />
    <Footer />
   

    </div>
  )
}

export default Ai