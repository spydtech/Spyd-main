import React from "react";
import seoImage from "../../../assets/digitalmarketing/seo.png";
import { Link } from "react-router-dom";
function Seo() {
  return (
    <>
      <div className="lg:mx-4 mt-4">
        <div className=" flex lg:flex-row flex-col-reverse justify-around items-center">
          <div className="lg:w-1/2 w-full p-2 h-auto">
            <p className="lg:text-3xl text-xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Search Engine Optimization (SEO)
            </p>
            <p className="">
              SEO means Search Engine Optimization and is the process used to
              optimize a website's technical configuration, content relevance
              and link popularity so its pages can become easily findable, more
              relevant and popular towards user search queries, and as a
              consequence, search SEO, also known as search engine optimization,
              involves optimizing your website to improve its ranking on search
              engine results pages and increase organic search traffic. By
              implementing SEO strategies, you can enhance your website’s
              visibility and boost its likelihood of showing up on the first
              page of search results such as Google, Bing and Yahoo rank them
              better.
            </p>

            <Link to="/digitalmarketing/Seo">
              <button className=" mt-6 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg ">
                Read More
              </button>
            </Link>
          </div>
          <div className="">
            <img className="float-end w-96 h-96" src={seoImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Seo;
