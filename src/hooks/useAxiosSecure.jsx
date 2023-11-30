import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: "https://tikidocs-server.vercel.app/api/v1",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
