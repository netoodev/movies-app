import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d45ee599378e5433cbe7dc52c45aeb07",
        language: "pt-BR",
        include_adult: false,
    }
});