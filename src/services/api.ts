import axios from "axios";
import { BACKEND_LOCALHOST } from "../config";

const api = axios.create({
    baseURL: BACKEND_LOCALHOST,
    headers: {
        "Access-Control-Alow-Origin": "*",
        "Content-Type": "application/json",
    }
})

export default api;