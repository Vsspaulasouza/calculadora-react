import React from "react";
import {
    Button,
    Container,
    Heading,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

function TopHeader() {
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue("gray.700", "gray.200");

    return (
        <Container display="flex" justifyContent="space-between">
            <Heading as="h1" size="lg" color={color} ml="16px">
                Calculadora
            </Heading>
            <Button size="sm" onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </Container>
    );
}

export default TopHeader;
