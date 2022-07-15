import React from "react";
import PropTypes from "prop-types";
import { Button, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

function CalcButton({ w, gridcolumn, bgcolor, color, icon, children }) {
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
            bg={bgcolor}
            color={color}
            leftIcon={icon}
            _hover={{ bg: { bgcolor }, color: { color } }}
            _active={{ bg: { bgcolor }, color: { color } }}
            as={motion.button}
            initial={({ x: "20px" }, { y: "-20px" })}
            animate={{
                x: ["10px", "0px"],
                y: ["-10px", "0px"],
                rotate: ["3", "0"],
            }}
            transition="0.4s ease"
            whileHover={{
                scale: 0.9,
                bg: { color },
                color: { bgcolor },
            }}
            whileTap={{
                opacity: 0.8,
            }}
        >
            {children}
        </Button>
    );
}

CalcButton.propTypes = {
    children: PropTypes.isRequired,
    w: PropTypes.string,
    bgcolor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.element,
    gridcolumn: PropTypes.string,
};

CalcButton.defaultProps = {
    w: { base: "60px", sm: "80px", md: "90px" },
    bgcolor: "#fff",
    color: "#3A4E89",
    icon: "",
    gridcolumn: "",
};

export default CalcButton;
