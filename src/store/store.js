import { configureStore } from "@reduxjs/toolkit";
import  itemSlice  from "./slices/ItemSlice";

const store = configureStore({
    reducer: {
        user: itemSlice,
    },
})

export default store;