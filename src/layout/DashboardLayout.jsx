import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CiHome } from "react-icons/ci";

const DashboardLayout = () => {

    const isAdmin = true;
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="left min-h-screen w-[350px] bg-gray-200 shadow-lg">
            {isAdmin ? <><div className="flex justify-center ">
              <ul className="flex flex-col items-center space-y-8">
                <li className="pt-9 text-2xl font-medium">
                  <NavLink
                    to="/dashboard/admin-profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    All Users
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/reported-comments"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                     Comments
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="divider divider-success pt-9">
              <CiHome size={60} />
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col items-center space-y-8">
                <li className="pt-9 text-2xl font-medium">
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
              </ul>
            </div></>: <><div className="flex justify-center">
              <ul className="flex flex-col items-center space-y-8">
                <li className="pt-9 text-2xl font-medium">
                  <NavLink
                    to="/dashboard/user-profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/add-post"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    Add Post
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/my-posts"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    My Posts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="divider divider-success pt-9">
              <CiHome size={60} />
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col items-center space-y-8">
                <li className="pt-9 text-2xl font-medium">
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
              </ul>
            </div></>}
          </div>
          <div className="right flex-1  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
