import React from "react";
import { Container } from "@chakra-ui/react";
import Calculator from "../components/Calculator";

function App() {
    return (
        <Container
            maxW="100vw"
            height="100vh"
            display="grid"
            placeItems="center"
            backgroundColor="#E5E5E5"
        >
            <Calculator />
        </Container>
    );
}

export default App;
