import React, { useState } from "react";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./../../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const Posts = () => {
  const [page, setPage] = useState(1);
  const axiosPublic = useAxiosPublic();

  const limit = 5;
  const { data: posts = [], isPending: isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts?page=${page}&limit=${limit}`);
      return res.data;
    },
  });

  const totalPage = Math.ceil(posts.total / limit);

  // pagination handle
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

  return (
    <>
      <div className="mt-16 py-9 ">
        <div
          className="h-[200px] w-full bg-green-500"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/jSx6jFm2/forum-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto">
            <div className="flex items-center h-[200px]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl single-text-gradient font-bold">
                All Trending Posts
              </h2>
            </div>
          </div>
        </div>
        {/* All posts */}
        <div className="container mx-auto px-6 mt-24">
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
                  <th>Tags</th>
                  
                  <th>Time</th>
                  <th>Total Votes</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.result?.map((post) => (
                  <tr key={post._id}>
                    <td>
                      <div className="flex items-center gap-6">
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
                      <Link to={`/post-details/${post?._id}`}>
                        <p className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-purple-700 ">
                          {post?.title}
                        </p>
                      </Link>
                    </td>
                    <td>
                      <p className="capitalize text-md text-purple-500 font-semibold">
                        {post?.postTags}
                      </p>
                    </td>
                    
                    <td>
                      <p className="text-lg text-gray-400">{post?.postDate}</p>
                    </td>
                    <td>
                      <p className="text-lg ">{post?.upVote}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* pagination */}
        <div className="container mx-auto px-6 mt-24">
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

export default Posts;
