import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function CalcButton({ w, gridcolumn, bgcolor, color, icon, children }) {
    return (
        <Button
            gridColumn={gridcolumn}
            w={w}
            h="90px"
            borderRadius="20px"
            cursor="pointer"
            boxShadow="5px 5px 10px 0px rgba(55, 84, 170, .1)"
            fontWeight="700"
            fontSize="25px"
            boxSizing="border-box"
            backgroundColor={bgcolor}
            color={color}
            leftIcon={icon}
            _hover={{
                bg: { bgcolor },
                color: { color },
            }}
            _active={{
                bg: { bgcolor },
                color: { color },
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
    w: "100px",
    bgcolor: "#fff",
    color: "#3A4E89",
    icon: "",
    gridcolumn: "",
};

export default CalcButton;
