import { createSlice } from "@reduxjs/toolkit";

const reducers = {
    clear({ number, secondaryNumber, operation }) {
        const newSecondaryNumber = number ? secondaryNumber : "";
        return {
            number: "",
            secondaryNumber: newSecondaryNumber,
            operation,
        };
    },
    addValue({ number, secondaryNumber, operation }, { payload }) {
        return {
            number: number + payload,
            secondaryNumber,
            operation,
        };
    },
    changeOperator({ number, secondaryNumber, operation }) {
        const newNumber = number === "" ? number : `${-number}`;
        return {
            number: newNumber,
            secondaryNumber,
            operation,
        };
    },
    addDot({ number, secondaryNumber, operation }) {
        let newNumber = number;
        if (!number.includes(".") && number !== "") newNumber = `${number}.`;
        return {
            number: newNumber,
            secondaryNumber,
            operation,
        };
    },
    addOperation(currentState, { payload }) {
        if (currentState.secondaryNumber === "" && currentState.number !== "") {
            return {
                number: "",
                secondaryNumber: currentState.number + payload,
                operation: payload,
            };
        }
        return currentState;
    },
    solveResult({ number, secondaryNumber, operation }) {
        const secondaryNumberFiltered = secondaryNumber.slice(0, -1);
        let result = "";
        switch (operation) {
            case "%":
                result = (secondaryNumberFiltered * number) / 100;
                break;
            case "÷":
                result = secondaryNumberFiltered / number;
                break;
            case "x":
                result = secondaryNumberFiltered * number;
                break;
            case "-":
                result = secondaryNumberFiltered - number;
                break;
            case "+":
                result = +secondaryNumberFiltered + +number;
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
    deleteCharacter({ number, secondaryNumber, operation }) {
        const newNumber = number.slice(0, -1);
        return {
            number: newNumber,
            secondaryNumber,
            operation,
        };
    },
};

const slice = createSlice({
    name: "calculator",
    initialState: { number: "", secondaryNumber: "", operation: "" },
    reducers,
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
