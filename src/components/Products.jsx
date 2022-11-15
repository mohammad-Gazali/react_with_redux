import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// the old actions without redux toolkit
// import { addProduct } from "../store/actions/products-actions";

// the new actions with redux toolkit
import { addProduct } from "../redux_toolkit/slices/products-slice";

import Product from "./Product";

//* ==========================================
//* we can continue use redux like react-redux
//* ==========================================

const Products = () => {
  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  const lastProductId = products.at(-1).id

  const inputOfTitle = useRef()
  const inputOfBody = useRef()

  return (
    <section className="text-center text-xl flex justify-center flex-col items-center gap-6 bg-white/30 w-full p-10 rounded-lg shadow-lg backdrop-blur">
      <h2 className="font-bold text-3xl border-2 rounded-lg border-white px-4 py-1 bg-white text-gray-900">Products</h2>
      {products.map(product => <Product key={product.id} product={product} />)}
      <div className="w-full flex flex-col gap-4">
        <input ref={inputOfTitle} type="text" className="w-full py-3 px-2 rounded-lg focus:outline-none" placeholder="title" />
        <input ref={inputOfBody} type="text" className="w-full py-3 px-2 rounded-lg focus:outline-none" placeholder="body" />
      </div>
      <button
          onClick={() => {
            dispatch(addProduct({id: lastProductId + 1, title: inputOfTitle.current.value, body: inputOfBody.current.value}))
            inputOfTitle.current.value = ""
            inputOfBody.current.value = ""
        }}
          className="rounded-lg px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-800 transition-all duration-200 w-full"
      >
          Add Product
      </button>
    </section>
  );
};

export default Products;
