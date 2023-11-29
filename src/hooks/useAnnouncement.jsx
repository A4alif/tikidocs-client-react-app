import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useAnnouncement = () => {
    const axiosPublic = useAxiosPublic();
    const { data: announce = [], isPending: isLoading } = useQuery({
        queryKey: ["announce"],
        queryFn: async () => {
          const res = await axiosPublic.get("/announcements");
          return res.data.result;
        },
      });
  return [announce, isLoading]
}

export default useAnnouncement