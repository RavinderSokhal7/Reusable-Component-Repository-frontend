import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
});

// 192.168.1.8
// 101.0.45.255

// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// instance.interceptors.request...

export default instance;
