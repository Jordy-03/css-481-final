import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

// Allows us to destructure authUser so that 
// we can verify user is logged in & authenticated.
export const useAuthStore = create((set) => ({
    authUser: null,
    signingUp: false,   // Helps change "Create Account" button to "Signing up..."
    loggingIn: false,
    updatingProfile: false,

    isCheckingAuth: true,
    onlineUsers: [],

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check"); // Builds on top of baseURL
            set({ authUser: res.data });
        } catch (error) {
            console.log("ERROR [useAuthStore.js]: ", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ signingUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data); // Redirects to signup page
            toast.success("Account created successfully!");
            set({ authUser: res.data });
        } catch (error) {
            toast.error(error.response.data);
        } finally {
            set({ signingUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);    // Redirects to login page

            set({ authUser: res.data });
            toast.success("Logged in successfully");

            get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");    // Redirects to login page
            set({ authUser: null });
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error("ERROR [useAuthStore.js]: ", error.response.data);
        }
    },

    updateProfile: async (data) => {
        set({ updatingProfile: true });
        try {
            console.log("[useAuthStore]: Entered updateProfile");
            const res = await axiosInstance.put("/auth/update-profile", data);
            console.log("MADE IT HERE");
            set({ authUser: res.data });
            console.log("UPDATED PROFILE!!!");
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("error in update profile:", error);
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },
}));