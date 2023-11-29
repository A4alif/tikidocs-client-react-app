import React, { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useMyCart = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: mycart = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mycart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${user?.email}`);
      return res.data.result;
    },
  });
  return [mycart, isLoading, refetch];
};

export default useMyCart;
