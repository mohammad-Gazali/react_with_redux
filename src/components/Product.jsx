import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-full bg-cyan-600/20 relative rounded-lg flex flex-col">
      <div className="w-full flex items-stretch min-h-[40px]">
        <span className="rounded-tl-lg rounded-br-lg w-[40px] flex justify-center items-center text-white bg-green-600">
          {product.id}
        </span>
        <h1 className="flex justify-center items-center font-bold text-gray-800 w-full min-h-[40px] px-4">
          {product.title}
        </h1>
      </div>
      <p className="w-full px-4 py-6 text-left text-gray-900 rounded-b-lg bg-cyan-900/10">{product.body}</p>
    </div>
  );
};

export default Product;
