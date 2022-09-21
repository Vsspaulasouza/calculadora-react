import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "./theme";
import "@fontsource/share-tech-mono";
import Calculator from "../components";
import store from "./store";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Provider store={store}>
                <Calculator />
            </Provider>
        </ChakraProvider>
    );
}

export default App;
