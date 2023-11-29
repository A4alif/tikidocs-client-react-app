import React from "react";
import useMyPosts from "../../../hooks/useMyPosts";
import { MdDelete } from "react-icons/md";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const [posts, isLoading] = useMyPosts();
  return (
    <>
      <div className="mt-9">
        <h2 className="text-center text-3xl md:text-4xl single-text-gradient font-semibold">
          My Posts
        </h2>
      </div>
      {/* All posts */}
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {posts?.map((post) => (
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
                    <Link to={`/dashboard/comment-details/${post?._id}`} ><button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                      See Comments
                    </button></Link>
                  </th>

                  <td>
                    <p className="text-lg ">{post?.upVote}</p>
                  </td>
                  <td>
                    <button className="hover:text-red-500">
                      <MdDelete size={45} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
