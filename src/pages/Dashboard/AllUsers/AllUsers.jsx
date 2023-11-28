import React from "react";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: usersInfo = [], isPending: isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data.result;
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
  }

  return (
    <>
      <div className="mt-9">
        {isLoading ? (
          <>
            {" "}
            <div className="flex justify-center">
              <LoadingSpinner />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl single-text-gradient font-semibold">
                Total User : {usersInfo.length}{" "}
              </h2>
            </div>
            {/* user table */}
            <div>
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead className="text-lg">
                    <tr>
                      <th>Number</th>
                      <th>User Info</th>
                      <th>Action</th>
                      <th> Membership</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {usersInfo?.map((user, index) => (
                      <tr key={user._id}>
                        <th>
                          <p className="ml-3">{index + 1}</p>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={user?.photourl}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{user?.name}</div>
                              <div className="text-sm opacity-100">
                                {user?.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button onClick={() => handleMakeAdmin(user)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2" >
                            Make Admin
                          </button>
                        </td>
                        <td>
                          {" "}
                          <span className="capitalize text-green-600 font-semibold ">
                            {user?.status}
                          </span>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllUsers;
