import React, { useEffect } from "react";
import Footer from '../../components/Footer'
import image from "./../../assets/aboutus/hero.png"
import AOS from "aos";
import "aos/dist/aos.css";

const aboutusData = [
  {
    data: "In the ever-evolving landscape of technology, SPY D TECHNOLOGY stands as India's premier full-scale software and information technology company, spearheading innovation and deliveringcutting-edge solutions in emerging technologies. With a comprehensive range of services spanning Web Technologies, Mobility Applications, Web & Mobile Products, End-to-End Digital Transformation, Augmented & Virtual Reality, Artificial and Machine Learning, and Design Thinking Innovation, alongside Digital Marketing Services, SPY D TECHNOLOGY is at the forefront of shaping the future of digital experiences.",
  },
  {
    data: "Our commitment to excellence is evident in the diverse portfolio of services we offer. Web Technologies form the backbone of our expertise, with our seasoned technology team excelling in ideating, designing, and deploying web applications that cater to the unique needs of our clients. From dynamic websites to complex web portals, we ensure that our solutions are not only visually appealing but also functionally robust, providing seamless user experiences.",
  },
  {
    data: "In the realm of Mobility Applications, SPY D TECHNOLOGY is a trailblazer, developing innovative and user-friendly mobile applications that cater to diverse industries. Our mobile solutions are designed to enhance accessibility, streamline processes, and provide a competitive advantage to our clients in the dynamic mobile landscape.",
  },
  {
    data: "Web & Mobile Products developed by SPY D TECHNOLOGY showcase our commitment to creating solutions that stand out in the market. From feature-rich mobile apps to responsive websites, our products are crafted with precision and a user-centric approach, ensuring that they meet the evolving needs of businesses and end-users alike.",
  },
  {
    data: "End-to-End Digital Transformation is a cornerstone of our services, reflecting our dedication to guiding enterprises through a holistic and strategic digital evolution. We understand the unique challenges faced by businesses in the digital age and work collaboratively with our clients to develop and implement transformative solutions that drive growth, efficiency, and innovation.",
  },
  {
    data: "Augmented & Virtual Reality are areas where SPY D TECHNOLOGY pushes the boundaries of possibility. Leveraging AR and VR technologies, we create immersive experiences that redefine how users interact with digital content. From virtual tours to augmented reality applications, our solutions elevate engagement and deliver a new dimension to digital experiences.",
  },
  {
    data: "Artificial and Machine Learning represent the future of intelligent computing, and SPY D TECHNOLOGY is at the forefront of harnessing these technologies for the benefit of our clients. Our expertise in developing AI and ML solutions empowers businesses to automate processes, gain valuable insights, and make data-driven decisions, enhancing overall efficiency and productivity.",
  },
  {
    data: "Design Thinking Innovation is ingrained in our approach to problem-solving. At SPY D TECHNOLOGY , we believe in the power of creativity and user-centric design to drive innovation. Our design thinking processes ensure that our solutions not only meet technical requirements but also resonate with end-users, delivering exceptional experiences.",
  },
  {
    data: "In addition to our technological prowess, SPY D TECHNOLOGY offers Digital Marketing Services to help businesses establish a strong online presence, reach their target audience, and drive growth. Our digital marketing strategies encompass a holistic approach, including search engine optimization (SEO), social media marketing, and content marketing, among others.",
  }
];

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-serif">
      <img 
      data-aos="fade-in"
      src={image} alt="aboutusHeroImg" className="w-full h-44 lg:h-96" />
      <div className="my-3">
        <h1 className="text-center my-3 text-xl bg-gradient-to-r from-[#00CEFF] to-[#0072FF] bg-clip-text text-transparent"
        data-aos="fade-down"
        >WHO WE ARE</h1>
        <ul className="mx-5 md:mx-10 lg:mx-20 space-y-3 text-justify"
        data-aos="fade-up"
        >
          {aboutusData.map((each) => (
            <li key={each.id}>
              <p className="text-sm">{each.data}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
