import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

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
      </div>
    </>
  );
};

export default Home;
