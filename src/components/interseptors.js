import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(`This's axios interceptor. Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  });
