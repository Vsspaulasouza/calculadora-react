import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CalcButton from "./CalcButton";

function CalcHeader() {
    return (
        <Container display="flex" alignItems="center">
            <Text
                h="100px"
                w="100%"
                margin="20px 15px 19px 0"
                borderRadius="20px"
                fontWeight="700"
                fontSize="40px"
                color="#3A4E89"
                textAlign="right"
                paddingRight="24px"
                lineHeight="120px"
                bgColor="#fff"
            >
                000
            </Text>
            <CalcButton icon={<ArrowBackIcon />} />
        </Container>
    );
}

export default CalcHeader;
