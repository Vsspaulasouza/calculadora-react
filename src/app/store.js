import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculator/calculatorSlice";

const store = configureStore({
    reducer: calculatorSlice,
});

export default store;
