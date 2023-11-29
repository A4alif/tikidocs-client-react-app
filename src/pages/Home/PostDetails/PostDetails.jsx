import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BiSolidLike } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const [giveVote, setGiveVote] = useState(false);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: post = {} } = useQuery({
    queryKey: ["single-post"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts/${id}`);
      return res.data.result;
    },
  });

  //   handle give vote

  const handleGiveVote = () => {
    console.log("like unlike btn click");
    setGiveVote(true);
  };

  // handle post comment
  const handlePostComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const commentInfo = {
        postTitle : post?.title,
        postID : post?._id,
        postAuthor: post?.authorName,
        commentUserName : name,
        commentUserEmail: user?.email,
        commentUserImg: user?.photoURL,
        commentUserMsg: message,

    }
    
    // post comment to database
    axiosPublic.post("/user-comment", commentInfo)
    .then( res => {
        if(res.data.result.insertedId){
            Swal.fire({
              icon: "success",
              title: "Comment Added Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            form.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: "Something Went Wrong",
              showConfirmButton: false,
              timer: 1500
            });
          }
    })
    
  };


  return (
    <>
      <Helmet>
        <title>TikiDocs | Post Details </title>
      </Helmet>
      <div>
        <div className="max-w-6xl mx-auto px-6 my-14">
          <div className="card  bg-base-200 shadow-xl ">
            <div className="card-body py-24 px-24">
              <h2 className="card-title">{post?.title}</h2>
              <div className="mt-4 mb-9 flex space-x-9">
                <div className="flex items-center space-x-6">
                  <h2>
                    {" "}
                    <span className="text-lg italic">Author</span> :{" "}
                    <span className="single-text-gradient font-bold text-lg pl-2">
                      {post?.authorName}
                    </span>{" "}
                  </h2>
                  <div>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={post?.authorImg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <h2>
                    {" "}
                    <span className="text-lg italic">Tag</span> :{" "}
                    <span className="single-text-gradient font-bold text-lg pl-2">
                      {post?.postTags}
                    </span>{" "}
                  </h2>
                </div>
                <div className="flex items-center space-x-6">
                  <h2>
                    {" "}
                    <span className="text-lg italic">Date</span> :{" "}
                    <span className="single-text-gradient font-bold text-lg pl-2">
                      {post?.postDate}
                    </span>{" "}
                  </h2>
                </div>
              </div>
              <p className="text-md text-gray-500 text-justify leading-8">
                {post?.description}
              </p>
              <div className="mt-9 flex space-x-8">
                {user?.email ? (
                  <>
                    {giveVote ? (
                      <>
                        {" "}
                        <p>Thanks for your feedback</p>{" "}
                      </>
                    ) : (
                      <>
                        <button onClick={handleGiveVote}>
                          <BiSolidLike size={45} />
                        </button>
                        <button onClick={handleGiveVote}>
                          <AiFillDislike size={45} />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-purple-600 font-semibold">
                      Please Login to post a comment{" "}
                      <span className="text-blue-500">
                        {" "}
                        <Link to={"/login"}>Click Here</Link>{" "}
                      </span>{" "}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* comment box */}
          {user?.email && (
            <div className="my-14 pb-9">
              <div className="card w-4/6 bg-base-100 shadow-xl">
                <div className="card-body py-9">
                  <h2 className="card-title">Post a Comment</h2>
                  <form onSubmit={handlePostComment} className="w-3/4">
                    <div className="mt-6 w-full">
                      <label
                        className="block text-lg font-semibold mb-4"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-full focus:outline-none bg-gray-100"
                        defaultValue={user?.displayName}
                        type="text"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                    <div className="mt-6 w-full">
                      <label
                        className="block text-lg font-semibold mb-4"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="bg-gray-100 w-full focus:outline-none rounded-lg p-4"
                        name="message"
                        id="message"
                        cols="40"
                        rows="6"
                        required
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
