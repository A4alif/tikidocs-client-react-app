import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useAllPosts = () => {
    const axiosPublic = useAxiosPublic();
    const {data : posts = []} = useQuery({
        queryKey: ['allposts'],
        queryFn: async() => {
            const res = await axiosPublic.get("/posts")
            return res.data.result;
        }
    })
  return [posts]
}

export default useAllPosts