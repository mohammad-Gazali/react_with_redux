import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// the old actions without redux toolkit
// import { fetchProducts } from '../store/actions/productsFetch-action'

// the new actions with redux toolkit
import { fetchProducts } from '../redux_toolkit/slices/productsFetch-slice'

import Product from './Product'

const ProductsFetch = () => {
    
    const products = useSelector((state) => state.productFetch)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

  return (
    <section className="text-center text-xl flex justify-center flex-col items-center gap-6 bg-white/30 w-full p-10 rounded-lg shadow-lg backdrop-blur">
        <h2 className="font-bold text-3xl border-2 rounded-lg border-white px-4 py-1 bg-white text-gray-900">Products Fetch</h2>
        {products.map(product => <Product key={product.id} product={{id: product.id, title: product.title, body: product.description}} />)}
    </section>
  )
}

export default ProductsFetch