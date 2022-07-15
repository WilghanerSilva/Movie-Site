import axios from "axios";

console.log(process.env.API_KEY);

export const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "en-US",
    api_key: "97c86509e455fc1a2146d6d6174d4b27"
  }
})

export const apiSearch = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
  params: {
    api_key: "97c86509e455fc1a2146d6d6174d4b27",
    language: "en-US"
  }
})