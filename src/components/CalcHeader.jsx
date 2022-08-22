import React from "react";
import { Container, Text, useColorModeValue } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CalcButton from "./CalcButton";
import SecondaryScreen from "./SecondaryScreen";
import { useCalculator } from "../contexts/CalculatorContext";

function CalcHeader() {
    const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.600");
    const color = useColorModeValue("blue.700", "blue.400");

    const { number } = useCalculator();

    return (
        <Container
            display="flex"
            alignItems="center"
            position="relative
        "
        >
            <Text
                h="100px"
                w="100%"
                margin="20px 15px 19px 0"
                borderRadius="20px"
                fontWeight="700"
                fontSize="40px"
                textAlign="right"
                paddingRight="24px"
                lineHeight="120px"
                bg={bg}
                color={color}
            >
                {number}
            </Text>
            <SecondaryScreen />
            <CalcButton icon={<ArrowBackIcon />} />
        </Container>
    );
}

export default CalcHeader;
