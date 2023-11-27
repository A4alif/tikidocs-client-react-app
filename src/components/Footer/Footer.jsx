import React from "react";
import logo from "../../assets/tikidocsLightLogo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 text-white py-14 lg:justify-items-center  ">
            <div>
              <div className="h-10">
                <div className="flex items-center gap-4">
                  <img className="h-10" src={logo} alt="" />
                  <h2 className="text-white text-xl font-bold">TikiDocs</h2>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 font-light">
                TikiDocs is a platform for tech enthusiasts to discuss the
                latest trends, innovations, and developments in the tech
                industry.
              </p>
            </div>
            <div>
              <div className="text-white ">
                <p className="text-lg  font-bold mb-6  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer">
                  <Link to={"/"}>Home</Link>
                </p>
                <p className="text-lg font-normal mb-6  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer">
                  <Link to={"/login"}>Login</Link>
                </p>
                <p className="text-lg font-normal mb-6  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer">
                  <Link to={"/register"}>Register</Link>
                </p>
                <p className="text-lg font-normal mb-6  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer">
                  <Link to={"/membership"}>Membership</Link>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-9">
                Follow Us On
              </h2>
              <div className="mt-6 flex items-center space-x-4  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer ">
                <BsFacebook size={20} />
                <p className="text-sm font-extralight hover:font-normal	">
                  Facebook
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer ">
                <BsInstagram size={20} />
                <p className="text-sm font-extralight hover:font-normal	">
                  Instagram
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer ">
                <BsTwitter size={20} />
                <p className="text-sm font-extralight hover:font-normal	">
                  Twitter
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4  hover:text-red-700 transition-all duration-200 ease-in-out cursor-pointer ">
                <BsLinkedin size={20} />
                <p className="text-sm font-extralight hover:font-normal	">
                  Linkedin
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://i.postimg.cc/T3jTwyVT/playstore.png"
                  alt="footer-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-6">
          <div className="container mx-auto">
            <p className="text-white text-center">
              All Rights Reserved by &copy; TikiDocs 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
