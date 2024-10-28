// src/config.js
import axios from "axios";

export const AuthClient = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Helper function to attach Authorization header with gitlab
export const authCall = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});
