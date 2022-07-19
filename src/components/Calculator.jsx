import React from "react";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CalcHeader from "./CalcHeader";
import Keyboard from "./Keyboard";
import TopHeader from "./TopHeader";

function Calculator() {
    const bg = useColorModeValue("gray.100", "gray.600");

    return (
        <Container
            display="flex"
            flexDir="column"
            padding={{
                base: "20px 7px 15px 7px",
                sm: "20px 10px 15px 10px",
                md: "20px 10px 15px 10px",
            }}
            bg={bg}
            borderRadius="20px"
            as={motion.div}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition="0.5s linear"
        >
            <TopHeader />
            <CalcHeader />
            <Keyboard />
        </Container>
    );
}

export default Calculator;
