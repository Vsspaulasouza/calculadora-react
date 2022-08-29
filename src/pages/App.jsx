import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/share-tech-mono";
import { CalculatorContextProvider } from "../contexts/CalculatorContext";
import Calculator from "../components";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <CalculatorContextProvider>
                <Calculator />
            </CalculatorContextProvider>
        </ChakraProvider>
    );
}

export default App;
