import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic'
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUserProfile = () => {
  const axiosPublic = useAxiosPublic();
  const {user, loading} = useContext(AuthContext);
  const {data : userInfo = [], isPending: isLoading} = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async() => {
      const res = await axiosPublic.get(`/users?email=${user?.email}`)
      return res.data.result;
    }
  })
  return [userInfo, isLoading];
}

export default useUserProfile