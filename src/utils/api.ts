import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1",
  timeout: 2000,
  params: {
    api_key: "DEMO_KEY",
  },
});
