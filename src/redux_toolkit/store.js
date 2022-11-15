import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bank-slice"
import productsReducer from "./slices/products-slice"
import fetchProductsReducer from "./slices/productsFetch-slice"


//* -----------------------------------------------------------
//* with redux toolkit you can mutate state without any caution
//* -----------------------------------------------------------

export const store = configureStore({
    reducer:{
        bank: bankReducer,
        products: productsReducer,
        productFetch: fetchProductsReducer
    }
})