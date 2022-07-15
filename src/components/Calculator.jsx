import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import CalcHeader from "./CalcHeader";
import Keyboard from "./Keyboard";

function Calculator() {
    return (
        <Container
            display="flex"
            flexDir="column"
            padding={{
                base: "20px 7px 15px 7px",
                sm: "20px 10px 15px 10px",
                md: "20px 10px 15px 10px",
            }}
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
