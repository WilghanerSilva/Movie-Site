import axios from "axios";

console.log(process.env.API_KEY);

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "en-US",
    api_key: "97c86509e455fc1a2146d6d6174d4b27"
  }
})


export default api;