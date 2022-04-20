import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <Link href="/">
            <a
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 18px",
                    backgroundColor: theme?.colors.gray900.value,
                }}
            >
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    alt="Icono del pokemon"
                    width={70}
                    height={70}
                />
                <Text color="white" h2>
                    P
                </Text>
                <Text color="white" h3>
                    okemon
                </Text>
                <Spacer css={{ flex: 1 }} />
                <Text color="white" h3>
                    Favoritos
                </Text>
            </a>
        </Link>
    );
};
