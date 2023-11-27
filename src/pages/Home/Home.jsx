import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Posts from "./Posts/Posts";
import Announcements from "./Announcements/Announcements";

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
        <div>
          <Posts />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </>
  );
};

export default Home;
