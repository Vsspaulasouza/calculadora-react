/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const reducers = {
    clear: (state) => {
        const newSecondaryNumber = state.number ? state.secondaryNumber : "";
        state.number = "";
        state.secondaryNumber = newSecondaryNumber;
    },
    addValue(state, { payload }) {
        state.number += payload;
    },
    changeOperator(state) {
        state.number &&= `${-state.number}`;
    },
    addDot(state) {
        if (!state.number.includes(".") && state.number !== "")
            state.number = `${state.number}.`;
    },
    addOperation(state, { payload }) {
        if (state.secondaryNumber === "" && state.number !== "") {
            state.secondaryNumber = state.number + payload;
            state.number = "";
            state.operation = payload;
        }
    },
    solveResult(state) {
        const secondaryNumberFiltered = state.secondaryNumber.slice(0, -1);
        let result = "";
        switch (state.operation) {
            case "%":
                result = (secondaryNumberFiltered * state.number) / 100;
                break;
            case "÷":
                result = secondaryNumberFiltered / state.number;
                break;
            case "x":
                result = secondaryNumberFiltered * state.number;
                break;
            case "-":
                result = secondaryNumberFiltered - state.number;
                break;
            case "+":
                result = +secondaryNumberFiltered + +state.number;
                break;
            default:
                break;
        }

        result = Number(result).toFixed(2);
        if (result.endsWith(".00")) [result] = result.split(".");

        state.number = result.toString();
        state.secondaryNumber = "";
        state.operation = "";
    },
    deleteCharacter(state) {
        state.number = state.number.slice(0, -1);
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
