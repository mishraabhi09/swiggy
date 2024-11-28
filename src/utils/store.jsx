import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice.jsx";

const Store = configureStore({

    // Basically the "reducer" here is the "bunch of reducers" imported from the Redux store.
    reducer: {
        cart: cartSlice,
    }
});


export default Store; 