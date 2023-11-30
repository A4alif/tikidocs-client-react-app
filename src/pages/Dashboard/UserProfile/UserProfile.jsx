import React, { useContext } from "react";
import useUserProfile from "../../../hooks/useUserProfile";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useMyPosts from "../../../hooks/useMyPosts";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const UserProfile = () => {
  const [userInfo, isLoading] = useUserProfile();
  const [posts] = useMyPosts();
  return (
    <div className="mt-9">
      {isLoading && (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      )}
      {userInfo?.map((user) => (
        <div key={user._id} className="w-3/4 mx-auto">
          <div className="card  card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-64 h-full" src={user?.photourl} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                <span className="text-xl text-gray-500">Name:</span>{" "}
                {user?.name}
              </h2>
              <h2 className="card-title">
                {" "}
                <span className="text-xl text-gray-500">Email:</span>{" "}
                {user?.email}
              </h2>
              <h2 className="card-title">
                {" "}
                <span className="text-xl text-gray-500">Membership:</span>{" "}
                <span className="capitalize">{user?.status}</span>{" "}
              </h2>
              <img className="w-32 h-32" src={user?.statusPhotoUrl} alt="" />
            </div>
          </div>
        </div>
      ))}

      {/* My recent three posts section */}
      <div>
        <h2 className="text-center text-3xl md:text-4xl single-text-gradient font-semibold mt-24">
          My Recent Posts
        </h2>
        <div className="mt-9">
          {isLoading && (
            <>
              <div className="text-center">
                {" "}
                <LoadingSpinner />{" "}
              </div>
            </>
          )}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg bg-gray-200 ">
                <tr className="py-8">
                  <th>Author</th>
                  <th>Post Title</th>
                  <th>Comments</th>
                  <th>Total Votes</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts?.slice(0, 3).map((post) => (
                  <tr key={post._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={post?.authorImg}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post?.authorName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-purple-700 ">
                        {post?.title}
                      </p>
                    </td>

                    <th>
                      <Link to={`/dashboard/comment-details/${post?._id}`}>
                        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                          See Comments
                        </button>
                      </Link>
                    </th>

                    <td>
                      <p className="text-lg ">{post?.upVote}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
