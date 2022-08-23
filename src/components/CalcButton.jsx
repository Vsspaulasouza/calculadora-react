import React from "react";
import PropTypes from "prop-types";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCalculator } from "../contexts/CalculatorContext";

function CalcButton({
    w,
    gridcolumn,
    special,
    bg,
    color,
    icon,
    delay,
    value,
    actionType,
}) {
    let background;
    let textColor;

    if (!special) {
        background = useColorModeValue(bg, "whiteAlpha");
        textColor = useColorModeValue(color, "gray.200");
    } else {
        background = bg;
        textColor = color;
    }

    const { dispatch } = useCalculator();

    const handleClick = () => dispatch({ type: actionType, value });

    return (
        <Button
            gridColumn={gridcolumn}
            w={w}
            h={{ base: "60px", sm: "80px", md: "90px" }}
            borderRadius="20px"
            cursor="pointer"
            boxShadow={
                background === "whiteAlpha"
                    ? ""
                    : "5px 5px 10px 0px rgba(55, 84, 170, .1)"
            }
            fontWeight="700"
            fontSize="25px"
            boxSizing="border-box"
            colorScheme={background}
            color={textColor}
            leftIcon={icon}
            as={motion.button}
            initial={({ x: "20px" }, { y: "-20px" }, { scale: 0.6 })}
            animate={{
                x: ["10px", "0px"],
                y: ["-10px", "0px"],
                rotate: ["180", "0"],
                scale: 1,
            }}
            transition={`0.4s ease ${delay * 0.05}s`}
            whileHover={{
                scale: 0.9,
            }}
            whileTap={{
                scale: 0.9,
            }}
            onClick={handleClick}
        >
            {value}
        </Button>
    );
}

CalcButton.propTypes = {
    w: PropTypes.shape(),
    bg: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.element,
    gridcolumn: PropTypes.string,
    special: PropTypes.bool,
    delay: PropTypes.number,
    value: PropTypes.string,
    actionType: PropTypes.string,
};

CalcButton.defaultProps = {
    w: { base: "60px", sm: "80px", md: "90px" },
    bg: "gray",
    color: "blue.800",
    icon: null,
    gridcolumn: "",
    special: false,
    delay: 0,
    value: null,
    actionType: "",
};

export default CalcButton;
