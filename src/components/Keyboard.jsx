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
            <CalcButton data-operacao="complexa" bgcolor="#3A4E89" color="#fff">
                ÷
            </CalcButton>
            <CalcButton data-number="true">7</CalcButton>
            <CalcButton data-number="true">8</CalcButton>
            <CalcButton data-number="true">9</CalcButton>
            <CalcButton data-operacao="complexa" bgcolor="#3A4E89" color="#fff">
                x
            </CalcButton>
            <CalcButton data-number="true">4</CalcButton>
            <CalcButton data-number="true">5</CalcButton>
            <CalcButton data-number="true">6</CalcButton>
            <CalcButton data-operacao="complexa" bgcolor="#3A4E89" color="#fff">
                -
            </CalcButton>
            <CalcButton data-number="true">1</CalcButton>
            <CalcButton data-number="true">2</CalcButton>
            <CalcButton data-number="true">3</CalcButton>
            <CalcButton data-operacao="complexa" bgcolor="#3A4E89" color="#fff">
                +
            </CalcButton>
            <CalcButton data-number="true">,</CalcButton>
            <CalcButton data-number="true">0</CalcButton>
            <CalcButton
                gridcolumn="3/5"
                w="220px"
                bgcolor="#3A4E89"
                color="#fff"
            >
                =
            </CalcButton>
        </Grid>
    );
}

export default Keyboard;
