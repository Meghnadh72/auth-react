import { configureStore } from "@reduxjs/toolkit";
import counterRed from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterRed
    },
})