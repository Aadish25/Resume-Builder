import axios from "axios";

const Url =axios.create({
    baseURL:"http://localhost:3000",
});
Url.interceptors.request.use(
    (config) => {
      // Modify the request config before sending
      // For example, add an authorization header
      const token = localStorage.getItem("SavedToken");
      if(token){
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
