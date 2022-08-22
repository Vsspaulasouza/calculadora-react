import React from "react";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CalcHeader from "./CalcHeader";
import Keyboard from "./Keyboard";
import TopBar from "./TopBar";

function Calculator() {
    const bgApp = useColorModeValue("blackAlpha.200", "gray.700");
    const bgCalc = useColorModeValue("gray.100", "gray.600");

    return (
        <Container
            maxW="100vw"
            height="100vh"
            display="grid"
            placeItems="center"
            bg={bgApp}
        >
            <Container
                display="flex"
                flexDir="column"
                padding={{
                    base: "20px 7px 15px 7px",
                    sm: "20px 10px 15px 10px",
                    md: "20px 10px 15px 10px",
                }}
                bg={bgCalc}
                borderRadius="20px"
                as={motion.div}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition="0.5s linear"
            >
                <TopBar />
                <CalcHeader />
                <Keyboard />
            </Container>
        </Container>
    );
}

export default Calculator;
