import React from "react";
import { ChakraProvider, Container, useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/share-tech-mono";
import Calculator from "../components/Calculator";

function App() {
    const bg = useColorModeValue("blackAlpha.200", "gray.700");

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW="100vw"
                height="100vh"
                display="grid"
                placeItems="center"
                bg={bg}
            >
                <Calculator />
            </Container>
        </ChakraProvider>
    );
}

export default App;
