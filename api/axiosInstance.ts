import { store } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = __DEV__
  ? "http://192.168.10.178:5000" // Replace with YOUR computer's IP
  : "https://your-production-api.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token; // sync!
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - handle logout
      AsyncStorage.removeItem("userToken");
    }
    return Promise.reject(error);
  }
);
