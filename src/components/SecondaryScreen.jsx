import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { useCalculator } from "../contexts/CalculatorContext";

function ScondaryScreen() {
    const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.600");
    const color = useColorModeValue("blue.700", "blue.400");

    const { state } = useCalculator();

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
            {state.secondaryNumber}
        </Text>
    );
}

export default ScondaryScreen;
