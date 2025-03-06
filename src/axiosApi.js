import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.autocanada24.ca",
});

export default axiosApi;
