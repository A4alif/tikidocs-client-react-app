import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const {data : users = []} = useQuery({
        queryKey: ['allusers'],
        queryFn: async() => {
            const res = await axiosPublic.get('/users');
            return res.data.result;
        }
    })
  return [users];
}

export default useAllUsers