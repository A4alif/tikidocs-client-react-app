import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const Announcements = () => {
  const axiosPublic = useAxiosPublic();
  const { data: announce = [], isPending: isLoading } = useQuery({
    queryKey: ["announce"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data.result;
    },
  });
  return (
    <>
      {announce.length == 0 ? (
        ""
      ) : (
        <div>
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
                    Admin Announcements
                  </h2>
                </div>
              </div>
            </div>
            {/* all announcements */}
            <div>
              <div className="container mx-auto my-24">
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
                    <thead>
                      <tr>
                        <th>Author</th>
                        <th>Announcement</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {announce.map((post) => (
                        <tr key={post._id}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={post?.photourl}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{post?.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="w-4/6">
                            <div className="w-3/4">
                              <p className="text-lg font-semibold">
                                {post?.title}
                              </p>
                              <br />
                              <span className="text-sm leading-8 ">
                                {post?.description}
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-semibold">
                              {post?.postDate}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcements;
