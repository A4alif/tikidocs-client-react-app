import React from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAnnouncement from "../../../hooks/useAnnouncement";

const Announcements = () => {
  const [announce, isLoading] = useAnnouncement();

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
                    <thead className="bg-gray-300 text-lg">
                      <tr>
                        <th>Admin</th>
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
