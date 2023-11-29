import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import CommentDetailsRow from "./CommentDetailsRow";

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
                    <CommentDetailsRow key={comment?._id} comment={comment} />
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
