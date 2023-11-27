import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TikiDocs | Home</title>
      </Helmet>

      <div>
        <div>
          <Banner />
        </div>
        <div className="mb-6">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
