import { ADD_PRODUCT } from "../actions/products-actions"

export const productsReducer = (state=[{id: 1, title: "Product 1", body: "This is Prodcut one"}], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
}