import React from "react";
import useMyCart from "../../../hooks/useMyCart";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Cart = () => {
  const [mycart, isLoading, refetch] = useMyCart();
  const axiosPublic = useAxiosPublic();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   delete item from cart
        axiosPublic.delete(`/cart/${id}`).then((res) => {
          if (res.data.result.deletedCount > 0) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Package remove from cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div>
        <div>
          <h2 className="text-3xl md:text-4xl text-center mt-9 single-text-gradient font-semibold">
            My Cart : <span>({mycart?.length})</span>
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
                    <th>Package Info</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Purchase</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {mycart?.map((item) => (
                    <tr key={item?._id}>
                      <td>
                        <div className="flex items-center gap-6">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item?.photourl}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className="capitalize single-text-gradient font-bold">
                            {item?.membershipName}
                          </div>
                        </div>
                      </td>
                      <td className="w-2/6">
                        <div className="w-5/6">
                          <span className="text-sm leading-8 text-orange-500 font-semibold ">
                            {item?.email}
                          </span>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-semibold capitalize text-orange-600 ">
                          {item?.price}
                        </p>
                      </td>
                      <td>
                        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                          Pay Now
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(item?._id)}
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

export default Cart;
