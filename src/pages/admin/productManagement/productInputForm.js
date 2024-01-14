// src/components/ProductInputForm.js
import React, { useState } from 'react';

const ProductInputForm = ({ onAddProduct, products }) => {
  const [product, setProduct] = useState({
    productName: '',
    quantity: 0,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProduct = products.find((p) => p.name === product.productName);

    if (existingProduct) {
      // If the product already exists, update its quantity
      onAddProduct({
        productId: existingProduct.id,
        quantity: existingProduct.quantity + parseInt(product.quantity, 10),
      });
    } else {
      // If the product doesn't exist, add it to the products list
      onAddProduct({
        productId: null, // You might want to set this to the actual product ID if available
        quantity: parseInt(product.quantity, 10),
        name: product.productName,
      });
    }

    setProduct({
      productName: '',
      quantity: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 border rounded-lg shadow-md bg-white">
      <label className="block mb-4">
        Product Name:
        <select
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className="form-select mt-1 block w-full"
        >
          <option value="" disabled>Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-4">
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductInputForm;
