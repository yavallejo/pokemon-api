export interface PokemonListResponse {
    count: number;
    next?: string;
    previous?: null;
    results: SmallPokemon[];
}

// el ? significa que son opcionales
// la interface no obliga a que tenga todos los parametros
// solo nos sirven para que los objetos luzcan de cierta manera

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}
