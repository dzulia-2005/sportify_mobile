import type { CreateAxiosDefaults } from "axios";
import axios from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL: "https://sport-managment-backend-1.onrender.com/api"
}

export const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});