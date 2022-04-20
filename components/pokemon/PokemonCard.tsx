import { Row, Card, Text, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`);
    };
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card hoverable clickable onClick={onClick} css={{ p: 1 }}>
                <Card.Body>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{pokemon.name}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
