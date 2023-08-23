import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=da78d99ef4c7fdd90e5ade18e4bf1a7a&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;

