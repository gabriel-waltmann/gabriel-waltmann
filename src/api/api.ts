import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
})

export const updateApiAuth = (sessionToken: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${sessionToken}`
} 