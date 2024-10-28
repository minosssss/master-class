// src/routes/LoginPage.jsx
import React, { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";
import UserAPI from "../api/AuthAPI";
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const LoginPage = () => {
  const { setUser } = useAuthStore();
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const { data } = await UserAPI.login({ email, password });
      setUser(data);
      navigate("/"); // Redirect to home or previous page
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
