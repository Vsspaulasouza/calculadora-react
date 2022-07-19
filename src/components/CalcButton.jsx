import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

function CalcButton({ w, gridcolumn, color, icon, children }) {
    return (
        <Button
            gridColumn={gridcolumn}
            w={w}
            h={{ base: "60px", sm: "80px", md: "90px" }}
            borderRadius="20px"
            cursor="pointer"
            boxShadow="5px 5px 10px 0px rgba(55, 84, 170, .1)"
            fontWeight="700"
            fontSize="25px"
            boxSizing="border-box"
            colorScheme={color}
            color={color === "gray" ? "blue.800" : "whiteAlpha.900"}
            leftIcon={icon}
            as={motion.button}
            initial={({ x: "20px" }, { y: "-20px" }, { scale: 0.6 })}
            animate={{
                x: ["10px", "0px"],
                y: ["-10px", "0px"],
                rotate: ["180", "0"],
                scale: 1,
            }}
            transition="0.4s ease"
            whileHover={{
                scale: 0.9,
            }}
            whileTap={{
                scale: 0.9,
            }}
        >
            {children}
        </Button>
    );
}

CalcButton.propTypes = {
    children: PropTypes.string,
    w: PropTypes.shape(),
    color: PropTypes.string,
    icon: PropTypes.element,
    gridcolumn: PropTypes.string,
};

CalcButton.defaultProps = {
    w: { base: "60px", sm: "80px", md: "90px" },
    color: "gray",
    icon: null,
    gridcolumn: "",
    children: null,
};

export default CalcButton;
