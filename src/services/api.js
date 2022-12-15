import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da api: /movie/now_playing?api_key=6ba732f8e247057e2346f3a11a35c765&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;