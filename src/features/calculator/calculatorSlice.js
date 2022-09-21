import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "calculator",
    initialState: { number: "", secondaryNumber: "", operation: "" },
    reducers: {
        clear(currentState) {
            const newSecondaryNumber = currentState.number
                ? currentState.secondaryNumber
                : "";
            return {
                number: "",
                secondaryNumber: newSecondaryNumber,
                operation: currentState.operation,
            };
        },
        addValue(currentState, action) {
            return {
                number: currentState.number + action.payload,
                secondaryNumber: currentState.secondaryNumber,
                operation: currentState.operation,
            };
        },
        changeOperator(currentState) {
            const newNumber =
                currentState.number === ""
                    ? currentState.number
                    : `${-currentState.number}`;
            return {
                number: newNumber,
                secondaryNumber: currentState.secondaryNumber,
                operation: currentState.operation,
            };
        },
        addDot(currentState) {
            let newNumber = currentState.number;
            if (
                !currentState.number.includes(".") &&
                currentState.number !== ""
            )
                newNumber = `${currentState.number}.`;
            return {
                number: newNumber,
                secondaryNumber: currentState.secondaryNumber,
                operation: currentState.operation,
            };
        },
        addOperation(currentState, action) {
            let newNumber = currentState.number;
            let newSecondaryNumber = currentState.secondaryNumber;
            let newOperation = currentState.operation;
            if (
                currentState.secondaryNumber === "" &&
                currentState.number !== ""
            ) {
                newNumber = "";
                newSecondaryNumber = currentState.number + action.payload;
                newOperation = action.payload;
            }
            return {
                number: newNumber,
                secondaryNumber: newSecondaryNumber,
                operation: newOperation,
            };
        },
        solveResult(currentState) {
            const secondaryNumberFiltered = currentState.secondaryNumber.slice(
                0,
                -1
            );
            let result = "";
            switch (currentState.operation) {
                case "%":
                    result =
                        (secondaryNumberFiltered * currentState.number) / 100;
                    break;
                case "÷":
                    result = secondaryNumberFiltered / currentState.number;
                    break;
                case "x":
                    result = secondaryNumberFiltered * currentState.number;
                    break;
                case "-":
                    result = secondaryNumberFiltered - currentState.number;
                    break;
                case "+":
                    result = +secondaryNumberFiltered + +currentState.number;
                    break;
                default:
                    break;
            }

            result = Number(result).toFixed(2);
            if (result.endsWith(".00")) [result] = result.split(".");

            return {
                number: result.toString(),
                secondaryNumber: "",
                operation: "",
            };
        },
        deleteCharacter(currentState) {
            const newNumber = currentState.number.slice(0, -1);
            return {
                number: newNumber,
                secondaryNumber: currentState.secondaryNumber,
                operation: currentState.operation,
            };
        },
    },
});

export const {
    clear,
    addValue,
    changeOperator,
    addDot,
    addOperation,
    solveResult,
    deleteCharacter,
} = slice.actions;

export default slice.reducer;
