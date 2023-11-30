import React, { useState } from "react";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();
  const limit = 5;
  const {
    data: usersInfo = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-users", page, search],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/users?page=${page}&limit=${limit}&search=${search}`
      );
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const userInfoUpdate = {
      status: "admin",
      statusPhotoUrl: "https://i.postimg.cc/1RphNDvj/admin-crown.png",
      role: "admin",
    };
    axiosPublic.put(`/users/admin/${user._id}`, userInfoUpdate).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user?.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // pagination handle

  const totalPage = Math.ceil(usersInfo.total / limit);
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  // search user handle
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
  };

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
              <h2 className="text-3xl md:text-4xl single-text-gradient font-semibold mb-9">
                All User List
              </h2>
              <form onSubmit={handleSearch} className="mb-9">
                <div className=" w-full md:max-w-lg mx-auto flex items-center space-x-6">
                  <input
                    className="bg-base-300 w-full py-3 px-3 rounded-lg focus:outline-none"
                    type="text"
                    name="search"
                    id="search"
                  />
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
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
                    {usersInfo?.result?.map((user, index) => (
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
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                          >
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

        {/* pagination */}
        <div className="container mx-auto px-6 mt-14">
          {isLoading ? (
            <>
              {" "}
              <LoadingSpinner />{" "}
            </>
          ) : (
            <>
              <div className=" flex justify-end">
                <div className="join">
                  <button onClick={handlePrevious} className="join-item btn">
                    «
                  </button>
                  {Array(totalPage)
                    .fill(0)
                    .map((item, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setPage(pageNumber)}
                          className={`${
                            pageNumber === page
                              ? "join-item btn btn-md btn-active"
                              : "join-item btn btn-md"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                  <button onClick={handleNext} className="join-item btn">
                    »
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
