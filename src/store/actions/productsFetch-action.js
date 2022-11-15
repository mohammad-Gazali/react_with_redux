export const GET_PRODUCTS = "GET_PRODUCTS"

export const getProducts = (products) => {
    
    // this function is for async function below
    
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = () => {
    return async(dispatch) => {
        const res = await fetch("https://fakestoreapi.com/products/")
        const data = await res.json()
        dispatch(getProducts(data))
    }
}