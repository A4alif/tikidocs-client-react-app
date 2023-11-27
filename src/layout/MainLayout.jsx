import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
      <ToastContainer />

    </>
  );
};

export default MainLayout;
