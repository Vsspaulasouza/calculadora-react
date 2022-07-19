import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import CalcButton from "./CalcButton";

function Keyboard() {
    const bg = useColorModeValue("facebook", "whatsapp");
    const color = useColorModeValue("whiteAlpha.800", "blue.700");

    return (
        <Grid
            templateColumns="repeat(4, 1fr)"
            rowGap="12px"
            justifyItems="center"
            alignItems="center"
        >
            <CalcButton data-operacao="simples">C</CalcButton>
            <CalcButton data-operacao="simples">±</CalcButton>
            <CalcButton data-operacao="complexa">%</CalcButton>
            <CalcButton data-operacao="complexa" special color={color} bg={bg}>
                ÷
            </CalcButton>
            <CalcButton data-number="true">7</CalcButton>
            <CalcButton data-number="true">8</CalcButton>
            <CalcButton data-number="true">9</CalcButton>
            <CalcButton data-operacao="complexa" special color={color} bg={bg}>
                x
            </CalcButton>
            <CalcButton data-number="true">4</CalcButton>
            <CalcButton data-number="true">5</CalcButton>
            <CalcButton data-number="true">6</CalcButton>
            <CalcButton data-operacao="complexa" special color={color} bg={bg}>
                -
            </CalcButton>
            <CalcButton data-number="true">1</CalcButton>
            <CalcButton data-number="true">2</CalcButton>
            <CalcButton data-number="true">3</CalcButton>
            <CalcButton data-operacao="complexa" special color={color} bg={bg}>
                +
            </CalcButton>
            <CalcButton data-number="true">,</CalcButton>
            <CalcButton data-number="true">0</CalcButton>
            <CalcButton
                gridcolumn="3/5"
                w={{ base: "125px", sm: "195px", md: "220px" }}
                special
                color={color}
                bg={bg}
            >
                =
            </CalcButton>
        </Grid>
    );
}

export default Keyboard;
