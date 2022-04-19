import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title="List Pokemons">
            <Grid.Container gap="2">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>(
        "/pokemon?limit=151"
    ); // your fetch function here

    const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            i + 1
        }.svg`,
    }));

    return {
        props: {
            pokemons,
        },
    };
};

export default Home;
