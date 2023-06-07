import axios from "axios";

export const $api = axios.create({
  baseURL: "http://142.93.162.41:3500/api",
  maxRedirects: 0,
});
