export const ADD_PRODUCT = "ADD_PRODUCT"


export const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


