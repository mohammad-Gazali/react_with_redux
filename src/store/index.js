import { createStore, combineReducers, applyMiddleware } from "redux";
import { bankReducer } from "./reducers/bank-reducer";
import { productsReducer } from "./reducers/products-reducer";
import { productsFetchReducer } from "./reducers/productsFetch-reducer";
import thunk from 'redux-thunk'

const appReducer = combineReducers({
    bank: bankReducer,
    products: productsReducer,
    productFetch: productsFetchReducer
})

const store = createStore(appReducer, applyMiddleware(thunk));

export default store