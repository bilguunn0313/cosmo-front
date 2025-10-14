// src/api/axiosInstance.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4001/api",
});

// JWT token автоматаар header руу нэмэх interceptor
api.interceptors.request.use((config) => {
  const token = "JWT_TOKEN_HERE"; // дараа нь redux-оос авна
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
