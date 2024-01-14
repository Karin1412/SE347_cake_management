// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <ul className="mt-4">
      {products.map((product) => (
        <li key={product.id} className="bg-white p-4 mb-2 shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">{product.name}</span>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => onSelectProduct(product.id)}
              >
                Select
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
