import axios from "axios";
<<<<<<< HEAD

console.log(process.env.API_KEY);
=======
import 'dotenv/config';
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "en-US",
<<<<<<< HEAD
    api_key: "97c86509e455fc1a2146d6d6174d4b27"
=======
    api_key: process.env.API_KEY
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
  }
})


export default api;