import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "./../Provider/AuthProvider";

const useMyPosts = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: posts = [], isPending: isLoading } = useQuery({
    queryKey: ["posts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts?email=${user?.email}`);
      return res.data.result;
    },
  });
  return [posts, isLoading];
};

export default useMyPosts;
