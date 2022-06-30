import axios from "axios";
import 'dotenv/config';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "en-US",
    api_key: process.env.API_KEY
  }
})


export default api;