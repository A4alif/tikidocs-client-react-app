import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/tikidocsLogo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged Out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="navbar py-6 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/membership"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold  "
                        : ""
                    }
                  >
                    Membership
                  </NavLink>
                </li>
                <li>
                  <Link>Notifications</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-40 cursor-pointer">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-normal space-x-8">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/membership"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold  "
                    : ""
                }
              >
                Membership
              </NavLink>
              <Link>Notifications</Link>
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL && <img src={user?.photoURL} alt="" />}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                  >
                    <li className="py-3">
                      <a className="justify-between">{user?.displayName}</a>
                    </li>
                    <li>
                      {user?.email && <Link to={"/dashboard/user-profile"}>Dashboard</Link>}
                    </li>
                    <li className="pb-3 text-red-500 font-bold">
                      <Link to={""} onClick={handleLogOut}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="ml-6">
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Join US
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
