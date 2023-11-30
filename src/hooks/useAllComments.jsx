import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useAllComments = () => {
    const axiosPublic = useAxiosPublic();
    const {data: comments = [], isPending: isLoading} = useQuery({
        queryKey: ["allcomments"],
        queryFn: async() => {
            const res = await axiosPublic.get("/user-comment");
            return res.data.result;
        }
    })
  return [comments]
}

export default useAllComments