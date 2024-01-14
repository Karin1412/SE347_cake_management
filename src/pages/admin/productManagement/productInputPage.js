// src/components/ProductInputPage.js
import React, { useState, useEffect } from 'react';
import ProductInputForm from './productInputForm';
import ProductList from './productList';
import Navbar from '../../../components/admin/navbar';
import ProNav from './proNav'
const ProductInputPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch or set your product data here
    // Example data:
    const initialProducts = [
      { id: 1, name: 'Product A', quantity: 10 },
      { id: 2, name: 'Product B', quantity: 15 },
      // Add more products as needed
    ];
    setProducts(initialProducts);
  }, []);

  const handleAddProduct = (newProduct) => {
    const existingProduct = products.find((p) => p.name === newProduct.name);

    if (existingProduct) {
      // If the product already exists, update its quantity
      setProducts(
        products.map((p) =>
          p.name === existingProduct.name
            ? { ...p, quantity: p.quantity + newProduct.quantity }
            : p
        )
      );
    } else {
      // If the product doesn't exist, add it to the products list
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
  };

  const handleSelectProduct = (productId) => {
    // Find the selected product in the list
    const selected = products.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };

  return (
    <div>
        <Navbar/>
        <ProNav/>
        <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Input</h2>

      <div className="flex">
        <div className="w-1/2">
          <ProductInputForm onAddProduct={handleAddProduct} products={products} />
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-lg font-bold mb-2">Existing Products</h3>
          <ProductList products={products} onSelectProduct={handleSelectProduct} />
        </div>
      </div>

      {selectedProduct && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">Selected Product</h3>
          <div className="bg-white p-4 shadow-md rounded-md">
            <p>Name: {selectedProduct.name}</p>
            <p>Quantity: {selectedProduct.quantity}</p>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default ProductInputPage;
