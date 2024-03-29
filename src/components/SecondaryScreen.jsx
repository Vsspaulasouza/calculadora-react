import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCalculator } from "../features/calculator/calculatorSlice";

function ScondaryScreen() {
    const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.600");
    const color = useColorModeValue("blue.700", "blue.400");

    const calculator = useSelector(selectCalculator);

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
            left="23px"
            minW="40px"
            minH="34px"
        >
            {calculator.secondaryNumber}
        </Text>
    );
}

export default ScondaryScreen;
