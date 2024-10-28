// src/authStore.js
// src/authStore.js
import { create } from "zustand";
import { encryptedStorage } from "./encryptedStorage";

export const useAuthStore = create((set) => ({
  user: encryptedStorage.getItem("user") || null, // Retrieve user from encrypted storage on load

  setUser: (userData) => {
    set({ user: userData });
    encryptedStorage.setItem("user", userData); // Save user data in encrypted storage
  },

  clearAuth: () => {
    set({ user: null });
    encryptedStorage.removeItem("user"); // Clear user data from encrypted storage
  },
}));
