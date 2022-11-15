import { GET_PRODUCTS } from "../actions/productsFetch-action"


export const productsFetchReducer = (state=[], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [...action.payload]
        default:
            return state
    }
}
