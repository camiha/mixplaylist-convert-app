import Axios from "axios";

import { API_URL, SPOTIFY_API_URL } from "@/config/constants";

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  },
);

export const spotifyApiClient = Axios.create({
  baseURL: SPOTIFY_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

spotifyApiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  },
);
