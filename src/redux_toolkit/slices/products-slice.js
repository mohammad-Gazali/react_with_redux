import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    initialState: [{id: 1, title: "Product 1", body: "This is Product one"}],
    name: "productsSlice",
    reducers: {
        addProduct: (state, action) => {
            return state.concat([action.payload])
        }
    }
})

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer