import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import CalcButton from "./CalcButton";

function Keyboard() {
    const bg = useColorModeValue("facebook", "whatsapp");
    const color = useColorModeValue("whiteAlpha.800", "blue.700");

    const buttons = [
        { key: 0, value: "C" },
        { key: 1, value: "±" },
        { key: 2, value: "%" },
        { key: 3, value: "÷", special: true },
        { key: 4, value: "7" },
        { key: 5, value: "8" },
        { key: 6, value: "9" },
        { key: 7, value: "x", special: true },
        { key: 8, value: "4" },
        { key: 9, value: "5" },
        { key: 10, value: "6" },
        { key: 11, value: "-", special: true },
        { key: 12, value: "1" },
        { key: 13, value: "2" },
        { key: 14, value: "3" },
        { key: 15, value: "+", special: true },
        { key: 16, value: "," },
        { key: 17, value: "0" },
        {
            key: 18,
            value: "=",
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
            {buttons.map(({ key, value, special, gridcolumn, w }) => (
                <CalcButton
                    key={key}
                    special={special}
                    color={special && color}
                    bg={special && bg}
                    gridcolumn={gridcolumn}
                    w={w}
                    delay={key}
                >
                    {value}
                </CalcButton>
            ))}
            {/* <CalcButton>C</CalcButton>
            <CalcButton>±</CalcButton>
            <CalcButton>%</CalcButton>
            <CalcButton special color={color} bg={bg}>
                ÷
            </CalcButton>
            <CalcButton>7</CalcButton>
            <CalcButton>8</CalcButton>
            <CalcButton>9</CalcButton>
            <CalcButton special color={color} bg={bg}>
                x
            </CalcButton>
            <CalcButton>4</CalcButton>
            <CalcButton>5</CalcButton>
            <CalcButton>6</CalcButton>
            <CalcButton special color={color} bg={bg}>
                -
            </CalcButton>
            <CalcButton>1</CalcButton>
            <CalcButton>2</CalcButton>
            <CalcButton>3</CalcButton>
            <CalcButton special color={color} bg={bg}>
                +
            </CalcButton>
            <CalcButton>,</CalcButton>
            <CalcButton>0</CalcButton>
            <CalcButton
                gridcolumn="3/5"
                w={{ base: "125px", sm: "195px", md: "220px" }}
                special
                color={color}
                bg={bg}
            >
                =
            </CalcButton> */}
        </Grid>
    );
}

export default Keyboard;
