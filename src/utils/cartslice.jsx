import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {

        // The "action" here is the "data" which is "coming" by the "dispatch function" .

        // The "State" here is the "initial state" when "no data is here".
        addItem: (state, action) => {
            state.items.push(action.payload); // => This line basically adds the data to the initialState when it is coming from dispatch action function.

            // This function basically does not return anything it directly takes the state and modify the state.
        },


        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items = [];
        },
    }
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;





// behind the scenes redux maintains this type of structure to send the data and manage all the things here.


// "Reducer" is basically the "bunch of reducers" which will "combines" and "export" as a "singular form" called "Reducer".


// cartSlice = {
//     actions: {
//         addItem: {},
//         removeItem: {},
//         clearCart: {},

//     },

//     reducer: {
//         reducers: {}
//     },
// }