import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function apiInstance(ctx?: any): AxiosInstance {
  const { "myfavoriteplaces.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  api.interceptors.request.use(config => {
    return config;
  });

  return api;
}

export default apiInstance;
