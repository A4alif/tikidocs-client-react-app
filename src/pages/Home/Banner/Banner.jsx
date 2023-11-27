import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    /* Hook Config */
    words: ["Blockchain", "Web Technoloy", "Gadgets", "Mobile Application"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(https://i.postimg.cc/vHKDxfNG/banner.jpg)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-4xl font-bold text-[#000]">
              Technology Trends Discussion Board
            </h1>
            <p className="text-slate-700 mb-6 text-md ">
              Tech enthusists to discuss the latest trends such as{" "}
              <span className="text-green-600 font-semibold text-lg">
                {text}
              </span>{" "}
              <span className="text-purple-700 font-bold text-xl">
                <Cursor cursorStyle="|" />
              </span>
            </p>

            <form>
              <div>
                <input
                  className="px-4 py-4 w-4/5 mx-auto text-[#000]  outline-none focus:outline-none rounded-full mr-4 mb-9 md:mb-0"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Search Here"
                />

                <button
                  type="submit"
                  className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
