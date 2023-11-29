import React from "react";
import useUserProfile from "../../../hooks/useUserProfile";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AdminProfile = () => {
  const [userInfo, isLoading] = useUserProfile();
  const axiosPublic = useAxiosPublic();
  // add tags to database
  const handleSubmitTags = (e) => {
    e.preventDefault();
    const form = e.target;
    const tagName = form.name.value.toLowerCase();
    const tagInfo = {
      tagName,
    };

    // send tagname to database
    axiosPublic.post("/tags", tagInfo).then((res) => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Tag Added to Database Successfully",
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

  // add membership to database
  const handleSubmitMembership = (e) => {
    e.preventDefault();
    const form = e.target;
    const membershipName = form.name.value;
    const photourl = form.photourl.value;
    const description = form.description.value;
    const membershipInfo = {
      membershipName,
      photourl,
      description
    }
   
    axiosPublic.post("/membership", membershipInfo)
    .then( res => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Membership Added to Database Successfully",
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
    })


  };

  // do other things



  return (
    <>
      <div className="mt-9">
        {isLoading && (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        )}
        {/* admin profile info */}
        {userInfo?.map((user) => (
          <div key={user._id} className="w-3/4 mx-auto">
            <div className="card  card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-64 h-full" src={user?.photourl} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <span className="text-xl text-gray-500">Name:</span>{" "}
                  {user?.name}
                </h2>
                <h2 className="card-title">
                  {" "}
                  <span className="text-xl text-gray-500">Email:</span>{" "}
                  {user?.email}
                </h2>
                <h2 className="card-title">
                  {" "}
                  <span className="text-xl text-gray-500">
                    Membership:
                  </span>{" "}
                  <span className="capitalize">{user?.status}</span>{" "}
                </h2>
                <img className="w-32 h-32" src={user?.statusPhotoUrl} alt="" />
              </div>
            </div>
          </div>
        ))}

        {/* add tags and show pie chart */}
        <div className="my-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row space-x-6 space-y-6 md:space-y-0">
              <div className=" w-full md:w-1/2 ">
                <form onSubmit={handleSubmitTags}>
                  <div className="card pt-6  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Add Tags</h2>
                      <div className="my-6">
                        <label
                          className="block text-xl font-medium"
                          htmlFor="name"
                        >
                          Tag Name
                        </label>
                        <input
                          className="bg-gray-200 w-3/4 px-4 py-3 rounded-lg mt-6 focus:outline-none"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="tag name"
                        />
                        <div className="mt-9">
                          <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className=" w-full lg:w-1/2 ">
                <form onSubmit={handleSubmitMembership}>
                  <div className="card pt-6  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Add Membership</h2>
                      <div className="my-6">
                        <div className="mb-6">
                          <label
                            className="block text-xl font-medium"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            className="bg-gray-200 w-3/4 px-4 py-3 rounded-lg mt-6 focus:outline-none"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="membership name"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            className="block text-xl font-medium"
                            htmlFor="photourl"
                          >
                            Photo URL
                          </label>
                          <input
                            className="bg-gray-200 w-3/4 px-4 py-3 rounded-lg mt-6 focus:outline-none"
                            type="text"
                            name="photourl"
                            id="photourl"
                            placeholder="photourl"
                          />
                        </div>
                        <div className="mb-6">
                          <textarea
                            className="bg-gray-200 w-3/4 px-4 py-3 rounded-lg mt-6 focus:outline-none"
                            name="description"
                            id="description"
                            cols="10"
                            rows="4"
                          ></textarea>
                        </div>
                        <div className="mt-9">
                          <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                          >
                            Add Membership
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
