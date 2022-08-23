import React from "react";
import PropTypes from "prop-types";

export const CalculatorContext = React.createContext({});

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
