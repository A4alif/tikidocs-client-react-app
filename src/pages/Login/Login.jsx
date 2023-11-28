import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photourl: result.user?.photoURL,
          status: "bronze",
          statusPhotoUrl: "https://i.postimg.cc/25fnCTb5/bronze-badge-new.webp",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleLogin = (data) => {
    const { email, password } = data;
    setLoading(true);
    signIn(email, password)
      .then((result) => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="py-9  flex flex-col lg:flex-row items-center ">
            <div className=" w-3/4 lg:w-1/2">
              <div className="card w-full lg:w-3/4 mx-auto bg-base-100 shadow-xl">
                <div className="p-8  ">
                  <div className="flex justify-center">
                    <h2 className="card-title text-2xl font-semibold mb-6">
                      {" "}
                      Welcome to{" "}
                      <span className="text-green-600">TikiDocs</span>{" "}
                    </h2>
                  </div>
                  <p className="text-center text-xl font-semibold ">
                    Please Login
                  </p>
                  <form onSubmit={handleSubmit(handleLogin)} noValidate>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                        })}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                      />
                      <p className="text-pink-600">{errors.email?.message}</p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                        })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                      />
                      <p className="text-pink-600">
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full "
                      >
                        {loading === true ? (
                          <>
                            <span className="loading loading-spinner text-secondary"></span>
                          </>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <p>
                        Do not have an account please{" "}
                        <Link to={"/register"}>
                          {" "}
                          <span className="text-blue-500 underline">
                            Register
                          </span>{" "}
                        </Link>{" "}
                      </p>
                      <div className="divider">Continue With Google</div>
                    </div>
                  </form>
                  <div className="w-3/4 mx-auto mb-4 mt-9">
                    <button
                      onClick={handleGoogle}
                      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full flex justify-center items-center"
                    >
                      <FcGoogle className="mr-4" size={30} /> Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-3/4 lg:w-1/2">
              <img src="https://i.postimg.cc/9FYtnw1k/login.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
