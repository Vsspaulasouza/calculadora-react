import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    fonts: {
        heading: `'Share Tech Mono', monospace`,
        body: `'Share Tech Mono', monospace`,
    },
});

export default theme;
