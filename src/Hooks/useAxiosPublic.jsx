import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-two-ivory.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;