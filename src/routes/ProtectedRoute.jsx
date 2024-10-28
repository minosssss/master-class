// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";

const ProtectedRoute = () => {
  const { user } = useAuthStore();
  if (!user) {
    alert("You need to be logged in to access this page.");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
