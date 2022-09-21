import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
    addDot,
    addOperation,
    addValue,
    changeOperator,
    clear,
    solveResult,
} from "../features/calculator/calculatorSlice";
import CalcButton from "./CalcButton";

function Keyboard() {
    const bg = useColorModeValue("facebook", "whatsapp");
    const color = useColorModeValue("whiteAlpha.800", "blue.700");

    const buttons = [
        { key: 0, value: "C", actionType: clear },
        { key: 1, value: "±", actionType: changeOperator },
        { key: 2, value: "%", actionType: addOperation },
        { key: 3, value: "÷", actionType: addOperation, special: true },
        { key: 4, value: "7", actionType: addValue },
        { key: 5, value: "8", actionType: addValue },
        { key: 6, value: "9", actionType: addValue },
        { key: 7, value: "x", actionType: addOperation, special: true },
        { key: 8, value: "4", actionType: addValue },
        { key: 9, value: "5", actionType: addValue },
        { key: 10, value: "6", actionType: addValue },
        { key: 11, value: "-", actionType: addOperation, special: true },
        { key: 12, value: "1", actionType: addValue },
        { key: 13, value: "2", actionType: addValue },
        { key: 14, value: "3", actionType: addValue },
        { key: 15, value: "+", actionType: addOperation, special: true },
        { key: 16, value: ".", actionType: addDot },
        { key: 17, value: "0", actionType: addValue },
        {
            key: 18,
            value: "=",
            actionType: solveResult,
            special: true,
            gridcolumn: "3/5",
            w: { base: "125px", sm: "195px", md: "220px" },
        },
    ];

    return (
        <Grid
            templateColumns="repeat(4, 1fr)"
            rowGap="12px"
            justifyItems="center"
            alignItems="center"
        >
            {buttons.map(
                ({ key, value, actionType, special, gridcolumn, w }) => (
                    <CalcButton
                        key={key}
                        special={special}
                        color={special && color}
                        bg={special && bg}
                        gridcolumn={gridcolumn}
                        w={w}
                        value={value}
                        actionType={actionType}
                    />
                )
            )}
        </Grid>
    );
}

export default Keyboard;
