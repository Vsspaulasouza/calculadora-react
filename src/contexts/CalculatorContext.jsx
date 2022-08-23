import React from "react";
import PropTypes from "prop-types";

export const CalculatorContext = React.createContext({});

function changeOperator(value) {
    if (value === "") return value;
    return `${-value}`;
}

function addDot(value) {
    if (!value.includes(".")) return `${value}.`;
    return value;
}
export function CalculatorContextProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case "clearNumber":
                return { number: "", secondaryNumber: state.secondaryNumber };
            case "addValue":
                return {
                    number: state.number + action.value,
                    secondaryNumber: state.secondaryNumber,
                };
            case "changeOperator":
                return {
                    number: changeOperator(state.number),
                    secondaryNumber: state.secondaryNumber,
                };
            case "addDot":
                return {
                    number: addDot(state.number),
                    secondaryNumber: state.secondaryNumber,
                };
            case "clearSecondaryNumber":
                return { number: state.number, secondaryNumber: "" };
            default:
                return state;
        }
    };
    const initialState = { number: "", secondaryNumber: "" };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = React.useMemo(() => ({ state, dispatch }), [state]);

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
