import React, { useContext } from "react";
import useUserProfile from "../../../hooks/useUserProfile";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const UserProfile = () => {
  const [userInfo, isLoading] = useUserProfile();
  return (
    <div className="mt-9">
      {isLoading && (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      )}
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
                <span className="text-xl text-gray-500">Membership:</span>{" "}
                <span className="capitalize">{user?.status}</span>{" "}
              </h2>
              <img className="w-32 h-32" src={user?.statusPhotoUrl} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
