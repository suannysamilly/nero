import axios from "axios";

export const api = axios.create({
    baseURL: "http://172.16.15.112:8081"
})