// src/AuthProvider.jsx
import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore.js";
import Cookies from "js-cookie";
import UserAPI from "../api/AuthAPI.js";

const AuthProvider = ({ children }) => {
  const { user, setUser, clearAuth } = useAuthStore();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (!user) {
          const { data } = await UserAPI.getCurrentUser(); // Server verifies cookie-based auth
          setUser(data.user);
        }
      } catch (error) {
        clearAuth();
      }
    };

    checkAuthStatus();
  }, [user, setUser, clearAuth]);

  return <>{children}</>;
};

export default AuthProvider;
