// src/api/interceptors.js
import axiosInstance from './axiosInstance';

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: auto-logout or redirect to login
      console.error("Unauthorized");
    }
    return Promise.reject(error);
  }
);
