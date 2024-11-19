import React from "react";
import { FaArrowRight } from "react-icons/fa";
function Passion() {
  return (
    <>
      <div className="lg:mt-10 my-4 mx-4">
        <div className="text-center">
          <p className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            Our Passion is Growing Your Online Business
          </p>
        </div>

        <div className="text-xl mt-6 mx-4">
          <p>
            Unlock the secret to making your website shine on search engines
            like Google and Microsoft Bing. In simple terms, SEO means the
            process of improving your website to increase its visibility and
            ranking. By fine-tuning your website's content, structure, and
            overall awesomeness, you can increase the chances of it appearing at
            the top of search results when people search:
          </p>
          <div className="mt-4">
            <p className="flex">
              <span className="mr-2">
                <FaArrowRight className="w-8 h-6" />
              </span>
              The products you offer.
            </p>
            <p className="flex">
              <span className="mr-2">
                {" "}
                <FaArrowRight className="w-8 h-6" />
              </span>
              The services you deliver.
            </p>
            <p className="flex">
              <span className="mr-2">
                {" "}
                <FaArrowRight className="w-8 h-6" />
              </span>
              Information on subjects where you possess significant knowledge
              and experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passion;
