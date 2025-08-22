import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) =>{

            // Vanailla(older) Redux says => Don't MUTATE State
            // const newsState = [...state];
            // newState.items.push(action.payload);
            // return newState


            // Redux Toolkit
            // We have to mutate the state
            state.items.push(action.payload);
        },
        removeItem: (state) =>{

            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;