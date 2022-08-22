import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/share-tech-mono";
import Calculator from "../components/Calculator";
import { CalculatorContextProvider } from "../contexts/CalculatorContext";

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
