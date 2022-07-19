import { Grid } from "@chakra-ui/react";
import React from "react";
import CalcButton from "./CalcButton";

function Keyboard() {
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
            <CalcButton data-operacao="complexa" color="facebook">
                ÷
            </CalcButton>
            <CalcButton data-number="true">7</CalcButton>
            <CalcButton data-number="true">8</CalcButton>
            <CalcButton data-number="true">9</CalcButton>
            <CalcButton data-operacao="complexa" color="facebook">
                x
            </CalcButton>
            <CalcButton data-number="true">4</CalcButton>
            <CalcButton data-number="true">5</CalcButton>
            <CalcButton data-number="true">6</CalcButton>
            <CalcButton data-operacao="complexa" color="facebook">
                -
            </CalcButton>
            <CalcButton data-number="true">1</CalcButton>
            <CalcButton data-number="true">2</CalcButton>
            <CalcButton data-number="true">3</CalcButton>
            <CalcButton data-operacao="complexa" color="facebook">
                +
            </CalcButton>
            <CalcButton data-number="true">,</CalcButton>
            <CalcButton data-number="true">0</CalcButton>
            <CalcButton
                gridcolumn="3/5"
                w={{ base: "125px", sm: "195px", md: "220px" }}
                color="facebook"
            >
                =
            </CalcButton>
        </Grid>
    );
}

export default Keyboard;
