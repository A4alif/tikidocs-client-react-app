import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="container mx-auto pt-9 mt-8">
        <div className="flex justify-center ">
          <img
            className=" h-[20rem] md:h-[40rem]"
            src="https://i.postimg.cc/Rh5KPK8N/notFound.webp"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <Link to={"/"}>
            <button className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-6">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
