import React from "react";
import PropTypes from "prop-types";

export const CalculatorContext = React.createContext({});

export function CalculatorContextProvider({ children }) {
    const [number, setNumber] = React.useState("0");
    const [secondaryNumber, setSecondaryNumber] = React.useState("");

    const value = React.useMemo(
        () => ({ number, setNumber, secondaryNumber, setSecondaryNumber }),
        [number, secondaryNumber]
    );

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    );
}

export const useCalculator = () => React.useContext(CalculatorContext);

CalculatorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
