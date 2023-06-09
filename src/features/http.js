import axios from "axios";
import { userData } from "@/store/user-data";

const http = axios.create({
    baseURL: "http://localhost:8080/api"
});

http.interceptors.request.use((config) => {
    const token = userData().authToken;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default http;
