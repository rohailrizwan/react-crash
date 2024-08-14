import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Feature/Todo/TodoSlice";
export const Store=configureStore({
    reducer:TodoSlice
})