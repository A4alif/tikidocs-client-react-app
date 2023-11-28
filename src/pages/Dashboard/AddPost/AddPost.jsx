import React, { useContext } from "react";
import { AuthContext } from './../../../Provider/AuthProvider';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddPost = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const postDate = form.postDate.value;
    const postTags = form.postTags.value;
    const upVote = Number(0);
    const downVote = Number(0);
    const postInfo = {
      title,
      description,
      postDate,
      postTags,
      upVote,
      downVote,
      authorName:user?.displayName,
      authorImg: user?.photoURL,
      authorEmail: user?.email,
    }

    axiosPublic.post("/posts", postInfo)
    .then(res => {
      if(res.data.result.insertedId){
        Swal.fire({
         
          icon: "success",
          title: "Post Added to Database Successfully",
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


  }
  return (
    <>
      <div className="mt-9">
      
        <div className="bg-gray-200 py-9 rounded-lg shadow-lg">
          <form onSubmit={handlePost} >
            <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
              <label
                className="block text-xl font-semibold mb-4"
                htmlFor="title"
              >
                Post Title
              </label>
              <input
                name="title"
                id="title"
                className="py-2 px-2 rounded-lg focus:outline-none w-full"
                type="text"
                placeholder="Post Title"
                required
              />
            </div>
            <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    cols="10"
                    rows="8"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="postDate"
                  >
                    Post Date
                  </label>
                  <input
                    name="postDate"
                    id="postDate"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full text-gray-400"
                    type="date"
                    required
                  />
                </div>
                <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
                  <label
                    htmlFor="postTags"
                    className="font-semibold text-lg mr-4"
                  >
                    Select Tags{" "}
                  </label>
                  <select
                    className="w-40 py-2 rounded-md focus:outline-none"
                    name="postTags"
                    id="postTags"
                    required
                  >
                    <option value="">Select Tags</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="web">Web</option>
                    <option value="app">App</option>
                    <option value="gadget">Gadget</option>
                  </select>
                </div>
                <div className="  lg:w-3/4 mx-auto ">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Submit post
                  </button>
                </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
