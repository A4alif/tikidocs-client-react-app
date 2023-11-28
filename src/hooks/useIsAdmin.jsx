import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIsAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const {data: isAdmin= {}, isPending: isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/admin?email=${user?.email}`);
            return res.data.admin;
        }
    })
  return [isAdmin, isLoading];
}

export default useIsAdmin