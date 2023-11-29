import React from "react";
import useCommentsReport from "../../../hooks/useCommentsReport";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";

const CommentsReport = () => {
  const [comments, isLoading, refetch] = useCommentsReport();

  const handleDeleteComment = (comment) => {
    console.log(comment);
  };

  return (
    <>
      <div>
        <div>
          <h2 className="text-3xl md:text-4xl text-center mt-9 single-text-gradient font-semibold">
            All Reported Comments
          </h2>
        </div>
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
                    <th>Comments Author</th>
                    <th>Message</th>
                    <th>Feedback</th>
                    <th>Reported By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {comments.map((comment) => (
                    <tr key={comment._id}>
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
                          <div>{comment?.commentUserName}</div>
                        </div>
                      </td>
                      <td className="w-4/6">
                        <div className="w-5/6">
                          <span className="text-sm leading-8 ">
                            {comment?.commentUserMsg}
                          </span>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-semibold capitalize text-orange-600 ">
                          {comment?.feedback}
                        </p>
                      </td>
                      <td>
                        <p className="text-sm font-semibold capitalize text-purple-600 ">
                          {comment?.reportedBy}
                        </p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteComment(comment)}
                          className="cursor-pointer hover:text-red-500"
                        >
                          <MdDeleteForever size={40} />
                        </button>
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

export default CommentsReport;
