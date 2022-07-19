import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/share-tech-mono";
import Calculator from "../components/Calculator";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW="100vw"
                height="100vh"
                display="grid"
                placeItems="center"
                bg="blackAlpha.200"
            >
                <Calculator />
            </Container>
        </ChakraProvider>
    );
}

export default App;
