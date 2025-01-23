
import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000', // Replace with your API URL
    withCredentials: true, // Allow sending cookies with requests
});

export default axiosInstance;
