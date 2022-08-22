import React from "react";
import {
    Button,
    Container,
    Heading,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function TopBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue("gray.700", "gray.200");

    return (
        <Container
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Heading as="h1" size="lg" color={color} ml="16px">
                Calculadora
            </Heading>

            <Button size="sm" onClick={toggleColorMode}>
                {colorMode === "light" ? (
                    <MoonIcon color="blue.900" />
                ) : (
                    <SunIcon color="yellow.300" />
                )}
            </Button>
        </Container>
    );
}

export default TopBar;
