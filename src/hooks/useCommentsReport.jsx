import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCommentsReport = () => {
    const axiosPublic = useAxiosPublic();
    const {data: comments = [], isPending: isLoading, refetch} = useQuery( {
        queryKey: ["report"],
        queryFn: async() => {
            const res = await axiosPublic.get("/report-comments")
            return res.data.result;
        }
    })
  return [comments, isLoading, refetch];
}

export default useCommentsReport