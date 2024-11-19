import React from "react";
import seoImage from "../../../assets/digitalmarketing/seo.png";
import { Link } from "react-router-dom";
function Seo() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className=" flex justify-around items-center">
          <div className="w-1/2 h-auto">
            <p className="text-3xl mb-6 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
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
              <button className="text-white mt-4 px-6 p-2 rounded-md  w-auto bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-xl ">
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
