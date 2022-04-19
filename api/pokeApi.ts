import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2"
const pokeApi = axios.create({
    baseURL: baseURL
});

export default pokeApi;