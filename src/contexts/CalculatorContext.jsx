import React from "react";
import PropTypes from "prop-types";

export const CalculatorContext = React.createContext({});

function clear(currentNumber, currentSecondaryNumber, currentOperation) {
    const secondaryNumber = currentNumber ? currentSecondaryNumber : "";
    return { number: "", secondaryNumber, operation: currentOperation };
}

function changeOperator(value) {
    if (value === "") return value;
    return `${-value}`;
}

function addDot(value) {
    if (!value.includes(".")) return `${value}.`;
    return value;
}

function handleOperation(
    currentNumber,
    currentSecondaryNumber,
    currentOperation,
    newOperation
) {
    let number = currentNumber;
    let secondaryNumber = currentSecondaryNumber;
    let operation = currentOperation;
    if (currentSecondaryNumber === "" && currentNumber !== "") {
        number = "";
        secondaryNumber = currentNumber + newOperation;
        operation = newOperation;
    }

    return { number, secondaryNumber, operation };
}
export function CalculatorContextProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case "clearNumber":
                return clear(
                    state.number,
                    state.secondaryNumber,
                    state.operation
                );
            case "addValue":
                return {
                    number: state.number + action.value,
                    secondaryNumber: state.secondaryNumber,
                    operation: state.operation,
                };
            case "changeOperator":
                return {
                    number: changeOperator(state.number),
                    secondaryNumber: state.secondaryNumber,
                    operation: state.operation,
                };
            case "addDot":
                return {
                    number: addDot(state.number),
                    secondaryNumber: state.secondaryNumber,
                    operation: state.operation,
                };
            case "operation":
                return handleOperation(
                    state.number,
                    state.secondaryNumber,
                    state.operation,
                    action.value
                );
            case "clearSecondaryNumber":
                return { number: state.number, secondaryNumber: "" };
            default:
                return state;
        }
    };
    const initialState = { number: "", secondaryNumber: "", operation: "" };

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
