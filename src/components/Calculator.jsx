import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
            bg="gray.100"
            borderRadius="20px"
            as={motion.div}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition="0.5s linear"
        >
            <Heading as="h1" size="lg" color="gray.700" ml="16px">
                Calculadora
            </Heading>
            <CalcHeader />
            <Keyboard />
        </Container>
    );
}

export default Calculator;
