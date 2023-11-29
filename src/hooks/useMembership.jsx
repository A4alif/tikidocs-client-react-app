import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMembership = () => {
    const axiosPublic = useAxiosPublic();
    const {data: membershipDetails = [], isPending: isLoading} = useQuery({
        queryKey: ["membership"],
        queryFn: async()=> {
            const res = await axiosPublic.get("/membership")
            return res.data.result;
        }
    })
  return [membershipDetails, isLoading]
}

export default useMembership