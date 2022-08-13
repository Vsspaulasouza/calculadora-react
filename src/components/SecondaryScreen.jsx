import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

function ScondaryScreen() {
    const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.600");
    const color = useColorModeValue("blue.700", "blue.400");

    return (
        <Text
            borderRadius="5px"
            fontWeight="700"
            size="lg"
            textAlign="right"
            padding="5px"
            bg={bg}
            color={color}
            position="absolute"
            top="25px"
            left="20px"
        >
            000
        </Text>
    );
}

export default ScondaryScreen;
