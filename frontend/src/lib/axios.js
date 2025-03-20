import axios from "axios";

// Create an axios instance where under development, it will run
// on http://localhost:5001/api, and under production, it will run
// on /api. This is because under production, the frontend and backend
// are running on the same server.
export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true, // Send cookies when making requests to the server
});