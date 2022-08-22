import React from "react";

export const CalculatorContext = React.createContext({});

export const CalculatorContextProvider = ({ children }) => {
    const [number, setNumber] = React.useState("0");
    const [secondaryNumber, setSecondaryNumber] = React.useState("");

    return (
        <CalculatorContext.Provider
            value={{ number, setNumber, secondaryNumber, setSecondaryNumber }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = React.useContext(CalculatorContext);
