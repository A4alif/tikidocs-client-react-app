import axios from 'axios';
const axiosPublic = axios.create({
  baseURL: 'https://tikidocs-server.vercel.app/api/v1',
 
});
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic