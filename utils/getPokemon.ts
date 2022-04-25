import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemon = async (nameOrId: string) => {
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`); // your fetch function here

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    };
};
