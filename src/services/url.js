import axios from "axios";

// Define the base URL
let baseURL = "https://resume-builder-backend-ten.vercel.app/";

// Check if running in development mode (localhost:5173)
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
}

const Url = axios.create({
  baseURL: baseURL,
});

Url.interceptors.request.use(
  (config) => {
    // Modify the request config before sending
    // For example, add an authorization header
    const token = localStorage.getItem("SavedToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default Url;
