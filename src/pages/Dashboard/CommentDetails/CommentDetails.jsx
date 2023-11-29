import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const CommentDetails = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data: comments = [], isPending: isLoading } = useQuery({
    queryKey: ["post-commentsall"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user-comments/${id}`);
      return res.data.result;
    },
  });

  //   post comment to report comment databaser

  const handleReportComment = (comment) => {
    const reportCommentInfo = {
      commentID: comment?._id,
      commentUserName: comment?.commentUserName,
      commentUserEmail: comment?.commentUserEmail,
      commentUserMsg: comment?.commentUserMsg,
      commentUserImg: comment?.commentUserImg,
      reportedBy: comment?.postAuthor,
      feedback,
    };

    axiosPublic.post("/report-comment", reportCommentInfo).then((res) => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Comment Reported to Admin",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div>
        <div>
          {comments?.slice(0, 1).map((comment) => (
            <h2
              key={comment?._id}
              className="text-center mt-9 text-2xl md:text-3xl"
            >
              Post Title:{" "}
              <span className="single-text-gradient font-semibold">
                {comment?.postTitle}
              </span>{" "}
            </h2>
          ))}
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
                    <th>User Info</th>
                    <th>Message</th>
                    <th>Feedback</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {comments?.map((comment) => (
                    <tr key={comment?._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={comment?.commentUserImg}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {comment?.commentUserName}
                              <div className="text-sm opacity-50">
                                {comment?.commentUserEmail}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-3/6">
                        <div className="w-3/4">
                          <span className="text-sm leading-8 ">
                            {comment?.commentUserMsg}
                          </span>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-semibold">
                          <select
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-40 py-2 rounded-md focus:outline-none bg-gray-300"
                            name="postTags"
                            id="postTags"
                            required
                          >
                            <option value="">Select Feedback</option>
                            <option value="good">Good</option>
                            <option value="bad">Bad</option>
                            <option value="spam">Spam</option>
                          </select>
                        </p>
                      </td>
                      <td>
                        {feedback ? (
                          <>
                            {" "}
                            <button
                              onClick={() => handleReportComment(comment)}
                              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                            >
                              Report
                            </button>
                          </>
                        ) : (
                          <>
                            {" "}
                            <button
                              disabled
                              className="btn btn-sm cursor-not-allowed"
                            >
                              Report Admin
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentDetails;
