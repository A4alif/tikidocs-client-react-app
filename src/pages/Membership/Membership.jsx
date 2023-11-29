import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import useMembership from "../../hooks/useMembership";
import LoadingSpinner from "./../../components/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from './../../Provider/AuthProvider';

const Membership = () => {
  const [membershipDetails, isLoading] = useMembership();
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext);

  // add membership to mycart collection
  const handleBuyNow = (itemInfo) => {

    const {membershipName, photourl, description, price} = itemInfo;

    const packageInfo = {
      membershipName: membershipName.toLowerCase(),
      photourl,
      description,
      price,
      email: user?.email,
    }
    
    axiosPublic.post("/cart", packageInfo)
    .then( res => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Package added to cart successfully",
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

  return (
    <>
      <Helmet>
        <title>TikiDocs | Membership</title>
      </Helmet>
      <div>
        <div className="container mx-auto px-6 my-24">
          <div>
            <h2 className="text-center text-3xl md:text-4xl font-semibold single-text-gradient">
              Buy Membership
            </h2>
          </div>
          {isLoading && (
            <>
              <div className="text-center my-24">
                <LoadingSpinner />
              </div>
            </>
          )}
          {/* membership card */}
          <div className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipDetails?.map((item) => (
                <div
                  key={item._id}
                  className="card py-6 w-[450px] bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      className="h-[250px] pt-6"
                      src={item?.photourl}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="px-6 py-8 mt-6">
                    <div className="flex justify-between mb-4" >
                    <h2 className="card-title">
                      {" "}
                      Package :{" "}
                      <span className="single-text-gradient">
                        {item?.membershipName}
                      </span>{" "}
                    </h2>
                    <p className="text-lg font-semibold" >$ <span>{item?.price}</span> </p>
                    </div>
                    <p className="text-gray-400 leading-7">
                      {item?.description}
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => handleBuyNow(item)}
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
