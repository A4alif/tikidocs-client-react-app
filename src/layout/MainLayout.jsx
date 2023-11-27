import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <>
      <header className="bg-base-200" >
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#252525]  w-full ">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
