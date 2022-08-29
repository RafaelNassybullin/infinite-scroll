import axios from "axios";

const API_URL = "http://localhost:8888/api";
const FAKE_SECURE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0bGphd2hkaWxhbm13bGt";

const $getSecure = axios.create({
  baseURL: API_URL,
});

$getSecure.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${FAKE_SECURE_TOKEN}`;
  return config;
});

export const getApi = async (page) =>
  await axios.get(`${API_URL}/secureDatas?page=${page}&limit=5`);
export const addApi = async (data) =>
  await $getSecure.post(`${API_URL}/secureDatas`, data);
