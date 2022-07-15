import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import CalcHeader from "./CalcHeader";
import Keyboard from "./Keyboard";

function Calculator() {
    return (
        <Container
            display="flex"
            flexDir="column"
            padding="20px 20px 15px 20px"
            bgColor="#f1f3f6"
            borderRadius="20px"
        >
            <Heading as="h1" size="lg" color="#373A37" ml="16px">
                Calculadora
            </Heading>
            <CalcHeader />
            <Keyboard />
        </Container>
    );
}

export default Calculator;
