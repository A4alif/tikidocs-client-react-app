import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CommentDetailsRow = ({ comment }) => {
  const [feedback, setFeedback] = useState("");
  const axiosPublic = useAxiosPublic();

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
    console.log(reportCommentInfo);

    axiosPublic.post("/report-comment", reportCommentInfo).then((res) => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Comment Reported to Admin",
          showConfirmButton: false,
          timer: 1500,
        });
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
              <button disabled className="btn btn-sm cursor-not-allowed">
                Report Admin
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default CommentDetailsRow;
