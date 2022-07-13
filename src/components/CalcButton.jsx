import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function CalcButton({ bgcolor, color, children }) {
    return (
        <Button
            w="80px"
            h="80px"
            borderRadius="20px"
            cursor="pointer"
            boxShadow="5px 5px 10px 0px rgba(55, 84, 170, .1)"
            fontWeight="700"
            fontSize="25px"
            boxSizing="border-box"
            backgroundColor={bgcolor}
            color={color}
        >
            {children}
        </Button>
    );
}

CalcButton.propTypes = {
    children: PropTypes.isRequired,
    bgcolor: PropTypes.string,
    color: PropTypes.string,
};

CalcButton.defaultProps = {
    bgcolor: "#3A4E89",
    color: "#fff",
};

export default CalcButton;
