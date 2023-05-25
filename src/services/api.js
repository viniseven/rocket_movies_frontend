import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-qld7.onrender.com"
});
